# Kết nối Zalo OA (Official Account)

## Hai kênh Zalo trong KLASSA

| | **Zalo OA (chính thức)** | **Zalo cá nhân** |
|--|--------------------------|-------------------|
| Bản chất | Gửi **1 chiều** qua API chính thức (ZNS) | Chat **2 chiều** kiểu Messenger |
| Gửi theo | **Số điện thoại** (phụ huynh không cần kết bạn) | Hội thoại trực tiếp |
| Mẫu tin | Template ZNS **đã được Zalo duyệt** | Tự do gõ tay |
| Chi phí | Trả phí ZNS theo Zalo | Miễn phí |
| Tài liệu | **Bài này** | [Kết nối Zalo cá nhân](zalo-ca-nhan.md) |

Bài này hướng dẫn **chi tiết từng bước** thiết lập Zalo OA để gửi tin nhắc học phí / biên nhận / nhắc lịch học cho phụ huynh một cách chính thống.

## Điều kiện trước khi bắt đầu

- Đã bật **plugin "Zalo (Cá nhân + OA)"** (xem [Plugin Marketplace](../plugin/gioi-thieu.md)).
- Có **Zalo OA** của trung tâm đã **được xác thực** (có dấu tích) tại oa.zalo.me.
- Có **App** gắn với OA, tạo tại developers.zalo.me (để lấy App ID / App Secret).
- Mỗi **chi nhánh** dùng 1 OA riêng (nếu trung tâm nhiều cơ sở).

## Truy cập

Menu trái → **Tích hợp & API** (`/integrations`) → tab **"Zalo"** → sub-tab **"Zalo OA (chính thức)"**.

![Tab Zalo — 3 sub-tab](../assets/screenshots/zalo-oa-tab-overview.png)

> Nếu trên cùng hiện cảnh báo đỏ "Chưa cấu hình khoá mã hoá" → báo KLASSA bật biến môi trường mã hoá trước, nếu không sẽ không lưu được bí mật OA.

---

## Bước 1 — Cắm Zalo OA (nhập App ID / App Secret / OA ID)

Tại card **"Cắm Zalo OA"**, nhập 3 ô (lấy ở developers.zalo.me, app gắn với OA của trung tâm):

- **OA ID** — mã tài khoản Official Account
- **App ID**
- **App Secret**

Bấm **"Lưu cấu hình"**. Hệ thống báo "Đã lưu cấu hình OA. Bấm Kết nối OA để uỷ quyền."

![Card Cắm Zalo OA + Callback URL](../assets/screenshots/zalo-oa-config-form.png)

> Toàn bộ lưu mã hoá an toàn trong hệ thống. **Không cần nhập Access Token** — phần mềm tự lấy ở Bước 3.

---

## Bước 2 — Khai Callback URL vào app OA ⚠ (quan trọng)

Ngay dưới nút Lưu có ô **"Callback URL"** (chỉ đọc) — đây là địa chỉ KLASSA tự sinh. **Bắt buộc:**

1. Bấm vào ô để bôi đen → **copy** URL đó.
2. Vào app OA trên **developers.zalo.me** → mục **Callback URL / Redirect URI** → **dán chính xác** URL này vào → lưu.

> Nếu thiếu / sai bước này, khi bấm "Kết nối OA" sẽ báo lỗi **`-14003 Invalid redirect uri`**. Đây là lỗi phổ biến nhất khi setup.

---

## Bước 3 — Kết nối OA (uỷ quyền)

Sau khi lưu cấu hình, card **"OA đã kết nối"** hiện ra. Bấm **"Kết nối OA"**:

- Phần mềm chuyển sang trang cấp quyền của Zalo → đăng nhập Zalo (đúng tài khoản quản lý OA) → đồng ý cấp quyền.
- Zalo chuyển ngược về KLASSA, hiện thông báo **"Đã kết nối Zalo OA"**, trạng thái đổi thành **"Đã kết nối"**.

