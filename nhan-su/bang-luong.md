# Bảng lương — tính lương hàng tháng

## Khi nào dùng

Cuối mỗi tháng (hoặc đầu tháng sau): Kế toán + HR phối hợp **chốt bảng lương** và chuyển khoản cho nhân viên.

## Truy cập

Menu trái → **Nhân sự → Bảng lương** (hoặc **/hr/payroll**).

![Trang bảng lương](../assets/screenshots/hr-bang-luong.png)

## Quy trình chốt lương

### Bước 1 — Chọn kỳ

- **Tháng tính lương** (ví dụ Tháng 4/2026)
- **Cơ sở** (nếu nhiều cơ sở, chốt riêng từng cơ sở)

### Bước 2 — Tạo bảng lương

Bấm **"Tạo bảng lương kỳ"** → phần mềm:

- Tổng hợp buổi dạy đã chấm điểm danh trong tháng
- Tổng hợp chấm công nhân viên cố định
- Áp dụng [cấu hình lương](cau-hinh-luong.md) từng người
- Trừ các khoản (tạm ứng, BHXH, thuế)
- Sinh **bảng lương nháp**

### Bước 3 — Xem trước

Bảng nháp hiển thị:

| Nhân viên | Cơ bản | Buổi dạy | Phụ cấp | Thưởng | Trừ | Tổng |
|-----------|--------|----------|---------|--------|-----|------|
| GV Anh | - | 24 buổi × 300k | - | 500k | -800k (BHXH) | 6,900,000 |
| Lễ tân Mai | 8tr | - | 500k | - | -840k | 7,660,000 |
| ... | ... | ... | ... | ... | ... | ... |

Bấm vào từng dòng → xem chi tiết bút toán.

### Bước 4 — Kiểm tra

Trước khi chốt, dùng [Kiểm tra lương](kiem-tra-luong.md) — phần mềm cảnh báo:

- Số buổi dạy bất thường (gấp đôi tháng trước)
- Lương âm (chi nhiều hơn nhận, có thể sai cấu hình)
- Nhân viên thiếu chấm công

### Bước 5 — Chốt

Bấm **"Chốt bảng lương"** → bảng chuyển sang trạng thái **"Đã chốt"**, không sửa được.

Nếu cần sửa: phải mở khoá kỳ (Quản lý + lý do).

### Bước 6 — Tạo phiếu chi + Xuất file ngân hàng

Sau khi chốt:

- **Phiếu chi lương** tự sinh trong module Tài chính
- **File chuyển khoản hàng loạt** dạng CSV / Excel theo định dạng của ngân hàng (VCB, BIDV, Vietin, ACB, Techcom)
- Upload file lên Internet Banking → chuyển khoản 1 cú click cho toàn bộ nhân viên

## Phiếu lương cá nhân

Sau khi chốt, nhân viên xem phiếu lương trong **Cổng Nhân viên → Phiếu lương**:

- Chi tiết các khoản (cơ bản, phụ cấp, trừ)
- Tổng nhận về
- Mã giao dịch chuyển khoản

## Lưu ý

- **Chốt lương tháng X** thường vào ngày 1-3 của tháng X+1 (sau khi đủ dữ liệu chấm công).
- **Sai sót phát hiện sau khi chốt**: làm phụ trội (thưởng / trừ) ở kỳ sau, không sửa kỳ đã chốt.

## Câu hỏi thường gặp

**File ngân hàng không khớp định dạng của ngân hàng tôi, làm sao?**
KLASSA hỗ trợ 5 NH lớn (VCB, BIDV, Vietin, ACB, Techcom). NH khác → liên hệ KLASSA để bổ sung mẫu.

**Có thể chia bảng lương theo cơ sở để mỗi cơ sở tự chuyển không?**
Có. Bước 1 chọn cơ sở cụ thể → chốt riêng từng cơ sở.
