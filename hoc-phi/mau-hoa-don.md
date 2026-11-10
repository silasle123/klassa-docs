---
title: "Mẫu hoá đơn"
description: "Tuỳ chỉnh logo, màu sắc, nội dung, mã QR và thông tin chuyển khoản trên phiếu học phí gửi phụ huynh."
roles: [Quản trị viên, Quản lý chi nhánh]
order: 90
---

# Mẫu hoá đơn

Mẫu hoá đơn quyết định phiếu học phí trông ra sao khi in, tải PDF hoặc gửi ảnh cho phụ huynh: tên và logo trung tâm, màu sắc, lời nhắc, mã QR chuyển khoản. Chỉ Quản trị viên và Quản lý chi nhánh chỉnh được.

Vào **Tài chính → Kế toán → Mẫu hóa đơn**. Trang có tiêu đề **Cài đặt mẫu phiếu học phí**, chia ba tab: **Thông tin trung tâm**, **Thiết kế**, **Nội dung**. [Phiếu phụ thu](phieu-phu-thu.md) khi in cũng lấy tên, địa chỉ, số điện thoại, thông tin ngân hàng và dòng chân trang từ mẫu này.

::: warning Chưa lưu mẫu thì phiếu mang thông tin mẫu
Khi trung tâm chưa bấm **Lưu cài đặt** lần nào, trang này và phiếu học phí in ra dùng thông tin mẫu có sẵn: địa chỉ, số điện thoại, thông tin ngân hàng chưa phải của trung tâm bạn (tên trung tâm lấy theo tên thương hiệu đã đặt), và chưa có mã QR chuyển khoản đúng vì chưa chọn ngân hàng nhận. Hãy nhập lại đủ thông tin của trung tâm, chọn **Ngân hàng nhận** rồi bấm **Lưu cài đặt** trước khi gửi phiếu đầu tiên cho phụ huynh.
:::

## Ba nút ở đầu trang

- **Xem trước**: mở phiếu với dữ liệu mẫu để bạn thấy kết quả, chưa ghi gì.
- **Khôi phục**: đưa các ô về giá trị mặc định, có hỏi lại trước khi làm.
- **Lưu cài đặt**: lưu mọi thay đổi. Chỉnh xong nhớ bấm nút này.

## Tab Thông tin trung tâm

::: steps
1. Điền **Tên trung tâm**, **Số điện thoại**, **Địa chỉ**, và **Địa chỉ dòng 2 (tuỳ chọn)** nếu có.
2. Điền **Email** và **Website** nếu muốn hiện trên phiếu.
3. Ở **Logo**, bấm **Chọn logo từ máy**. Chấp nhận PNG, JPG, WebP, SVG, tối đa 2MB. Logo hiện ở góc trên bên trái phiếu.
4. Chỉnh **Kích thước logo (px)** từ 32 đến 160. Muốn ẩn logo thì tắt công tắc **Hiển thị logo**.
5. Bấm **Lưu cài đặt**.
:::

## Tab Thiết kế

Chọn **Màu chủ đạo** và **Màu phụ** (nhập mã màu hoặc chọn trên bảng màu), **Font chữ** (Arial, Times New Roman, Helvetica hoặc Courier) và **Cỡ chữ** từ 8 đến 16. Bấm **Xem trước** để kiểm tra phiếu có dễ đọc không.

## Tab Nội dung

Các ô chữ trên phiếu:

- **Tiêu đề chính** (mặc định là "PHIẾU THÔNG BÁO HỌC PHÍ") và **Tiêu đề phụ**.
- **Dòng chân trang**: lời cảm ơn cuối phiếu.
- **Đoạn hướng dẫn thanh toán**: lời nhắc phụ huynh đóng đúng hạn, ghi đúng nội dung chuyển khoản.
- Công tắc **Hiển thị tổng tiền bằng chữ**: thêm dòng "Số tiền bằng chữ" dưới bảng tổng cộng.

### Mã QR và thông tin chuyển khoản

Bật **Hiển thị QR Code** rồi chọn **Kiểu QR thanh toán**:

| Kiểu | Cách hoạt động |
|---|---|
| **QR động VietQR** (khuyến nghị) | Mỗi phiếu có mã QR riêng, đã điền sẵn số tiền và nội dung chuyển khoản. Phụ huynh quét bằng app ngân hàng và chỉ cần xác nhận. Không phải đăng ký thêm gì. Hệ thống không tự ghi nhận thanh toán từ kiểu này. |
| **VNPay (tự động)** | Cần đăng ký tài khoản kinh doanh VNPay. Mã QR dẫn tới cổng VNPay với số tiền còn phải thu, và hoá đơn tự cập nhật khi thanh toán thành công. |
| **QR ảnh tĩnh** | Tải lên một ảnh QR cố định dùng cho mọi phiếu (tối đa 2MB). Phụ huynh tự nhập số tiền và nội dung. Dùng khi ngân hàng không hỗ trợ VietQR. |

Với **QR động VietQR**, chọn **Ngân hàng nhận** trong danh sách (ô **Tên ngân hàng** tự điền theo), rồi điền **Số tài khoản**, **Chủ tài khoản** ở phần thông tin chuyển khoản bên dưới. Thiếu ngân hàng hoặc số tài khoản thì hệ thống nhắc "Cần chọn ngân hàng và điền số tài khoản" và chưa tạo được mã QR. Khi đủ thông tin, khung **Xem trước QR** hiện mã với số tiền mẫu 500.000đ, bạn quét thử bằng app ngân hàng để kiểm tra.

Công tắc **Hiển thị thông tin ngân hàng** bật phần **Thông tin chuyển khoản** gồm **Tên ngân hàng**, **Số tài khoản**, **Chủ tài khoản**. Ba ô này chỉ hiện khi công tắc đang bật, nên muốn nhập hoặc đổi số tài khoản thì để công tắc bật.

::: warning Lưu ý
Các ô ngân hàng mặc định là thông tin giả (Ngân hàng XYZ, số tài khoản 1234567890). Nhớ thay bằng tài khoản thật của trung tâm trước khi gửi phiếu cho phụ huynh, nếu không phụ huynh sẽ chuyển nhầm.
:::

::: tip Mẹo
Muốn tiền chuyển khoản tự khớp vào hoá đơn, hãy dùng kiểu **QR động VietQR** cùng việc kết nối ngân hàng ở [Kết nối ngân hàng](../tich-hop/ngan-hang.md). Nội dung chuyển khoản mang số hoá đơn nên hệ thống nhận ra được.
:::

## Câu hỏi thường gặp

::: details Sửa mẫu có làm đổi các phiếu đã gửi không?
Phiếu đã gửi là ảnh hoặc PDF đã xuất nên không đổi. Mẫu mới áp dụng khi bạn in, tải hoặc gửi lại từ lúc lưu trở đi.
:::

::: details Mỗi cơ sở có mẫu riêng không?
Không. Mẫu dùng chung cho toàn trung tâm, không chia theo cơ sở.
:::
