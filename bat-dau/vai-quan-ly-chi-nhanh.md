---
title: "Hướng dẫn nhanh cho Quản lý chi nhánh"
description: "Việc hằng ngày, trong tháng và cuối tháng của người phụ trách nhân sự, lương và vận hành một cơ sở: duyệt chấm công và nghỉ phép, dạy thay, xử lý người nghỉ việc, chốt lương."
roles: [Quản lý chi nhánh, Quản trị viên]
plugin: "Nhân sự (HRIS) và Lương giáo viên"
order: 504
---

# Hướng dẫn nhanh cho Quản lý chi nhánh

Quản lý chi nhánh là người giữ sổ nhân sự và lương của một cơ sở: ai đang làm, ai nghỉ phép, ai dạy thay, tháng này trả cho mỗi người bao nhiêu. Bài này đi theo nhịp công việc, từ đầu ngày đến cuối tháng, và dẫn sang bài chi tiết khi cần. Quản trị viên làm các việc này cũng theo đúng cách dưới đây.

## Vai này khác các vai khác ở đâu

| Việc | Quản lý chi nhánh | Quản trị viên | Quản lý | Nhân sự |
| --- | --- | --- | --- | --- |
| Vào **Quản lý HR** (hồ sơ, bảng lương) | Có | Có | Chỉ **Dạy thay**, **Giao việc** | Không |
| Phạm vi dữ liệu | Chỉ chi nhánh của mình | Mọi chi nhánh | Chi nhánh của mình | Chỉ việc của chính mình |
| Tạo kỳ lương, duyệt, chi trả | Có, cho chi nhánh của mình | Có | Không | Không |
| Tạo tài khoản ở **Quản trị hệ thống** | Không | Có | Không | Không |
| Khoá sổ kỳ ở Kế toán | Không | Có | Không | Không |
| Đổi nhân viên sang **Đã nghỉ việc** bằng biểu tượng thùng rác | Không | Có | Không | Không |

Vai **Nhân sự** (chữ trong danh sách vai) chỉ là nhân viên văn phòng dùng **Cổng nhân viên** để chấm công, xem phiếu lương và xin nghỉ phép của chính mình. Người làm hồ sơ và lương cho cả cơ sở là **Quản lý chi nhánh**, xem [Bước 3](03-tao-tai-khoan-nhan-vien.md).

Vai **Quản lý** thấy mục **Quản lý HR** nhưng chỉ làm được vài việc trong đó: duyệt **Dạy thay**, **Giao việc** (khi trung tâm có gói **Giao việc Nội bộ**) và (khi được giao quyền) **Lịch ca lễ tân**. Bấm vào **Quản lý lương** hay **Điểm danh nhân viên** thì Quản lý gặp thẻ **Không có quyền**.

::: warning Chi nhánh phải được gán
Tài khoản Quản lý chi nhánh chưa gắn chi nhánh sẽ không xem được bảng lương và danh sách nhân viên. Nếu gặp thông báo kiểu "Không có quyền: tài khoản chưa gán chi nhánh", nhờ Quản trị viên gắn chi nhánh cho bạn ở **Quản trị hệ thống → Quản lý Users**.
:::

## Trước khi bắt đầu: kiểm tra hai gói

Khu **Quản lý HR** cần gói **Nhân sự (HRIS)**, còn tạo kỳ lương và duyệt lương cần gói **Lương giáo viên**. Thiếu gói nào thì các mục thuộc gói đó không hiện trong menu: **Quản lý lương** và **Mẫu phiếu lương** thuộc gói **Lương giáo viên**, **Giao việc** thuộc gói **Giao việc Nội bộ**, các trang AI nhân sự (như **HR AI Insights**, **Kiểm tra Lương AI**) thuộc gói AI gợi ý và trợ lý vận hành, hầu hết mục còn lại thuộc gói **Nhân sự (HRIS)**. Riêng **Dạy thay** luôn hiện. Mục không thấy trong menu là do trung tâm chưa có gói, không phải lỗi hệ thống.

Vào **Cài đặt → Plugin Marketplace** để xem gói nào đang bật, xem lại [Bước 1](01-dang-nhap-lan-dau.md). Chưa có gói thì nhờ Quản trị viên liên hệ KLASSA.

Hồ sơ nhân sự và cách tính lương phải khai xong trước khi chạy lương: làm theo [Bước 4](04-ho-so-nhan-su-va-cach-tinh-luong.md).

## Đầu ngày: xem việc cần xử lý

