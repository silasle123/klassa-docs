---
title: "Quản lý lương"
description: "Tạo kỳ lương tháng, tính phiếu cho từng người, duyệt, đánh dấu đã chuyển khoản và gửi phiếu lương."
roles: [Quản trị viên, Quản lý chi nhánh]
plugin: "Nhân sự (HRIS) và Lương giáo viên"
order: 10
group: "Lương, chấm công & ca"
---

# Quản lý lương

Trang này giúp bạn chốt lương mỗi tháng: tạo một **kỳ lương**, để hệ thống tính phiếu cho từng nhân sự, rà soát và sửa nếu cần, duyệt, ghi nhận đã chuyển khoản rồi gửi phiếu cho nhân viên. Trang cần cả hai gói mở rộng **Nhân sự (HRIS)** và **Lương giáo viên**: gói Lương giáo viên để chạy kỳ lương, gói Nhân sự (HRIS) cho cấu hình lương và danh sách nhân viên. Thiếu gói Lương giáo viên thì mục **Quản lý lương** (cùng mục **Mẫu phiếu lương**) không hiện trong menu. Chỉ có gói Lương giáo viên thì hai mục này vẫn hiện, nhưng các tab dùng dữ liệu nhân sự như **Đơn giá dạy (GV/TG)** và **Cấu hình lương NV** chưa dùng được.

Vào **Quản lý HR → Quản lý lương**. Trang có 5 tab: **Tính lương** (bài này), **Đơn giá dạy (GV/TG)** và **Cấu hình lương NV** (xem [Cấu hình lương](cau-hinh-luong.md)), **Tạm ứng** (xem [Tạm ứng lương](tam-ung-luong.md)) và **Lịch sử gửi phiếu**.

## Lương được tính từ đâu

Hệ thống không lấy lương từ điểm danh học sinh. Mỗi nhóm được tính theo căn cứ riêng:

| Nhóm | Căn cứ tính |
|------|-------------|
| Giáo viên | Các buổi mà giáo viên được giao dạy, trong khoảng thời gian được giao lớp, cộng buổi dạy thay theo đơn đã duyệt. Buổi học chỉ có khi giáo viên điểm danh, nên buổi chưa điểm danh chưa được tính. |
| Trợ giảng | Các buổi nằm trong khoảng thời gian trợ giảng được giao lớp. Nếu Quản trị viên bật yêu cầu check-in, trợ giảng bán thời gian phải bấm **Có mặt** từng buổi (xem [Ca trợ giảng](ca-tro-giang.md)). |
| Nhân viên toàn thời gian | Lương cơ bản chia theo số ngày công thực tế (ngày chấm công cộng ngày nghỉ phép có lương) trên số ngày công chuẩn của tháng. |
| Nhân viên bán thời gian | Số giờ làm nhân với đơn giá giờ. |
| Lễ tân theo ca | Giờ chấm công rơi vào khung giờ ca nào thì nhân với đơn giá của khung đó (xem [Lịch ca lễ tân](lich-ca-le-tan.md)). |

Với giáo viên, số học sinh có mặt trong buổi chỉ dùng để chọn bậc đơn giá khi trung tâm chọn cách tính **Theo sĩ số học sinh**. Hai cách tính còn lại (cố định mỗi buổi, cố định theo giờ) không phụ thuộc sĩ số.

## Tạo kỳ lương và tính lương

Tháng chưa có kỳ thì góc trên trang hiện hai nút. Tháng đã có kỳ thì hai nút này ẩn đi.

::: steps
1. Vào **Quản lý HR → Quản lý lương**, tab **Tính lương**.
2. Chọn **Tháng** và **Năm** ở thẻ **Kỳ lương**.
3. Bấm **Tính lương mới** để tạo kỳ và tính cho tất cả nhân sự một lượt. Hộp **Tính lương cho tháng mới** hiện ra.
4. Chọn **Tháng**, **Năm** (bắt buộc) và ô **Trừ BHXH / BHYT / BHTN + thuế TNCN**: chỉ nhân viên toàn thời gian, tất cả nhân viên, hoặc không tự trừ.
5. Bấm **Tính lương**. Thanh tiến độ hiện ở góc dưới màn hình.
:::

