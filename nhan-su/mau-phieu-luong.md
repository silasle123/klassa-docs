# Mẫu phiếu lương

## Khi nào dùng

Tuỳ chỉnh **thông tin in trên phiếu lương PDF** mà nhân viên nhận (tên công ty, địa chỉ, mã số thuế, ghi chú chân phiếu) — dùng chung cho cả phiếu lương lẫn hợp đồng.

## Truy cập

Menu trái → **Nhân sự → Mẫu phiếu lương** (`/hr/payslip-template`). Tiêu đề trang: **"Mẫu phiếu lương & hợp đồng"**. Cần quyền nhân sự (xem); sửa cần quyền cập nhật.

![Trang Mẫu phiếu lương & hợp đồng](../assets/screenshots/payslip-template-page.png)

## Các trường tuỳ chỉnh

### Thông tin in trên phiếu (card chính)
- **Tên công ty**
- **Địa chỉ pháp nhân**
- **Mã số thuế (MST)**
- **Email liên hệ**
- **Ghi chú chân phiếu** — hiển thị ở cuối mỗi phiếu lương PDF

### Thông tin cho hợp đồng lao động (Bên A)
Dùng khi xuất file hợp đồng, KHÔNG hiện trên phiếu lương:
- Người đại diện ký hợp đồng
- Chức vụ người đại diện
- Điện thoại công ty

### Logo
Card Logo chỉ **hiển thị** logo hiện tại (lấy từ Cài đặt thương hiệu). Muốn đổi logo → bấm link **"Đổi logo tại Cài đặt thương hiệu"** (`/admin/branding`). **Không upload logo trực tiếp ở trang này.**

## Xem thử + Lưu

- **"Xem thử phiếu mẫu"** (góc trên phải) → mở một phiếu lương PDF mẫu (số liệu giả) với thông tin thương hiệu hiện tại, để kiểm tra layout trước khi áp dụng.
- **"Lưu mẫu phiếu"** → lưu cấu hình.

> Cấu hình này **dùng chung** với hoá đơn và email (lưu trong cài đặt thương hiệu) — sửa ở đây cũng đổi thông tin in trên hoá đơn.

## Phiếu lương thật trông như thế nào

Sau khi cấu hình, phiếu lương xuất ra PDF như sau (mẫu thật từ hệ thống):

![Phiếu lương PDF mẫu](../assets/screenshots/phieu-luong-mau-pdf.png)

Bố cục: tiêu đề **PHIẾU LƯƠNG** + tháng + mã phiếu → bảng thông tin nhân viên → 4 ô tóm tắt công → bảng **Các khoản thu nhập** (có chi tiết lương dạy từng lớp) → bảng **Các khoản khấu trừ** → hộp **Lương thực nhận** kèm số tiền bằng chữ → chữ ký 2 bên → ghi chú chân phiếu.

## Mẫu email gửi phiếu lương (khác)

Mẫu **email** đính kèm khi gửi phiếu lương cho nhân viên **KHÔNG** cấu hình ở trang này. Vào **Tích hợp → Mẫu email & thông báo → "Email gửi phiếu lương"** để soạn mẫu email (tiêu đề + nội dung, có các biến như tên NV, kỳ lương, lương thực nhận). Chưa có mẫu này thì hệ thống chặn gửi phiếu qua email.

## Câu hỏi thường gặp

**Tên file phiếu lương khi tải về là gì?**
`Họ tên - Phiếu lương - MM.YYYY.pdf` (có sẵn tên nhân viên để không nhầm khi gửi).

**Đổi logo mà phiếu chưa cập nhật?**
Logo lấy từ Cài đặt thương hiệu (`/admin/branding`). Đổi ở đó rồi xem thử lại phiếu mẫu.
