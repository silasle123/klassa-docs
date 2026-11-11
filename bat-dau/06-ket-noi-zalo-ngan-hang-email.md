---
title: "Bước 6: Kết nối Zalo, ngân hàng và email gửi đi"
description: "Nối sẵn Zalo, tài khoản ngân hàng và email gửi đi để phiếu học phí đến được phụ huynh và tiền chuyển khoản tự khớp."
roles: [Quản trị viên, Quản lý chi nhánh]
plugin: "Zalo (Cá nhân + OA)"
order: 60
---

# Bước 6: Kết nối Zalo, ngân hàng và email gửi đi

Trước khi có học sinh, bạn nên nối sẵn các kênh để phiếu học phí đến được phụ huynh và tiền chuyển khoản tự khớp vào đúng phiếu. Cả ba kênh đều là tuỳ chọn. Chưa làm kênh nào thì vẫn vận hành được: bạn gửi phiếu bằng tay rồi đánh dấu đã gửi, và ghi nhận tiền bằng tay ở [Bước 14](14-gui-phieu-va-thu-tien.md).

## Mục tiêu

- Có một nick Zalo đang hoạt động và đã chia sẻ cho Kế toán (nếu Kế toán gửi phiếu).
- (Nếu dùng) Ngân hàng đã nối qua SePay: đã lưu khoá, đã khai mục **Webhooks** bên SePay và bấm **Test Webhook** báo thành công.
- (Nếu dùng) Email gửi đi đã lưu và gửi thử nhận được thư.

## Cần có trước

- Đã xong [Bước 5: Cấu hình học phí](05-cau-hinh-hoc-phi.md). Nếu muốn nối ngân hàng, hãy điền sẵn **Số tài khoản** ở **Mẫu hóa đơn** của bước đó.
- Đã tạo tài khoản cho Kế toán ở [Bước 3](03-tao-tai-khoan-nhan-vien.md) (nếu Kế toán sẽ gửi phiếu).
- Một số Zalo riêng của trung tâm và điện thoại đang cầm Zalo đó, để quét mã QR.
- Gói mở rộng **Zalo (Cá nhân + OA)** đã bật. Gói này không tự bật được: ở **Plugin Marketplace**, thẻ gói chưa bật chỉ có nút **Liên hệ KLASSA**. Chưa có gói thì bỏ qua phần Zalo.
- Muốn nối ngân hàng: trung tâm tự đăng ký tài khoản ở my.sepay.vn (dịch vụ của bên thứ ba) và gắn tài khoản ngân hàng vào đó.
- Muốn gửi email: địa chỉ email, máy chủ gửi thư và mật khẩu của email đó. Với Gmail, cần **Mật khẩu ứng dụng** của Google, không dùng mật khẩu đăng nhập thường.

## Phần 1: Nối nick Zalo gửi phiếu

Zalo là cách nhanh nhất để gửi phiếu học phí và nhắn phụ huynh. Dùng nick của trung tâm, quét mã QR một lần là xong.

::: steps
1. Vào **AI Hub → Tích hợp**, mở tab **Zalo**, rồi mở tab con **Zalo cá nhân**. Tab con **Tài khoản** mở sẵn.
2. Bấm **Thêm tài khoản**. Hộp **Thêm acc Zalo mới** hiện ra.
3. Nhập **Tên gọi** (bắt buộc, ví dụ "Zalo Cầu Giấy") rồi bấm **Tạo**. Nick xuất hiện với trạng thái **Cần quét QR**.
4. Bấm **Quét QR** trên thẻ nick. Hộp **Quét QR đăng nhập** hiện mã.
5. Trên điện thoại, mở Zalo, vào Cài đặt, chọn Quét QR, quét mã rồi xác nhận trên điện thoại.
6. Khi trạng thái đổi sang **Đang hoạt động**, nick đã nối xong.
:::

Nếu hộp báo QR hết hạn hoặc lỗi, đóng hộp rồi bấm **Quét QR** lần nữa để lấy mã mới.

Chỉ đăng nhập bằng mã QR, bạn không nhập số điện thoại hay mật khẩu Zalo vào KLASSA.

::: warning Mỗi nick chỉ giữ một phiên web
Nếu có người mở Zalo Web (chat.zalo.me) bằng cùng số, phiên trong KLASSA tự dừng. Hãy dùng một số Zalo riêng cho trung tâm, không dùng số cá nhân của nhân viên.
:::

### Chọn nick gửi mặc định

Cùng tab **Tài khoản**, kéo xuống có mục **Nick gửi mặc định (hoá đơn / thông báo gửi tay)**. Ô chọn đang để **Tự động**, nghĩa là phiếu đi từ nick đang chat với phụ huynh đó.

