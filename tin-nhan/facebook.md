---
title: "Chat Facebook"
description: "Trả lời tin nhắn Messenger và bình luận của Fanpage ngay trong KLASSA, kèm mẫu trả lời nhanh và tự động trả lời."
roles: [Quản trị viên, Quản lý chi nhánh, Quản lý, Lễ tân]
plugin: "Facebook Page Chat"
order: 10
---

# Chat Facebook

Nếu trung tâm có Fanpage Facebook, bạn có thể đọc và trả lời tin nhắn Messenger cùng bình luận ngay trong KLASSA, không cần mở Facebook. Tính năng cần gói mở rộng **Facebook Page Chat**. Chỉ Quản trị viên, Quản lý chi nhánh, Quản lý và Lễ tân vào được.

Vào **Chat → Chat Facebook**. Trang có hai tab: **Messenger** (nhắn tin 1-1) và **Bình luận**. Trung tâm có nhiều Page thì chọn Page ở ô đầu trang.

## Kết nối Fanpage (lần đầu)

Quản trị viên làm một lần ở **AI Hub → Tích hợp**, tab **Marketing**, khung kết nối Facebook cho chat. Bạn cần quyền quản trị Page và một ứng dụng Facebook riêng của trung tâm, nên việc này nên có người hiểu kỹ thuật hỗ trợ.

::: steps
1. Bấm **Thêm Page**. Hộp **Kết nối Facebook Page cho chat** hiện ra gồm 4 bước.
2. Bước 1, **Thông tin Page**: điền **Nhãn nội bộ** và **Page ID** (bắt buộc).
3. Bước 2, **Page Access Token (long-lived)**: dán mã truy cập của Page (bắt buộc).
4. Bước 3, **App credentials (verify webhook)**: điền **App ID** và **App Secret** của ứng dụng Facebook (không bắt buộc để lưu, nhưng cần để Facebook xác thực kết nối).
5. Bước 4, **Webhook setup**: sao chép đường dẫn và **Verify Token** (hệ thống tự sinh sẵn) dán vào phần Webhooks trong trang nhà phát triển Facebook, theo hướng dẫn ngay trong hộp.
6. Bấm **Thêm Page** ở cuối hộp. Page hiện thành một thẻ.
7. Trên thẻ Page, bấm **Test** để kiểm tra mã, rồi **Subscribe** để nhận tin về KLASSA.
:::

Thẻ Page có trạng thái như **Hoạt động**, **Cần token**, **Token hết hạn**. Nút **Import lịch sử** tải tin nhắn cũ từ Facebook về, có thể mất vài phút. Nút thùng rác xoá Page khỏi chức năng chat.

## Trả lời tin nhắn Messenger

::: steps
1. Ở tab **Messenger**, chọn một hội thoại ở danh sách bên trái. Dùng ô **Tìm theo tên / tin** để tìm nhanh.
2. Gõ tin ở khung nhập rồi gửi. Bấm biểu tượng ảnh để gửi ảnh từ máy (JPG, PNG, GIF, WebP, tối đa 10MB).
3. Muốn dùng câu có sẵn, bấm nút mẫu bên cạnh khung nhập để chọn **Quick reply**.
:::

Mỗi hội thoại có nhãn thời gian còn lại để trả lời tự do. Facebook chỉ cho nhắn thoải mái trong **24 giờ** kể từ tin cuối của khách. Quá 24 giờ, khung nhập hiện dòng "Ngoài 24h, cần chọn tag", bạn phải chọn một loại tag của Facebook (**CONFIRMED_EVENT_UPDATE**, **POST_PURCHASE_UPDATE**, **ACCOUNT_UPDATE**, **HUMAN_AGENT**) mới gửi được. Facebook chỉ duyệt các tag này cho mục đích hạn chế.

## Ghi chú và phân việc cho một hội thoại

Bấm biểu tượng chi tiết ở đầu khung chat (hoặc **Ctrl+I**) để mở bảng bên phải:

- **Sale phụ trách**: gán người xử lý hội thoại.
- **Tag nội bộ** và **Note nội bộ**: chỉ nhân viên thấy, phụ huynh không thấy.
- **Liên kết Học sinh** và **Liên kết Lead**: gắn hội thoại với học sinh hoặc lead đã có trong KLASSA.

Bấm **Lưu** để giữ thay đổi. KLASSA không tự tạo lead từ tin Facebook, bạn liên kết tay như trên.

## Trả lời bình luận

Mở tab **Bình luận**. Lọc bằng **Tất cả**, **Chưa reply** hoặc **Đã ẩn**. Ở mỗi bình luận, bấm **Reply**, nhập nội dung rồi gửi để trả lời. Hoặc bấm **Ẩn** để ẩn bình luận khỏi Page, sau đó có thể bấm **Bỏ ẩn**.

## Mẫu trả lời nhanh và tự động trả lời

Bấm **Template** ở đầu trang để mở hộp **Template & Auto-reply**, có hai tab.

**Quick reply**: câu trả lời soạn sẵn. Bấm **Mới**, điền **Tên** và **Nội dung** (bắt buộc), có thể thêm **Shortcut** như `/welcome` và **Category**, rồi lưu. Trong nội dung có thể chèn `{tenPH}` và `{tenSale}`.

**Auto-reply rules**: luật tự trả lời theo từ khoá. Điền **Tên**, **Keywords** (cách nhau bằng dấu phẩy) và **Phản hồi** (bắt buộc). Chọn **Match mode** (chứa từ khoá, khớp chính xác, bắt đầu bằng, hoặc Regex), **Áp dụng cho** (Messenger, Bình luận hoặc cả hai), và khung giờ **Từ** / **Đến** nếu chỉ muốn luật chạy trong một khoảng giờ (ví dụ 18:00 đến 07:30). Bật công tắc **Bật** để luật chạy.

::: tip Mẹo
Luật tự trả lời nên dùng cho câu hỏi lặp lại như học phí, lịch học. Nhớ nhập cả từ khoá không dấu, ví dụ "học phí, hoc phi".
:::

## Câu hỏi thường gặp

::: details Chủ động nhắn cho khách sau 24 giờ được không?
Chỉ khi chọn đúng tag Facebook cho phép, như ở trên. Ngoài ra Facebook sẽ chặn tin.
:::

::: details Giáo viên, kế toán có thấy mục này không?
Không. Vai Giáo viên, Trợ giảng, Kế toán, Nhân sự và Phụ huynh không được truy cập kênh Facebook.
:::

::: details Chat Zalo nằm ở đâu?
Xem [Zalo](zalo.md). Facebook và Zalo là hai mục riêng trong menu **Chat**.
:::
