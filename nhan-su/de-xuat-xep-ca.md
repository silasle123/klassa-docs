# Đề xuất xếp ca thông minh

## Khái niệm

KLASSA dùng **AI** để gợi ý xếp ca dạy + ca trực sao cho:

- Phù hợp giờ rảnh / năng lực giáo viên
- Phân phối đều lương giữa các giáo viên (tránh lệch)
- Đảm bảo có người trực vào giờ cao điểm
- Tránh giáo viên dạy quá tải (>40 giờ/tuần)

## Truy cập

Menu trái → **Nhân sự → Đề xuất xếp ca** (hoặc **/hr/roster-suggest**).

## Khi nào dùng

- Đầu khoá mới — xếp ca chính
- Sau khi mở lớp mới — cần thêm GV
- Sau khi có GV nghỉ việc — cần phân lại

## Cách dùng

### Bước 1 — Khai báo ràng buộc

- **Tổng số ca cần xếp** trong tuần
- **Giờ rảnh của từng giáo viên** (giáo viên tự nhập trong Cổng Nhân viên hoặc HR nhập)
- **Năng lực** — môn nào dạy được, trình độ
- **Lương mục tiêu** mỗi giáo viên / tháng

### Bước 2 — Bấm "Sinh đề xuất"

AI tính trong vài giây → trả về 3-5 phương án xếp ca khả thi.

### Bước 3 — Xem + chọn

Mỗi phương án có:

- Tổng buổi mỗi GV
- Lương dự kiến
- Điểm chất lượng (do AI chấm)
- Cảnh báo nếu có ràng buộc bị vi phạm

### Bước 4 — Áp dụng

Bấm "Áp dụng phương án X" → phần mềm tự cập nhật lịch dạy cho các lớp tương ứng.

## Lưu ý

- **AI chỉ gợi ý**, người vẫn quyết định cuối — có thể tinh chỉnh thủ công sau khi áp dụng.
- **Cần dữ liệu đủ** (giờ rảnh, năng lực) — nếu trống thì AI khó gợi ý chính xác.

## Câu hỏi thường gặp

**Tôi không tin AI, có thể xếp ca thủ công không?**
Hoàn toàn được. Bỏ qua tính năng này, xếp ca thủ công trong [chi tiết lớp](../lop-hoc/chi-tiet.md).

**Tính năng này dùng AI gì?**
Sử dụng nhà cung cấp AI đã cấu hình (xem [Tích hợp nhà cung cấp AI](../tich-hop/ai-providers.md)). Nếu chưa cấu hình → dùng thuật toán dò tìm cục bộ, kém thông minh hơn.
