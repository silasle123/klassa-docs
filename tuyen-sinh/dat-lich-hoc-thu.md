---
title: "Đặt lịch và ghi kết quả học thử"
description: "Đặt buổi học thử cho lead, ghi có mặt hoặc vắng sau buổi học, đổi lịch và học thử thêm môn."
roles: [Quản trị viên, Quản lý chi nhánh, Quản lý, Lễ tân]
plugin: "CRM Tuyển sinh + AI"
order: 70
---

# Đặt lịch và ghi kết quả học thử

Học thử là bước để phụ huynh và học sinh trải nghiệm trước khi đăng ký. Mỗi lead được học thử tối đa 3 buổi cho mỗi môn, ký hiệu **B1**, **B2**, **B3**. Làm các việc dưới đây ngay trên lead, kết quả sẽ tự cập nhật trạng thái lead và [Lịch học thử](lich-hoc-thu.md).

## Đặt lịch một buổi học thử

::: steps
1. Bấm ô **+ B1** của lead trong danh sách, hoặc vào [hồ sơ lead](chi-tiet-lead.md) rồi bấm **Thêm môn học thử** hay nút đặt buổi tiếp theo (ví dụ **Đặt buổi 2**).
2. Hộp **Đặt lịch học thử** hiện ra. Chọn **Buổi số** (1, 2 hoặc 3) và **Môn học** (bắt buộc).
3. Chọn **Ngày** và điền **Giờ** (bắt buộc). Giờ học thử phải từ 7:00 đến 21:00.
4. Chọn **Giáo viên** nếu đã biết. Ô này không bắt buộc.
5. Muốn báo lịch cho phụ huynh, tích ô **Gửi thông báo cho phụ huynh (ưu tiên Zalo, không có Zalo thì gửi SMS)**. Hệ thống gửi qua Zalo trước, nếu phụ huynh chưa liên kết Zalo thì gửi SMS. Ô này mặc định không tích.
6. Bấm **Đặt lịch ngay**. Khi ô gửi thông báo đang tích, hộp **Xác nhận gửi thông báo** hiện ra để bạn kiểm lại nội dung. Bấm **Xác nhận gửi** để đặt lịch và gửi. Bấm **Không gửi** thì ô tự bỏ tích và bạn quay lại hộp đặt lịch. Lịch chỉ được đặt khi bạn bấm **Đặt lịch ngay** lần nữa.
:::

Đặt buổi 1 thì lead tự chuyển sang **Đã hẹn học thử**. Gửi thông báo không được thì hệ thống báo rõ lý do, khi đó hãy gọi hoặc nhắn tay cho phụ huynh.

Quy tắc đặt buổi:

- Mỗi môn có tối đa 3 buổi. Đặt trùng một buổi đã có sẽ bị báo lỗi.
- Buổi 2 chỉ đặt được khi buổi 1 đã ghi kết quả (có mặt hoặc vắng). Buổi 3 cũng vậy với buổi 2. Ô chưa đặt được hiển thị mờ.
- Học thử thêm môn khác: bấm **Thêm môn học thử** trong hồ sơ. Mỗi môn có một hàng **B1 B2 B3** riêng.

::: tip Mẹo
Học sinh đang học muốn học thử môn khác: đặt ngay trên lead cũ của em, kể cả lead đã chuyển thành học sinh. Trạng thái đã chốt của lead được giữ nguyên.
:::

## Ghi có mặt hoặc vắng

Làm ngay sau buổi học. Buổi không ghi sẽ hiện **Chưa điểm danh** màu đỏ và lead không vào nhóm **Chờ chốt**.

::: steps
1. Bấm ô buổi đó (**◷ B1** hoặc **! B1**), hoặc nút **Điểm danh** ở khối **Học thử hôm nay**, hoặc nút **Ghi có mặt / vắng** trong hồ sơ.
2. Hộp **Đánh dấu tham gia** hiện ra. Chọn **Đã tham gia** hoặc **Không tham gia**.
3. Chọn **Không tham gia** thì phải ghi lý do (ví dụ ốm, gia đình có việc).
4. Nếu chọn **Đã tham gia**, hộp hiện thêm ô **Phản hồi từ phụ huynh (tùy chọn)**. Ghi phản hồi nếu có.
5. Nếu chọn **Đã tham gia** và muốn nhắn cảm ơn phụ huynh, tích ô **Gửi thông báo cảm ơn và phản hồi cho phụ huynh (ưu tiên Zalo, không có Zalo thì gửi SMS)**. Hệ thống gửi qua Zalo trước, nếu phụ huynh chưa liên kết Zalo thì gửi SMS. Ô này không hiện khi chọn **Không tham gia**.
6. Bấm **Cập nhật**. Khi ô gửi cảm ơn đang tích, hộp **Xác nhận gửi thông báo** hiện ra, bấm **Xác nhận gửi**. Bấm **Không gửi** thì ô tự bỏ tích và bạn quay lại hộp, bấm **Cập nhật** lần nữa để lưu.
:::

Ghi **Đã tham gia** thì lead tự chuyển sang **Hoàn thành học thử** và vào nhóm **Chờ chốt**. Ghi nhầm kết quả thì vào **Lịch học → Lịch học thử**, bấm thẻ buổi đó và chọn **Sửa điểm danh**. Hộp hiện sẵn trạng thái và ghi chú cũ, bạn sửa rồi bấm **Cập nhật**. Trong danh sách lead, ô buổi đã có kết quả không bấm được.

## Đổi lịch

Phụ huynh xin đổi buổi, hoặc học sinh vắng muốn học lại:

::: steps
1. Bấm ô buổi học thử đã hẹn, chọn **Đổi lịch**.
2. Hộp **Đổi lịch học thử** hiện ra. Chọn **Ngày mới** và **Giờ mới** (bắt buộc, trong khoảng 7:00 đến 21:00).
3. Ghi **Lý do đổi lịch** nếu cần (không bắt buộc).
4. Muốn báo phụ huynh, tích ô **Gửi thông báo đổi lịch cho phụ huynh (ưu tiên Zalo, không có Zalo thì gửi SMS)**. Hệ thống gửi qua Zalo trước, nếu phụ huynh chưa liên kết Zalo thì gửi SMS.
5. Bấm **Đổi lịch**.
:::

Học sinh đã bị ghi vắng mà muốn học lại thì đặt buổi tiếp theo (ô kế bên được mở sau khi buổi trước có kết quả). **Đổi lịch** dùng cho buổi còn đang chờ, chưa ghi kết quả.

## Câu hỏi thường gặp

::: details Không đặt được giờ học thử?
Giờ phải nằm trong khoảng 7:00 đến 21:00. Buổi 2, buổi 3 chỉ đặt được khi buổi trước đã có kết quả.
:::

::: details Tin nhắn cho phụ huynh không gửi được?
Hệ thống hiện lý do, ví dụ phụ huynh chưa liên kết Zalo, hoặc trung tâm chưa cấu hình SMS để gửi dự phòng (xem [Kết nối SMS](../tich-hop/sms.md)). Hãy gọi hoặc nhắn tay, rồi ghi vào [Ghi chăm sóc](hoat-dong-tu-van.md).
:::

::: details Có nút huỷ buổi học thử không?
Không có. Muốn đổi thì dùng **Đổi lịch**. Buổi học sinh không đến thì ghi **Không tham gia**.
:::
