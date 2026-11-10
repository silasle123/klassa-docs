---
title: "Gia sư AI cho học sinh"
description: "Học sinh hỏi bài trên app điện thoại, gia sư AI gợi ý từng bước chứ không giải hộ; Quản trị viên bật tắt và đặt số câu mỗi ngày."
roles: [Học sinh, Quản trị viên]
plugin: "Nền tảng AI"
order: 40
---

# Gia sư AI cho học sinh

Gia sư AI là trợ lý để học sinh hỏi bài trên app điện thoại của trung tâm. Gia sư gợi ý từng bước và hỏi lại học sinh, không đưa đáp án ngay. Tính năng cần gói mở rộng **Nền tảng AI** và trung tâm đã cài khoá AI. Hiện chỉ có trên app, trang web học online không có màn hỏi gia sư.

## Gia sư làm việc thế nào

- Gọi học sinh bằng tên, xưng "mình", nói tiếng Việt ngắn gọn.
- Khi nhận đề: làm rõ đề, gợi ý bước đầu rồi hỏi học sinh nghĩ sao.
- Chỉ đi tiếp khi học sinh đã trả lời hoặc nói đã bí. Chỉ chốt đáp án khi học sinh đã tự đưa ra đáp án hoặc hai bên đã đi hết các bước.
- Học sinh dán bài làm: gia sư chỉ ra chỗ sai đầu tiên để học sinh tự sửa.
- Chỉ nhận chuyện học tập, nếu lạc đề thì kéo về bài đang học.
- Học sinh có thể gửi ảnh đề bài (JPG, PNG hoặc WebP, dưới 4 MB). Mỗi tin nhắn tối đa 4.000 ký tự.
- Gia sư giữ 20 lượt gần nhất của cuộc trò chuyện.

Câu hỏi và ảnh đề bài của học sinh được gửi tới dịch vụ AI mà trung tâm đang dùng để tạo câu trả lời.

## Bật tắt và đặt số câu mỗi ngày

Tính năng bật sẵn ở trung tâm đã có gói AI. Quản trị viên chỉnh như sau:

::: steps
1. Vào **Cài đặt**, chọn nhóm **AI & Tự động**, rồi chọn tab **Tính năng AI**.
2. Tìm tính năng **Gia sư AI cho học sinh**. Bật hoặc tắt bằng công tắc của tính năng.
3. Ở ô **Số câu mỗi học sinh mỗi ngày (0 = không giới hạn)**, nhập số câu. Mặc định là 15, tối đa 500.
4. Bấm **Lưu cấu hình**.
:::

## Học sinh gặp thông báo nào

- **Hôm nay bạn đã hỏi đủ ... câu, mai hỏi tiếp nhé**: đã hết số câu trong ngày. Số câu tính lại mỗi ngày.
- **Trung tâm chưa cài đặt AI cho gia sư**: trung tâm chưa cài khoá AI. Báo trung tâm xử lý.
- **AI đang bận, bạn thử lại sau ít phút nhé**: thử lại sau.
- **Gia sư chưa đọc được ảnh**: chụp lại rõ hơn hoặc gõ đề bằng chữ.

::: tip Mẹo
Số câu mỗi ngày là cách giữ chi phí AI trong tầm kiểm soát. Chỉ đặt 0 khi bạn chấp nhận không giới hạn.
:::

## Câu hỏi thường gặp

::: details Gia sư có giải bài hộ học sinh không?
Không. Gia sư được dặn gợi ý từng bước và để học sinh tự làm.
:::

::: details Vì sao học sinh không thấy gia sư trên web?
Gia sư AI hiện chỉ có trên app điện thoại. Xem thêm cách học sinh học online ở [Học viên học online từ A đến Z](hoc-vien.md).
:::
