# Phát hiện bất thường chấm công

## Khái niệm

KLASSA phát hiện tự động các pattern bất thường trong chấm công — giúp HR và Quản lý nắm tình hình + xử lý sớm.

## Truy cập

Menu trái → **Nhân sự → Bất thường chấm công** (hoặc **/hr/timesheet-anomaly**).

## Các pattern phát hiện

| Pattern | Ý nghĩa |
|---------|---------|
| **Đi muộn liên tục** | >3 lần / tuần |
| **Về sớm liên tục** | >3 lần / tuần |
| **Quên check-out** | Cả ngày không check-out |
| **Check-in sai vị trí** | GPS không trùng văn phòng |
| **Check-in giờ lạ** | Trước giờ làm 2 tiếng / sau 22h |
| **Chấm công hộ** | Cùng 1 IP / thiết bị nhiều nhân viên |
| **Pattern lạ** | AI phát hiện thay đổi đột biến |

## Cách xử lý

Mỗi cảnh báo có:

- Nhân viên bị nghi vấn
- Loại bất thường + tần suất
- Đề xuất hành động:
  - Gặp đối thoại
  - Yêu cầu giải trình
  - Cảnh cáo / nhắc nhở
  - Bỏ qua nếu có lý do chính đáng

## Báo cáo định kỳ

Tự gửi email Tóm tắt cho Quản lý:

- Hàng tuần: nhân viên có bất thường trong tuần
- Hàng tháng: tổng hợp tháng + pattern

## Lưu ý

- **Không trừng phạt theo dữ liệu mù** — luôn hỏi nhân viên trước để có context (có thể nhân viên có lý do chính đáng).
- **Cảnh báo lặp** = vấn đề thật. Cảnh báo 1 lần có thể là sự cố ngẫu nhiên.

## Câu hỏi thường gặp

**Nhân viên đi công tác, check-in xa văn phòng có bị báo sai vị trí không?**
Có. Khi đi công tác, vào Cổng Nhân viên đánh dấu "Đi công tác từ X đến Y" trước → hệ thống không cảnh báo.
