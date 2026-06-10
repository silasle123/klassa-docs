/**
 * Chụp screenshot thật cho 10 bài blog SEO của klassa.vn.
 * Output: D:/klassa-website/public/images/blog/<slug>.png
 * Chạy: npx tsx scripts/capture-blog-shots.ts
 */

import { chromium, type Browser, type Page } from 'playwright'
import * as path from 'path'
import * as fs from 'fs'

const CONFIG = {
  BASE_URL: 'https://demo.klassa.vn',
  EMAIL: 'admin@klassa.vn',
  PASSWORD: 'Klassa@2026',
  SCREENSHOT_DIR: 'D:/klassa-website/public/images/blog',
  VIEWPORT: { width: 1440, height: 900 },
  TIMEOUT: 30_000,
  WAIT_AFTER_NAV: 2000,
}

type ShotSpec = { slug: string; path: string; description: string }

const SHOTS: ShotSpec[] = [
  { slug: 'klassa-dashboard', path: '/dashboard', description: 'Dashboard tổng quan' },
  { slug: 'klassa-diem-danh', path: '/attendance', description: 'Chấm điểm danh' },
  { slug: 'klassa-hoc-sinh', path: '/students', description: 'Danh sách học sinh' },
  { slug: 'klassa-lop-hoc', path: '/classes', description: 'Danh sách lớp' },
  { slug: 'klassa-lich-day', path: '/dashboard/schedule', description: 'Lịch dạy' },
  { slug: 'klassa-tai-chinh', path: '/finance/overview', description: 'Tài chính tổng quan' },
  { slug: 'klassa-hoa-don', path: '/finance', description: 'Hoá đơn' },
  { slug: 'klassa-bao-cao-cong-no', path: '/reports/debt', description: 'Báo cáo công nợ' },
  { slug: 'klassa-bao-cao-doanh-thu', path: '/reports/revenue', description: 'Báo cáo doanh thu' },
  { slug: 'klassa-bang-luong', path: '/hr/payroll', description: 'Bảng lương GV' },
  { slug: 'klassa-cong-phu-huynh', path: '/parent-portal', description: 'Cổng phụ huynh' },
  { slug: 'klassa-tuyen-sinh', path: '/leads', description: 'CRM tuyển sinh' },
  { slug: 'klassa-zalo', path: '/messaging/zalo', description: 'Tin nhắn Zalo' },
  { slug: 'klassa-ngan-hang-cau-hoi', path: '/question-bank', description: 'Ngân hàng câu hỏi' },
  { slug: 'klassa-bai-danh-gia', path: '/assessments', description: 'Bài đánh giá / đề thi' },
  { slug: 'klassa-tu-dong-hoa', path: '/automation', description: 'Tự động hoá' },
]

async function login(page: Page) {
  console.log('🔐 Đăng nhập...')
  await page.goto(`${CONFIG.BASE_URL}/auth/signin`, { waitUntil: 'networkidle' })
  await page.fill('input[type="email"], input[name="email"]', CONFIG.EMAIL)
  await page.fill('input[type="password"], input[name="password"]', CONFIG.PASSWORD)
  await page.click('button[type="submit"]')
  await page.waitForURL(/\/(dashboard|admin)/, { timeout: CONFIG.TIMEOUT })
  console.log('✅ Đã đăng nhập')
}

async function main() {
  fs.mkdirSync(CONFIG.SCREENSHOT_DIR, { recursive: true })
  const browser: Browser = await chromium.launch({ headless: true })
  const context = await browser.newContext({ viewport: CONFIG.VIEWPORT })
  const page = await context.newPage()
  let ok = 0
  try {
    await login(page)
    for (const spec of SHOTS) {
      try {
        await page.goto(`${CONFIG.BASE_URL}${spec.path}`, { waitUntil: 'networkidle', timeout: CONFIG.TIMEOUT })
        await page.waitForTimeout(CONFIG.WAIT_AFTER_NAV)
        await page.screenshot({ path: path.join(CONFIG.SCREENSHOT_DIR, `${spec.slug}.png`), fullPage: false })
        console.log(`📸 OK ${spec.slug}.png — ${spec.description}`)
        ok++
      } catch (err) {
        console.error(`⚠ FAIL ${spec.slug}: ${(err as Error).message.split('\n')[0]}`)
      }
    }
    console.log(`\n✨ Xong ${ok}/${SHOTS.length}`)
  } finally {
    await browser.close()
  }
}

main().catch((e) => { console.error('💥', e); process.exit(1) })
