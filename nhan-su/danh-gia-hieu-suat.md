---
title: "Đánh giá hiệu suất"
description: "Tạo đợt đánh giá nhân viên, chấm điểm theo thang 1-5 và xem số liệu dạy học làm căn cứ cho giáo viên."
roles: [Quản trị viên, Quản lý chi nhánh]
plugin: "Nhân sự (HRIS)"
order: 100
group: "Hồ sơ & tổ chức"
---

# Đánh giá hiệu suất

Trang này giúp bạn ghi lại kết quả làm việc của từng nhân viên theo từng kỳ: nhân viên tự đánh giá, quản lý chấm điểm, rồi chốt điểm cuối. Với giáo viên, khi chấm bạn xem được số liệu dạy học 3 tháng gần nhất để làm căn cứ.

## Tạo một phiếu đánh giá

::: steps
1. Vào **Quản lý HR → Đánh giá hiệu suất**, bấm **Tạo đánh giá**. Hộp **Tạo đánh giá hiệu suất** hiện ra.
2. Chọn **Nhân viên** (chỉ nhân viên đang làm việc).
3. Chọn **Loại đánh giá**: **Thử việc**, **Quý**, **Năm** hoặc **Đột xuất**.
4. Gõ **Kỳ đánh giá**, ví dụ `2026-Q1`, `2026-04` hoặc `Annual-2026`.
5. Nếu có, nhập **Điểm tự đánh giá (1-5)**. Ô này tuỳ chọn.
6. Điền các ô mô tả: **Mục tiêu kỳ này**, **Thành tựu nổi bật**, **Điểm mạnh**, **Cần cải thiện**, **Nhận xét chung**.
7. Bấm nút lưu ở cuối hộp.
:::

Ba ô bắt buộc: **Nhân viên**, **Loại đánh giá**, **Kỳ đánh giá**. Điểm tự đánh giá nếu nhập phải từ 1 đến 5.

## Chấm điểm của quản lý

::: steps
1. Ở dòng phiếu, bấm biểu tượng ngôi sao (gợi ý hiện **Chấm điểm (quản lý)**). Hộp **Chấm điểm** hiện tên nhân viên và kỳ.
2. Xem dòng **Điểm tự đánh giá của NV** và, với giáo viên, khung **Dữ liệu dạy học 3 tháng gần nhất** (xem bên dưới).
3. Nhập **Điểm quản lý chấm (1-5)** và **Điểm chốt (1-5)**. Bước nhảy 0,5.
4. Chọn **Trạng thái**: **Đã chấm (chờ chốt)** hoặc **Hoàn tất kỳ đánh giá**.
5. Viết **Nhận xét của quản lý**, bấm **Lưu điểm**.
:::

Điểm ngoài khoảng 1-5 bị từ chối với thông báo "Điểm phải từ 1 đến 5".

### Số liệu dạy học tham khảo

Khung này chỉ hiện khi người được chấm có buổi dạy trong 3 tháng gần nhất. Nếu không, hộp chỉ báo chưa có dữ liệu dạy học. Khung gồm:

- Số buổi dạy và tổng số giờ.
- Số buổi làm giáo viên chính.
- Tỷ lệ chuyên cần của học sinh các lớp người này dạy.
- Số lượt nhận xét buổi học, kèm điểm trung bình về mức hăng hái và mức hiểu bài nếu có.

Số liệu chỉ để tham khảo, hệ thống không tự chấm điểm thay bạn.

## Theo dõi các phiếu

- Gõ vào ô **Tìm nhân viên, mã NV, kỳ...** hoặc lọc theo trạng thái và loại đánh giá.
- Bảng có các cột **Mã NV**, **Nhân viên**, **Chức vụ**, **Kỳ đánh giá**, **Loại**, **Self** (điểm tự chấm), **Manager** (điểm quản lý), **Final** (điểm chốt), **Trạng thái**.
- Cột trạng thái hiện chữ tiếng Anh: DRAFT (nháp), SUBMITTED (đã chấm, chờ chốt), REVIEWED, COMPLETED (hoàn tất).
- Nút ở cuối dòng: **Xem hồ sơ nhân viên**, **Sửa đánh giá**, **Chấm điểm (quản lý)**, **Xoá đánh giá**.
- **Xuất CSV** tải danh sách ra file. **Làm mới** tải lại dữ liệu.

Thẻ **Đánh giá** trong [hồ sơ nhân viên](danh-sach-nhan-vien.md) cũng liệt kê các phiếu của riêng người đó.

::: tip Mẹo
Hệ thống có nhắc việc theo chu kỳ đánh giá. Cách bật tắt và chọn người nhận nhắc nằm ở [Cấu hình nhân sự](cau-hinh-hr.md).
:::

::: danger Không thể hoàn tác
Xoá một phiếu đánh giá là xoá luôn điểm và nhận xét của phiếu đó.
:::

## Câu hỏi thường gặp

::: details Nhân viên có tự điền phiếu của mình được không?
Trang này dành cho người quản lý nhân sự, họ nhập giúp điểm tự đánh giá. Không có màn riêng cho nhân viên tự điền trên trang này.
:::

::: details Điểm chốt có ảnh hưởng đến lương không?
Không. Đánh giá hiệu suất là hồ sơ theo dõi riêng, không nối vào bảng lương.
:::
