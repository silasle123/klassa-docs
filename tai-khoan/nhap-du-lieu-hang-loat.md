# Nhập dữ liệu hàng loạt từ Excel

Dùng khi anh chị có sẵn một danh sách dài — chuyển từ phần mềm cũ, sổ Excel của trung tâm, danh sách trường gửi sang — và muốn đưa hết vào KLASSA trong một lần.

Áp dụng cho ba nơi:

| Nơi nhập | Vào đâu | Mỗi lần tối đa |
|---|---|---|
| Học sinh | **Học sinh** → nút **Nhập Excel** | 500 dòng |
| Khách quan tâm (Lead) | **Tuyển sinh** → nút **Nhập Excel** | 500 dòng |
| Nhân viên | **Nhân sự → Nhân viên** → nút **Nhập Excel** | 200 dòng |

## Điểm mới: không cần sửa file cho khớp mẫu

Trước đây file của anh chị phải đặt tên cột đúng như file mẫu thì phần mềm mới đọc được. Nay **không cần nữa**: phần mềm tự đọc file, tự đoán cột nào là họ tên, cột nào là số điện thoại phụ huynh… rồi đưa ra bảng để anh chị xem lại.

Những kiểu file trước đây phải ngồi cắt dán, giờ phần mềm tự xử lý:

- Tên cột đặt tự do: "Học viên", "Liên hệ mẹ", "Full name", "SĐT PH"…
- Họ và tên tách làm hai cột riêng
- Một ô ghi chung cả tên lẫn số điện thoại: `Nguyễn Văn Bố - 0987654321`
- File có dòng tên bảng, tên trung tâm ở phía trên trước dòng tiêu đề
- File nhiều trang tính (sheet)
- Số điện thoại bị Excel nuốt mất số 0 đầu
- Khối lớp ghi kèm tên lớp: "6A1", "Khối 9"

## Bốn bước

### Bước 1 — Đưa dữ liệu vào

Hộp thoại có hai cách:

- **Chọn file** — file `.xlsx`, `.xls` hoặc `.csv`, tối đa 10MB. Vẫn có sẵn **Tải file mẫu** nếu anh chị muốn dùng khuôn chuẩn.
- **Dán bảng** — bôi đen vùng dữ liệu trong Excel hoặc Google Sheet, bấm `Ctrl+C` rồi dán vào ô. Tiện cho danh sách ngắn, khỏi phải lưu file.

Bấm **Tiếp tục**.

### Bước 2 — Xem lại việc ghép cột

Phần mềm hiện bảng **"Thông tin hệ thống → Lấy từ cột"** kèm một ví dụ lấy từ dòng đầu tiên, để anh chị đối chiếu ngay xem có đúng không.

- Chỗ nào ghép sai → bấm vào ô chọn cột và chỉnh lại.
- Ô ghép phức tạp (ghép hai cột, cắt một ô làm đôi) hiện dạng chữ mô tả, ví dụ *"Ghép: Họ + Tên"*. Muốn bỏ thì bấm **Bỏ** rồi chọn cột khác.
- File nhiều trang tính → chọn đúng trang ở ô **Trang tính**.
- Phần mềm nhận nhầm dòng tiêu đề → sửa số ở ô **Dòng chứa tên cột**.
- Trường có dấu <span style="color:red">*</span> là bắt buộc, chưa ghép thì chưa qua được bước sau.

**Lưu mẫu để lần sau khỏi làm lại:** đặt tên vào ô bên dưới (ví dụ *"Mẫu trường Nguyễn Trãi"*) rồi bấm **Lưu mẫu này**. Lần sau nhận file cùng kiểu, phần mềm nhận ra ngay và ghép sẵn, không phải chờ.

### Bước 3 — Duyệt và sửa trước khi lưu

Bảng liệt kê từng dòng kèm nhãn màu:

- 🟢 **Hợp lệ** — được tích chọn sẵn
- 🔵 **Cần lưu ý** — vẫn nhập được, nhưng có điều nên biết (ví dụ dòng nhân viên chưa ghi loại hình làm việc thì sẽ lưu là *Toàn thời gian*)
- 🟡 **Trùng** — đã có trong phần mềm, bỏ tích sẵn
- 🔴 **Lỗi** — thiếu hoặc sai thông tin bắt buộc, chưa nhập được

Ở bước này anh chị **sửa thẳng vào từng ô ngay trên bảng** — gõ lại tên, thêm số điện thoại còn thiếu. Sửa xong, nhãn màu tự cập nhật.

