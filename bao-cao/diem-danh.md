---
title: "Báo cáo điểm danh"
description: "Tỷ lệ điểm danh theo lớp, giáo viên, môn học hoặc cơ sở trong một khoảng ngày, có biểu đồ và xuất Excel."
roles: [Quản trị viên, Quản lý chi nhánh, Quản lý, Kế toán, Giáo viên, Trợ giảng]
order: 30
---

# Báo cáo điểm danh

Báo cáo cho biết học sinh đi học đều đến đâu trong một khoảng thời gian, và nhóm nào đang thấp. Giáo viên và trợ giảng dùng để xem lớp mình phụ trách, quản lý dùng để so sánh các lớp, giáo viên, môn hoặc cơ sở.

## Xem báo cáo

::: steps
1. Giáo viên và trợ giảng vào menu **Báo cáo điểm danh**. Quản trị viên và Quản lý chi nhánh bấm thẻ **Điểm danh** ở [Tổng quan](tong-quan.md).
2. Chọn **Từ ngày** và **Đến ngày**. Mặc định là từ ngày 01 của tháng này đến hôm nay.
3. Chọn **Nhóm theo**: **Lớp**, **Giáo viên**, **Môn học** hoặc **Cơ sở**.
4. Bấm **Tạo báo cáo**.
:::

Báo cáo chỉ hiện số liệu sau khi bạn bấm **Tạo báo cáo**. Nút có biểu tượng tải xuống bên cạnh dùng để xuất Excel, cùng bộ lọc.

::: tip Giáo viên và trợ giảng
Bạn chỉ thấy các lớp mình đang được phân công, và luôn nhóm theo lớp. Ô **Nhóm theo** không hiện với bạn.
:::

## Đọc kết quả

Ba thẻ ở đầu:

| Thẻ | Ý nghĩa |
| --- | --- |
| **Tỷ lệ điểm danh TB** | Trung bình tỷ lệ của các nhóm trong bảng (mỗi nhóm một phần như nhau, không tính theo số buổi). |
| **Số phiên học** | Tổng số buổi học có điểm danh trong khoảng ngày. |
| **Số bản ghi điểm danh** | Tổng số dòng điểm danh (một học sinh một buổi là một dòng). |

Dưới đó là biểu đồ cột **Biểu đồ tỷ lệ điểm danh theo nhóm** và bảng **Chi tiết** với các cột **Tên nhóm**, **Tỷ lệ (%)**, **Có mặt**, **Tổng**, **Phiên**, **Học sinh**. Bảng xếp nhóm có tỷ lệ cao nhất lên trên.

### Cách tính tỷ lệ

- Tính là đi học: có mặt, đi trễ, học bù.
- Nghỉ có phép vẫn tính là vắng.
- Buổi trung tâm huỷ được bỏ ra khỏi phép tính, không làm giảm tỷ lệ.

Tỷ lệ bằng số lượt đi học chia cho tổng số lượt điểm danh (đã bỏ buổi huỷ).

## Phân tích AI

Bấm **Phân tích AI** để AI viết nhận định cho khoảng ngày đang chọn. Giáo viên và trợ giảng được dùng cho phạm vi lớp mình. Xem [Báo cáo do AI tổng hợp](ai.md).

## Câu hỏi thường gặp

::: details Vì sao trung bình ở thẻ đầu khác với tỷ lệ tôi tự cộng?
Thẻ lấy trung bình của các nhóm, mỗi nhóm một phần như nhau. Một lớp nhỏ có tỷ lệ thấp kéo trung bình xuống nhiều như một lớp đông.
:::

::: details Điểm danh của một buổi chưa có trong báo cáo?
Báo cáo chỉ tính các buổi đã có dữ liệu điểm danh trong khoảng ngày bạn chọn. Kiểm tra lại khoảng ngày và xem [Điểm danh hằng ngày](../diem-danh/cham-hang-ngay.md).
:::