**Access Token tự động:** phần mềm tự lấy + **tự làm mới định kỳ** — không cần nhập tay. Khi token sắp hết hạn, hệ thống tự gia hạn; nếu hết hạn uỷ quyền (khoảng 90 ngày) thì bấm **"Kết nối lại / làm mới"** một lần.

---

## Bước 4 — Kiểm tra kết nối (1 chạm) ✅ mới

Khi OA đã kết nối, card hiện thêm nút **"Kiểm tra kết nối"**. Bấm để kiểm tra tức thì:

- Thành công → hiện **"✅ {Tên OA} · {số} người quan tâm"** (lấy số follower thật về).
- Lỗi → hiện thông báo đỏ, gợi ý bấm "Kết nối lại / làm mới".

> Dùng nút này bất cứ lúc nào để chắc chắn OA vẫn hoạt động trước đợt gửi tin.

---

## Bước 5 — Cấu hình Webhook (nhận follow / tin đến)

Tại card **"Webhook"**:

1. Copy **URL webhook** (ô chỉ đọc) → dán vào mục **Webhook** trong app OA.
2. Nhập **OA Secret Key** (lấy ở mục Webhook của app OA) → bấm **"Lưu OA Secret Key"**.

![Card Webhook](../assets/screenshots/zalo-oa-webhook.png)

> Webhook giúp KLASSA biết khi phụ huynh follow OA / nhắn tin (mở "cửa sổ tư vấn" 48 giờ để gửi tin miễn phí). Nếu chưa nhập Secret Key, card trên sẽ nhắc "Chưa có OA Secret Key".

---

## Bước 6 — Đăng ký mẫu tin ZNS (7 bước)

**Quan trọng:** kết nối OA xong **chưa gửi được tin ngay**. Zalo bắt mọi tin tự động (nhắc học phí, biên nhận, nhắc lịch) phải dùng **mẫu đã được Zalo duyệt**. Card **"Mẫu ZNS gợi ý"** có sẵn hướng dẫn + 4 mẫu chuẩn.

![Card Mẫu ZNS + hướng dẫn 7 bước](../assets/screenshots/zalo-oa-zns-templates.png)

Làm theo 7 bước (mỗi mẫu làm 1 lần, sau dùng mãi):

1. **Kiểm tra OA đã xác thực** — OA phải có dấu tích xác thực của Zalo mới đăng ký được ZNS (chưa có thì nộp giấy phép trung tâm để xác thực).
2. **Đăng ký dịch vụ ZNS** — vào **business.zalo.me** (đăng nhập đúng tài khoản quản lý OA) → tìm mục **ZNS** → đăng ký sử dụng.
3. **Nạp tiền vào tài khoản ZNS** — mỗi tin gửi đi trừ một khoản phí nhỏ; hết số dư là không gửi được.
4. **Tạo mẫu tin** — ở từng mẫu bên dưới bấm **"Copy mẫu"** → trong cổng ZNS chọn **Tạo mẫu mới** → chọn đúng loại theo nhãn (nhãn **"Giao dịch"** → loại Giao dịch; nhãn **"CSKH"** → Chăm sóc khách hàng) → **dán** nội dung → bấm **Gửi duyệt**.
   - ⚠ **Đừng tự sửa câu chữ** trong mẫu — Zalo duyệt rất kỹ, sai chuẩn dễ bị từ chối. Copy nguyên mẫu là an toàn nhất.
5. **Chờ Zalo duyệt** — thường vài giờ đến 1 ngày làm việc (xem trạng thái trong cổng ZNS).
6. **Lấy mã mẫu (Template ID) dán về KLASSA** — duyệt xong mỗi mẫu có một **mã (dãy số)**. Copy → quay lại trang này, dán vào ô **"Template ID"** của đúng mẫu → bấm **"Lưu ID"**. Khi thấy badge **"Đã đăng ký"** là xong.
7. **Bật kênh gửi** — sang tab **"Chọn kênh"** → chọn **Zalo OA** hoặc **Cả hai** (xem Bước 7).

