# Bảo mật — 2FA, IP, khoá tài khoản

## Khi nào dùng

Tăng cường bảo mật tài khoản — bắt buộc khi trung tâm xử lý dữ liệu nhạy cảm (thông tin học sinh, hoá đơn, lương).

## Truy cập

Menu trái → **Cài đặt → Bảo mật** (hoặc **/admin/security**).

## Các tính năng

### 1. Xác thực 2 yếu tố (2FA)

Yêu cầu nhập mã từ ứng dụng (Google Authenticator, Authy) sau khi nhập đúng mật khẩu.

- **Bật cho admin**: bắt buộc Chủ trung tâm + Quản lý
- **Bật cho tất cả**: bắt buộc mọi NV

### 2. Giới hạn IP

Chỉ cho phép đăng nhập từ IP cố định (vd IP văn phòng).

- Whitelist IP
- Cảnh báo nếu đăng nhập từ IP lạ

### 3. Phiên đăng nhập

- Tự đăng xuất sau X phút không hoạt động
- Cho phép tối đa N thiết bị cùng đăng nhập 1 tài khoản

### 4. Khoá tài khoản

- Sai mật khẩu N lần → khoá X phút
- Tài khoản không hoạt động > 90 ngày → tự khoá

### 5. Mật khẩu

- Độ mạnh tối thiểu
- Yêu cầu đổi mật khẩu định kỳ (vd mỗi 6 tháng)
- Cấm dùng lại N mật khẩu gần nhất

### 6. Single Sign-On (SSO)

Kết nối với Google Workspace / Microsoft 365 — NV đăng nhập bằng tài khoản công ty.

## Lưu ý

- **Bật 2FA cho admin tối thiểu** — tránh tài khoản admin bị chiếm.
- **Cảnh báo IP lạ**: nếu Chủ trung tâm đi công tác, sẽ thấy cảnh báo — không nhầm hacker.

## Câu hỏi thường gặp

**Bật 2FA xong, NV mất điện thoại?**
Liên hệ admin → admin reset 2FA cho NV → NV cài lại trên điện thoại mới.
