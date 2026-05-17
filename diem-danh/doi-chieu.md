# Điểm danh đối chiếu (giáo viên × lễ tân)

## Tại sao có tính năng này?

Đôi khi giáo viên và lễ tân **không khớp** về trạng thái học sinh:

- Giáo viên chấm "Có mặt" nhưng lễ tân không thấy bé vào trung tâm
- Học sinh đi muộn — giáo viên thấy nhưng lễ tân không ghi nhận
- Học sinh đã đón nhưng giáo viên vẫn để "Có mặt"

→ Phần mềm cung cấp cơ chế **chấm đối chiếu** để 2 bên độc lập chấm, hệ thống tự đối chiếu, có lệch thì cảnh báo Quản lý.

## Khi nào nên bật

- Trung tâm lớn, đông học sinh, hay sai sót điểm danh
- Trung tâm có chính sách phụ huynh ký tên đón con — cần xác thực kép
- Cần dữ liệu chuẩn để tính lương / học phí chính xác

Trung tâm nhỏ (1-2 giáo viên) thường không cần — đơn giản giáo viên chấm là đủ.

## Cách bật

Vào **Cài đặt → Điểm danh** → bật công tắc **"Chấm điểm danh kép"**.

## Quy trình

### Bước 1 — Giáo viên chấm

Trong buổi học, giáo viên chấm như bình thường (xem [Chấm điểm danh hàng ngày](cham-hang-ngay.md)).

### Bước 2 — Lễ tân chấm đối chiếu

Sau buổi, **lễ tân / tư vấn viên** vào **Điểm danh → Đối chiếu** → chọn buổi vừa kết thúc → chấm độc lập theo quan sát của mình (không thấy được giáo viên đã chấm gì).

### Bước 3 — Hệ thống đối chiếu

- **Khớp** → tự xác nhận, dữ liệu chính thức được ghi
- **Lệch** → buổi được gắn cờ ⚠ **"Có xung đột"** chờ Quản lý xử lý

### Bước 4 — Quản lý xử lý xung đột

Quản lý vào **Điểm danh → Xung đột**:

- Xem trạng thái 2 bên chấm
- Hỏi lại giáo viên + lễ tân để xác minh
- Bấm **"Chốt theo giáo viên"** hoặc **"Chốt theo lễ tân"**, kèm ghi chú

Dữ liệu chốt mới là dữ liệu chính thức để tính lương + báo cáo.

## Lưu ý

- **Lễ tân không thấy giáo viên đã chấm gì** trước khi tự chấm — đảm bảo độc lập.
- **Lệch nhiều** = vấn đề quy trình — Quản lý nên xem **Báo cáo xung đột điểm danh** hàng tháng để cải thiện.
- **Mỗi lần chốt** đều được ghi vào nhật ký, không xoá được.

## Câu hỏi thường gặp

**Lễ tân chấm muộn 1-2 ngày sau buổi, có vấn đề gì không?**
Vẫn chấp nhận, nhưng độ chính xác giảm vì lễ tân khó nhớ chính xác. Khuyến nghị chấm trong ngày.

**Trợ giảng có thể chấm đối chiếu thay lễ tân không?**
Mặc định không. Nếu trung tâm muốn, vào **Cài đặt → Phân quyền** để cấp quyền cho trợ giảng.
