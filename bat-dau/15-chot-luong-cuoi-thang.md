---
title: "Bước 15: Chốt lương cuối tháng"
description: "Hướng dẫn tạo kỳ lương, tính lương, soát phiếu trước khi duyệt, duyệt, ghi nhận chi trả và gửi phiếu lương cho giáo viên, trợ giảng, lễ tân."
roles: [Quản trị viên, Quản lý chi nhánh]
plugin: "Nhân sự (HRIS) và Lương giáo viên"
order: 150
---

# Bước 15: Chốt lương cuối tháng

Cuối tháng, trung tâm phải trả lương cho giáo viên, trợ giảng, lễ tân và nhân viên. Bài này đi từ lúc tạo **kỳ lương** của tháng đến lúc nhân viên nhận được phiếu. Hệ thống tự tính, việc của bạn là soát kết quả trước khi duyệt, vì một phiếu thiếu đơn giá hay thiếu buổi có thể ra số tiền sai mà không báo lỗi to.

## Mục tiêu

Sau bước này, kỳ lương của tháng đã ở trạng thái **Đã chi trả**, mỗi nhân viên có một phiếu đúng số tiền và đã được gửi.

## Cần có trước

- Vai của bạn là Quản trị viên hoặc Quản lý chi nhánh. Quản lý, Kế toán và Nhân sự không vào được trang **Quản lý lương**. Quản lý chi nhánh chỉ thấy kỳ lương của chi nhánh mình.
- Trung tâm có hai gói mở rộng **Nhân sự (HRIS)** và **Lương giáo viên**. Thiếu một trong hai thì trang báo gói chưa được kích hoạt (xem [Bước 1](01-dang-nhap-lan-dau.md)).
- Hồ sơ nhân sự, loại hình làm việc, chi nhánh và đơn giá dạy đã khai xong ([Bước 4](04-ho-so-nhan-su-va-cach-tinh-luong.md)). Chưa khai đơn giá thì lương dạy ra 0đ.
- Giáo viên và trợ giảng đã điểm danh đủ các buổi trong tháng ([Bước 10](10-diem-danh-buoi-dau.md)). Buổi học được tạo ra lúc điểm danh, nên buổi quên điểm danh có thể không có để tính lương.
- Các đơn dạy thay của tháng đã được duyệt ([Bước 11](11-thay-doi-trong-thang.md)).
- Các khoản tạm ứng lương của tháng đã được duyệt trước khi tính (tab **Tạm ứng** cùng trang, xem [Tạm ứng lương](../nhan-su/tam-ung-luong.md)). Khoản đã duyệt tự hiện thành dòng **Khấu trừ: Tạm ứng lương** trên phiếu. Duyệt sau khi đã tính thì phải tính lại người đó.
- Nếu muốn gửi phiếu qua email: Quản trị viên đã cài email gửi đi và lưu mẫu email phiếu lương ([Bước 6](06-ket-noi-zalo-ngan-hang-email.md)). Không dùng email thì bỏ qua, nhân viên vẫn xem phiếu trong phần mềm sau khi kỳ được duyệt.

## Nhìn trước cả quy trình

Kỳ lương đi qua bốn trạng thái, mỗi trạng thái có một nút bấm ở thẻ **Kỳ lương**:

| Trạng thái | Nút để sang bước tiếp |
| --- | --- |
| **Nháp** | **Trình duyệt** |
| **Chờ duyệt** | **Phê duyệt** |
| **Đã duyệt** | **Xác nhận chi trả** |
| **Đã chi trả** | Chỉ xem, không sửa được nữa |

## Tạo kỳ lương và tính lương

::: steps
1. Vào **Quản lý HR → Quản lý lương**, mở tab **Tính lương**.
2. Chọn **Tháng** và **Năm** ở thẻ **Kỳ lương**.
3. Bấm **Tính lương mới**. Hộp **Tính lương cho tháng mới** hiện ra.
4. Kiểm tra **Tháng** và **Năm** (bắt buộc).
5. Mở ô **Trừ BHXH / BHYT / BHTN + thuế TNCN** và chọn một trong ba cách: **Chỉ nhân viên Full-time (đúng luật BHXH)** (chọn sẵn, chỉ trừ người Toàn thời gian), **Tất cả nhân viên (kể cả part-time)**, hoặc **Không tự trừ (bảng lương gộp)**.
6. Bấm **Tính lương**. Thanh tiến độ hiện ở góc dưới màn hình, bạn chờ đến khi chạy xong.
:::