Trung tâm chỉ có một nick thì có thể để nguyên **Tự động**: hộp **Gửi Zalo** ở phiếu học phí tự chọn nick duy nhất đó. Chỉ khi có từ hai nick trở lên và muốn mọi phiếu đi từ một nick, hãy chọn nick đó trong ô này. Khi lưu, màn hình báo "Đã đặt nick gửi mặc định". Lưu ý hai điều:

- Khi đã chọn một nick cụ thể, phụ huynh chưa từng chat với nick đó sẽ bị bỏ qua và hiện báo "chưa kết nối". Cách xử lý ở [Bước 14](14-gui-phieu-va-thu-tien.md).
- Nick mặc định mà mất đăng nhập thì các lần gửi tự động dừng, hệ thống không tự đổi sang nick khác và gửi chuông báo cho Quản trị viên. Khi gửi tay, hộp **Gửi Zalo** báo "Nick gửi mặc định đã rớt đăng nhập" và tạm chuyển sang **Tự động** cho lần gửi đó. Bạn quét QR lại ở chính trang này.

### Chia sẻ nick cho Kế toán

Nếu Kế toán sẽ gửi phiếu, bạn phải chia sẻ nick cho họ. Không chia sẻ thì Kế toán gửi sẽ gặp lỗi "Không có quyền truy cập account này", kể cả khi nick đó là nick mặc định.

::: steps
1. Ở thẻ nick, bấm **Chia sẻ**. Hộp **Chia sẻ acc Zalo** hiện ra.
2. Tick **Bật chia sẻ**. Quản trị viên và Quản lý chi nhánh luôn có quyền, không cần chọn.
3. Gõ tên vào ô **Tìm user theo tên/email**, tick người cần chia sẻ (ví dụ Kế toán).
4. Bấm **Lưu cấu hình chia sẻ**. Màn hình báo "Đã cập nhật chia sẻ".
:::

Danh sách chọn không có Giáo viên, Trợ giảng, Nhân sự và Phụ huynh. Giáo viên và Trợ giảng không dùng chung nick của trung tâm, nhưng có thể tự nối nick riêng (xem phần giáo viên bên dưới).

### Nick nối trước khi thêm học sinh thì tiện hơn

Khi bạn thêm **từng** học sinh ở [Bước 8](08-them-hoc-sinh-phu-huynh.md), nếu gói Zalo đã bật và có nick đang hoạt động, hệ thống tự tìm Zalo theo số điện thoại phụ huynh và gửi lời mời kết bạn. Việc này không chạy khi bạn nhập học sinh bằng file Excel. Nếu nối Zalo muộn, bạn vẫn mời bạn phụ huynh bằng tay được ở Bước 14.

### Giáo viên muốn gửi Zalo thì tự nối nick của mình

Giáo viên, Trợ giảng và Lễ tân dùng nick riêng để gửi **Phiếu tháng** cho phụ huynh. Mỗi người phải tự nối ở **Cổng nhân viên → Zalo của tôi** (xem [Zalo của tôi](../tin-nhan/zalo-cua-toi.md)). Bạn có thể nhắn họ làm ngay khi nhận tài khoản. Chi tiết gửi phiếu tháng ở [Bước 12](12-bao-ket-qua-hoc-tap.md).

::: tip Mẹo
Trang này còn có tab con **Mẫu trả lời nhanh**, **Trả lời tự động**, **Nhãn Zalo**, **Định tuyến thông báo** và **Lịch sử**. Chưa cần đụng tới trong ngày đầu. Xem [Kết nối Zalo cá nhân](../tich-hop/zalo-ca-nhan.md) khi cần.
:::

### Zalo OA (không bắt buộc)

Zalo OA là kênh gửi một chiều theo mẫu tin Zalo đã duyệt, có phí và cần nhiều thủ tục. Người mới nên bắt đầu bằng nick cá nhân ở trên. Nếu sau này muốn dùng OA, xem [Kết nối Zalo OA](../tich-hop/zalo-oa.md).

## Phần 2: Nối ngân hàng qua SePay

Khi phụ huynh chuyển khoản, SePay báo cho KLASSA và phiếu tự được ghi nhận đã thanh toán. KLASSA chỉ nhận thông báo "có tiền vào", không rút hay chuyển tiền.