**4 mẫu ZNS có sẵn:**

| Mẫu | Loại | Ghi chú |
|-----|------|---------|
| Nhắc đóng học phí | Tag 1 · Giao dịch | Gắn sẵn nội dung chuyển khoản = số hoá đơn → **tự khớp lệnh SePay** |
| Biên nhận đã thu học phí | Tag 1 · Giao dịch | |
| Nhắc lịch học | Tag 2 · CSKH | |
| Nhắc vắng / điểm danh | Tag 2 · CSKH | |

> 💡 Mẫu **"Nhắc học phí"** có tham số nội dung chuyển khoản = số hoá đơn → phụ huynh chuyển đúng nội dung là hệ thống **tự khớp lệnh thanh toán** (giống QR phiếu thu), không phải đối chiếu tay. ZNS gửi thẳng theo số điện thoại — phụ huynh không cần follow OA trước.

---

## Bước 7 — Chọn kênh gửi

Sub-tab **"Chọn kênh"** → chọn kênh trung tâm dùng để gửi thông báo cho phụ huynh:

![Chọn kênh Zalo](../assets/screenshots/zalo-channel-selector.png)

- **Zalo cá nhân** (mặc định) — miễn phí, 2 chiều, từ nick nhân viên
- **Zalo OA chính thức (ZNS)** — đúng luật, trả phí
- **Cả hai** — OA trước, cá nhân dự phòng
- **Tắt** — không gửi qua Zalo

Từ lúc chọn OA / Cả hai, hệ thống **tự gửi** nhắc học phí / biên nhận / nhắc lịch qua OA theo sự kiện.

---

## Cách OA gửi tin (sau khi setup xong)

- OA gửi **tự động 1 chiều** theo sự kiện — **không có màn hình soạn tay tin OA**.
- Trong **48 giờ** kể từ lần phụ huynh tương tác cuối → gửi tin tư vấn tự do (miễn phí).
- Ngoài 48 giờ → dùng ZNS theo số điện thoại (template đã duyệt, trả phí).

## Lỗi thường gặp

| Lỗi | Nguyên nhân & cách xử lý |
|-----|--------------------------|
| **-14003 Invalid redirect uri** khi bấm Kết nối | Chưa dán **Callback URL** vào app OA (Bước 2). Copy lại Callback URL trong KLASSA, dán vào developers.zalo.me. |
| Cảnh báo đỏ "Chưa cấu hình khoá mã hoá" | Hệ thống thiếu khoá mã hoá — báo KLASSA bật biến môi trường, rồi mới lưu được. |
| Đăng ký ZNS báo OA chưa đủ điều kiện | OA chưa được **xác thực** (chưa có dấu tích) — xác thực OA trước. |
| Tin ZNS không gửi đi | Hết **số dư ZNS** (nạp thêm), hoặc mẫu chưa duyệt / chưa dán Template ID, hoặc chưa **Chọn kênh** OA. |
| "Kiểm tra kết nối" báo lỗi | Token hết hạn → bấm **"Kết nối lại / làm mới"**. |

## Câu hỏi thường gặp

**Tôi chưa có Zalo OA, dùng tạm cách khác?**
Dùng [Zalo cá nhân](zalo-ca-nhan.md) (cùng plugin) — quét QR, chat 2 chiều, miễn phí. Phù hợp trung tâm nhỏ.

**Phụ huynh có phải follow OA mới nhận được tin?**
Không bắt buộc với ZNS — ZNS gửi thẳng theo số điện thoại. Tin tư vấn miễn phí (cs) thì cần phụ huynh đã tương tác trong 48 giờ.

**Hết hạn uỷ quyền (90 ngày)?**
Vào lại tab Zalo OA → bấm **"Kết nối lại / làm mới"** + cấp quyền lại. Không phải nhập lại OA ID / App ID.