Tháng đã có kỳ lương thì nút **Tính lương mới** ẩn đi. Nếu cố tạo trùng, hệ thống báo **Đã có bảng lương cho kỳ này rồi**.

::: warning Chọn cách trừ bảo hiểm cho đúng
Cách chọn sẵn chỉ trừ người có loại hình **Toàn thời gian** trong hồ sơ ([Bước 4](04-ho-so-nhan-su-va-cach-tinh-luong.md)). Nếu bạn chọn **Tất cả nhân viên (kể cả part-time)** thì mọi người, kể cả bán thời gian, đều bị trừ. Giáo viên, trợ giảng, lễ tân làm cộng tác mà hồ sơ vẫn để **Toàn thời gian** cũng bị trừ oan. Chưa chắc thì hỏi kế toán của trung tâm trước khi bấm. Sau khi tạo kỳ, ô này vẫn đổi được ở thẻ **Kỳ lương** khi kỳ còn **Nháp** hoặc **Chờ duyệt**. Đổi xong hệ thống chỉ lưu lựa chọn, bạn phải bấm **Tính lại cả kỳ** thì số mới áp dụng.
:::

Sau khi tính xong:

- Nếu mọi người đều tính được, kỳ tự sang **Chờ duyệt**.
- Nếu còn người tính lỗi, hệ thống báo số nhân viên chưa tính được (kèm tên) và kỳ ở lại **Nháp**. Những người này nằm ở mục **Chưa tính lương** bên dưới bảng phiếu. Sửa cấu hình lương của họ rồi bấm **Tính lương** ở dòng của từng người, hoặc bấm nút tính cả kỳ (nút mang tên **Tính lương cả kỳ** khi còn người chưa có phiếu, **Tính lại cả kỳ** khi ai cũng đã có phiếu). Nếu chấp nhận bỏ qua những người này, bấm **Trình duyệt** để đẩy kỳ sang **Chờ duyệt**.

Muốn tính từng người, bấm **Tạo kỳ trống**, rồi bấm **Tính lương** ở dòng của người đó trong mục **Chưa tính lương**.

## Soát phiếu trước khi duyệt

Đây là phần quan trọng nhất của bài. Máy lương không chặn khi thiếu đơn giá hay thiếu buổi. Nó chỉ trả ít hơn hoặc ra 0đ. Hãy xem bảng **Phiếu lương đã tính** (các cột **Lương cơ bản**, **Lương giảng dạy**, **Phụ cấp**, **Thưởng**, **Khấu trừ**, **Thực nhận**) và soát theo danh sách sau.

### Đọc ghi chú trên phiếu

Ghi chú cảnh báo không hiện trong bảng hay trong hộp sửa phiếu. Muốn đọc, mở menu ba chấm ở dòng nhân viên, chọn **Xuất PDF** và xem phần **Ghi chú** ở cuối phiếu. Hãy đọc trước khi sửa tay, vì lưu hộp sửa phiếu sẽ thay ghi chú này bằng nội dung ô **Ghi chú (tùy chọn)**. Hai dòng cảnh báo hay gặp:

- **N buổi chưa có bảng giá (rate band) phù hợp**: lương dạy các buổi đó chưa được tính. Vào tab **Đơn giá dạy (GV/TG)** khai thêm bậc đơn giá phù hợp sĩ số lớp, rồi **Tính lại**.
- **N buổi trợ giảng chưa check-in**: các buổi đó không được tính lương, xem phần trợ giảng bên dưới.

### Danh sách soát