::: steps
1. Vào **Tài chính → Thanh toán**, mở tab **SePay**. Tab này chỉ hiện với người có quyền quản lý thanh toán học phí (mặc định là Quản trị viên, Quản lý chi nhánh và Kế toán).
2. Ở mục **Bảo mật webhook (API Key)**, bấm **Tạo ngẫu nhiên** để có một khoá, rồi bấm **Lưu key**. Khoá phải từ 32 ký tự trở lên, ngắn hơn thì báo "Key phải ≥ 32 ký tự".
3. Ở mục **Cấu hình Webhook**, bấm sao chép **Webhook URL**.
4. Đăng nhập my.sepay.vn, mở **Webhooks**, tạo mới: **Bắn khi** chọn "Có tiền vào", **Gọi đến URL** dán đường dẫn vừa sao chép, **Content-Type** là application/json.
5. Ở phần xác thực **Authorization** của SePay, chọn **Api Key** và nhập đúng khoá ở thao tác 2.
6. Quay lại KLASSA, bấm **Test Webhook**. Thấy "Webhook hoạt động bình thường!" là xong.
:::

Chưa lưu khoá thì hệ thống từ chối mọi giao dịch SePay gửi tới. Đây là mặc định an toàn, nên không làm thao tác 2 thì tiền sẽ không tự khớp.

Đầu tab có thẻ trạng thái. Bình thường thẻ ghi **Đang hoạt động** kèm nút **Ngắt kết nối** (bấm sẽ có hộp xác nhận). Sau khi ngắt, thẻ ghi **Đã ngắt kết nối**, hệ thống từ chối mọi giao dịch SePay gửi tới dù phía SePay vẫn còn cài đặt, còn giao dịch và hoá đơn đã ghi nhận giữ nguyên. Muốn nhận tiền tự động lại, bấm **Bật lại kết nối**. Nếu tiền chuyển khoản mà không thấy giao dịch nào hiện lên, hãy kiểm tra thẻ này trước.

::: warning Test Webhook chỉ thử bên KLASSA
Nút này tự gửi một giao dịch thử 1 đồng cho chính KLASSA, không đi qua SePay. Vì vậy nó báo thành công cũng chưa chứng tỏ SePay đã gọi tới được. Giao dịch thử hiện trong mục **Giao dịch gần đây**, ở trạng thái **Chưa khớp**, bạn bỏ qua được. Kiểm tra thật: khi phụ huynh đầu tiên chuyển khoản ở [Bước 14](14-gui-phieu-va-thu-tien.md), xem giao dịch có hiện ở **Giao dịch gần đây** không. Nếu không hiện, soát lại thao tác 4 và 5 ở trên.
:::

::: warning Điều kiện để tiền tự khớp
- Phụ huynh phải ghi **mã hoá đơn** (dạng `INV-YYYYMM-XXXX`) trong nội dung chuyển khoản. Hãy dùng kiểu **QR động VietQR** ở **Mẫu hóa đơn**, mã này được điền sẵn vào nội dung khi phụ huynh quét QR.
- **Số tài khoản** ở **Mẫu hóa đơn** (vào **Tài chính → Kế toán → Mẫu hóa đơn**) nên là đúng tài khoản đã gắn với SePay. Nếu tiền chuyển vào tài khoản khác, SePay không thấy giao dịch nên KLASSA không nhận được gì. Mẫu hoá đơn chưa lưu thì chưa có số tài khoản nào, cần nhập ở [Bước 5](05-cau-hinh-hoc-phi.md).
- Giao dịch không có mã hoặc không khớp phiếu nào được lưu ở trạng thái **Chưa khớp**. Kế toán xử lý ở tab **Đối soát**.
:::

Chi tiết đầy đủ, kể cả cách khớp tay, xem [Kết nối ngân hàng](../tich-hop/ngan-hang.md).

## Phần 3: Cài email gửi đi

Email dùng để gửi phiếu học phí cho phụ huynh có email thật, gửi phiếu lương cho nhân viên và một số thông báo tự động. Chỉ **Quản trị viên** thấy tab này.

::: steps
1. Vào **AI Hub → Tích hợp**, mở tab **Email**, mục **SMTP**.
2. Điền **SMTP Host** (ví dụ smtp.gmail.com), **Username / Email** và **Password / App Password**. Ba ô này bắt buộc.
3. Ô **Port** mặc định 587. Dùng 465 thì bật công tắc **Kết nối bảo mật (SSL)**.
4. Điền **Tên người gửi** và **Email người gửi**, đây là tên và địa chỉ phụ huynh nhìn thấy trong thư.
5. Bấm **Lưu cấu hình SMTP**. Đầu mục hiện dòng "Email đã được cấu hình".
6. Ở mục **Kiểm tra kết nối**, nhập một email của bạn rồi bấm **Gửi email test**. Mở hộp thư xem đã nhận chưa.
:::

