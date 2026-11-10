---
title: "Mẫu quy trình có sẵn"
description: "Danh sách 12 mẫu quy trình tự động của KLASSA: khi nào chạy, gồm những bước nào, gửi cho ai."
roles: [Quản trị viên, Quản lý chi nhánh]
plugin: "Tự động hoá"
order: 70
---

# Mẫu quy trình có sẵn

KLASSA có sẵn 12 mẫu quy trình. Bạn xem chúng ở **AI Hub → Tự động hóa → Quy Trình → Templates** và bật bằng nút **Kích Hoạt**. Cách bật và quản lý xem [Quy trình tự động](quy-trinh.md).

Thời gian ghi trong bảng là thời gian chờ kể từ khi sự kiện xảy ra. Ví dụ "SMS sau 30 phút" nghĩa là tin SMS đi sau sự kiện 30 phút.

## Nhóm tuyển sinh

| Mẫu | Chạy khi | Các bước |
| --- | --- | --- |
| **Quy trình chăm sóc Lead** | Có lead mới | Email ngay, SMS sau 30 phút, giao việc sau 1 giờ, email sau 1 ngày, giao việc sau 3 ngày |
| **Follow-up leads sau 24h không phản hồi** | Lead im lặng 24 giờ | Email ngay cho lead, SMS sau 1 giờ, Zalo sau 2 giờ, giao việc sau 3 giờ |
| **Chuyển đổi học thử sang ghi danh** | Hoàn thành buổi học thử | SMS cho phụ huynh sau 30 phút, giao việc sau 2 giờ, email sau 1 ngày, email sau 3 ngày, giao việc sau 7 ngày |

## Nhóm ghi danh và học sinh

| Mẫu | Chạy khi | Các bước |
| --- | --- | --- |
| **Quy trình onboard học sinh mới** | Học sinh ghi danh mới | Email cho phụ huynh ngay, tạo hoá đơn, email nhắc, SMS sau 1 ngày, giao việc sau 7 ngày |
| **Chào mừng học sinh mới** | Học sinh mới được tạo trong hệ thống | Zalo cho phụ huynh ngay, email sau 30 phút, giao việc sau 1 ngày |
| **Phê duyệt đăng ký lớp** | Một đăng ký lớp được duyệt | Zalo xác nhận cho phụ huynh ngay, email sau 10 phút, giao việc theo dõi sau 1 giờ |
| **Từ chối đăng ký lớp** | Một đăng ký lớp bị từ chối | Email báo lý do cho phụ huynh ngay, giao việc sau 30 phút, Zalo sau 4 giờ |
| **Chúc mừng sinh nhật học sinh** | Sinh nhật học sinh | Email và SMS cho học sinh, Zalo cho phụ huynh, giao việc |

## Nhóm học phí và điểm danh

| Mẫu | Chạy khi | Các bước |
| --- | --- | --- |
| **Quy trình thu học phí** | Có hoá đơn mới | Email cho phụ huynh ngay, rồi các lần nhắc bằng SMS, email, email và SMS cùng lúc, cuối cùng là giao việc cho nhân viên khi quá hạn |
| **Cảnh báo điểm danh thấp** | Học sinh vắng học | Email cho phụ huynh ngay, giao việc sau 1 giờ, email sau 1 ngày, giao việc sau 3 ngày |

## Nhóm vận hành

| Mẫu | Chạy khi | Các bước |
| --- | --- | --- |
| **Nhắc admin tổng hợp báo cáo tháng** | Đầu tháng | Giao việc ngay cho quản trị để tổng hợp và duyệt báo cáo trước khi gửi phụ huynh |
| **Cảnh báo xung đột lịch học** | Hệ thống phát hiện xung đột lịch | Giao việc ngay, email cho giáo viên liên quan sau 5 phút, Zalo cho Quản lý chi nhánh sau 10 phút |

::: tip Mẹo
Mẫu có bước Zalo chỉ gửi được khi trung tâm đã kết nối Zalo. Chưa kết nối thì bước đó thất bại, trừ khi bạn đã chọn bỏ qua bước thiếu thông tin ở hộp **Cài Đặt Workflow**.
:::

::: warning Lưu ý
Mẫu **Quy trình onboard học sinh mới** có bước tạo hoá đơn. Hãy đối chiếu với cách tính học phí của trung tâm trước khi bật, để tránh phát sinh phiếu không mong muốn.
:::

## Câu hỏi thường gặp

::: details Mẫu có đúng 8 cái như tài liệu cũ không?
Không. Hiện có 12 mẫu, như bảng trên.
:::

::: details Một số mẫu hiện ở dòng Kích hoạt khi bằng chữ tiếng Anh, có sao không?
Bốn mẫu (Chào mừng học sinh mới, Phê duyệt đăng ký lớp, Từ chối đăng ký lớp, Cảnh báo xung đột lịch học) hiện tên sự kiện gốc thay vì câu tiếng Việt. Chúng vẫn chạy bình thường theo mô tả trong bảng.
:::

::: details Tôi muốn thêm mẫu riêng được không?
Hiện chưa có công cụ tự tạo mẫu trên giao diện. Bạn chỉ dùng được các mẫu có sẵn.
:::
