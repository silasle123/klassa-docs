/**
 * Capture screenshot tự động cho toàn bộ bộ tài liệu KLASSA.
 *
 * Cách dùng:
 *   1. npm install
 *   2. npm run install:browsers
 *   3. Sửa CONFIG bên dưới nếu cần (URL demo, creds)
 *   4. npm run capture
 *
 * Ảnh xuất ra: ../assets/screenshots/<slug>.png
 *
 * Để chạy chế độ headed (mở Chrome thấy được): npm run capture:headed
 */

import { chromium, type Browser, type Page } from 'playwright'
import * as path from 'path'
import * as fs from 'fs'

// ============================================================
// CONFIG — sửa khi cần
// ============================================================
const CONFIG = {
  BASE_URL: 'https://demo.klassa.vn',
  EMAIL: 'admin@klassa.vn',
  PASSWORD: 'Klassa@2026',
  SCREENSHOT_DIR: path.join(__dirname, '..', 'assets', 'screenshots'),
  VIEWPORT: { width: 1440, height: 900 },
  TIMEOUT: 30_000,
  WAIT_AFTER_NAV: 1500,
}

// ============================================================
// Danh sách trang cần chụp
// slug: tên file output (slug.png) — phải khớp với link trong markdown
// path: đường dẫn trong app
// description: ghi chú (in ra terminal khi chụp)
// loginRole (tuỳ chọn): đăng nhập role khác trước khi vào trang đó
// ============================================================
type ShotSpec = {
  slug: string
  path: string
  description: string
  loginAs?: string // email khác nếu cần
  waitFor?: string // CSS selector để đợi trước khi chụp
  fullPage?: boolean
}