::: steps
1. Vào **Quản lý HR → Dashboard HR**. Tiêu đề trang là **Quản lý Nhân sự**.
2. Xem bốn ô số liệu: **Tổng nhân viên**, **Chấm công hôm nay**, **Đang nghỉ phép**, **HĐ sắp hết hạn**.
3. Nếu có dải vàng **Cần xử lý**, bấm từng mục để mở đúng trang: đơn nghỉ phép, đơn tăng ca, yêu cầu đổi hồ sơ, người sắp hết thử việc, hợp đồng sắp hết hạn.
:::

Xem thêm [Tổng quan nhân sự](../nhan-su/tong-quan.md).

## Trong tuần: duyệt và theo dõi

Những việc dưới đây xuất hiện đều đặn. Mỗi việc có bài riêng, ở đây chỉ nói khi nào cần làm.

- **Duyệt chấm công**: nhân viên chấm công mà hệ thống không xác thực được vị trí, hoặc quên chấm ra, sẽ chờ bạn duyệt. Vào **Quản lý HR → Điểm danh nhân viên**, bấm nút **Duyệt chấm công** ở đầu trang rồi chọn tab **Chờ duyệt**. Xem [Điểm danh nhân viên](../nhan-su/cham-cong.md).
- **Duyệt nghỉ phép**: vào **Quản lý HR → Nghỉ phép**. Xem [Nghỉ phép](../nhan-su/ngay-phep.md).
- **Duyệt tăng ca**: vào **Quản lý HR → Duyệt tăng ca**. Xem [Duyệt tăng ca](../nhan-su/don-tang-ca.md).
- **Duyệt yêu cầu đổi hồ sơ**: vào **Quản lý HR → Yêu cầu hồ sơ**. Xem [Yêu cầu chỉnh hồ sơ](../nhan-su/yeu-cau-chinh-ho-so.md).
- **Duyệt dạy thay**: khi giáo viên hoặc trợ giảng không dạy được một buổi, yêu cầu dạy thay được tạo ở **Điểm danh → Điểm danh cơ bản**, rồi bạn vào **Quản lý HR → Dạy thay** bấm **Duyệt** hoặc **Từ chối** (từ chối thì phải nhập lý do). Chỉ khi duyệt, tiền buổi đó mới chuyển sang người thay. Xem [Dạy thay](../nhan-su/dan-day-thay.md) và [Bước 11](11-thay-doi-trong-thang.md).

::: tip Mẹo
Duyệt đơn nghỉ phép của giáo viên không tự đổi người đứng lớp. Nếu giáo viên nghỉ một buổi mà không ai tạo yêu cầu dạy thay, giáo viên chính vẫn được tính tiền buổi đó. Hãy hỏi lại ngay khi duyệt nghỉ.
:::

## Khi có nhân viên mới

::: steps
1. Nhờ Quản trị viên tạo tài khoản đúng vai và đúng chi nhánh ([Bước 3](03-tao-tai-khoan-nhan-vien.md)). Bạn không tạo được tài khoản ở **Quản trị hệ thống**.
2. Vào **Quản lý HR → Nhân viên**, bấm nút **Chỉnh sửa** (biểu tượng cây bút) ở dòng người đó, sửa lại **Loại hình làm việc**, **Loại hợp đồng**, **Lương cơ bản** cho đúng thực tế rồi bấm **Cập nhật**.
3. Với giáo viên và trợ giảng, khai đơn giá dạy ở **Quản lý HR → Quản lý lương**, tab **Đơn giá dạy (GV/TG)**. Với lễ tân làm bán thời gian, tick ô **Đăng ký ca lễ tân (part-time)** để họ tự đăng ký ca được.
:::

Từng ô và thứ tự đầy đủ nằm ở [Bước 4](04-ho-so-nhan-su-va-cach-tinh-luong.md). Xem thêm [Danh sách và hồ sơ nhân viên](../nhan-su/danh-sach-nhan-vien.md) và [Onboarding và nghỉ việc](../nhan-su/onboarding.md).

::: warning Thêm nhân viên ở trang Nhân viên cũng tạo tài khoản
Nếu email chưa có tài khoản, nút **Thêm nhân viên** tạo luôn một tài khoản với vai **Giáo viên** và mật khẩu khởi đầu do hệ thống đặt sẵn, người đó bị buộc đổi mật khẩu lần đăng nhập đầu. Với người không làm giáo viên, hãy nhờ Quản trị viên tạo tài khoản đúng vai trước, rồi mới thêm hồ sơ.
:::

## Khi có người nghỉ việc

