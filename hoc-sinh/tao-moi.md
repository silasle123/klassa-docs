---
title: "Tạo hồ sơ học sinh mới"
description: "Thêm một học sinh vào hệ thống kèm phụ huynh, và cách xử lý khi hệ thống cảnh báo trùng số điện thoại."
roles: [Quản trị viên, Quản lý chi nhánh, Quản lý, Lễ tân]
order: 20
---

# Tạo hồ sơ học sinh mới

Dùng khi một em chính thức đăng ký học và chưa có hồ sơ. Khi lưu, hệ thống tự tạo mã học sinh và tạo (hoặc gắn) tài khoản cho phụ huynh, nên bạn không cần làm riêng bước đó.

::: warning Lưu ý
Khách quan tâm đang nằm ở trang **Tuyển sinh** thì không tạo ở đây. Hãy dùng nút chuyển thành học sinh trong trang đó, xem [Chuyển lead thành học sinh](../tuyen-sinh/chuyen-lead-thanh-hoc-sinh.md). Muốn thêm nhiều em cùng lúc, xem [Nhập dữ liệu hàng loạt từ Excel](../tai-khoan/nhap-du-lieu-hang-loat.md).
:::

## Thêm một học sinh

::: steps
1. Vào **Học viên → Học sinh**, bấm **Thêm học sinh**. Trang **Thêm học sinh mới** hiện ra.
2. Phần **Thông tin học sinh**: điền **Họ và tên** và chọn **Khối lớp** (bắt buộc). Các ô **Email**, **Số điện thoại**, **Ngày sinh**, **Trường học**, **Địa chỉ** là tuỳ chọn.
3. Chọn **Trạng thái** (mặc định **Đang học**; có thể chọn **Tạm nghỉ** hoặc **Đình chỉ**) và **Trình độ học lực** (mặc định **Trung bình**; các mức khác là **Xuất sắc**, **Giỏi**, **Yếu**).
4. Phần **Thông tin phụ huynh**: điền **Họ và tên** và **Số điện thoại** của phụ huynh (bắt buộc). **Email** là tuỳ chọn. **Mối quan hệ** mặc định **Cha/Mẹ**, có thể chọn **Người giám hộ**, **Ông/Bà**, **Họ hàng** hoặc **Khác**.
5. Nếu có, nhập **SĐT người giới thiệu** ở phần **Người giới thiệu** (xem bên dưới).
6. Phần **Thông tin học tập**: tích **Môn học quan tâm** và viết **Ghi chú hồ sơ** nếu cần.
7. Bấm **Thêm học sinh**. Nếu thiếu ô bắt buộc, hệ thống báo "Vui lòng điền đầy đủ thông tin bắt buộc!".
:::

Sau khi lưu, bạn được đưa về danh sách học sinh. Muốn cho em vào lớp, làm tiếp bước [ghi danh](ghi-danh.md).

## Mã học sinh và tài khoản phụ huynh

- Mã học sinh tự sinh theo dạng tiền tố, khối, số thứ tự (ví dụ **ABC-L8-013**). Tiền tố do Quản trị viên đặt ở phần cấu hình chung.
- Số điện thoại phụ huynh là tên đăng nhập của phụ huynh. Nếu số này đã có tài khoản (ví dụ anh chị em), em mới được gắn vào đúng phụ huynh đó. Nếu chưa có, hệ thống tạo tài khoản mới với mật khẩu mặc định **12345678**. Tài khoản phụ huynh mới có thể ở trạng thái chờ duyệt. Nếu phụ huynh đăng nhập báo đang chờ phê duyệt, Quản trị viên duyệt ở **Quản trị hệ thống → Quản lý Đăng ký**.
- Phụ huynh không bắt buộc phải đổi mật khẩu. Hãy dặn phụ huynh đổi mật khẩu khi đăng nhập lần đầu, xem [Cổng phụ huynh](../cong-phu-huynh/gioi-thieu.md).

- Nếu em có số điện thoại đúng dạng và đang ở trạng thái **Đang học**, hệ thống còn tự cấp tài khoản đăng nhập cho chính em (chờ duyệt). Xem [Tài khoản đăng nhập cho học sinh](tai-khoan-hoc-sinh.md).

## Cảnh báo trùng học sinh

Khi bạn gõ số điện thoại của em hoặc của phụ huynh, hệ thống tự kiểm tra sau khoảng nửa giây. Nếu 9 số cuối trùng với một học sinh đã có hồ sơ (số của em hoặc số của phụ huynh em đó), một khung vàng hiện ra liệt kê các hồ sơ trùng: mã, tên, trạng thái, lớp đang học, số khớp, và ghi thêm "trùng cả tên" nếu tên cũng giống.

::: steps
1. Bấm vào mã học sinh trong khung vàng để mở hồ sơ cũ ở tab mới.
2. Nếu đúng là chính em này đang học và chỉ đăng ký thêm lớp, đừng tạo hồ sơ mới. Hãy dùng hồ sơ cũ và [ghi danh](ghi-danh.md) thêm lớp.
3. Nếu là anh chị em hoặc một em khác, cứ điền tiếp và bấm **Thêm học sinh**.
4. Hệ thống hỏi lại **Vẫn tạo hồ sơ mới?**. Bấm **Quay lại kiểm tra** để xem lại, hoặc **Vẫn tạo hồ sơ mới** để lưu.
:::

Đây chỉ là cảnh báo, không chặn bạn. Riêng trường hợp trùng y hệt cả tên, số điện thoại em và thông tin phụ huynh thì hệ thống từ chối với thông báo "Học sinh đã tồn tại trong hệ thống" kèm mã hồ sơ đã có để bạn tìm.

::: tip Mẹo
Một em quay lại học sau thời gian nghỉ đã có hồ sơ cũ. Mở hồ sơ đó và đổi trạng thái thay vì tạo mới, xem [Tạm nghỉ, mở lại và xoá học sinh](nghi-hoc.md).
:::

## Người giới thiệu

Ô **SĐT người giới thiệu** nhận số điện thoại của một học sinh hoặc phụ huynh đã có. Hệ thống báo ngay "Hợp lệ" kèm tên, hoặc "Không tìm thấy HS/PH với SĐT này". Để trống nếu em không do ai giới thiệu.

## Câu hỏi thường gặp

::: details Tôi không thấy nút Thêm học sinh?
Chỉ Quản trị viên, Quản lý chi nhánh, Quản lý và Lễ tân được thêm học sinh. Giáo viên, trợ giảng và kế toán chỉ xem.
:::

::: details Có bắt buộc nhập số điện thoại của em không?
Không. Chỉ bắt buộc họ tên, khối lớp, họ tên và số điện thoại phụ huynh. Nhưng muốn em có [tài khoản đăng nhập](tai-khoan-hoc-sinh.md) thì hồ sơ phải có số điện thoại của em.
:::

::: details Tạo xong có sửa được không?
Được, xem [Hồ sơ học sinh](chi-tiet.md).
:::
