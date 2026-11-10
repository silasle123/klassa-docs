---
title: "Kiểm tra Lương AI"
description: "Soát bất thường trong một kỳ lương trước khi duyệt, như sai đơn giá, thiếu dữ liệu, trùng khoản hoặc số tiền lệch xa mọi khi."
roles: [Quản trị viên, Quản lý chi nhánh]
plugin: "AI — Gợi ý & Trợ lý Vận hành"
order: 50
group: "Lương, chấm công & ca"
---

# Kiểm tra Lương AI

Trước khi duyệt kỳ lương, bạn có thể nhờ hệ thống rà qua toàn bộ phiếu để tìm chỗ đáng ngờ. Trang này không tự sửa phiếu. Nó chỉ liệt kê vấn đề và gợi ý, bạn tự quyết định sửa hay bỏ qua.

Vào **Quản lý HR → Kiểm tra Lương AI**. Trang cần hai gói mở rộng: **Nền tảng AI** và **AI — Gợi ý & Trợ lý Vận hành**. Thiếu một trong hai, trang báo gói chưa kích hoạt.

Hệ thống kiểm theo các quy tắc cố định, không đọc ý định của bạn, nên một cảnh báo chỉ có nghĩa là "nên xem lại", không có nghĩa là phiếu chắc chắn sai.

## Chạy kiểm tra một kỳ lương

::: steps
1. Vào **Quản lý HR → Kiểm tra Lương AI**.
2. Ở ô **Kỳ lương**, chọn kỳ cần kiểm tra. Kỳ phải đã có phiếu lương.
3. Bấm **Kiểm tra**. Hệ thống báo số vấn đề phát hiện.
4. Xem danh sách trong mục **Danh sách Flags**. Dùng ô **Mức độ** và **Trạng thái** ở **Bộ lọc** để thu hẹp.
:::

Bốn ô số ở đầu trang cho biết **Tổng cảnh báo**, và số cảnh báo còn chờ ở mức cao, trung bình, thấp.

## Hệ thống soát những gì

| Loại vấn đề | Khi nào báo |
|-------------|-------------|
| **Sai lệch đơn giá** | Đơn giá áp cho một buổi dạy khác với đơn giá kỳ vọng theo bảng sĩ số. |
| **Thiếu dữ liệu chấm công** | Buổi học trong phiếu không còn tồn tại, chưa hoàn thành điểm danh, hoặc không có dữ liệu điểm danh. |
| **Số lượng bất thường** | Tổng lương lệch hơn 50% so với trung bình 3 tháng trước (mức cao khi lệch hơn 100%), hoặc lương thực nhận bị âm. |
| **Trùng lặp khoản mục** | Một phiếu có nhiều dòng giống nhau ngoài các dòng buổi dạy. |
| Lương cơ bản | Nhân viên toàn thời gian không có lương cơ bản, hoặc có nhiều hơn một dòng lương cơ bản. Hai loại này hiện bằng mã tiếng Anh ở cột **Loại vấn đề**, hãy đọc cột **Mô tả**. |

## Xử lý một cảnh báo

::: steps
1. Bấm vào dòng cảnh báo để mở hộp **Chi tiết vấn đề**.
2. Đọc **Mô tả**, **Giải thích AI** và **Gợi ý sửa**.
3. Sửa phiếu lương ở trang **Quản lý lương** nếu cần (xem [Quản lý lương](bang-luong.md)).
4. Quay lại, chọn **Trạng thái mới**: **Đã giải quyết** hoặc **Bỏ qua**, rồi bấm **Cập nhật**.
:::

Cảnh báo ở trạng thái **Chờ xử lý** cho đến khi bạn đổi. Việc đổi trạng thái chỉ để bạn theo dõi, không làm thay đổi phiếu lương.

::: tip Mẹo
Chạy kiểm tra khi kỳ đang **Chờ duyệt**, trước khi bấm **Phê duyệt**. Mỗi lần bấm **Kiểm tra**, hệ thống ghi thêm cảnh báo mới chứ không xoá cảnh báo cũ. Vì vậy hãy sửa hết phiếu rồi mới kiểm tra, và dùng ô **Trạng thái** để chỉ xem các dòng **Chờ xử lý**.
:::

## Câu hỏi thường gặp

::: details Cảnh báo "Thiếu dữ liệu chấm công" có phải giáo viên bị trừ lương không?
Không. Cảnh báo này chỉ nói buổi học trong phiếu chưa đủ dữ liệu để đối chiếu. Hãy kiểm tra buổi đó ở [Giờ dạy](buoi-day.md).
:::

::: details Vì sao tháng đầu tiên không có cảnh báo "Số lượng bất thường"?
Hệ thống so với trung bình 3 tháng trước. Chưa có lịch sử thì không so được.
:::