Email phiếu học phí gửi từng phiếu ở **Tài chính → Kế toán → Hoá đơn chi tiết**: bấm nút ba chấm ở cuối dòng (chú thích **Thao tác khác**) rồi chọn **Gửi email**. Chưa cài email thì thao tác này báo "SMTP chưa được cấu hình" và nhắc bạn vào **AI Hub → Tích hợp → tab Email → mục SMTP** để thiết lập như các bước trên. Khi chưa cài xong, bạn dùng Zalo hoặc gửi tay. Muốn gửi email cho phụ huynh, học sinh phải có phụ huynh và phụ huynh phải có email thật, nếu không hệ thống báo "Học sinh chưa có phụ huynh hoặc phụ huynh chưa có email".

### Lưu mẫu email phiếu lương (nếu sẽ gửi phiếu lương)

Muốn gửi phiếu lương qua email ở [Bước 15](15-chot-luong-cuoi-thang.md), bạn phải lưu mẫu email phiếu lương trước. Chưa lưu thì hệ thống chặn và báo "Chưa cấu hình mẫu email phiếu lương".

::: steps
1. Ở tab **Email**, mở tab con **Mẫu email**.
2. Bấm dòng **Email gửi phiếu lương** trong danh sách. Dòng chưa lưu có nhãn **Mặc định**.
3. Nội dung có sẵn dùng được. Nút **Lưu template** chỉ bấm được khi bạn đã sửa gì đó, nên hãy chỉnh một chữ ở **Subject** hoặc **Body** (có thể bấm **Xem trước** để xem thư).
4. Bấm **Lưu template**. Màn hình báo "Đã lưu template" và dòng đổi nhãn thành **Đã tuỳ biến**.
:::

Thông tin công ty in trên phiếu lương khai ở [Mẫu phiếu lương](../nhan-su/mau-phieu-luong.md).

::: warning Lưu ý
Khi gửi phiếu lương, nếu email lỗi thì hệ thống vẫn báo gửi thành công. Muốn biết thư nào lỗi, mở **Quản lý HR → Quản lý lương**, tab **Lịch sử gửi phiếu**, xem cột **Kết quả**: dòng **Lỗi/không email** là thư chưa đến. Mục **Lịch sử** của tab **Email** không ghi các thư phiếu lương này.
:::

## Kiểm tra đã xong

- [ ] Nick Zalo của trung tâm có trạng thái **Đang hoạt động**.
- [ ] Đã chia sẻ nick cho Kế toán (nếu Kế toán gửi phiếu).
- [ ] Đã nhắn giáo viên tự nối **Zalo của tôi** (nếu giáo viên sẽ gửi phiếu tháng).
- [ ] Đã lưu khoá, khai mục **Webhooks** bên SePay và bấm **Test Webhook** ở tab **SePay** báo thành công (nếu dùng ngân hàng).
- [ ] **Gửi email test** nhận được thư (nếu dùng email).
- [ ] Dòng **Email gửi phiếu lương** ở **Mẫu email** đã có nhãn **Đã tuỳ biến** (nếu sẽ gửi phiếu lương qua email).

## Câu hỏi thường gặp

::: details Chưa muốn nối kênh nào, có vận hành được không?
Được. Bạn gửi phiếu bằng tay rồi đánh dấu đã gửi, và ghi nhận tiền bằng tay. Các kênh này chỉ giúp đỡ việc, có thể nối sau khi trung tâm đã chạy ổn.
:::

::: details Kế toán gửi Zalo báo "Không có quyền truy cập account này"?
Nick chưa được chia sẻ cho Kế toán. Quản trị viên làm lại phần **Chia sẻ nick cho Kế toán** ở trên.
:::

::: details Nick Zalo báo Hết phiên?
Có thể ai đó đã mở Zalo Web bằng cùng số. Vào lại **AI Hub → Tích hợp**, tab **Zalo**, tab con **Zalo cá nhân**, bấm **Quét QR** trên thẻ nick (nút này chỉ đổi tên thành **Login lại** khi nick đang hoạt động) rồi quét mã.
:::

::: details Kế toán không thấy tab SePay?
Tab chỉ hiện với người có quyền quản lý thanh toán học phí. Kiểm tra vai của người đó ở [Bước 3](03-tao-tai-khoan-nhan-vien.md).
:::

## Bước tiếp theo

Tiếp tục với [Bước 7: Tạo lớp, xếp giáo viên, trợ giảng và lịch học](07-tao-lop-va-lich-hoc.md).
