/**
 * KLASSA Docs — Công cụ chụp ảnh màn hình tái sử dụng
 * ====================================================
 * GIỮ LẠI script này để dùng cho các đợt cập nhật tài liệu sau.
 *
 * Cách dùng:
 *   npx tsx scripts/capture.ts                 # chụp tất cả slug trong SHOTS
 *   npx tsx scripts/capture.ts --only=a,b,c    # chỉ chụp slug a,b,c
 *   npx tsx scripts/capture.ts --list          # liệt kê slug
 *
 * Mỗi shot: { slug, url, role, full?, openDialog? }
 *  - role: admin | consultant | teacher | parent | none(không login)
 *  - full: chụp full trang
 *  - openDialog: tên nút (regex) bấm để mở dialog trước khi chụp
 *
 * Ảnh lưu: assets/screenshots/<slug>.png
 * Đổi data demo / creds ở CONFIG nếu cần.
 */
import { chromium, type Page, type Browser } from 'playwright'
import * as fs from 'fs'
import * as path from 'path'

const CONFIG = {
  SITE: 'https://demo.klassa.vn',
  PWD: 'Klassa@2026',
  OUT: path.join(__dirname, '..', 'assets', 'screenshots'),
  VIEWPORT: { width: 1440, height: 900 },
  ROLES: {
    admin: 'admin@klassa.vn',
    consultant: 'consultant@klassa.vn',
    teacher: 'teacher@klassa.vn',
    parent: 'ph1@klassa.vn',
    hr: 'hr@klassa.vn',
    accountant: 'accountant@klassa.vn',
  } as Record<string, string>,
}

type Shot = {
  slug: string
  url: string
  role: keyof typeof CONFIG.ROLES | 'none'
  full?: boolean
  openDialog?: string // regex nhãn nút mở dialog
  waitMs?: number
}

// ============================================================
// DANH SÁCH ẢNH — thêm/sửa ở đây cho các đợt update
// ============================================================
const SHOTS: Shot[] = [
  // ----- Tài khoản: đăng ký / duyệt / quản lý user -----
  { slug: 'auth-signup', url: '/auth/signup', role: 'none', full: true },
  { slug: 'admin-registrations', url: '/admin/registrations', role: 'admin', full: true },
  { slug: 'admin-users', url: '/admin/users', role: 'admin', full: true },
]

async function login(page: Page, role: string) {
  if (role === 'none') return
  const email = CONFIG.ROLES[role]
  await page.goto(`${CONFIG.SITE}/auth/signin`, { waitUntil: 'networkidle' })
  await page.fill('input[type="email"]', email)
  await page.fill('input[type="password"]', CONFIG.PWD)
  await page.click('button[type="submit"]')
  await page.waitForLoadState('networkidle')
  await page.waitForTimeout(2000)
}

async function go(page: Page, url: string, ms = 3000) {
  try { await page.goto(`${CONFIG.SITE}${url}`, { waitUntil: 'networkidle', timeout: 25000 }) }
  catch { await page.goto(`${CONFIG.SITE}${url}`, { waitUntil: 'domcontentloaded', timeout: 15000 }) }
  await page.waitForTimeout(ms)
}

async function capture(browser: Browser, shot: Shot) {
  const ctx = await browser.newContext({ viewport: CONFIG.VIEWPORT })
  const page = await ctx.newPage()
  try {
    await login(page, shot.role)
    await go(page, shot.url, shot.waitMs ?? 3000)
    if (shot.openDialog) {
      const rx = new RegExp(shot.openDialog, 'i')
      let opened = false
      try { await page.getByRole('button', { name: rx }).first().click({ timeout: 5000 }); opened = true } catch {}
      if (!opened) { try { await page.getByText(rx).first().click({ timeout: 4000 }); opened = true } catch {} }
      if (!opened) console.log(`   ⚠ không mở được dialog cho ${shot.slug}`)
      else await page.waitForTimeout(1500)
    }
    const f = path.join(CONFIG.OUT, `${shot.slug}.png`)
    await page.screenshot({ path: f, fullPage: !!shot.full && !shot.openDialog })
    const kb = Math.round(fs.statSync(f).size / 1024)
    console.log(`${kb < 50 ? '⚠' : '✅'} ${shot.slug}.png (${kb}KB)`)
  } catch (e) {
    console.error(`💥 ${shot.slug}: ${(e as Error).message.slice(0, 80)}`)
  } finally {
    await ctx.close()
  }
}

async function main() {
  fs.mkdirSync(CONFIG.OUT, { recursive: true })
  const args = process.argv.slice(2)
  if (args.includes('--list')) { SHOTS.forEach(s => console.log(s.slug, '←', s.url, `(${s.role})`)); return }
  const onlyArg = args.find(a => a.startsWith('--only='))
  const only = onlyArg ? onlyArg.split('=')[1].split(',') : null
  const list = only ? SHOTS.filter(s => only.includes(s.slug)) : SHOTS
  console.log(`📸 Chụp ${list.length} ảnh...`)
  const browser = await chromium.launch({ headless: true })
  for (const shot of list) await capture(browser, shot)
  await browser.close()
  console.log('✨ Xong')
}

main().catch(e => { console.error(e); process.exit(1) })
