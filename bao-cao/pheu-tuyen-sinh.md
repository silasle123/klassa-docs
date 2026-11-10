---
title: "Báo cáo phễu tuyển sinh"
description: "Theo dõi lead đi từ lúc mới về đến học thử và chốt, kèm danh sách lead chi tiết và xuất Excel."
roles: [Quản trị viên, Quản lý chi nhánh, Quản lý, Lễ tân]
order: 50
---

# Báo cáo phễu tuyển sinh

Báo cáo cho bạn thấy trong số lead mới về, bao nhiêu em đã học thử, bao nhiêu em đã chốt, và còn bao nhiêu em đang chờ. Dùng để đánh giá kênh quảng cáo, môn học và việc chăm lead của đội tuyển sinh.

Lead được tính theo **ngày tạo**: chọn 30 ngày qua nghĩa là các lead được tạo trong 30 ngày đó.

## Xem báo cáo

::: steps
1. Vào **Báo cáo → Funnel Trial→Chốt**.
2. Ở khung **Bộ lọc**, chọn **Khoảng thời gian**: 7 ngày qua, 30 ngày qua (mặc định), 3 tháng qua, 6 tháng qua hoặc 1 năm qua.
3. Chọn **Cơ sở** (mặc định **Tất cả cơ sở**) và **Môn quan tâm** (mặc định **Tất cả môn**) nếu cần.
4. Số liệu tự cập nhật mỗi khi bạn đổi bộ lọc.
:::

## Đọc các thẻ chỉ số

| Thẻ | Ý nghĩa |
| --- | --- |
| **Tổng lead** | Số lead tạo trong kỳ. Dòng nhỏ cho biết bao nhiêu em đã học thử. |
| **Đã chốt** | Gồm học sinh mới và lượt chốt thêm môn (hai số này hiện ở dòng nhỏ). |
| **Đang xử lý** | Chưa chốt, cũng chưa mất. |
| **Đã mất** | Lead đã xác nhận không theo học, kèm phần trăm trên tổng lead. |
| **Trial → Chốt** | Tỷ lệ chốt trên số em đã học thử. Dòng nhỏ cho biết tỷ lệ chốt trên tổng lead. |

## Đọc phễu chuyển đổi

Mục **Phễu chuyển đổi** có bốn bước: **Lead mới**, **Đã đặt lịch thử**, **Đã tham gia học thử**, **Đã chốt**. Mỗi bước hiện số lead và phần trăm so với tổng lead.

Từ bước hai trở đi có thêm hai dòng giải thích vì sao lead chưa lên bước đó:

- **Đang chờ ở bước trước**: lead chưa ngã ngũ, vẫn còn cơ hội. Không tính là rớt. Dòng này chỉ hiện khi có lead đang chờ.
- **Mất ở bước trước**: lead đã bị đánh dấu mất ở bước trước, kèm tỷ lệ rớt.

::: tip Mẹo
Nhìn dòng **Đang chờ ở bước trước** để biết ai cần gọi lại. Đây là nhóm chốt được nhiều nhất nếu chăm kịp.
:::

Hai thẻ **Theo kênh** và **Theo môn học** chia nhỏ kết quả theo nguồn lead và theo môn quan tâm. Mỗi dòng hiện số lead, số chốt, số đang chờ và tỷ lệ chuyển đổi.

## Xem danh sách lead chi tiết

Phần **Danh sách lead chi tiết** nằm dưới cùng.

::: steps
1. Chọn một tab: **Đang xử lý** (mặc định), **Chưa liên hệ**, **Đã liên hệ**, **Đã hẹn thử**, **Học thử xong**, **Đã chốt**, **Đã mất** hoặc **Tất cả**.
2. Gõ vào ô **Tìm tên, SĐT, người phụ trách…** để lọc.
3. Chọn thứ tự: **Chờ lâu nhất** (mặc định), **Mới nhất** hoặc **Tên A→Z**.
4. Bấm mũi tên đầu dòng để xem thêm: trường hiện tại, cơ sở, kênh, điểm lead, số buổi thử, môn đã học thử, giáo viên dạy thử, điểm bài thử, lớp đề xuất, ngày chốt, nhận xét buổi thử và ghi chú.
:::

Bảng có các cột **Họ tên**, **SĐT**, **Phụ huynh**, **Khối**, **Môn quan tâm**, **Nguồn**, **Phụ trách**, **Trạng thái**, **Ngày tạo**, **Số ngày chờ**, **Buổi thử gần nhất**, **Hẹn tiếp**.

## Xuất Excel và phân tích AI

- **Xuất Excel**: tải báo cáo về máy theo bộ lọc đang chọn.
- **Phân tích AI**: nhờ AI nhận định về phễu. Xem [Báo cáo do AI tổng hợp](ai.md).

Muốn chăm lead hằng ngày, dùng [Bàn tuyển sinh](../tuyen-sinh/ban-tuyen-sinh.md) và [Danh sách lead](../tuyen-sinh/danh-sach-lead.md). Báo cáo này chỉ để đọc số.

## Câu hỏi thường gặp

::: details Vì sao lead cũ của tôi không có trong báo cáo?
Báo cáo chỉ tính lead được tạo trong khoảng thời gian bạn chọn. Chọn **1 năm qua** để lấy rộng hơn.
:::

::: details Lead chốt thêm môn được tính thế nào?
Được tính vào **Đã chốt** và hiện riêng ở dòng nhỏ dưới thẻ, tách khỏi học sinh mới.
:::
