# Yêu cầu chỉnh hồ sơ

## Khi nào dùng

Nhân viên muốn sửa thông tin cá nhân (đổi tên do thay đổi giấy tờ, đổi địa chỉ, cập nhật số điện thoại, bằng cấp mới…) — gửi yêu cầu lên HR duyệt, không tự sửa được trực tiếp.

Cơ chế này đảm bảo:
- Thông tin pháp lý (tên, CMND) chỉ HR mới cập nhật được
- Có truy vết ai đã duyệt thay đổi nào
- Có nơi nhân viên đính kèm giấy tờ chứng minh

## Truy cập

Menu trái → **Nhân sự → Yêu cầu chỉnh hồ sơ** (hoặc **/hr/profile-requests**).

![Yêu cầu chỉnh hồ sơ](../assets/screenshots/hr-yeu-cau-chinh-ho-so.png)

## Nhân viên gửi yêu cầu

Trong **Cổng Nhân viên → Hồ sơ** → bấm **"Yêu cầu chỉnh"**:
- Chọn trường muốn đổi (Họ tên / Địa chỉ / SĐT / Bằng cấp / Khác)
- Giá trị mới
- Lý do
- Đính kèm giấy tờ (ảnh CMND/CCCD mới, bằng cấp...)
- Gửi

## HR xử lý

Trang **Yêu cầu chỉnh hồ sơ** hiển thị danh sách:
- Người gửi + Ngày gửi
- Trường muốn đổi (cũ → mới)
- File đính kèm
- Trạng thái: Chờ duyệt / Đã duyệt / Từ chối

Bấm vào yêu cầu để xem chi tiết → bấm:
- **✅ Duyệt** — cập nhật hồ sơ ngay
- **❌ Từ chối** — ghi lý do, gửi thông báo NV
- **📝 Yêu cầu bổ sung** — NV gửi thêm giấy tờ

## Lưu ý

- **Mọi thay đổi đều ghi audit log** — không xoá được
- **Một số trường siêu nhạy cảm** (CMND, ngày sinh) yêu cầu **2 cấp duyệt** (HR + Quản lý) trong cấu hình mặc định

## Câu hỏi thường gặp

**Tôi đang gấp, NV cập nhật được luôn không qua HR?**
Một số trường không nhạy cảm (avatar, SĐT cá nhân) NV tự sửa trực tiếp. Các trường nhạy cảm bắt buộc qua duyệt.

**HR không duyệt mất bao lâu?**
Mặc định cảnh báo HR sau 24h không xử lý. Cấu hình SLA trong **Cài đặt HR**.