Nếu có dòng đỏ, bấm **Nhờ AI đề xuất cho dòng lỗi**. Phần mềm gợi ý giá trị suy ra từ chính dòng đó (tách tên và số điện thoại nằm chung ô, đọc khối lớp từ "6A1"…). Đề xuất hiện nền tím kèm giá trị cũ, **không tự động áp** — anh chị bấm **Nhận đề xuất** từng dòng, hoặc **Nhận tất cả đề xuất**.

**Nếu trung tâm dùng gói có giới hạn số lượng**, ngay tại bảng duyệt sẽ có dải cảnh báo cho biết gói còn bao nhiêu chỗ và đang chọn bao nhiêu dòng. Chọn quá số chỗ còn lại thì nút xác nhận bị khoá cho tới khi bỏ bớt dòng hoặc nâng gói. Áp dụng cho học sinh và nhân viên (chỉ tính người có email vì mới sinh tài khoản đăng nhập); khách quan tâm không tính vào hạn mức.

Cuối cùng bấm **Xác nhận nhập N dòng**.

### Bước 4 — Kết quả

Hiện số dòng đã tạo, số dòng bỏ qua và lý do từng dòng.

## Những điều nên biết

**Dữ liệu của tôi có bị gửi đi đâu không?**
Để đoán được cột nào là gì, phần mềm gửi **tên các cột và vài dòng đầu tiên** tới dịch vụ trí tuệ nhân tạo mà trung tâm đang cấu hình trong **Cài đặt → Tính năng AI**. Riêng bước gợi ý sửa lỗi thì gửi các dòng đang lỗi. Phần còn lại của file được xử lý ngay tại phần mềm.

Muốn tắt hẳn: **Cài đặt → Tính năng AI → Chuẩn hoá dữ liệu khi nhập hàng loạt** → gạt tắt. Việc nhập Excel vẫn chạy bình thường, chỉ là phần mềm nhận diện cột theo tên thông dụng như trước và anh chị tự chỉnh ở bước 2.

**AI có tự sửa dữ liệu của tôi không?**
Không. Ở bước ghép cột, AI chỉ nói "lấy cột nào cho thông tin nào" — chính phần mềm mới là bên đọc dữ liệu, nên không có chuyện tên hay số điện thoại bị sửa khác đi. Ở bước gợi ý sửa lỗi, mọi đề xuất đều phải anh chị bấm nhận mới có hiệu lực, và AI chỉ được đụng vào ô đang trống hoặc đang sai — ô đã đúng thì giữ nguyên.

**Có cột trong file mà phần mềm không lấy?**
Phần mềm chỉ lấy những thông tin nó quản lý. Cột riêng của trung tâm (mã nội bộ, ghi chú xếp lớp…) sẽ không được nhập. Nếu quan trọng, ở bước 2 anh chị chọn cột đó làm **Ghi chú** — mỗi thông tin nhận một cột.

**Nhập nhầm thì sao?**
Chưa bấm **Xác nhận** ở bước 3 thì chưa có gì được lưu. Sau khi đã lưu, xoá từng hồ sơ ở danh sách tương ứng.

**Ai được nhập?**
Học sinh và Lead: tài khoản có quyền tạo học sinh / tạo lead (Chủ trung tâm, Quản lý, Lễ tân). Nhân viên: Chủ trung tâm, Quản lý chi nhánh, Kế toán.

## Riêng từng loại dữ liệu

**Học sinh** — bắt buộc: Họ tên, Khối lớp, Họ tên phụ huynh, SĐT phụ huynh. Tài khoản phụ huynh tạo từ đây dùng mật khẩu mặc định `12345678`. Xem thêm [Tạo hồ sơ học sinh mới](../hoc-sinh/tao-moi.md).

**Khách quan tâm (Lead)** — bắt buộc: Họ tên, SĐT. Trùng số điện thoại với lead hoặc học sinh đang có thì báo trùng. Xem thêm [Tạo Lead mới](../tuyen-sinh/tao-lead-moi.md).

**Nhân viên** — bắt buộc: Họ tên, Chức vụ. Chức vụ phải khớp tên đã khai trong **Nhân sự → Cấu hình**; chưa có thì tạo chức vụ trước. Loại hình làm việc ghi tiếng Việt được: *Toàn thời gian, Bán thời gian, Thời vụ, Thực tập, Thử việc* — bỏ trống sẽ lưu là **Toàn thời gian**, nên kiểm tra kỹ ở bước 3. Lương ghi kiểu `8.000.000` hay `8tr` đều đọc được. Có email thì phần mềm tạo luôn tài khoản đăng nhập với mật khẩu `12345678` và bắt đổi ở lần đăng nhập đầu.
