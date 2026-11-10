/**
 * KLASSA Docs — Công cụ chụp ảnh màn hình tái sử dụng
 * ====================================================
 * GIỮ LẠI script này để dùng cho các đợt cập nhật tài liệu sau.
 *
 * Cách dùng:
 *   npx tsx scripts/capture.ts                      # chụp tất cả slug trong SHOTS
 *   npx tsx scripts/capture.ts --only=a,b,c         # chỉ chụp slug a,b,c
 *   npx tsx scripts/capture.ts --shots=tep.json     # chụp theo danh sách trong tệp JSON (mảng Shot)
 *   npx tsx scripts/capture.ts --concurrency=4      # số trang chụp cùng lúc (mặc định 3)
 *   npx tsx scripts/capture.ts --list               # liệt kê slug
 *
 * Mỗi shot: { slug, url, role, full?, openDialog?, scrollTo?, waitMs? }
 *  - role: admin | branch_manager | manager | consultant | teacher | teaching_assistant | parent | hr | accountant
 *          | none (không đăng nhập). Mật khẩu chung các tài khoản demo ở CONFIG.PWD.
 *  - url: đường dẫn trên bản demo. Có [id] thì script mở trang danh sách phía trước
 *    (vd /classes/[id]/edit → /classes) và lấy mã của dòng đầu tiên.
 *  - openDialog: tên nút (đúng chữ trên nút) bấm để mở hộp trước khi chụp.
 *    Chỉ bấm nút có vai trò "button". Chỉ dùng cho nút MỞ biểu mẫu (Thêm…, Tạo…),
 *    TUYỆT ĐỐI không dùng cho nút ghi dữ liệu (Lưu, Gửi, Chạy ngay, Khoá kỳ…).
 *    Mở được hộp thì chỉ chụp khung hộp cho dễ đọc.
 *  - steps: thao tác trước khi chụp, vd [{"click":"Đơn giá dạy"},{"fill":"Số điện thoại","value":"0900000001"},{"scroll":"Khoá điểm danh"}].
 *    Chỉ dùng thao tác KHÔNG ghi dữ liệu. Nếu sau các bước có hộp đang mở thì chụp riêng hộp (noDialog:true để chụp cả trang).
 *  - full: chụp cả trang dài (mặc định chỉ chụp phần màn hình 1440×900)
 *  - AUTH_DIR=thư-mục : lưu và dùng lại phiên đăng nhập 6 giờ giữa các lần chạy
 *
 * Mỗi vai chỉ đăng nhập MỘT lần rồi dùng lại phiên (tránh bị chặn vì đăng nhập quá nhiều lần).
 * Ảnh lưu: assets/screenshots/<slug>.png (đặt SHOT_OUT để lưu chỗ khác)
 */
import { chromium, type Page, type Browser, type BrowserContext } from 'playwright'
import * as fs from 'fs'
import * as os from 'os'
import * as path from 'path'

const CONFIG = {
  SITE: 'https://demo.klassa.vn',
  PWD: 'Klassa@2026',
  OUT: process.env.SHOT_OUT || path.join(__dirname, '..', 'assets', 'screenshots'),
  VIEWPORT: { width: 1440, height: 900 },
  ROLES: {
    admin: 'admin@klassa.vn',
    consultant: 'consultant@klassa.vn',
    teacher: 'teacher@klassa.vn',
    parent: 'parent@klassa.vn',
    hr: 'hr@klassa.vn',
    accountant: 'accountant@klassa.vn',
    manager: 'manager@klassa.vn',
    branch_manager: 'branch-manager@klassa.vn',
    teaching_assistant: 'assistant@klassa.vn',
  } as Record<string, string>,
}

type Shot = {
  slug: string
  url: string
  role: string
  full?: boolean
  openDialog?: string
  scrollTo?: string
  waitMs?: number
  /** Các thao tác trước khi chụp, chạy lần lượt. Chỉ dùng thao tác KHÔNG ghi dữ liệu (chuyển tab, mở hộp, gõ thử). */
  steps?: Step[]
  /** Ép chụp cả trang dù đang có hộp mở */
  noDialog?: boolean
}
type Step =
  | { click: string }                       // bấm tab / nút / liên kết / chữ có tên này (không phân biệt hoa thường)
  | { fill: string; value: string }         // gõ vào ô theo nhãn hoặc chữ gợi ý (placeholder)
  | { scroll: string }                      // cuộn tới chữ này
  | { wait: number }                        // đợi (ms)

// ============================================================
// DANH SÁCH ẢNH MẶC ĐỊNH — đợt lớn thì dùng --shots=tep.json
// ============================================================
const SHOTS: Shot[] = [
  { slug: 'auth-signup', url: '/auth/signup', role: 'none', full: true },
  { slug: 'admin-registrations', url: '/admin/registrations', role: 'admin' },
  { slug: 'admin-users', url: '/admin/users', role: 'admin' },
  { slug: 'trang-chu-quan-tri', url: '/dashboard', role: 'admin' },
  { slug: 'tuition-plan-billing-mode', url: '/finance/tuition?tab=tuition', role: 'admin', openDialog: 'Thêm gói mới' },
]

