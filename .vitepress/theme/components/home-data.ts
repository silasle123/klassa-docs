/**
 * Dữ liệu tĩnh của trang chủ.
 * - HERO_SHOT: ảnh chụp màn hình lớn ở đầu trang (ảnh thật của KLASSA).
 * - HOME_FAQ: 5 câu hỏi hay gặp. Chép từ faq/tong-hop.md (đã kiểm với phần mềm), đừng tự viết mới ở đây.
 *   Sửa câu trả lời ở faq/tong-hop.md thì sửa luôn ở đây.
 */
import heroShot from '../../../assets/screenshots/trang-chu-quan-tri.webp'

export const HERO_SHOT: string = heroShot

export const HOME_FAQ: { q: string; a: string; link?: string }[] = [
  {
    q: 'Tôi quên mật khẩu, lấy lại thế nào?',
    a: 'KLASSA không tự gửi thư đặt lại mật khẩu. Hãy nhờ Quản trị viên của trung tâm đặt mật khẩu mới cho bạn ở trang Quản lý Users. Sau khi vào được, bạn nên tự đổi lại mật khẩu.',
    link: '/tai-khoan/doi-mat-khau',
  },
  {
    q: 'Sao tôi không thấy một mục trong menu?',
    a: 'Mỗi vai chỉ thấy các mục dành cho mình, ví dụ Giáo viên không thấy phần tài chính. Một số mục thuộc gói mở rộng, trung tâm chưa bật thì mục đó không hiện.',
    link: '/tai-khoan/vai-tro-nguoi-dung',
  },
  {
    q: 'Phụ huynh nói không thấy phiếu học phí của con?',
    a: 'Kiểm tra công tắc Phụ huynh chỉ thấy phiếu đã gửi trong Tài chính → Kế toán → Cấu hình tài chính. Khi công tắc bật, phụ huynh chỉ thấy phiếu sau khi phiếu được gửi qua Zalo hoặc email, được báo qua app, hoặc được đánh dấu đã gửi tay.',
    link: '/hoc-phi/bao-phu-huynh',
  },
  {
    q: 'Tôi chấm điểm danh nhầm, sửa được không?',
    a: 'Được. Mở lại buổi đó và đổi trạng thái của học sinh, hệ thống lưu lịch sử chỉnh sửa. Nếu trung tâm đã bật khoá điểm danh và buổi đó quá hạn, chỉ Quản trị viên và Quản lý chi nhánh sửa được.',
    link: '/diem-danh/sua-loi',
  },
  {
    q: 'Zalo không gửi hoặc không nhận được tin?',
    a: 'Trước hết kiểm tra nick Zalo còn đăng nhập không. Nick có thể bị Hết phiên hoặc Cần quét QR, khi đó bấm Quét QR trên thẻ nick và quét lại. Zalo thuộc gói mở rộng, nên cũng cần chắc là gói đã bật.',
    link: '/tin-nhan/zalo',
  },
]