Nếu muốn tính từng người, bấm **Tạo kỳ trống** rồi vào mục **Chưa tính lương** bên dưới, bấm **Tính lương** ở dòng của người đó. Tính xong, người đó chuyển lên bảng **Phiếu lương đã tính**.

::: warning Kiểm tra danh sách nhân sự trước khi tính
Mọi hồ sơ nhân viên đang ở trạng thái làm việc đều vào kỳ lương. Trung tâm mới có sẵn vài hồ sơ nhân sự mẫu (mã bắt đầu bằng KLS) chưa khai lương, các hồ sơ này sẽ ra phiếu 0 đồng. Hãy xem lại danh sách ở [Danh sách nhân viên](danh-sach-nhan-vien.md) và xử lý hồ sơ mẫu trước khi bấm tính.
:::

Với lương tháng 13 hoặc thưởng Tết, bấm **Lương tháng 13**, chọn năm và hệ số thưởng rồi bấm **Tạo kỳ thưởng**. Kỳ này tạo sẵn phiếu và không dùng nút tính lại.

## Vòng đời của một kỳ lương

Kỳ lương đi qua các trạng thái **Nháp**, **Chờ duyệt**, **Đã duyệt**, **Đã chi trả**.

| Trạng thái | Việc bạn làm được |
|------------|-------------------|
| **Nháp** | **Trình duyệt** (khi đã có phiếu), **Tính lại cả kỳ**, sửa phiếu, xoá bảng lương. |
| **Chờ duyệt** | **Phê duyệt**, **Tính lại cả kỳ**, sửa phiếu. |
| **Đã duyệt** | **Xác nhận chi trả**, hoặc **Mở lại để sửa** để đưa kỳ về **Chờ duyệt**. Gửi được bản chính thức. |
| **Đã chi trả** | Chỉ xem. Không xoá, không sửa được. |

Sau khi tính cho cả kỳ, nếu mọi người đều tính được thì kỳ tự sang **Chờ duyệt**. Nếu còn người lỗi thì kỳ ở lại **Nháp**: bấm **Trình duyệt** để đẩy sang bước tiếp.

::: warning Tính lại sẽ ghi đè phần sửa tay
**Tính lại cả kỳ** (hoặc **Tính lương cả kỳ** khi còn người chưa tính) tính lại toàn bộ phiếu từ dữ liệu mới nhất. Các dòng bạn đã sửa tay sẽ mất. Khoản **Thưởng** và ghi chú được giữ lại. Phiếu đã đánh dấu chuyển khoản không bị tính lại. Nếu chỉ cần tính lại một người, mở menu **⋯** ở dòng đó và chọn **Tính lại riêng người này**.
:::

Đổi ô **Trừ BHXH / BHYT / BHTN + thuế TNCN** của kỳ chỉ lưu lựa chọn. Bạn phải bấm **Tính lại** thì bảng lương mới áp dụng.

## Sửa một phiếu lương

::: steps
1. Ở bảng **Phiếu lương đã tính**, bấm biểu tượng bút ở dòng nhân viên. Hộp **Chỉnh sửa phiếu lương** hiện ra.
2. Sửa từng dòng ở mục **I. Các khoản thu nhập** và **II. Các khoản khấu trừ** (nhập số dương). Bấm **Thêm dòng** hoặc **Thêm khấu trừ** để thêm khoản mới.
3. Xem tổng thu nhập, tổng khấu trừ và thực nhận tự cộng lại. Ghi lý do ở ô **Ghi chú** nếu muốn.
4. Bấm **Lưu thay đổi**.
:::

Phiếu PDF và email hiển thị đúng các dòng bạn đã lưu. Không sửa được khi kỳ đã **Đã chi trả** hoặc phiếu đã đánh dấu chuyển khoản.

## Đánh dấu đã chuyển khoản từng người

Dùng khi bạn chuyển lương cho từng người rồi muốn ghi lại, hoặc trả lương làm nhiều đợt.