// Nút bấm vào là ghi dữ liệu ngay: không bao giờ bấm, kể cả khi danh sách yêu cầu
const NEVER_CLICK = /^(lưu|gửi|gửi zalo|gửi thông báo|chạy ngay|quét|quét ngay|quét bất thường|kiểm tra|khớp|đã liên hệ|đã chuyển khoản|nộp bài|công bố điểm|tạo gợi ý|chốt tuyển|khoá kỳ|khóa kỳ|tạo ghi danh|khởi tạo số dư|xoá|xóa|huỷ|hủy|duyệt|xác nhận|tính lương|tính lại|phê duyệt|trình duyệt|xác nhận chi trả|đăng xuất|tạo phiếu|tạo hợp đồng|tạo mới|tạo|thêm|ghi nhận)$/i

// Phiên đăng nhập lưu lại (AUTH_DIR) để nhiều lần chạy liên tiếp không đăng nhập lại (tránh bị chặn vì thử quá nhiều lần)
const stateDir = process.env.AUTH_DIR || fs.mkdtempSync(path.join(os.tmpdir(), 'klassa-shot-'))
fs.mkdirSync(stateDir, { recursive: true })
const KEEP_AUTH = !!process.env.AUTH_DIR
const stateFile: Record<string, Promise<string>> = {}

async function loginState(browser: Browser, role: string): Promise<string> {
  if (!stateFile[role]) {
    stateFile[role] = (async () => {
      const cached = path.join(stateDir, `${role}.json`)
      if (KEEP_AUTH && fs.existsSync(cached) && Date.now() - fs.statSync(cached).mtimeMs < 6 * 3600 * 1000) return cached
      const ctx = await browser.newContext({ viewport: CONFIG.VIEWPORT })
      const page = await ctx.newPage()
      await page.goto(`${CONFIG.SITE}/auth/signin`, { waitUntil: 'networkidle' })
      await page.locator('input[autocomplete="username"], input[type="email"]').first().fill(CONFIG.ROLES[role])
      await page.locator('input[autocomplete="current-password"], input[type="password"]').first().fill(CONFIG.PWD)
      await page.click('button[type="submit"]')
      await page.waitForURL((u) => !u.pathname.startsWith('/auth/signin'), { timeout: 30000 })
      await page.waitForTimeout(1500)
      const f = path.join(stateDir, `${role}.json`)
      await ctx.storageState({ path: f })
      await ctx.close()
      console.log(`🔑 đã đăng nhập vai ${role}`)
      return f
    })()
  }
  return stateFile[role]
}

const escRe = (t: string) => t.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')

async function go(page: Page, url: string, ms = 3000) {
  try { await page.goto(`${CONFIG.SITE}${url}`, { waitUntil: 'networkidle', timeout: 30000 }) }
  catch { await page.goto(`${CONFIG.SITE}${url}`, { waitUntil: 'domcontentloaded', timeout: 20000 }) }
  await page.waitForTimeout(ms)
}

// /classes/[id]/edit → mở /classes, lấy mã dòng đầu tiên
async function resolveUrl(page: Page, url: string): Promise<string | null> {
  if (!url.includes('[id]')) return url
  const list = url.split('/[id]')[0]
  await go(page, list, 2500)
  const esc = list.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
  const hrefs = await page.$$eval('a[href]', (as) => as.map((a) => (a as HTMLAnchorElement).getAttribute('href') || ''))
  const hit = hrefs.find((h) => new RegExp(`^${esc}/[A-Za-z0-9_-]{8,}$`).test(h.split('?')[0]))
  return hit ? url.replace(`${list}/[id]`, hit.split('?')[0]) : null
}

