---
title: "Phát hiện bất thường chấm công"
description: "Quét dữ liệu chấm công trong một khoảng ngày để tìm vị trí nhảy bất thường, WiFi lạ, thiếu giờ vào hoặc ra và ca làm quá dài."
roles: [Quản trị viên, Quản lý chi nhánh]
plugin: "AI — Gợi ý & Trợ lý Vận hành"
order: 80
group: "Lương, chấm công & ca"
---

# Phát hiện bất thường chấm công

Trang này giúp bạn soát lại chấm công của một cơ sở trong một khoảng ngày, để thấy ngay những lần chấm đáng ngờ như nghi giả vị trí hay quên chấm ra. Trang không tự sửa công, bạn xem rồi quyết định.

Vào **Quản lý HR → Phát hiện Bất thường**. Trang cần hai gói mở rộng: **Nền tảng AI** và **AI — Gợi ý & Trợ lý Vận hành**.

Hệ thống soát theo quy tắc cố định. Một cảnh báo có nghĩa là "nên xem lại", không phải kết luận nhân viên sai.

## Quét bất thường

::: steps
1. Vào **Quản lý HR → Phát hiện Bất thường**.
2. Chọn **Cơ sở** (bắt buộc), **Từ ngày** và **Đến ngày**.
3. Bấm **Quét bất thường**. Hệ thống báo số bất thường tìm thấy.
4. Xem **Danh sách bất thường**. Dùng ô **Mức độ** (cao, **Trung bình**, **Thấp**) và **Trạng thái** (**Chờ xử lý**, **Đã giải quyết**, **Đã bỏ qua**) để lọc.
:::

Bốn ô số ở đầu trang cho biết **Tổng bất thường**, số mức cao và trung bình còn chờ, và số **Chờ xử lý**.

## Hệ thống tìm những gì

| Loại | Khi nào báo | Mức độ |
|------|-------------|--------|
| **Nhảy vị trí GPS** | Hai lần chấm liên tiếp cách nhau một quãng đường mà phải di chuyển nhanh hơn khoảng 180 km/h, thường do giả vị trí. | Cao |
| **WiFi không hợp lệ** | Lần chấm dùng WiFi có mã BSSID không nằm trong danh sách WiFi được phép. | Trung bình |
| Thiếu giờ ra hoặc thiếu giờ vào | Trong ngày chỉ có giờ vào mà không có giờ ra, hoặc ngược lại. Loại này hiện bằng mã tiếng Anh ở cột **Loại**, hãy đọc cột **Mô tả**. | Trung bình |
| Giờ làm quá nhiều | Một ngày làm hơn 12 giờ. Hiện bằng mã tiếng Anh ở cột **Loại**. | Trung bình, cao nếu hơn 16 giờ |

Danh sách WiFi được phép khai ở [Cấu hình chấm công](cau-hinh-cham-cong.md).

## Xử lý một bất thường

::: steps
1. Ở dòng cần xem, bấm **Chi tiết** hoặc **Giải quyết**. Hộp **Chi tiết bất thường** hiện ra với nhân viên, ngày, loại, mức độ và mô tả.
2. Ghi **Ghi chú giải quyết** nếu muốn lưu lại lý do.
3. Bấm **Giải quyết** nếu đã xử lý xong, hoặc **Bỏ qua** nếu bạn thấy đây là trường hợp bình thường.
:::

Việc đổi trạng thái chỉ để theo dõi. Nếu cần sửa giờ công, dùng **Chấm công thủ công** ở [Điểm danh nhân viên](cham-cong.md).

::: tip Mẹo
Quét định kỳ cuối tuần hoặc trước khi chốt lương. Với nhân viên bị báo **Nhảy vị trí GPS**, hỏi trực tiếp trước khi kết luận, vì tín hiệu định vị đôi khi sai lệch.
:::

## Câu hỏi thường gặp

::: details Quét lại có tạo cảnh báo trùng không?
Có. Mỗi lần quét ghi thêm cảnh báo mới, nên quét lại cùng một khoảng ngày sẽ có dòng lặp. Hãy quét mỗi khoảng ngày một lần và dùng ô **Trạng thái** để chỉ xem các dòng còn **Chờ xử lý**.
:::

::: details Giáo viên không bấm giờ vào ra thì sao?
Trang chỉ soát dữ liệu chấm công giờ vào ra. Giáo viên và trợ giảng tính công theo buổi dạy nên thường không có gì để soát ở đây, xem [Bảng công tháng](bang-cong-thang.md).
:::