::: steps
1. Ở bảng **Phiếu lương đã tính**, tích chọn các phiếu cần ghi nhận.
2. Bấm **Đã chuyển khoản (N)**. Hộp **Đánh dấu đã chuyển khoản** hiện ra.
3. Chọn **Trả đủ** hoặc **Trả một phần**. Trả một phần chỉ làm được cho từng người: mở menu **⋯** của người đó, chọn **Đánh dấu đã chuyển khoản**, nhập số tiền chuyển lần này.
4. Chọn **Ngày chuyển khoản** (không bắt buộc): **Hôm nay**, **Hôm qua** hoặc ngày khác.
5. Bấm **Xác nhận đã chuyển khoản**.
:::

Phiếu đã đánh dấu bị khoá: không sửa, không xoá, không bị tính lại. Muốn sửa thì chọn phiếu rồi bấm **Bỏ đánh dấu đã trả (N)**. Phiếu mới trả một phần hiện nhãn **Trả 1 phần** kèm số còn phải trả. Để trả nốt, mở menu **⋯** và chọn **Chuyển tiếp phần còn lại**.

Khi bấm **Xác nhận chi trả** cho cả kỳ, mọi phiếu chưa trả được ghi là đã trả, phần còn lại của phiếu trả một phần được ghi trả nốt, và các khoản tạm ứng đã duyệt của kỳ chuyển sang **Đã trừ lương**.

## Lọc và xem phiếu

Thanh **Bộ lọc** áp dụng cho cả bảng **Phiếu lương đã tính** lẫn mục **Chưa tính lương**: vai trò, chức vụ, loại hợp đồng và trạng thái phiếu. Mục **Chưa chi trả (N)** trong ô trạng thái gom những phiếu chưa trả đủ, gồm cả người mới trả một phần, để bạn không bỏ sót ai. Bấm **Xoá lọc** để bỏ lọc.

## Gửi và tải phiếu

- Với từng người, mở menu **⋯**: **Xuất PDF**, **Xuất Excel**, **Gửi bản nháp** hoặc **Gửi bản chính thức**. Bản nháp gửi được ở mọi trạng thái. Bản chính thức chỉ gửi được khi kỳ đã **Đã duyệt** hoặc **Đã chi trả**.
- Với nhiều người, tích chọn rồi bấm **Tải .zip (N)** hoặc **Gửi email (N)**. Email gửi lần lượt, cách vài giây mỗi phiếu, nên hãy giữ trang mở đến khi xong.
- Gửi email cần mẫu **Email gửi phiếu lương** đã lưu trong **Tích hợp → Mẫu email**.
- Tab **Lịch sử gửi phiếu** cho biết đã gửi cho ai, loại gì, thành công hay lỗi, theo từng tháng.
- Bấm **Export CSV** ở thẻ **Kỳ lương** để tải cả bảng lương về máy.

Thông tin công ty in trên phiếu chỉnh ở [Mẫu phiếu lương](mau-phieu-luong.md).

## Câu hỏi thường gặp

::: details Vì sao một người không có phiếu mà nằm ở mục Chưa tính lương?
Người đó thuộc kỳ nhưng chưa được tính. Bấm **Tính lương** ở dòng của họ, hoặc **Tính lương cả kỳ**.
:::

::: details Có xoá được kỳ lương không?
Xoá được khi kỳ chưa **Đã chi trả**. Bấm **Xoá bảng lương** và nhập mật khẩu tài khoản của bạn để xác nhận.
:::

::: details Giáo viên dạy online có bị tính khác không?
Hệ thống chưa tự giảm lương theo hình thức học. Nếu trung tâm trả khác cho buổi online, hãy sửa dòng tương ứng trên phiếu.
:::

::: details Kế toán có tự vào trang này được không?
Không. Trang **Quản lý lương** chỉ mở cho Quản trị viên và Quản lý chi nhánh. Kế toán không thấy menu **Quản lý HR**, Quản lý chỉ thấy vài mục khác trong menu đó. Nhân viên tự xem phiếu của mình ở [Phiếu lương](../cong-nhan-vien/phieu-luong.md).
:::