::: steps
1. **Giáo viên dạy lương 0đ hoặc thấp bất thường.** Kiểm tra tab **Đơn giá dạy (GV/TG)** đã có bậc cho vai Giáo viên chưa. Giáo viên và trợ giảng có bảng riêng, thiếu bảng Trợ giảng thì trợ giảng ra 0đ dù bảng Giáo viên đã đủ.
2. **Sĩ số quyết định bậc đơn giá.** Với cách tính **Theo sĩ số học sinh**, máy chỉ đếm học sinh được điểm danh **Có mặt** (xem phần C của [Bước 4](04-ho-so-nhan-su-va-cach-tinh-luong.md)), nên lớp sát ranh giới hai bậc có thể ra đơn giá thấp hơn giáo viên nghĩ.
3. **Cách tính cố định mà chưa nhập tiền.** Nếu một người (hoặc một lớp) dùng **Cố định mỗi buổi** hay **Cố định theo giờ** mà số tiền để 0, các buổi bị bỏ qua và phiếu không ghi chú gì. Với người, mở hồ sơ ở **Quản lý HR → Nhân viên**, mục **Cách tính lương dạy (GV/Trợ giảng)**. Với lớp, mở trang sửa lớp, khối **Cách tính lương dạy (riêng lớp này)**.
4. **Trợ giảng.** Trợ giảng chỉ được tính các buổi từ ngày được xếp vào lớp (xem [Bước 7](07-tao-lop-va-lich-hoc.md)). Buổi đã đi làm trước ngày đó không được trả, bạn phải sửa tay phiếu. Nếu trung tâm đã bật công tắc check-in trợ giảng (phần D của [Bước 4](04-ho-so-nhan-su-va-cach-tinh-luong.md), mặc định tắt), trợ giảng không phải Toàn thời gian quên bấm **Có mặt** sẽ mất lương buổi đó. Muốn bù, vào **Quản lý HR → Giờ dạy**, mở thẻ **Check-in trợ giảng**, bấm **Xác nhận có mặt** cho buổi đó rồi tính lại.
5. **Buổi dạy thay.** Giáo viên nghỉ mà không có đơn dạy thay đã duyệt thì giáo viên chính vẫn được trả buổi đó, người dạy thay thì thiếu tiền. Vào **Quản lý HR → Dạy thay** để kiểm tra các đơn trong tháng rồi tính lại.
6. **Lễ tân làm theo ca.** Lễ tân đăng ký ca cần có đơn giá cho từng khung ca **Sáng**, **Chiều**, **Tối** ở **Quản lý HR → Cấu hình HR**, tab **Ca lễ tân** (chỉ Quản trị viên lưu được, xem [Bước 4](04-ho-so-nhan-su-va-cach-tinh-luong.md)). Thiếu đơn giá thì giờ làm đó ra 0đ, và phiếu không in cảnh báo.
7. **Nhân viên toàn thời gian không có chấm công cả tháng** được trả đủ lương cơ bản, không bị trừ (trừ người vào làm hoặc nghỉ việc giữa tháng: tính theo số ngày thuộc về họ). Nếu có người thực sự nghỉ, bạn phải sửa tay trên phiếu.
8. **Người không có phiếu.** Nếu kỳ lương gắn với một chi nhánh, người có hồ sơ chưa chọn ô **Cơ sở** sẽ không có phiếu. Mở hồ sơ ở **Quản lý HR → Nhân viên**, chọn **Cơ sở** rồi tính lại.
9. **Người có phiếu 0đ.** Mọi hồ sơ đang làm việc đều có phiếu, kể cả Quản trị viên hay kế toán, và cả người nghỉ việc trong tháng. Phiếu 0đ của người không có lương trên phần mềm là bình thường. Không muốn phiếu đó nằm trong kỳ, mở menu ba chấm ở dòng đó, chọn **Xoá phiếu khỏi kỳ** (chỉ khi kỳ còn **Nháp** hoặc **Chờ duyệt**). Lần tính cả kỳ sau sẽ tạo lại phiếu này.
:::

Bạn có thể nhờ **Kiểm tra Lương AI** (cần thêm hai gói **Nền tảng AI** và **AI — Gợi ý & Trợ lý Vận hành**) soát thêm các điểm bất thường ở [Kiểm tra lương](../nhan-su/kiem-tra-luong.md).

### Sửa một phiếu