const SHOTS: ShotSpec[] = [
  // ===== 1. Bắt đầu =====
  { slug: 'dang-nhap-trang-chinh', path: '/auth/signin', description: 'Trang đăng nhập' },
  { slug: 'dashboard-tong-quan', path: '/dashboard', description: 'Bảng tổng quan' },
  { slug: 'ho-so-menu', path: '/profile', description: 'Menu hồ sơ' },
  { slug: 'ho-so-trang-chinh', path: '/profile', description: 'Trang hồ sơ chính', fullPage: true },
  { slug: 'doi-mat-khau-menu', path: '/auth/change-password', description: 'Menu đổi MK' },
  { slug: 'doi-mat-khau-form', path: '/auth/change-password', description: 'Form đổi MK' },
  { slug: 'menu-trai-tong-quan', path: '/dashboard', description: 'Menu trái mở' },
  { slug: 'menu-trai-thu-gon', path: '/dashboard', description: 'Menu trái thu gọn' },

  // ===== 2. Tuyển sinh =====
  { slug: 'leads-menu', path: '/leads', description: 'Menu Tuyển sinh' },
  { slug: 'leads-trang-chinh', path: '/leads', description: 'Trang danh sách Lead', fullPage: true },
  { slug: 'leads-hai-tab', path: '/leads', description: 'Hai tab trên trang Lead' },
  { slug: 'leads-nut-them-moi', path: '/leads', description: 'Nút thêm Lead' },
  { slug: 'leads-form-them-moi', path: '/leads?action=new', description: 'Form thêm Lead' },
  { slug: 'pheu-tuyen-sinh', path: '/leads?view=funnel', description: 'Phễu tuyển sinh' },
  { slug: 'lead-chi-tiet', path: '/leads', description: 'Chi tiết Lead (cần click vào 1 lead)' },
  { slug: 'lead-nut-chuyen-hs', path: '/leads', description: 'Nút chuyển Lead thành HS' },
  { slug: 'hoat-dong-tab', path: '/leads?tab=activities', description: 'Tab hoạt động' },
  { slug: 'lich-hoc-thu', path: '/schedule/trial-tests', description: 'Lịch học thử' },
  { slug: 'yeu-cau-dang-ky', path: '/admin/enrollment-requests', description: 'Yêu cầu đăng ký' },

  // ===== 3. Học sinh =====
  { slug: 'hoc-sinh-danh-sach', path: '/students', description: 'Danh sách HS', fullPage: true },
  { slug: 'hoc-sinh-tao-moi', path: '/students/create', description: 'Tạo HS mới' },
  { slug: 'hoc-sinh-chi-tiet', path: '/students', description: 'Chi tiết HS' },
  { slug: 'hoc-sinh-doi-trang-thai', path: '/students', description: 'Đổi trạng thái HS' },
  { slug: 'phu-huynh-danh-sach', path: '/parents', description: 'Phụ huynh' },

  // ===== 4. Lớp học =====
  { slug: 'lop-hoc-danh-sach', path: '/classes', description: 'Danh sách lớp', fullPage: true },
  { slug: 'lop-hoc-tao-moi', path: '/classes/create', description: 'Tạo lớp mới' },
  { slug: 'lop-hoc-chi-tiet', path: '/classes', description: 'Chi tiết lớp' },
  { slug: 'ghi-danh', path: '/dashboard/enrollments', description: 'Ghi danh' },
  { slug: 'lich-day-trang-chinh', path: '/dashboard/schedule', description: 'Lịch dạy' },
  { slug: 'co-so-danh-sach', path: '/dashboard/campuses', description: 'Cơ sở' },

  // ===== 5. Điểm danh =====
  { slug: 'diem-danh-cham', path: '/attendance', description: 'Chấm điểm danh' },
  { slug: 'diem-danh-doi-chieu', path: '/attendance/advanced', description: 'Đối chiếu' },
  { slug: 'diem-danh-sua-loi', path: '/attendance/detail', description: 'Sửa điểm danh' },

  // ===== 6. Học tập =====
  { slug: 'phan-tich-hoc-tap', path: '/analytics', description: 'Phân tích' },
  { slug: 'bai-danh-gia', path: '/assessments', description: 'Bài đánh giá' },
  { slug: 'nhan-xet-trong-buoi', path: '/evaluations', description: 'Nhận xét' },
  { slug: 'ngan-hang-cau-hoi', path: '/question-bank', description: 'Ngân hàng câu hỏi' },
  { slug: 'ma-tran-de', path: '/exam-matrices', description: 'Ma trận đề' },

  // ===== 7. Học phí =====
  { slug: 'tai-chinh-tong-quan', path: '/finance/overview', description: 'Tài chính tổng quan', fullPage: true },
  { slug: 'hoc-phi-quan-ly', path: '/finance/tuition', description: 'Học phí' },
  { slug: 'hoa-don-trang-chinh', path: '/finance', description: 'Hoá đơn' },
  { slug: 'thu-chi-trang-chinh', path: '/finance/payments', description: 'Thu chi' },
  { slug: 'ke-toan-trang-chinh', path: '/finance/accounting', description: 'Kế toán' },
  { slug: 'einvoice-cau-hinh', path: '/settings/einvoice', description: 'e-Invoice' },
  { slug: 'mau-hoa-don', path: '/settings/invoice-template', description: 'Mẫu hoá đơn' },
  { slug: 'tai-chinh-cai-dat', path: '/finance/settings', description: 'Cài đặt tài chính' },

  // ===== 8. HR =====
  { slug: 'hr-tong-quan', path: '/hr/dashboard', description: 'HR tổng quan', fullPage: true },
  { slug: 'hr-nhan-vien', path: '/hr/employees', description: 'NV' },
  { slug: 'hr-onboarding', path: '/hr/onboarding', description: 'Onboarding' },
  { slug: 'hr-hop-dong', path: '/hr/contracts', description: 'Hợp đồng' },
  { slug: 'hr-cau-hinh-luong', path: '/hr/salary-config', description: 'Cấu hình lương' },
  { slug: 'hr-bang-luong', path: '/hr/payroll', description: 'Bảng lương', fullPage: true },
  { slug: 'hr-kiem-tra-luong', path: '/hr/payroll-checker', description: 'Kiểm tra lương' },
  { slug: 'hr-cham-cong', path: '/hr/attendance', description: 'Chấm công NV' },
  { slug: 'hr-phep', path: '/hr/leave', description: 'Phép' },
  { slug: 'hr-hieu-suat', path: '/hr/performance', description: 'Hiệu suất' },
  { slug: 'hr-day-thay', path: '/hr/substitute-requests', description: 'Dạy thay' },

  // ===== 9. Giáo viên =====
  { slug: 'giao-vien-danh-sach', path: '/teachers', description: 'GV' },

  // ===== 10. Báo cáo =====
  { slug: 'bao-cao-doanh-thu', path: '/reports/revenue', description: 'Doanh thu' },
  { slug: 'bao-cao-cong-no', path: '/reports/debt', description: 'Công nợ' },
  { slug: 'bao-cao-diem-danh', path: '/reports/attendance', description: 'BC điểm danh' },
  { slug: 'bao-cao-tien-do', path: '/reports/progress', description: 'Tiến độ' },
  { slug: 'bao-cao-ai', path: '/reports/ai', description: 'BC AI' },

  // ===== 11-14. Tin nhắn / AI / Automation / Marketing =====
  { slug: 'tin-nhan-zalo', path: '/messaging/zalo', description: 'Zalo' },
  { slug: 'ai-knowledge', path: '/ai-hub/knowledge', description: 'AI Knowledge' },
  { slug: 'automation-trang-chinh', path: '/automation', description: 'Workflow' },
  { slug: 'marketing-tao-bai-dang', path: '/social-media/post', description: 'Tạo bài đăng' },

  // ===== 15. Cổng phụ huynh =====
  { slug: 'ph-diem-danh', path: '/parent-portal/attendance', description: 'PH điểm danh' },
  { slug: 'ph-hoa-don', path: '/parent-portal/invoices', description: 'PH hoá đơn' },
  { slug: 'ph-diem-so', path: '/parent-portal/grades', description: 'PH điểm số' },

  // ===== 16. Cổng nhân viên =====
  { slug: 'nv-phieu-luong', path: '/employee-portal/payslips', description: 'NV phiếu lương' },

  // ===== 17. Mobile =====
  { slug: 'mobile-cham-diem-danh', path: '/mobile/teacher', description: 'Mobile GV' },

  // ===== 19. Phản hồi =====
  { slug: 'phan-hoi-danh-sach', path: '/feedbacks', description: 'Phản hồi' },

  // ===== 20-22. Tích hợp / Plugin / Admin =====
  { slug: 'tich-hop-trang-chinh', path: '/integrations', description: 'Tích hợp' },
  { slug: 'plugin-marketplace', path: '/plugins', description: 'Plugin' },
  { slug: 'cai-dat-thuong-hieu', path: '/admin/branding', description: 'Thương hiệu' },
  { slug: 'cai-dat-audit-log', path: '/admin/audit-logs', description: 'Audit log' },
]