Chuyển nhân viên sang **Đã nghỉ việc** khoá tài khoản của họ và tự gỡ họ khỏi mọi lớp họ đang dạy hoặc làm trợ giảng. Phân công được đóng lại chứ không xoá, ngày kết thúc là ngày nghỉ, nên buổi người đó đã dạy trước ngày nghỉ vẫn được trả lương như cũ. Người đó quay lại làm thì các lớp cũ không tự gắn lại, bạn phải xếp lớp bằng tay. Vì vậy việc đổi người ở từng lớp không còn bắt buộc phải làm trước, nhưng nên làm để phụ huynh thấy đúng giáo viên. Thứ tự gợi ý:

::: steps
1. Vào **Lớp học**, mở từng lớp của người đó, bấm **Chỉnh sửa**. Đổi **Giáo viên** (điền **Ngày nhận lớp** là ngày người mới bắt đầu dạy) hoặc bỏ tích người đó ở ô **Trợ giảng**, rồi bấm **Lưu thay đổi**. Xem [Bước 7](07-tao-lop-va-lich-hoc.md).
2. Với các buổi sắp tới chưa kịp đổi lớp, dùng yêu cầu **Dạy thay**.
3. Chốt lương tháng cuối của người đó ở [Bước 15](15-chot-luong-cuoi-thang.md).
4. Vào **Quản lý HR → Nhân viên**, bấm nút **Chỉnh sửa** (biểu tượng cây bút) ở dòng người đó, đổi ô **Trạng thái** sang **Đã nghỉ việc**, sửa ô **Ngày kết thúc** thành ngày làm việc cuối cùng thật của người đó, rồi bấm **Cập nhật** (làm cả hai trong cùng một lần lưu).
:::

Hệ thống lấy ngày ở ô **Ngày kết thúc** làm ngày đóng lớp khi bạn vừa sửa ô này trong lần lưu đó và ngày ấy không ở tương lai. Không thì dùng ngày hôm nay, nên hãy đổi trạng thái đúng vào ngày người đó nghỉ. Nếu đổi trạng thái trước khi giao lớp, người đó không còn trong bộ lọc **Giáo viên** của **Lớp học**. Lớp thường mất giáo viên chính sẽ hiện ở việc **Chưa có giáo viên chính** trong thẻ **Việc cần làm** của trang **Lớp học**.

Biểu tượng thùng rác ở cuối dòng chỉ Quản trị viên dùng được. Muốn xoá hẳn hồ sơ, nhờ Quản trị viên.

::: warning Đừng tính lại kỳ lương cũ sau khi cho nghỉ
Bảng lương một tháng chỉ lấy người đang làm việc, hoặc người **Đã nghỉ việc** mà **Ngày kết thúc** rơi đúng vào tháng đó. Vì vậy ô **Ngày kết thúc** phải là ngày thật (ô này có thể đang giữ ngày cũ từ lúc tạo hồ sơ), và nếu sang tháng sau bạn bấm tính lại kỳ tháng trước thì người nghỉ có thể không còn phiếu. Chốt xong lương tháng cuối rồi mới cho nghỉ.
:::

## Trong tháng: soát số liệu trước khi tính lương

Lương dạy tính theo các buổi đã có người lưu điểm danh trong thời gian người đó được xếp vào lớp (xem [Bước 7](07-tao-lop-va-lich-hoc.md) và [Bước 10](10-diem-danh-buoi-dau.md)), còn lương nền tính theo ca và giờ chấm công. Vì vậy cuối mỗi tuần nên soát nhanh bốn nơi.

| Nơi xem | Soát gì | Bài chi tiết |
| --- | --- | --- |
| **Quản lý HR → Giờ dạy** | Buổi dạy của giáo viên, tiền dạy ước tính, buổi còn thiếu cần thêm | [Giờ dạy](../nhan-su/buoi-day.md) |
| **Quản lý HR → Bảng công tháng** | Cả tháng của mọi người trên một bảng, kèm ngày cần kiểm tra | [Bảng công tháng](../nhan-su/bang-cong-thang.md) |
| **Quản lý HR → Điểm danh nhân viên** | Lần chấm công còn chờ duyệt | [Điểm danh nhân viên](../nhan-su/cham-cong.md) |
| **Quản lý HR → Lịch ca lễ tân** | Lễ tân bán thời gian đăng ký và được xếp ca nào | [Lịch ca lễ tân](../nhan-su/lich-ca-le-tan.md) |

