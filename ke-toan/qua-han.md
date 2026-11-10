---
title: "Báo cáo nợ quá hạn"
description: "Xem các phiếu học phí quá hạn, gửi nhắc từng phiếu hoặc hàng loạt và ghi lại những lần đã nhắc tay."
roles: [Quản trị viên, Quản lý chi nhánh, Kế toán]
order: 50
---

# Báo cáo nợ quá hạn

Báo cáo này liệt kê các phiếu học phí đã quá hạn nộp, để bạn biết phiếu nào cần nhắc, đã nhắc chưa và nhắc lần gần nhất khi nào.

Cùng danh sách này cũng là thẻ đầu tiên của trang [Thu hồi công nợ](thu-hoi-cong-no.md) (chỉ Quản trị viên và Quản lý chi nhánh vào được trang đó).

## Xem báo cáo

::: steps
1. Vào **Tài chính → Báo cáo → Báo cáo nợ**. Tiêu đề trang là **Báo cáo nợ quá hạn**.
2. Trong khung **Bộ lọc**, chọn **Tháng** (mặc định là tháng hiện tại, chọn được từ tháng sau lùi về 12 tháng trước), **Lọc theo số ngày quá hạn** và **Khối**.
3. Xem bốn ô tổng hợp: **Tổng nợ quá hạn**, **≤7 ngày**, **≤30 ngày** và **>30 ngày**.
4. Xem bảng **Danh sách phiếu nợ**.
:::

Ô **Lọc theo số ngày quá hạn** có các mức: **Tất cả**, **≤7 ngày**, **≤15 ngày**, **≤30 ngày**, **>30 ngày**, và **Tất cả phiếu chưa thanh toán (kể cả chưa tới hạn)**. Mức cuối là mức mặc định khi mở trang, nên ô tổng ban đầu có tên **Tổng chưa thanh toán** và bảng gồm cả phiếu chưa tới hạn. Muốn chỉ xem phiếu đã quá hạn, hãy chọn một trong các mức còn lại, khi đó ô tổng đổi thành **Tổng nợ quá hạn**.

Bảng có các cột: **Mã phiếu**, **Học viên**, **Tháng**, **Số tiền**, **Hạn nộp**, **Quá hạn**, **Nhắc lần cuối**, **Hành động**.

- Cột **Số tiền** hiện số còn phải đóng. Phiếu đã thu một phần có thêm dòng nhỏ "Đã thu ... / tổng phiếu".
- Cột **Nhắc lần cuối** hiện ngày nhắc gần nhất, hoặc **Chưa nhắc** nếu chưa nhắc lần nào. Phía trên bảng có số phiếu **Đã nhắc** và **Chưa nhắc**.

## Nhắc một phiếu

Bấm biểu tượng gửi (gợi ý **Gửi nhắc qua hệ thống**) ở cuối dòng. Nút bị khoá nếu phiếu không có số điện thoại phụ huynh.

## Ghi nhận đã nhắc bằng tay

Dùng khi bạn gọi điện hoặc nhắn riêng cho phụ huynh và muốn lưu lại.

::: steps
1. Bấm biểu tượng bàn tay (gợi ý **Đánh dấu đã nhắc thủ công**) ở dòng phiếu.
2. Chọn **Hình thức đã nhắc**: **Gọi điện**, **Nhắn Zalo tay**, **Nhắn SMS tay**, **Gặp trực tiếp** hoặc **Khác**.
3. Nhập **Ghi chú (tuỳ chọn)**, ví dụ "Đã gọi PH, hẹn thứ 6 đóng".
4. Bấm **Đã nhắc**.
:::

Lần nhắc này hiện ở cột **Nhắc lần cuối** và trong tab **Lịch sử nhắc** của [Thu hồi công nợ](thu-hoi-cong-no.md).

## Gửi nhắc hàng loạt

::: steps
1. Bấm **Gửi nhắc hàng loạt**. Hộp **Xem trước & gửi nhắc hàng loạt** hiện ra.
2. Ở **Gửi qua kênh**, tích một hoặc nhiều kênh: **Email**, **SMS**, **Zalo**, **Thông báo App/Web**. Phải tích ít nhất một kênh.
3. Soạn lời nhắn (xem phần dưới).
4. Trong danh sách, tích những phiếu muốn nhắc. Chỉ dòng đã tích mới được gửi.
5. Bấm **Gửi nhắc (n)**. Thanh tiến trình chạy từng phiếu, cột **Kết quả** cho biết phiếu nào thành công, phiếu nào lỗi và lý do. Bấm **Dừng sau phiếu này** nếu muốn ngắt giữa chừng, hoặc **Gửi lại (n)** để gửi lại các phiếu còn tích.
:::

### Soạn lời nhắn

- Chọn một mẫu ở danh sách **Mẫu đã lưu**, hoặc tự gõ (tối đa 600 ký tự).
- Bấm các nút biến để chèn thông tin riêng từng phiếu: `[ten_hoc_sinh]`, `[ten_phu_huynh]`, `[so_tien]`, `[han_thanh_toan]`, `[so_hoa_don]`.
- Bấm **+ Lưu mẫu** để lưu lời nhắn thành mẫu dùng lại (tối đa 30 mẫu). Chọn mẫu rồi bấm **Xoá** để bỏ mẫu.

::: tip Mẹo
Phiếu đã nhắc trong 24 giờ gần nhất sẽ không bị nhắc lại khi chạy nhắc tự động. Với nhắc tay, bạn nên nhìn cột **Nhắc lần cuối** trước khi gửi để tránh làm phiền phụ huynh.
:::

## Xuất Excel

Bấm **Xuất Excel** để tải danh sách theo đúng bộ lọc đang chọn.

## Câu hỏi thường gặp

::: details Phiếu quá hạn mấy ngày thì cần gọi điện trực tiếp?
Hệ thống không quy định. Nhãn **>30 ngày** màu đỏ giúp bạn nhận ra những phiếu quá hạn lâu nhất để ưu tiên.
:::

::: details Sao ô Gửi nhắc hàng loạt bị mờ?
Nút mờ khi đang tải hoặc khi danh sách đang lọc không có phiếu nào.
:::
