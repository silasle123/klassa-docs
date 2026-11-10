---
title: "Nhập kho, xuất kho và báo cáo"
description: "Ghi lại mỗi lần nhập hàng, xuất hàng cho vật phẩm trong kho và tải báo cáo tồn kho dạng CSV."
roles: [Quản trị viên, Quản lý chi nhánh, Quản lý]
order: 20
---

# Nhập kho, xuất kho và báo cáo

Mỗi khi nhận hàng mới hoặc đưa vật phẩm cho lớp, bạn ghi lại để số tồn luôn đúng và có lịch sử đối chiếu. Cách thêm vật phẩm nằm ở bài [Quản lý kho](quan-ly-kho.md).

## Nhập kho

::: steps
1. Vào **Cấu hình hệ thống → Quản lý Kho**, mở tab **Quản lý kho**.
2. Ở dòng của vật phẩm, bấm nút có gợi ý **Nhập kho**. Hộp **Nhập kho: tên vật phẩm** hiện ra, kèm số tồn hiện tại.
3. Nhập **Số lượng** (bắt buộc, lớn hơn 0). Dòng bên dưới cho biết số tồn sau khi nhập.
4. Điền **Lý do** (ví dụ "Nhập hàng mới") và **Ghi chú** nếu cần.
5. Bấm **Xác nhận nhập**.
:::

## Xuất kho

::: steps
1. Ở dòng của vật phẩm, bấm nút có gợi ý **Xuất kho**. Nút này bị mờ khi tồn bằng 0.
2. Nhập **Số lượng** cần xuất.
3. Điền **Lý do** (ví dụ "Xuất cho lớp 10A") và **Ghi chú** nếu cần.
4. Bấm **Xác nhận xuất**.
:::

::: warning Lưu ý
Không xuất được nhiều hơn số đang có. Hệ thống báo "Không đủ tồn kho" và giữ nguyên số tồn. Nhập nhầm số thì nhập hoặc xuất bù một lần nữa, lịch sử vẫn giữ cả hai lần.
:::

## Xem lịch sử nhập xuất

Mở tab **Tổng quan**, khung **Hoạt động gần đây** liệt kê các lần **Nhập kho**, **Xuất kho**, **Điều chỉnh** gần nhất kèm số lượng. Muốn xem đầy đủ, tải báo cáo lịch sử ở phần dưới.

## Xem biểu đồ và tải báo cáo

::: steps
1. Mở tab **Báo cáo**.
2. Tab con **Biểu đồ phân tích** có **Giá trị tồn kho theo thời gian**, **Xu hướng nhập xuất kho** và **Phân tích ABC** (chia vật phẩm theo tỷ trọng giá trị).
3. Chuyển sang tab con **Xuất báo cáo**, chọn một báo cáo và bấm **Tải CSV**. Tệp mở được bằng Excel hoặc Google Sheets.
:::

Ba báo cáo có thể tải:

| Báo cáo | Nội dung |
|---|---|
| **Báo cáo tồn kho tổng quan** | Mọi vật phẩm hiện có, kèm giá trị và trạng thái |
| **Phân tích giá trị tồn kho** | Xếp hạng vật phẩm theo giá trị và tỷ trọng trên tổng kho |
| **Lịch sử xuất nhập kho** | Các lần nhập, xuất, điều chỉnh, tối đa 5000 lần gần nhất |

## Câu hỏi thường gặp

::: details Muốn sửa số tồn trực tiếp thì làm sao?
Hộp sửa vật phẩm khoá ô **Tồn kho**. Hãy nhập hoặc xuất phần chênh lệch và ghi **Lý do** (ví dụ "Kiểm kê"), để lịch sử cho thấy vì sao số đổi.
:::

::: details Vật phẩm nào hiện trong khung Cảnh báo tồn kho?
Những món có số tồn nhỏ hơn hoặc bằng mức **Tối thiểu**. Nếu để **Tối thiểu** bằng 0, món chỉ báo khi hết sạch.
:::
