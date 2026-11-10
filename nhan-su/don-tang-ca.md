---
title: "Duyệt tăng ca"
description: "Duyệt hoặc từ chối đơn đăng ký làm thêm giờ của nhân viên, và hiểu giờ tăng ca được tính vào công ra sao."
roles: [Quản trị viên, Quản lý chi nhánh]
plugin: "Nhân sự (HRIS)"
order: 140
group: "Lương, chấm công & ca"
---

# Duyệt tăng ca

Nhân viên muốn làm thêm giờ cần đăng ký trước khung giờ tăng ca. Bạn xem và duyệt các đơn đó ở trang này. Đơn được duyệt đảm bảo giờ làm thêm được ghi nhận vào bảng công của ngày đó.

Vào **Quản lý HR → Duyệt tăng ca**. Nhân viên đăng ký ở Cổng nhân viên, mục **Chấm công của tôi**, thẻ **Đăng ký tăng ca**. Trưởng phòng cũng duyệt được đơn của nhân viên trong phòng mình ở trang **Đội của tôi**.

## Duyệt hoặc từ chối đơn

Trang có ba tab: **Chờ duyệt**, **Đã duyệt**, **Từ chối**. Bảng hiện **Nhân viên** (kèm mã và chức vụ), **Ngày**, **Khung giờ**, **Số giờ** và **Lý do**.

::: steps
1. Vào **Quản lý HR → Duyệt tăng ca**, tab **Chờ duyệt**.
2. Đọc ngày, khung giờ, số giờ và lý do ở từng dòng.
3. Bấm dấu tích xanh để duyệt, hoặc dấu X đỏ để từ chối.
4. Nếu từ chối, hộp hỏi **Lý do từ chối (gửi cho nhân viên)** hiện ra. Nhập lý do rồi xác nhận. Nhân viên đọc được lý do này.
:::

Ở hai tab còn lại, cột **Ghi chú** cho biết ghi chú hoặc lý do từ chối đã nhập.

::: warning Giới hạn khi duyệt
Bạn không duyệt được đơn của chính mình, trừ Quản trị viên. Đơn thuộc cơ sở khác do quản lý cơ sở đó duyệt.
:::

## Giờ tăng ca được tính thế nào

Đơn tăng ca chỉ là đăng ký trước, không phải số giờ được trả chắc chắn. Khi nhân viên chấm công, hệ thống tự tính giờ tăng ca từ số giờ làm vượt 8 giờ trong ngày. Nếu có đơn đã duyệt, giờ tăng ca của ngày đó lấy số lớn hơn giữa hai số: giờ tự tính theo chấm công và giờ đã duyệt. Nhờ vậy chấm ra muộn không bị đơn nhỏ hơn ghi đè, và đơn đã duyệt không bị mất.

Hệ số nhân tiền tăng ca (ngày thường, cuối tuần, ngày lễ) khai ở tab **Pháp luật VN** của **Cấu hình HR**, xem [Cấu hình lương](cau-hinh-luong.md).

::: tip Mẹo
Nhắc nhân viên đăng ký tăng ca trước khi làm. Mỗi ngày nhân viên đăng ký tối đa 4 giờ tăng ca theo Luật Lao động, và khung giờ kết thúc phải sau giờ bắt đầu.
:::

## Câu hỏi thường gặp

::: details Nhân viên làm thêm nhưng quên đăng ký thì sao?
Giờ làm vượt 8 giờ trong ngày vẫn được hệ thống tính từ dữ liệu chấm công. Đơn đăng ký giúp quản lý biết trước và duyệt có kiểm soát.
:::

::: details Đơn đã duyệt có đổi lại được không?
Trang này chỉ có thao tác duyệt hoặc từ chối cho đơn **Chờ duyệt**. Đơn đã xử lý không đổi lại được ở đây.
:::