::: warning Lịch ca lễ tân không mặc định có cho Quản lý chi nhánh
Chỉ Quản trị viên luôn vào được **Lịch ca lễ tân**. Quản lý chi nhánh chỉ vào được khi Quản trị viên đã thêm bạn vào danh sách quản lý ca ở **Quản lý HR → Cấu hình HR**, tab **Ca lễ tân**, khối **Người được xếp & quản lý ca lễ tân**.
:::

Một người chưa duyệt công hay thiếu buổi dạy ở đây sẽ làm phiếu lương thiếu tiền. Nên xử lý hết trước khi sang cuối tháng.

## Cuối tháng: chốt lương

Chốt lương gồm các việc: tạo kỳ lương, tính, soát cảnh báo, trình duyệt, phê duyệt, ghi nhận chuyển khoản và gửi phiếu. Kỳ đi qua bốn trạng thái: **Nháp**, **Chờ duyệt**, **Đã duyệt**, **Đã chi trả**. Từng thao tác ở [Bước 15](15-chot-luong-cuoi-thang.md), bài chi tiết là [Quản lý lương](../nhan-su/bang-luong.md).

Mở **Quản lý HR → Quản lý lương**, tab **Tính lương**. Quản lý chi nhánh chỉ thấy và chạy kỳ lương của chi nhánh mình, Quản trị viên thấy tất cả.

::: danger Tính lại sẽ xoá phần bạn đã sửa tay
**Tính lại cả kỳ** tính mới toàn bộ phiếu chưa chi trả. Các dòng bạn đã sửa tay trên phiếu sẽ mất, chỉ khoản **Thưởng** (kèm ghi chú của phiếu có thưởng) được giữ. Phiếu đã chuyển khoản không bị tính lại. Nếu đã sửa tay phiếu nào, đừng bấm tính lại cả kỳ. Chỉ cần tính lại một người thì mở menu **⋯** ở dòng phiếu của người đó và chọn **Tính lại riêng người này** (chỉ có khi kỳ còn **Nháp** hoặc **Chờ duyệt**).
:::

Sau khi chốt lương, bạn còn hai việc cuối tháng:

- Khoá sổ kỳ ở **Tài chính → Kế toán → Khoá sổ kỳ**: chỉ Quản trị viên và Kế toán khoá được, bạn không thấy mục này. Soát số xong thì nhờ Quản trị viên hoặc Kế toán khoá, xem [Bước 16](16-theo-doi-bao-cao.md).
- Xem **Báo cáo HR** và tải các báo cáo chấm công, lương, bảo hiểm, thuế gửi kế toán: [Báo cáo HR](../nhan-su/bao-cao-hr.md).

## Việc của chính bạn

Bạn cũng là nhân viên nên có **Cổng nhân viên** như mọi người: chấm công, xem **Phiếu lương**, xin **Nghỉ phép**. Xem [Giới thiệu Cổng nhân viên](../cong-nhan-vien/gioi-thieu.md). Quản lý chi nhánh không tự duyệt lần chấm công của chính mình, cần người khác duyệt.

## Câu hỏi thường gặp

::: details Tôi không thấy một mục trong Quản lý HR (ví dụ Quản lý lương hoặc Nhân viên)?
Trung tâm chưa có gói chứa mục đó, hoặc gói đã hết hạn. **Nhân viên** cần gói **Nhân sự (HRIS)**, **Quản lý lương** cần gói **Lương giáo viên**. Nhờ Quản trị viên kiểm tra ở **Cài đặt → Plugin Marketplace** và liên hệ KLASSA.
:::

::: details Tôi không thấy nhân viên của chi nhánh khác?
Đúng như thiết kế. Quản lý chi nhánh chỉ thấy người và dữ liệu thuộc chi nhánh của mình. Chỉ Quản trị viên thấy mọi chi nhánh.
:::

::: details Kế toán có chạy được lương không?
Mặc định là không. Kế toán lo học phí và sổ sách thu tiền, còn người chạy lương là Quản lý chi nhánh hoặc Quản trị viên.
:::

::: details Tôi muốn tạo tài khoản cho nhân viên mới thì sao?
Nhờ Quản trị viên, vì khu **Quản trị hệ thống** chỉ Quản trị viên vào được. Xem [Bước 3](03-tao-tai-khoan-nhan-vien.md).
:::

::: details Tôi muốn khoá sổ kỳ nhưng không thấy quyền?
Khoá sổ kỳ chỉ Quản trị viên và Kế toán làm được. Quản lý chi nhánh xem báo cáo và chuẩn bị số liệu, rồi nhờ Quản trị viên hoặc Kế toán khoá.
:::
