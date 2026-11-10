---
title: "Phân tích nhân sự (HR AI Insights)"
description: "Máy đọc dữ liệu nhân sự trong khoảng ngày bạn chọn và nêu những điểm đáng chú ý kèm khuyến nghị."
roles: [Quản trị viên, Quản lý chi nhánh]
plugin: "AI — Gợi ý & Trợ lý Vận hành"
order: 160
group: "Hồ sơ & tổ chức"
---

# Phân tích nhân sự (HR AI Insights)

Trang này đọc dữ liệu chấm công, lương, cơ cấu nhân sự và lớp học của một cơ sở trong khoảng ngày bạn chọn, rồi liệt kê những điểm nên chú ý. Bạn dùng khi cần một cái nhìn nhanh mà không phải tự mở từng báo cáo.

Cần gói mở rộng **AI — Gợi ý & Trợ lý Vận hành**. Kết quả do các quy tắc đo ngưỡng tính ra, không phải do nhập câu hỏi.

## Chạy phân tích

::: steps
1. Vào **Quản lý HR → HR AI Insights**. Tiêu đề trang là **Phân tích nhân sự**.
2. Ở khung **Bộ lọc**, chọn **Cơ sở**. Mặc định là cơ sở đầu tiên trong danh sách.
3. Chọn **Từ ngày** và **Đến ngày**. Mặc định là một tháng gần nhất.
4. Bấm **Phân tích**.
5. Đọc danh sách kết quả. Nút này chỉ bấm được khi đã chọn cơ sở.
:::

Dải số liệu đếm **Tổng ghi nhận**, **Nghiêm trọng**, **Cảnh báo** và **Thông tin**. Mỗi ghi nhận có tiêu đề, mô tả, phần **Số liệu** và **Khuyến nghị** (nếu có), kèm nhãn mức độ.

## Các điều trang có thể nêu ra

| Ghi nhận | Khi nào xuất hiện |
|---|---|
| **Tỷ lệ đi muộn cao** | Trên 10% (Nghiêm trọng khi trên 20%) |
| **Tỷ lệ vắng mặt cao** | Trên 5% (Nghiêm trọng khi trên 15%) |
| **Biến động chi phí lương lớn** | Chi phí lương lệch trên 15% so với tháng trước (Nghiêm trọng khi trên 30%) |
| **Tổng quan chi phí lương** | Luôn có, mức Thông tin |
| **Cơ cấu nhân sự** | Luôn có, nêu tỷ lệ toàn thời gian và bán thời gian |
| **Mất cân bằng phòng ban** | Một phòng chiếm trên 50% nhân sự |
| **Tỷ lệ học sinh đi học thấp** | Dưới 85% (Nghiêm trọng khi dưới 70%) |
| **Tỷ lệ hủy buổi học cao** | Trên 10% buổi học bị huỷ |

Ba mức độ hiển thị là **Nghiêm trọng**, **Cảnh báo** và **Thông tin**.

::: tip Mẹo
Muốn so sánh theo mùa, đổi **Từ ngày** và **Đến ngày** thành các tháng khác rồi bấm **Phân tích** lại. Trang không lưu lại các lần chạy cũ.
:::

::: warning Lưu ý
Các con số này đo từ dữ liệu đã nhập. Chấm công hoặc điểm danh nhập thiếu sẽ làm tỷ lệ lệch. Hãy dùng như gợi ý để đào sâu, rồi đối chiếu ở [Báo cáo HR](bao-cao-hr.md).
:::

## Câu hỏi thường gặp

::: details Khác gì với Phân tích rủi ro nghỉ việc?
Trang này nhìn toàn cơ sở. [Phân tích rủi ro nghỉ việc](canh-bao-nghi-viec.md) chấm điểm từng nhân viên.
:::

::: details Có hỏi đáp tự do với AI được không?
Không ở trang này. Để hỏi bằng câu chữ, dùng [HR AI Assistant](tro-ly-hr.md).
:::
