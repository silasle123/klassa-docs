---
title: "Ca trợ giảng (phía quản lý)"
description: "Theo dõi trợ giảng bấm Có mặt từng buổi, xác nhận hoặc huỷ thay họ, bật yêu cầu check-in để tính lương và đặt hạn báo muộn."
roles: [Quản trị viên, Quản lý chi nhánh]
plugin: "Nhân sự (HRIS)"
order: 120
group: "Lương, chấm công & ca"
---

# Ca trợ giảng (phía quản lý)

Trợ giảng thường đi lẻ vài giờ mỗi buổi nên không hợp với chấm công cả ngày. Vì vậy trợ giảng tự bấm **Có mặt** cho từng buổi họ phụ trách, ở Cổng nhân viên, mục **Ca trợ giảng**. Bài này nói phần của quản lý: xem, xác nhận, huỷ, và các công tắc liên quan đến lương.

## Trợ giảng bấm Có mặt thế nào

Trợ giảng bấm được từ 60 phút trước giờ học tới 2 tiếng sau giờ tan. Hệ thống kiểm tra vị trí theo WiFi hoặc GPS của cơ sở mà lớp thuộc về (xem [Cấu hình chấm công](cau-hinh-cham-cong.md)). Cơ sở chưa khai gì thì chấp nhận thủ công. Bấm ngoài vùng thì lần bấm ghi nhận nhưng chờ quản lý xác nhận.

Quá giờ đó, trợ giảng bán thời gian vẫn tự **Báo có mặt muộn** được tới giờ hạn của ngày hôm sau, trong giới hạn số lần mỗi tháng. Lần báo muộn được ghi nhận luôn, quản lý xem lại và huỷ được nếu sai. Quá hạn hoặc hết lượt thì phải nhờ quản lý xác nhận. Trợ giảng toàn thời gian không có nút này vì đã chấm công cả ngày.

## Xem và xử lý check-in trợ giảng

::: steps
1. Vào **Quản lý HR → Giờ dạy**, mở tab **Check-in trợ giảng**.
2. Chọn khoảng ngày. Bấm **Chỉ ca chờ xác nhận** để chỉ thấy các ca cần xử lý, hoặc **Tất cả**.
3. Đọc cột **Trạng thái** của từng ca.
4. Với ca cần xử lý, bấm **Xác nhận có mặt**, nhập ghi chú nếu muốn rồi xác nhận.
:::

Bảng có các cột **Ngày**, **Trợ giảng**, **Lớp học**, **Giờ**, **Bấm lúc**, **Trạng thái**, **Thao tác**. Các trạng thái:

| Nhãn | Ý nghĩa |
|------|---------|
| **Có mặt** | Trợ giảng đã bấm và xác thực được vị trí. |
| **Quản lý xác nhận** | Quản lý đã xác nhận thay. |
| **Báo muộn** | Trợ giảng tự báo có mặt muộn, kèm giờ báo. |
| **Chỉ GPS** | Có mặt nhờ định vị, không nối WiFi của trung tâm. Chỉ để bạn lưu ý. |
| **Ngoài vùng** | Bấm ngoài vùng cho phép, chờ xác nhận. |
| **Máy báo vị trí giả lập** | Máy báo vị trí giả, không tin được. |
| **Thiếu check-in** | Buổi đã qua mà trợ giảng chưa bấm. |
| **Chưa bấm** | Chưa tới lúc hoặc chưa bấm. |
| **Đã huỷ** | Lần bấm bị huỷ, kèm lý do. |

Muốn huỷ một lần bấm sai (bấm nhầm buổi), bấm **Huỷ** ở dòng đó, ghi **Lý do huỷ** (tối thiểu 3 ký tự) rồi bấm **Huỷ lần bấm**. Buổi không còn được tính là trợ giảng có mặt, và trợ giảng nhận thông báo kèm lý do. Huỷ nhầm thì bấm **Xác nhận có mặt** để khôi phục.

Chỉ Quản trị viên và Quản lý chi nhánh xác nhận hoặc huỷ được. Kế toán chỉ xem.

Có một cách khác để chấm bù: vào [Điểm danh nhân viên](cham-cong.md), bấm **Chấm công thủ công**, chọn trợ giảng và ngày, rồi tích ca ở mục **Ca trợ giảng ngày này**. Với lễ tân kiêm trợ giảng, cách này không cộng thêm giờ công, vì ca trợ giảng đã trả theo buổi và giờ công chỉ để tính giờ lễ tân.

## Bật yêu cầu check-in mới tính lương

Mặc định lương trợ giảng tính theo phân công lớp, trợ giảng có bấm hay không cũng được tính. Bạn có thể đổi để chỉ buổi có check-in hợp lệ mới được trả.

::: steps
1. Vào **Cài đặt**, tab **Cấu hình**, mục **Điểm danh**.
2. Ở thẻ **Check-in trợ giảng**, bật **Yêu cầu check-in mới tính lương ca trợ giảng**.
3. Bấm **Lưu cài đặt trợ giảng**.
:::

Công tắc mặc định tắt, chỉ Quản trị viên bật được. Khi bật, buổi trợ giảng không có check-in hợp lệ (trợ giảng bấm xác thực được, hoặc quản lý xác nhận) sẽ bị loại khỏi lương và cảnh báo khi tính. Giáo viên chính không bị ảnh hưởng, trợ giảng toàn thời gian cũng được miễn.

Nếu trợ giảng quên bấm: vào tab **Check-in trợ giảng** bấm **Xác nhận có mặt**, rồi bấm **Tính lại riêng người này** ở phiếu lương (xem [Quản lý lương](bang-luong.md)).

::: warning Bật công tắc nên báo trước
Trợ giảng bán thời gian sẽ không được trả cho buổi quên bấm. Hãy báo cho trợ giảng trước khi bật, và dặn họ bấm **Có mặt** mỗi buổi.
:::

## Đặt hạn báo có mặt muộn

Vào **Quản lý HR → Cấu hình HR**, tab **Trợ giảng**, thẻ **Báo có mặt muộn**:

- **Hạn báo muộn**: giờ của ngày hôm sau (24 giờ), mặc định 12:00.
- **Số lần tối đa mỗi tháng**: mặc định 5. Nhập 0 để tắt báo muộn.

Bấm **Lưu**. Chỉ Quản trị viên lưu được. Số lần tính theo tháng của buổi, kể cả lần đã bị huỷ, và huỷ không trả lại lượt. Mỗi sáng 8h10 hệ thống nhắc trợ giảng chưa báo có mặt ca hôm qua.

## Câu hỏi thường gặp

::: details Trợ giảng nghỉ không ai thay thì sao?
Nếu công tắc yêu cầu check-in đang bật, buổi đó không có check-in nên không tính lương, không cần làm gì thêm. Có người thay thì làm [Dạy thay](dan-day-thay.md).
:::

::: details Vì sao trợ giảng được tính lương dù không bấm Có mặt?
Công tắc yêu cầu check-in đang tắt (mặc định). Lương tính theo thời gian được giao lớp.
:::
