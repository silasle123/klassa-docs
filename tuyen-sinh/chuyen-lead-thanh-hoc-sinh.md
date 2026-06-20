# Chuyển Lead thành Học sinh

## Khi nào dùng

Khi một Lead (khách quan tâm) quyết định đăng ký học → chuyển Lead đó thành **học sinh chính thức**. Đây là bước cuối của phễu tuyển sinh.

> Cách này khác với [Tạo hồ sơ học sinh mới](../hoc-sinh/tao-moi.md): chuyển từ Lead sẽ **giữ nguyên toàn bộ thông tin** đã thu thập trong quá trình tư vấn (môn quan tâm, trường, nguồn, ghi chú…), không phải gõ lại.

## Các bước

### Bước 1 — Mở Lead cần chuyển

Từ [Danh sách Lead](danh-sach-lead.md) hoặc [Phễu tuyển sinh](pheu-tuyen-sinh.md), bấm vào Lead → mở trang chi tiết. Hoặc dùng cửa sổ xem nhanh (quick view) ngay trên danh sách.

### Bước 2 — Bấm "Chuyển thành học sinh"

Một hộp thoại xác nhận hiện ra:

> **Chuyển thành học sinh**
> Chuyển **\<tên Lead\>** thành học sinh chính thức. Phiếu thu sẽ tạo sau.

Đây chỉ là **xác nhận một bước** — KHÔNG có form điền thêm, KHÔNG phải chọn lớp, KHÔNG phải nhập học phí. Phần mềm dùng luôn thông tin đã lưu trong Lead.

### Bước 3 — Bấm "Xác nhận chuyển đổi"

Phần mềm tự động (trong một giao dịch an toàn):

- Sinh **mã học sinh** dạng `HQ-L{khối}-{số thứ tự}`
- Tạo hồ sơ học sinh, **sao chép toàn bộ** từ Lead: họ tên, SĐT, ngày sinh, địa chỉ, giới tính, trường, khối lớp, trình độ, **nguồn Lead**, môn quan tâm, ghi chú
- Nếu có thông tin phụ huynh (tên + SĐT) → tạo **hồ sơ phụ huynh + tài khoản đăng nhập** (mật khẩu mặc định `12345678`, đăng nhập được ngay)
- Đổi trạng thái Lead thành **"Đã chuyển đổi"** (khoá lại, không sửa được nữa)
- Ghi nhật ký hoạt động trên Lead

Báo thành công kèm mã HS rồi tự chuyển sang trang Học sinh.

## Sau khi chuyển — 2 việc cần làm tiếp

Phần mềm cố ý **tách** việc chuyển đổi khỏi ghi danh + thu tiền để anh chị linh hoạt:

1. **Ghi danh vào lớp** — vào [Ghi danh học sinh vào lớp](../lop-hoc/ghi-danh.md) (hoặc menu Ghi danh) để thêm em vào lớp cụ thể. Chuyển đổi KHÔNG tự xếp lớp.
2. **Tạo phiếu thu học phí** — vào hồ sơ học sinh / [Tạo và gửi hoá đơn](../hoc-phi/tao-hoa-don.md). Chuyển đổi KHÔNG tự tạo hoá đơn.

## Lưu ý

- **Không thể đảo ngược**: sau khi chuyển, Lead bị khoá trạng thái "Đã chuyển đổi". Nếu nhập sai, sửa trong hồ sơ học sinh, không thể "tách" lại thành Lead.
- **Chống trùng**: nếu đã có học sinh cùng tên + SĐT + phụ huynh, phần mềm chặn và báo mã HS đang tồn tại — tránh tạo trùng.
- **Nguồn Lead được giữ lại**: học sinh mới mang theo nguồn (Facebook Ads / Zalo / giới thiệu…) → phục vụ báo cáo tỷ lệ chuyển đổi theo nguồn.

## Câu hỏi thường gặp

**Sao chuyển xong em chưa có trong lớp nào?**
Đúng thiết kế. Ghi danh vào lớp là bước riêng — vào [Ghi danh học sinh vào lớp](../lop-hoc/ghi-danh.md).

**Phụ huynh của Lead đã có tài khoản (con khác đang học) thì sao?**
Phần mềm nhận diện theo SĐT/email và gắn học sinh mới vào tài khoản phụ huynh sẵn có — không tạo trùng.

**Lead có 2 con cùng đăng ký, xử lý thế nào?**
Chuyển Lead thành học sinh thứ nhất, rồi vào [Tạo hồ sơ học sinh mới](../hoc-sinh/tao-moi.md) tạo bé thứ hai với cùng SĐT phụ huynh.