async function capture(browser: Browser, shot: Shot) {
  const ctxOpts: Parameters<Browser['newContext']>[0] = { viewport: CONFIG.VIEWPORT, locale: 'vi-VN', timezoneId: 'Asia/Ho_Chi_Minh' }
  if (shot.role !== 'none') {
    try { ctxOpts.storageState = await loginState(browser, shot.role) }
    catch { console.log(`💥 ${shot.slug}: không đăng nhập được vai ${shot.role}`); return }
  }
  const ctx: BrowserContext = await browser.newContext(ctxOpts)
  // Ẩn hộp/dải thông báo của trung tâm để không che trang (chặn ở trình duyệt, không bấm "đã đọc" nên không ghi gì lên demo)
  await ctx.route('**/api/announcements/active', (r) => r.fulfill({ json: { success: true, data: [] } }))
  const page = await ctx.newPage()
  const f = path.join(CONFIG.OUT, `${shot.slug}.png`)
  try {
    const url = await resolveUrl(page, shot.url)
    if (!url) { console.log(`⚠ ${shot.slug}: không tìm được mã cho ${shot.url}`); return }
    await go(page, url, shot.waitMs ?? 3000)
    if (page.url().includes('/auth/signin') && shot.role !== 'none') { console.log(`⚠ ${shot.slug}: bị đẩy về trang đăng nhập`); return }
    let dialog: import('playwright').Locator | null = null
    if (shot.openDialog) {
      if (NEVER_CLICK.test(shot.openDialog.trim())) {
        console.log(`⛔ ${shot.slug}: không bấm nút "${shot.openDialog}" (nút ghi dữ liệu), chỉ chụp trang`)
      } else {
        try {
          await page.getByRole('button', { name: shot.openDialog }).first().click({ timeout: 6000 })
          await page.waitForTimeout(1800)
          const d = page.locator('[role="dialog"]:visible, [role="alertdialog"]:visible').last()
          if (await d.count()) dialog = d
        } catch {
          console.log(`⚠ ${shot.slug}: không thấy nút "${shot.openDialog}", chỉ chụp trang`)
        }
      }
    }
    for (const st of shot.steps || []) {
      try {
        if ('click' in st) {
          if (NEVER_CLICK.test(st.click.trim())) { console.log(`⛔ ${shot.slug}: không bấm "${st.click}" (nút ghi dữ liệu)`); continue }
          const rx = new RegExp(escRe(st.click), 'i')
          let ok = false
          for (const role of ['tab', 'button', 'link', 'menuitem', 'radio', 'checkbox'] as const) {
            const el = page.getByRole(role, { name: rx }).first()
            if (await el.count()) { await el.click({ timeout: 5000 }); ok = true; break }
          }
          if (!ok) await page.getByText(rx).first().click({ timeout: 5000 })
          await page.waitForTimeout(1500)
        } else if ('fill' in st) {
          const rx = new RegExp(escRe(st.fill), 'i')
          const el = page.getByLabel(rx).first()
          if (await el.count()) await el.fill(st.value)
          else await page.getByPlaceholder(rx).first().fill(st.value)
          await page.waitForTimeout(1200)
        } else if ('scroll' in st) {
          await page.getByText(new RegExp(escRe(st.scroll), 'i')).first().scrollIntoViewIfNeeded({ timeout: 5000 })
          await page.waitForTimeout(600)
        } else if ('wait' in st) await page.waitForTimeout(st.wait)
      } catch (e) {
        console.log(`⚠ ${shot.slug}: bước ${JSON.stringify(st)} không làm được (${(e as Error).message.split('\n')[0].slice(0, 60)})`)
      }
    }
    if (!dialog && !shot.noDialog && (shot.steps || []).length) {
      const d = page.locator('[role="dialog"]:visible, [role="alertdialog"]:visible').last()
      if (await d.count()) dialog = d
    }
    if (shot.scrollTo && !dialog) {
      try { await page.getByText(new RegExp(shot.scrollTo, 'i')).first().scrollIntoViewIfNeeded({ timeout: 5000 }); await page.waitForTimeout(800) }
      catch { console.log(`⚠ ${shot.slug}: không cuộn tới được "${shot.scrollTo}"`) }
    }
    if (dialog) await dialog.screenshot({ path: f })
    else await page.screenshot({ path: f, fullPage: !!shot.full && !shot.scrollTo })
    const kb = Math.round(fs.statSync(f).size / 1024)
    console.log(`${kb < 25 ? '⚠' : '✅'} ${shot.slug}.png (${kb}KB)${dialog ? ' [hộp]' : ''}`)
  } catch (e) {
    console.error(`💥 ${shot.slug}: ${(e as Error).message.slice(0, 120)}`)
  } finally {
    await ctx.close()
  }
}

async function main() {
  fs.mkdirSync(CONFIG.OUT, { recursive: true })
  const args = process.argv.slice(2)
  const arg = (k: string) => args.find((a) => a.startsWith(`--${k}=`))?.split('=').slice(1).join('=')
  const shotsArg = arg('shots')
  const base: Shot[] = shotsArg ? JSON.parse(fs.readFileSync(shotsArg, 'utf8')) : SHOTS
  if (args.includes('--list')) { base.forEach((s) => console.log(s.slug, '←', s.url, `(${s.role})`)); return }
  const only = arg('only')?.split(',')
  const list = only ? base.filter((s) => only.includes(s.slug)) : base
  const conc = Math.max(1, Number(arg('concurrency') || 3))
  console.log(`📸 Chụp ${list.length} ảnh, ${conc} trang cùng lúc...`)
  // Máy chưa cài trình duyệt của Playwright thì dùng Chrome có sẵn (đặt CHROME_PATH nếu nằm chỗ khác)
  const chromePath = process.env.CHROME_PATH || 'C:/Program Files/Google/Chrome/Application/chrome.exe'
  // --lang=vi-VN: ô ngày hiện dd/mm/yyyy như máy người dùng Việt Nam
  const browser = await chromium.launch({ headless: true, args: ['--lang=vi-VN'], ...(fs.existsSync(chromePath) ? { executablePath: chromePath } : {}) })
  let i = 0
  await Promise.all(Array.from({ length: conc }, async () => {
    while (i < list.length) await capture(browser, list[i++])
  }))
  await browser.close()
  if (!KEEP_AUTH) fs.rmSync(stateDir, { recursive: true, force: true })
  console.log('✨ Xong')
}

main().catch((e) => { console.error(e); process.exit(1) })
