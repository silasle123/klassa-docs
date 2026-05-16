# Quản lý người dùng nội bộ

## Khi nào dùng

- Tạo tài khoản cho nhân viên mới
- Đổi vai trò khi NV thăng chức
- Khoá / mở tài khoản khi NV nghỉ
- Đặt lại mật khẩu cho NV quên

## Truy cập

Menu trái → **Cài đặt → Người dùng** (hoặc **/admin/users**). Chỉ **Chủ trung tâm + Quản lý** vào được.

## Thao tác

### Tạo tài khoản mới
1. Bấm **"+ Tạo người dùng"**
2. Điền: tên, email, SĐT
3. Chọn **Vai trò** (xem [9 vai trò](../bat-dau/vai-tro-nguoi-dung.md))
4. Chọn **Cơ sở** (nếu nhiều chi nhánh)
5. Mật khẩu khởi tạo (tự sinh hoặc nhập)
6. Lưu — tài khoản nhận email kèm thông tin đăng nhập

### Đổi vai trò
Chọn user → bấm "Đổi vai trò" → chọn vai trò mới + ghi lý do.

### Khoá tài khoản
- **Khoá tạm thời** — tài khoản vẫn còn, không đăng nhập được
- **Vô hiệu hoá** — như nghỉ việc, không hiển thị trong danh sách hoạt động

### Đặt lại mật khẩu
- Reset về `12345678` (NV phải đổi sau khi đăng nhập)
- Hoặc gửi link đặt lại qua email

## Lưu ý

- **Không xoá user** — chỉ vô hiệu hoá. Xoá làm mất lịch sử thao tác.
- **Email duy nhất** — không trùng giữa các user.

## Câu hỏi thường gặp

**Tôi tạo user nhưng họ không nhận được email?**
Kiểm tra email SMTP đã cấu hình chưa. Có thể email vào spam.
