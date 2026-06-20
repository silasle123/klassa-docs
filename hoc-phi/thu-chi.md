# Thu học phí & thanh toán

## Khái niệm

Phần này theo dõi **tiền học phí thu vào**: ghi nhận thanh toán cho hoá đơn, đối soát chuyển khoản tự động, và xem lịch sử / công nợ.

> **Lưu ý:** KLASSA hiện **chưa có** module "Chi / Sổ quỹ / Duyệt chi" (quản lý chi tiêu, lương đã có ở [Bảng lương](../nhan-su/bang-luong.md)). Bài này chỉ về **thu học phí**.

## 2 nơi liên quan

| Trang | Dùng để |
|-------|---------|
| **Học phí → Kế toán** (`/finance/accounting`) → Hoá đơn | **Ghi nhận thanh toán** cho từng hoá đơn |
| **Học phí → Thanh toán** (`/finance/payments`) | Cổng thanh toán online + đối soát ngân hàng + báo cáo công nợ |

## Ghi nhận thanh toán cho hoá đơn

Khi phụ huynh đóng tiền:
1. Vào **Học phí → Kế toán** → mở hoá đơn cần thu.
2. Bấm **"Ghi nhận thanh toán"**.
3. Điền: số tiền (mặc định = tổng hoá đơn, nhập nhỏ hơn nếu trả một phần), kênh (tiền mặt / chuyển khoản / MoMo / VNPay…), ngày thu, ghi chú.
4. Lưu → hoá đơn cập nhật trạng thái (Đã thanh toán / Thanh toán một phần).

## Trang Thanh toán (`/finance/payments`)

Trang này gồm các tab:

- **Dashboard** — tổng quan thanh toán
- **MoMo / VNPay / SePay** — cấu hình + theo dõi cổng thanh toán online
- **Đối soát ngân hàng** — khớp lệnh chuyển khoản tự động
- **Báo cáo tuổi nợ (Aging)** — công nợ theo thời gian quá hạn
- **Lịch sử** — toàn bộ giao dịch thanh toán

![Trang Thanh toán](../assets/screenshots/thu-chi-trang-chinh.png)

## Đối soát chuyển khoản tự động (SePay)

Nếu trung tâm kết nối **SePay** (tab Đối soát ngân hàng): khi phụ huynh chuyển khoản với **nội dung đúng cú pháp** (hệ thống sinh sẵn, thường chứa số hoá đơn), phần mềm tự khớp và đánh dấu hoá đơn "Đã thanh toán" — không cần ghi tay.

> Cú pháp nội dung chuyển khoản lấy đúng theo cấu hình SePay trong tab Đối soát — làm theo hướng dẫn trên màn hình.

## Câu hỏi thường gặp

**Phụ huynh đóng thừa / cần hoàn?**
KLASSA dùng cơ chế **tín chỉ khấu trừ** (bù vào kỳ sau) thay vì hoàn tiền mặt tự động. Xem [Báo cáo tín chỉ](../bao-cao/tin-chi.md). Trường hợp đặc biệt cần hoàn tiền mặt → xử lý thủ công ngoài hệ thống.

**Quản lý chi tiêu (điện nước, thuê mặt bằng) ở đâu?**
Hiện chưa có module Chi trong KLASSA. Chi lương nhân sự xem [Bảng lương](../nhan-su/bang-luong.md). Các khoản chi khác quản lý ngoài hệ thống (hoặc dùng phần mềm kế toán chuyên dụng).
