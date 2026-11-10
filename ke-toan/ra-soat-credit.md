---
title: "Rà soát và đồng bộ credit"
description: "Quét chỗ sổ credit lệch với hoá đơn, xem từng ca và đồng bộ lại sau khi bạn duyệt."
roles: [Quản trị viên, Quản lý chi nhánh, Kế toán]
order: 100
---

# Rà soát và đồng bộ credit

Sổ credit và hoá đơn cùng ghi lại việc trừ tiền thừa. Nếu có người xoá rồi tạo lại phiếu, hoặc sửa tay ngoài luồng, hai nơi này có thể lệch nhau. Trang này quét ra những chỗ lệch, mô tả bằng lời dễ hiểu và cho bạn đồng bộ lại từng ca. Hệ thống không tự sửa ngầm.

Credit là gì: xem [Sổ credit](so-cai-credit.md).

## Quét tìm chỗ lệch

::: steps
1. Vào **Tài chính → Kế toán → Rà soát & đồng bộ credit**.
2. Chọn **Khối** (mặc định **Tất cả khối**) và **Kỳ** (8 tháng gần nhất, hoặc **Tất cả kỳ** để quét sâu hơn).
3. Bấm **Quét**.
:::

Quét chỉ đọc dữ liệu, không thay đổi gì cho tới khi bạn bấm **Đồng bộ**.

Kết quả có bốn ô: **Tổng phát hiện**, **Sửa được (duyệt từng ca)**, **Cần xem tay**, **Học sinh ảnh hưởng**. Nếu không có ca nào, trang báo "Không phát hiện lệch credit nào".

## Các loại lệch

| Loại | Nghĩa |
|---|---|
| **Credit trỏ tới hoá đơn đã xoá** | Sổ ghi đã trừ vào một phiếu nhưng phiếu đó không còn |
| **Dùng vượt số cấp (sửa tay)** | Số đã dùng lớn hơn số được cấp, thường do sửa tay |
| **Lệch hoá đơn ↔ sổ cái** | Số khấu trừ trên phiếu khác với số sổ ghi |
| **Còn dư nhưng kẹt "Đã áp dụng"** | Credit còn tiền nhưng trạng thái đã ghi là dùng xong |
| **Dòng chờ áp dụng bất thường** | Dòng đang chờ nhưng lại gắn với phiếu |
| **Credit vắng thiếu ưu đãi (giá gốc)** | Credit tính theo giá gốc mà chưa trừ ưu đãi của học sinh |

## Xem một ca

Bấm biểu tượng con mắt ở dòng. Hộp chi tiết hiện mô tả, các con số liên quan (số cấp, đã dùng, còn lại, khấu trừ trên phiếu, chênh lệch...) và dòng **Đề xuất** cách sửa.

## Đồng bộ

::: steps
1. Với ca có nút **Đồng bộ** bấm được, xem lại đề xuất ở hộp chi tiết.
2. Bấm **Đồng bộ** ở dòng đó. Ca xong hiện nhãn **Đã đồng bộ**.
3. Muốn xử lý hàng loạt, bấm **Đồng bộ tất cả (n)** ở đầu trang rồi xác nhận.
:::

Ca nào cần kế toán sửa tay thì nút **Đồng bộ** bị mờ, bạn chỉ xem được. Khi đồng bộ hàng loạt, hệ thống chỉ sửa các ca "sửa được" và bỏ qua ca cần xem tay. Mỗi ca được kiểm tra lại ngay trước khi ghi, nếu dữ liệu đã đổi từ lúc quét thì ca đó bị bỏ qua và báo lại. Mọi thay đổi đều có nhật ký.

::: tip Mẹo
Nên quét theo từng khối và từng kỳ sau mỗi đợt xuất phiếu hoặc sau khi sửa phiếu hàng loạt, để lệch được phát hiện sớm.
:::

## Câu hỏi thường gặp

::: details Quét có làm thay đổi số liệu không?
Không. Chỉ khi bạn bấm **Đồng bộ** thì số liệu mới đổi.
:::

::: details Ai bấm Đồng bộ được?
Vai được sửa số liệu tài chính: Quản trị viên, Quản lý chi nhánh và Kế toán.
:::