::: steps
1. Ở bảng **Phiếu lương đã tính**, bấm biểu tượng bút ở dòng nhân viên. Hộp **Chỉnh sửa phiếu lương** hiện ra.
2. Sửa từng dòng ở mục **I. Các khoản thu nhập** và **II. Các khoản khấu trừ** (nhập số dương). Bấm **Thêm dòng** hoặc **Thêm khấu trừ** để thêm khoản mới.
3. Ghi lý do ở ô **Ghi chú (tùy chọn)** nếu cần, rồi bấm **Lưu thay đổi**.
:::

::: danger Tính lại sẽ xoá phần sửa tay
**Tính lại cả kỳ** xoá các phiếu chưa trả và tính lại từ đầu. Mọi dòng bạn đã sửa tay sẽ mất. Chỉ khoản **Thưởng** và ghi chú liên quan được giữ. Vì vậy hãy làm theo thứ tự: sửa cấu hình, **Tính lại cả kỳ**, rồi mới sửa tay từng phiếu. Đã sửa tay xong thì đừng bấm **Tính lại cả kỳ** nữa. Chỉ cần tính lại một người, mở menu ba chấm ở dòng đó và chọn **Tính lại riêng người này**. Cách này cũng xoá phần sửa tay của người đó (giữ **Thưởng**), nhưng không đụng phiếu của người khác.
:::

## Duyệt và ghi nhận chi trả

::: steps
1. Kỳ đang **Nháp**: bấm **Trình duyệt** và đồng ý ở hộp xác nhận. Kỳ sang **Chờ duyệt**. Nếu kỳ đã tự sang **Chờ duyệt** thì bỏ qua bước này.
2. Bấm **Phê duyệt**. Kỳ sang **Đã duyệt**. Kỳ phải có ít nhất một phiếu mới duyệt được.
3. Chuyển lương cho nhân viên bằng ngân hàng của bạn, ngoài phần mềm.
4. Quay lại, bấm **Xác nhận chi trả**. Mọi phiếu chưa trả được ghi là đã trả, kỳ sang **Đã chi trả**.
:::

Nếu bạn chuyển cho từng người vào các ngày khác nhau, tích chọn phiếu rồi bấm **Đã chuyển khoản (N)** để ghi nhận người đã nhận tiền. Trả một phần chỉ làm được cho từng người một: mở menu ba chấm ở dòng đó, chọn **Đánh dấu đã chuyển khoản**, rồi chọn **Trả một phần** và nhập số tiền. Khi mọi phiếu đã trả đủ, kỳ tự chuyển sang **Đã chi trả**. Cách làm chi tiết ở [Quản lý lương](../nhan-su/bang-luong.md).

::: warning Mở lại và xoá
Kỳ **Đã duyệt** mà phát hiện sai thì bấm **Mở lại để sửa**, kỳ về **Chờ duyệt**, sửa phiếu rồi **Phê duyệt** lại. Kỳ **Đã chi trả** không mở lại được và không xoá được, nên chỉ bấm **Xác nhận chi trả** khi đã chắc số tiền.
:::

## Gửi phiếu cho nhân viên

Nhân viên xem phiếu ở **Cổng nhân viên → Phiếu lương**. Phiếu ở trạng thái **Nháp** mà chưa từng được gửi thì nhân viên chưa thấy. Khi bạn duyệt kỳ hoặc gửi phiếu thì phiếu mới hiện ra.

::: steps
1. Ở bảng **Phiếu lương đã tính**, mở menu ba chấm ở dòng nhân viên.
2. Chọn **Gửi bản nháp** (gửi để nhân viên soát, gửi được ở mọi trạng thái) hoặc **Gửi bản chính thức** (chỉ bấm được khi kỳ đã **Đã duyệt** hoặc **Đã chi trả**).
3. Muốn gửi nhiều người, tích chọn các phiếu rồi bấm **Gửi email (N)**. Kỳ còn **Nháp** hoặc **Chờ duyệt** thì gửi bản nháp, kỳ đã duyệt thì gửi bản chính thức. Giữ trang mở đến khi hệ thống báo gửi xong, vì phiếu được gửi lần lượt, cách nhau 5-10 giây.
:::

