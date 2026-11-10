---
title: "Cấu hình Hệ thống (nâng cao)"
description: "Trang bảng thông số kỹ thuật dành cho Quản trị viên, cách xem, sửa và khôi phục lại giá trị cũ."
roles: [Quản trị viên]
order: 90
---

# Cấu hình Hệ thống (nâng cao)

Trang này là bảng các thông số hệ thống dạng "tên và giá trị". Giao diện trang bằng tiếng Anh và dành cho người rành kỹ thuật. Bạn không cần vào đây để dùng phần mềm hằng ngày. Hầu hết thiết lập của trung tâm nằm ở [Cài đặt](cau-hinh-chung.md), [Thương hiệu](thuong-hieu.md) và các trang riêng.

::: danger Dùng cẩn thận
Sửa hoặc xoá nhầm một thông số có thể làm một chức năng chạy sai. Chỉ đổi khi KLASSA hướng dẫn, và ghi lại giá trị cũ trước khi đổi.
:::

## Xem các thông số

Vào **Quản trị hệ thống → Cấu hình Hệ thống**. Trang có tiêu đề **System Configuration**. Các thông số xếp theo nhóm (thẻ), mỗi thẻ có số lượng. Mỗi dòng hiện tên thông số, kiểu dữ liệu, giá trị hiện tại, mô tả, và các nhãn **Public** hoặc **Encrypted** nếu có.

## Thêm hoặc sửa một thông số

::: steps
1. Bấm **Add Configuration** để thêm mới, hoặc bấm biểu tượng bút ở dòng cần sửa.
2. Điền **Key** (tên thông số), chọn **Data Type**, chọn **Category**, nhập **Value** và **Description**.
3. Bật **Public** nếu thông số được phép hiển thị công khai, bật **Encrypted** nếu cần mã hoá giá trị.
4. Bấm **Save**.
:::

## Xem lịch sử và khôi phục

Bấm biểu tượng đồng hồ ở dòng thông số để mở hộp **Configuration History**. Mỗi lần đổi hiện người đổi, thời gian, **Old Value** và **New Value**. Bấm **Rollback** ở một lần đổi để đưa thông số về giá trị cũ.

## Xoá một thông số

Bấm biểu tượng thùng rác ở dòng thông số.

## Câu hỏi thường gặp

::: details Tôi muốn đổi tên trung tâm hay múi giờ thì vào đây?
Không. Vào [Thương hiệu](thuong-hieu.md) để đổi tên hiển thị, hoặc [Cài đặt chung](cau-hinh-chung.md) để đổi múi giờ.
:::

::: details Lỡ sửa nhầm thì làm sao?
Mở **Configuration History** của thông số đó và bấm **Rollback** ở giá trị trước.
:::
