---
title: "Xử lý sự cố thường gặp"
description: "Tra theo triệu chứng: không đăng nhập được, thiếu menu, phụ huynh không thấy phiếu, Zalo im lặng, điểm danh bị khoá, và cách báo cho KLASSA khi không tự xử lý được."
roles: [Quản trị viên, Quản lý chi nhánh, Quản lý, Lễ tân, Giáo viên, Trợ giảng, Kế toán, Nhân sự]
order: 50
---

# Xử lý sự cố thường gặp

Bài này giúp bạn tự gỡ những sự cố hay gặp trước khi nhờ người khác. Mỗi mục cho biết triệu chứng, nguyên nhân thường gặp và nơi xử lý.

## Không đăng nhập được

Đọc câu thông báo hiện ngay trên form đăng nhập, rồi tra bảng trong bài [Đăng nhập](../tai-khoan/dang-nhap.md). Vài trường hợp phổ biến:

- **Tài khoản tạm khóa 30 phút**: bạn nhập sai mật khẩu 5 lần. Chờ hết giờ hoặc nhờ Quản trị viên bấm **Mở khóa tài khoản** ở **Quản lý Users**.
- **Tài khoản đang chờ phê duyệt từ quản trị viên**: bạn mới tự đăng ký. Nhờ Quản trị viên duyệt, xem [Duyệt đăng ký người dùng](../cai-dat/duyet-dang-ky-nguoi-dung.md).
- **Quên mật khẩu**: Quản trị viên đặt lại ở **Quản lý Users**, xem [Quản lý người dùng](../cai-dat/nguoi-dung.md).

## Không thấy một mục trong menu

1. Kiểm tra vai của bạn. Mỗi vai chỉ thấy các mục dành cho mình, xem [Vai trò người dùng](../tai-khoan/vai-tro-nguoi-dung.md).
2. Nếu mục thuộc gói mở rộng (Zalo, học online, tuyển sinh có AI...), kiểm tra gói đã bật chưa ở **Plugin Marketplace**, xem [Giới thiệu Plugin Marketplace](../plugin/gioi-thieu.md).
3. Vẫn không thấy, nhờ Quản trị viên xem lại vai và chi nhánh của tài khoản.

## Phụ huynh không thấy phiếu học phí

Vào **Tài chính → Kế toán → Cấu hình tài chính**, thẻ **Phiếu hiện cho phụ huynh**. Nếu công tắc **Phụ huynh chỉ thấy phiếu đã gửi** đang bật, phiếu cột **Đã gửi** còn ghi "Chưa gửi" thì phụ huynh chưa thấy. Gửi phiếu hoặc báo qua app để phiếu hiện ra. Xem [Phụ huynh xem hoá đơn và nhận báo](../hoc-phi/bao-phu-huynh.md).

Nếu phụ huynh chưa có tài khoản, phụ huynh cũng không xem được. Xem [Phụ huynh](../hoc-sinh/phu-huynh.md).

## Zalo không gửi hoặc không nhận được tin

- Nick Zalo có thể đã **Hết phiên**, **Cần quét QR**, **Bị khoá** hoặc **Tạm dừng**. Bấm **Quét QR** trên thẻ nick (nick còn hoạt động thì nút là **Đăng nhập lại**). Xem [Zalo của tôi](../tin-nhan/zalo-cua-toi.md) và [Kết nối Zalo cá nhân](../tich-hop/zalo-ca-nhan.md).
- Có thể ai đó đã mở Zalo Web bằng cùng số điện thoại, làm nick bị đăng xuất. Quét lại là được.
- Gói mở rộng Zalo chưa bật thì không có mục Zalo trong menu.

## Không sửa được điểm danh

Trung tâm có thể đã bật khoá điểm danh. Buổi quá hạn sẽ báo bị khoá, chỉ Quản trị viên và Quản lý chi nhánh sửa được. Xem [Khoá điểm danh](../diem-danh/khoa-diem-danh.md) và [Xem lại, sửa và xoá điểm danh](../diem-danh/sua-loi.md).

## Dữ liệu bị đổi mà không rõ ai làm

Quản trị viên mở **Quản trị hệ thống → Nhật ký hệ thống** để xem ai đổi, lúc nào, từ giá trị nào sang giá trị nào. Xem [Nhật ký hệ thống](../cai-dat/audit-log.md).

## Lỗi không có trong danh sách

Gửi cho đội ngũ KLASSA ngay trong phần mềm ở mục **Hỗ trợ**, chọn **Báo lỗi & Hỗ trợ** và đính kèm ảnh chụp màn hình. Xem [Gửi yêu cầu hỗ trợ tới KLASSA](../phan-hoi/gui-ho-tro.md). Cách khác là [liên hệ qua email](lien-he.md).

::: tip Mẹo
Một báo lỗi tốt có đủ: bạn đang ở trang nào, bấm gì, kết quả mong đợi, kết quả thực tế và ảnh chụp màn hình. Đội ngũ xử lý nhanh hơn nhiều khi có đủ các ý này.
:::

## Câu hỏi thường gặp

::: details Tôi nên báo lỗi qua trang Hỗ trợ hay gửi email?
Ưu tiên trang **Hỗ trợ**, vì bạn theo dõi được trạng thái và trao đổi tiếp ngay trên yêu cầu. Dùng email khi bạn không đăng nhập được vào phần mềm.
:::