Mỗi lần gửi, nhân viên nhận thông báo trong phần mềm và thư kèm phiếu nếu có email. Nút gửi cần mẫu **Email gửi phiếu lương** đã được lưu. Chưa lưu thì hệ thống chặn cả việc gửi và báo **Chưa cấu hình mẫu email phiếu lương**. Cách lưu mẫu (chỉ Quản trị viên): **AI Hub → Tích hợp**, tab **Email**, tab con **Mẫu email**, như ở [Bước 6](06-ket-noi-zalo-ngan-hang-email.md). Mẫu có sẵn chưa tính là đã lưu, và nút **Lưu template** chỉ bấm được sau khi bạn sửa ít nhất một chữ. Email gửi đi còn cần thông tin gửi thư đã nhập ở [Email](../tich-hop/email.md).

::: warning Email lỗi vẫn báo thành công
Nếu thư không gửi được (ví dụ nhân viên chưa có email thật), hệ thống vẫn ghi phiếu là đã gửi và báo thành công. Nhân viên vẫn thấy phiếu trong Cổng nhân viên, nhưng thư không đến hộp thư. Sau khi gửi, mở tab **Lịch sử gửi phiếu**, xem cột **Kết quả**: dòng **Lỗi/không email** là thư chưa đến. Với những người đó, dặn họ mở phiếu ở **Cổng nhân viên → Phiếu lương**.
:::

## Các việc liên quan

- Nhân viên xin tạm ứng giữa tháng: xem [Tạm ứng lương](../nhan-su/tam-ung-luong.md) (tab **Tạm ứng** cùng trang). Khi bạn bấm **Xác nhận chi trả** hoặc đánh dấu đã chuyển khoản cho người đó, các khoản tạm ứng đã duyệt của kỳ chuyển sang **Đã trừ lương**.
- Đối chiếu ngày công theo từng ngày: xem [Bảng công tháng](../nhan-su/bang-cong-thang.md).
- Xem từng buổi dạy và xác nhận có mặt: xem [Buổi dạy](../nhan-su/buoi-day.md).
- Chỉnh thông tin công ty in trên phiếu: xem [Mẫu phiếu lương](../nhan-su/mau-phieu-luong.md).
- Đơn giá dạy và cách tính: xem [Cấu hình lương](../nhan-su/cau-hinh-luong.md).
- Phía nhân viên đọc phiếu: xem [Phiếu lương của tôi](../cong-nhan-vien/phieu-luong.md).

## Kiểm tra đã xong

- [ ] Kỳ lương của tháng đã được tạo và tính xong.
- [ ] Đã soát các phiếu theo danh sách, không còn phiếu 0đ bất thường.
- [ ] Đã sửa tay các phiếu cần sửa và không bấm **Tính lại cả kỳ** sau đó.
- [ ] Kỳ đã qua **Phê duyệt** và **Xác nhận chi trả**, trạng thái là **Đã chi trả**.
- [ ] Đã gửi phiếu cho nhân viên (hoặc chủ động không gửi email) và kiểm tra cột **Kết quả** ở tab **Lịch sử gửi phiếu**.

## Câu hỏi thường gặp

::: details Kỳ lương kẹt ở Nháp thì làm sao?
Có người tính lỗi, hoặc bạn đã tạo kỳ bằng **Tạo kỳ trống**. Hệ thống báo tên những người chưa tính được, họ nằm ở mục **Chưa tính lương**. Sửa cấu hình lương của họ rồi bấm **Tính lương** ở dòng từng người hoặc **Tính lương cả kỳ**, hoặc bấm **Trình duyệt** nếu bạn chấp nhận bỏ qua.
:::

::: details Giáo viên hỏi sao chưa thấy phiếu lương?
Phiếu chỉ hiện sau khi bạn duyệt kỳ hoặc gửi phiếu cho người đó. Kiểm tra trạng thái kỳ và bấm gửi nếu cần.
:::

::: details Có tính lại một người được không?
Được. Mở menu ba chấm ở dòng của người đó và chọn **Tính lại riêng người này**. Phiếu đã đánh dấu chuyển khoản không bị tính lại.
:::

::: details Dạy online có bị giảm lương không?
Không. Học online chỉ giảm học phí, không giảm lương dạy.
:::

## Bước tiếp theo

Sang [Bước 16: Theo dõi báo cáo và khoá sổ kỳ](16-theo-doi-bao-cao.md).
