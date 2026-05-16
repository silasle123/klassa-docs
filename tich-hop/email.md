# Kết nối email SMTP

## Khi nào dùng

KLASSA gửi email (hoá đơn, báo cáo, thông báo) qua tài khoản email của trung tâm.

## Các nhà cung cấp khuyến nghị

### 1. Gmail / Google Workspace
- Phù hợp gửi ít (<500/ngày)
- Cần bật **App Password** trong tài khoản Google

### 2. Sendgrid / Mailgun
- Chuyên gửi số lượng lớn
- Tỷ lệ vào inbox cao hơn Gmail
- Trả phí theo lượng

### 3. Email host của trung tâm
- Nếu trung tâm có domain riêng + email server (vd email@trungtam.vn)

## Cấu hình

Menu → **Tích hợp → Email SMTP**:

- **Host** — smtp.gmail.com / smtp.sendgrid.net / ...
- **Port** — thường 465 (SSL) hoặc 587 (TLS)
- **Username**
- **Password** (hoặc App Password)
- **Email gửi đi** — hiển thị "From" trên email
- **Tên gửi đi** — vd "Trung tâm KLASSA"

Bấm **"Test gửi"** → KLASSA gửi 1 email thử về địa chỉ bạn nhập.

## Lưu ý

- **Đừng dùng email cá nhân** (Gmail @gmail.com) cho gửi hàng loạt — dễ bị Google chặn.
- **Domain riêng** giúp tăng độ tin cậy + tránh spam.

## Câu hỏi thường gặp

**Email vào spam, làm sao?**
Cấu hình **SPF / DKIM / DMARC** trên domain. Liên hệ kỹ thuật KLASSA hỗ trợ.
