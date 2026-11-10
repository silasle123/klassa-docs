---
title: "Giờ dạy"
description: "Xem các buổi dạy của giáo viên theo khoảng ngày, tiền dạy ước tính, thêm buổi còn thiếu và xác nhận buổi dạy."
roles: [Quản trị viên, Quản lý chi nhánh]
plugin: "Nhân sự (HRIS)"
order: 100
group: "Lương, chấm công & ca"
---

# Giờ dạy

Trang này giúp bạn xem giáo viên đã dạy những buổi nào trong một khoảng ngày, tổng giờ và tiền dạy dự kiến, để đối chiếu trước khi tính lương. Số chốt vẫn nằm ở [Quản lý lương](bang-luong.md).

Vào **Quản lý HR → Giờ dạy**. Trang có hai tab: **Buổi dạy** và **Check-in trợ giảng**. Tab thứ hai nói ở [Ca trợ giảng](ca-tro-giang.md).

## Xem các buổi dạy

::: steps
1. Chọn **Từ ngày** và **Đến ngày**, hoặc bấm nhanh **Hôm nay**, **Tuần này**, **Tháng này**.
2. Lọc theo **Giáo viên** và **Lớp học** nếu cần.
3. Mở tab **Buổi dạy**. Chọn xem **Gộp theo giáo viên** hoặc **Chi tiết từng buổi**.
:::

Bốn ô số ở đầu trang cho biết **Tổng số buổi dạy**, **Tổng giờ dạy**, **Tiền dạy (ước tính)** và **Check-in TG cần xử lý**.

- **Gộp theo giáo viên**: mỗi giáo viên một dòng với **Số buổi**, **Số giờ**, **Tiền dạy (ước tính)**. Bấm mũi tên đầu dòng để mở danh sách buổi của người đó.
- **Chi tiết từng buổi**: bảng **Ngày**, **Giáo viên**, **Lớp học**, **Giờ dạy**, **Sĩ số**, **Số giờ**, **Đơn giá (ước tính)**, **Tạm tính**, **Trạng thái**, **Thao tác**.

Cột tiền là ước tính theo cách tính lương của từng giáo viên (theo sĩ số học sinh, hoặc cố định mỗi buổi hoặc mỗi giờ). Trang này không tự trừ buổi dạy thay hay tính các khoản khác, nên số ở đây có thể khác phiếu lương cuối cùng.

::: warning Buổi dạy thay hiển thị theo lớp
Trang vẫn gán buổi cho giáo viên được giao lớp, kể cả khi buổi đó đã có đơn dạy thay. Phiếu lương thì tính đúng người dạy thay. Khi đối chiếu, hãy xem cả [Dạy thay](dan-day-thay.md).
:::

## Trạng thái buổi dạy

| Nhãn | Ý nghĩa |
|------|---------|
| **Chờ duyệt** | Buổi mới tạo hoặc chưa xác nhận. |
| **Đã duyệt** | Buổi đã hoàn thành, được tính khi tính lương. |
| **Đã hủy** | Buổi bị huỷ. |

Với buổi **Chờ duyệt**, bấm biểu tượng dấu tích (**Xác nhận buổi dạy**) để chuyển sang **Đã duyệt**.

## Thêm buổi dạy còn thiếu

Dùng khi một buổi dạy thật không có trong hệ thống, ví dụ dạy bù ngoài lịch.

::: steps
1. Bấm **Thêm buổi dạy** ở góc trên. Hộp **Thêm buổi dạy mới** hiện ra.
2. Chọn **Giáo viên** và **Lớp học** (bắt buộc). Lớp phải thuộc cơ sở của bạn.
3. Chọn **Ngày dạy**, **Giờ bắt đầu** và **Giờ kết thúc** (bắt buộc).
4. Điền **Đơn giá/giờ (VNĐ)** (ô có dấu sao, nên nhập). Đơn giá nhập tay ghi đè giá tự tính trong cột ước tính của trang này.
5. Ghi **Ghi chú** nếu cần, rồi bấm **Thêm buổi dạy**.
:::

Buổi mới vào trạng thái **Chờ duyệt**. Bạn cần bấm **Xác nhận buổi dạy** để buổi được tính lương. Dùng biểu tượng bút để **Sửa** (hộp **Cập nhật buổi dạy**) và biểu tượng thùng rác để **Xoá**.

## Câu hỏi thường gặp

::: details Vì sao buổi học đã diễn ra mà không thấy ở đây?
Buổi học chỉ xuất hiện khi giáo viên điểm danh. Lớp chưa điểm danh thì chưa có buổi. Hãy nhắc giáo viên điểm danh, hoặc dùng **Thêm buổi dạy** nếu thật sự cần bổ sung.
:::

::: details Đơn giá ở đây có quyết định lương không?
Không. Lương lấy theo cách tính trong [Cấu hình lương](cau-hinh-luong.md). Cột này chỉ giúp bạn ước lượng.
:::
