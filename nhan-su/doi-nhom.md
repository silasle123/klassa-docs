---
title: "Đội của tôi"
description: "Trưởng phòng xem thành viên phòng mình, tình hình đi làm hôm nay và duyệt đơn phép, tăng ca."
roles: [Quản trị viên, Quản lý chi nhánh, Quản lý, Giáo viên, Trợ giảng, Lễ tân, Kế toán, Nhân sự]
plugin: "Nhân sự (HRIS)"
order: 50
group: "Hồ sơ & tổ chức"
---

# Đội của tôi

Trang này dành cho người được giao làm trưởng phòng. Bạn thấy ngay các thành viên trong phòng, ai đã đi làm hôm nay và những đơn nghỉ phép, tăng ca đang chờ bạn duyệt, mà không cần vào khu Quản lý HR.

Mục **Đội của tôi** hiện trong menu với nhiều vai, nhưng nội dung chỉ có khi tài khoản của bạn đã được chọn làm trưởng phòng.

## Điều kiện để dùng

Người dùng khu Quản lý HR vào [Cấu hình nhân sự](cau-hinh-hr.md), mở thẻ **Phòng ban**, chọn bạn ở ô **Trưởng phòng**. Nếu chưa được gán, trang chỉ báo "Bạn chưa được gán làm trưởng phòng của phòng ban nào".

## Duyệt đơn của phòng

::: steps
1. Vào **Quản lý HR → Đội của tôi** (hoặc mục **Đội của tôi** trong menu của bạn).
2. Nếu có đơn chờ, hai khung hiện ra: **Đơn nghỉ phép chờ duyệt** và **Đơn tăng ca chờ duyệt**, kèm số đơn.
3. Đọc dòng đơn: tên nhân viên, loại phép và số ngày, khoảng ngày nghỉ, lý do. Đơn tăng ca có ngày, giờ bắt đầu và kết thúc, số giờ.
4. Bấm dấu tick xanh để duyệt, hoặc dấu X đỏ để từ chối. Khi từ chối, hệ thống hỏi **Lý do từ chối**; bấm huỷ hộp này thì đơn không bị từ chối.
:::

Loại phép hiển thị là Phép năm, Ốm đau, Không lương, Thai sản và Công tác. Nếu không có đơn nào chờ, hai khung này không hiện.

## Xem thành viên

Khung **Thành viên** liệt kê nhân viên đang làm việc của phòng bạn quản lý, theo thứ tự tên. Mỗi dòng có mã, số điện thoại, chức vụ, phòng ban và cột **Hôm nay**:

| Nhãn | Ý nghĩa |
|---|---|
| **Đi làm** | Đã chấm công đúng giờ |
| **Đi trễ** | Đã chấm công nhưng trễ |
| **Vắng** | Bị ghi vắng |
| **Nghỉ phép** | Có phép được duyệt |
| **Công tác** | Đang đi công tác |
| **Đã xếp ca** | Có ca nhưng chưa tới giờ chấm |
| **Chưa chấm** | Chưa chấm công |

Giờ chấm công hiện trong ngoặc sau nhãn. Người còn thử việc có thêm nhãn **Thử việc**.

::: tip Mẹo
Một người có thể làm trưởng phòng của nhiều phòng. Khi đó bạn thấy thành viên và đơn của tất cả các phòng đó trong cùng một trang.
:::

## Câu hỏi thường gặp

::: details Đơn đã duyệt ở đây có giống duyệt ở trang Nghỉ phép không?
Có. Cả hai nơi đều xử lý cùng một đơn. Cách đơn được tạo và số dư phép xem ở [Nghỉ phép](ngay-phep.md).
:::

::: details Người cũ nghỉ việc còn hiện trong đội không?
Không. Chỉ nhân viên đang làm việc mới hiện.
:::
