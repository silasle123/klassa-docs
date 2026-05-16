# Kết nối ngân hàng (sao kê tự động)

## Khái niệm

Khi phụ huynh chuyển khoản học phí, **KLASSA tự động phát hiện** giao dịch và đối soát với hoá đơn → đánh dấu "Đã thanh toán" mà không cần Kế toán nhập tay.

## Cách hoạt động

1. Phụ huynh chuyển khoản với nội dung định dạng (vd `HD-12345-NguyenVanA`)
2. KLASSA định kỳ đọc sao kê ngân hàng qua API
3. Tự khớp số tiền + nội dung → đánh dấu hoá đơn
4. Gửi thông báo cho phụ huynh

## Các ngân hàng hỗ trợ

- **MB Bank** (qua VietQR + API miễn phí)
- **VietinBank**
- **VCB** (qua tích hợp VietQR)
- **BIDV**
- **TPBank**
- ACB / Techcom (qua middleware bên thứ 3)

Các ngân hàng khác: dùng **Casso** (dịch vụ trung gian) — hỗ trợ 40+ NH Việt Nam, phí 200k-500k/tháng.

## Cấu hình

Menu → **Tích hợp → Ngân hàng** → chọn nhà cung cấp / NH cụ thể:

- API Key / Token
- Số tài khoản
- Tần suất kiểm tra (5 phút / 15 phút / mỗi giờ)
- Quy tắc khớp (định dạng nội dung chuyển khoản)

## Mã QR thanh toán

Sau khi cấu hình, mỗi hoá đơn tự sinh **VietQR** — phụ huynh quét bằng app NH là thanh toán đúng nội dung chuẩn.

## Lưu ý

- **Không tự động trừ tiền** từ tài khoản — KLASSA chỉ ĐỌC sao kê.
- **Bảo mật**: API key chỉ có quyền đọc, không gửi.

## Câu hỏi thường gặp

**Phụ huynh chuyển không đúng nội dung, KLASSA tự nhận diện không?**
Có khớp số tiền + tên người chuyển — nếu khớp 80% thì hiển thị "Cần xác nhận thủ công". Kế toán bấm OK là xong.
