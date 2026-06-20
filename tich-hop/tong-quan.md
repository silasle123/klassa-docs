# Tổng quan tích hợp

## Khái niệm

**Tích hợp** = kết nối KLASSA với hệ thống / dịch vụ bên ngoài để mở rộng tính năng:

- Zalo OA / Zalo cá nhân → gửi tin phụ huynh
- Email SMTP → gửi hoá đơn / báo cáo
- SMS → gửi tin xác thực / nhắc nợ
- Ngân hàng → đối soát chuyển khoản tự động
- AI providers → kích hoạt tính năng AI
- Facebook / Google Ads → quảng cáo
- Bảng tính Google / Excel Online → đồng bộ dữ liệu

## Truy cập

Menu trái → **Tích hợp & API** (`/integrations`).

![Trang Tích hợp & API](../assets/screenshots/tich-hop-trang-chinh.png)

## Mô hình: 1 trang nhiều tab

Tất cả tích hợp gom vào **một trang `/integrations`** dạng tab — không phải nhiều trang rời rạc. Các tab chính:

| Tab | Dùng cho |
|-----|----------|
| **Tổng quan** | Bảng điều khiển nhanh: số API call, webhook, tỷ lệ lỗi |
| **Zalo** | [Zalo OA](zalo-oa.md) + [Zalo cá nhân](zalo-ca-nhan.md) + Chọn kênh |
| **Cron Jobs** | Tác vụ tự động chạy theo lịch (làm mới token, báo cáo…) |
| **Email** | Kết nối [SMTP gửi email](email.md) + mẫu email & thông báo |
| **SMS** | Kết nối [cổng SMS](sms.md) |
| **Thông báo** | Ma trận định tuyến thông báo theo sự kiện + kênh |
| **Lead từ web** | [Trang đăng ký công khai](../tuyen-sinh/yeu-cau-dang-ky.md) thu lead |
| **API / Webhooks** | Khoá API + webhook cho tích hợp kỹ thuật |

> Mẫu email (gồm **mẫu email gửi phiếu lương**) cấu hình trong tab **Email → Mẫu email & thông báo**.

Trạng thái mỗi kết nối: 🟢 Đã kết nối · 🟡 Có cảnh báo · 🔴 Lỗi · ⚪ Chưa kết nối.

## Bảo mật

- Token / API key được mã hoá lưu trong database
- Chỉ Chủ trung tâm + Quản lý có quyền cấu hình
- Có nhật ký truy cập mỗi lần tích hợp được sửa

## Lưu ý

- Một số tích hợp yêu cầu trung tâm có **tài khoản bên ngoài** trước (vd có Zalo OA, có ngân hàng đã đăng ký Internet Banking).
- Một số tích hợp tính phí (theo nhà cung cấp), một số miễn phí.

## Câu hỏi thường gặp

**Tích hợp mới đề xuất, làm sao có?**
Yêu cầu qua kênh hỗ trợ KLASSA. Đội phát triển sẽ đánh giá + bổ sung nếu phù hợp.
