# Mẫu phiếu lương

## Khi nào dùng

Tuỳ chỉnh hình thức + nội dung phiếu lương PDF mà nhân viên nhận hàng tháng:
- Logo + thông tin trung tâm
- Các cột muốn hiển thị (cơ bản, phụ cấp, buổi dạy, trừ BHXH, thuế…)
- Bố cục đẹp, có thể in chia 2 phần (giữ + giao)
- Đa ngôn ngữ (Việt / Anh)

## Truy cập

Menu trái → **Nhân sự → Mẫu phiếu lương** (hoặc **/hr/payslip-template**).

![Mẫu phiếu lương](../assets/screenshots/hr-mau-phieu-luong.png)

## Tính năng

### Mẫu có sẵn

3 mẫu khởi tạo:
- **Tối giản** — 1 trang, thông tin gọn
- **Chi tiết** — hiển thị từng buổi dạy, từng khoản trừ
- **Đầy đủ** — kèm chữ ký số trung tâm + dấu

### Tuỳ chỉnh

- **Logo + Header** — upload logo, đổi màu, đổi font
- **Các trường hiển thị** — tick / bỏ tick mỗi cột
- **Văn bản tuỳ chỉnh** — thêm câu chúc, lời cảm ơn
- **Footer** — thông tin liên hệ HR + Kế toán

### Xem trước

Bấm **"Xem trước"** → hiển thị phiếu lương mẫu với dữ liệu của 1 nhân viên thật (lấy random từ DB) → kiểm tra layout trước khi áp dụng.

### Áp dụng

- **Áp dụng cho toàn trung tâm** — mọi NV dùng chung mẫu
- **Áp dụng theo phòng ban** — GV mẫu A, Nhân viên hỗ trợ mẫu B
- **Áp dụng theo cơ sở** — mỗi chi nhánh có mẫu riêng (nếu trung tâm muốn nhận diện khác nhau)

## Tên file PDF

Mặc định tên file: `Phieu_luong_<MaNV>_<HoTen>_<Thang>.pdf` — chứa tên NV để khi gửi không nhầm.

## Lưu ý

- **Đổi mẫu áp dụng kỳ sau** — phiếu lương đã chốt không thay đổi.
- **Test in giấy trước** — đảm bảo layout vừa A4, không cắt mất chữ ký.

## Câu hỏi thường gặp

**Tôi muốn thêm chữ ký số của Chủ trung tâm, được không?**
Có. Upload file ảnh chữ ký + cấu hình "Chèn chữ ký số" → PDF tự thêm khi sinh.

**Nhân viên xem phiếu lương ở đâu?**
[Cổng Nhân viên → Phiếu lương](../cong-nhan-vien/phieu-luong.md).