// ============================================================
async function login(page: Page) {
  console.log('🔐 Đăng nhập...')
  await page.goto(`${CONFIG.BASE_URL}/auth/signin`, { waitUntil: 'networkidle' })
  await page.fill('input[type="email"], input[name="email"]', CONFIG.EMAIL)
  await page.fill('input[type="password"], input[name="password"]', CONFIG.PASSWORD)
  await page.click('button[type="submit"]')
  await page.waitForURL(/\/(dashboard|admin)/, { timeout: CONFIG.TIMEOUT })
  console.log('✅ Đã đăng nhập')
}

async function capture(page: Page, spec: ShotSpec) {
  const url = `${CONFIG.BASE_URL}${spec.path}`
  console.log(`📸 ${spec.slug}.png  ←  ${spec.path}  (${spec.description})`)
  try {
    await page.goto(url, { waitUntil: 'networkidle', timeout: CONFIG.TIMEOUT })
    if (spec.waitFor) {
      await page.waitForSelector(spec.waitFor, { timeout: 10_000 })
    }
    await page.waitForTimeout(CONFIG.WAIT_AFTER_NAV)
    const outputPath = path.join(CONFIG.SCREENSHOT_DIR, `${spec.slug}.png`)
    await page.screenshot({
      path: outputPath,
      fullPage: spec.fullPage ?? false,
    })
  } catch (err) {
    console.error(`   ⚠ Lỗi: ${(err as Error).message}`)
  }
}

async function main() {
  // Tạo thư mục output nếu chưa có
  fs.mkdirSync(CONFIG.SCREENSHOT_DIR, { recursive: true })

  const headed = process.argv.includes('--headed')
  console.log(`🚀 Bắt đầu chụp ${SHOTS.length} ảnh (headed=${headed})`)
  console.log(`📁 Output: ${CONFIG.SCREENSHOT_DIR}`)

  const browser: Browser = await chromium.launch({ headless: !headed })
  const context = await browser.newContext({ viewport: CONFIG.VIEWPORT })
  const page = await context.newPage()

  try {
    // Chụp trang đăng nhập trước (không cần auth)
    const loginShot = SHOTS.find((s) => s.slug === 'dang-nhap-trang-chinh')
    if (loginShot) {
      await capture(page, loginShot)
    }

    await login(page)

    for (const spec of SHOTS) {
      if (spec.slug === 'dang-nhap-trang-chinh') continue
      await capture(page, spec)
    }

    console.log(`\n✨ Xong! Đã chụp ${SHOTS.length} ảnh vào ${CONFIG.SCREENSHOT_DIR}`)
  } finally {
    await browser.close()
  }
}

main().catch((err) => {
  console.error('💥 Lỗi nghiêm trọng:', err)
  process.exit(1)
})
