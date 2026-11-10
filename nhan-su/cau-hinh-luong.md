---
title: "Cấu hình lương"
description: "Đặt cách tính lương dạy, đơn giá theo sĩ số, lương theo chức vụ và các tham số theo luật trước khi tính lương."
roles: [Quản trị viên, Quản lý chi nhánh]
plugin: "Nhân sự (HRIS) và Lương giáo viên"
order: 20
group: "Lương, chấm công & ca"
---

# Cấu hình lương

Trước khi chạy kỳ lương đầu tiên, bạn cần khai báo ba nhóm thông tin: cách tính lương dạy cho giáo viên và trợ giảng, lương theo chức vụ cho nhân viên, và các tham số pháp lý (bảo hiểm, thuế, tăng ca). Các thông tin này nằm ở hai nơi. Phần này cần cả hai gói mở rộng **Nhân sự (HRIS)** (cấu hình lương, đơn giá, danh sách nhân viên) và **Lương giáo viên** (chạy kỳ lương).

::: warning Ai sửa được
Quản lý chi nhánh sửa được bảng đơn giá theo sĩ số. Việc lưu **Cách tính lương ca dạy (mặc định trung tâm)**, **Đơn giá trợ giảng dạy thay giáo viên** và các tham số ở tab **Pháp luật VN** chỉ dành cho Quản trị viên.
:::

## Cách tính lương ca dạy và đơn giá theo sĩ số

Vào **Quản lý HR → Quản lý lương**, tab **Đơn giá dạy (GV/TG)**.

![Tab Đơn giá dạy (GV/TG) với ô cách tính lương ca dạy và bảng Giáo viên](../assets/screenshots/don-gia-day-gv-tg.webp)

### Chọn cách tính mặc định của trung tâm

Ô **Cách tính lương ca dạy (mặc định trung tâm)** có ba lựa chọn:

- **Theo sĩ số học sinh (bảng dưới)**: lương mỗi buổi bằng đơn giá giờ ứng với số học sinh có mặt, nhân số giờ của buổi.
- **Cố định mỗi buổi**: mỗi buổi một mức tiền, không phụ thuộc số giờ và sĩ số.
- **Cố định theo giờ**: một mức tiền mỗi giờ, nhân số giờ.

Lựa chọn tự lưu ngay khi bạn chọn. Cách này áp dụng cho mọi giáo viên và trợ giảng chưa được đặt riêng. Có thể đặt riêng cho từng người ở hồ sơ nhân viên, và với chế độ cố định thì mức tiền mỗi buổi hoặc mỗi giờ cũng khai ở hồ sơ từng người. Khi trung tâm đang dùng chế độ cố định, bảng sĩ số chỉ áp dụng cho những người được đặt riêng là **Theo sĩ số**.

### Thêm mức lương theo sĩ số

::: steps
1. Ở mục **Bảng lương giáo viên**, bấm **Thêm mức lương**.
2. Chọn **Vai trò**: **Giáo viên** hoặc **Trợ giảng**.
3. Điền **Sĩ số từ**, **Đến** và **Mức lương/giờ (VND)**. Cả bốn ô đều bắt buộc.
4. Bấm **Tạo mới**.
:::

Hai bảng **Giáo viên** và **Trợ giảng** hiển thị riêng. Mỗi dòng có nút sửa và xoá. Hãy để các khoảng sĩ số liền nhau và không chồng lên nhau (ví dụ 1-3, 4-7, 8-14). Thiếu một ô thì hệ thống báo "Vui lòng điền đầy đủ thông tin". Khoảng chồng lên bậc đã có thì bị từ chối, thông báo đỏ hiện bằng tiếng Anh "This range overlaps with an existing rate band". Nếu để hở khoảng giữa hai bậc thì buổi có sĩ số rơi vào chỗ hở không có bậc để tính.

### Đơn giá trợ giảng dạy thay giáo viên

Khi giáo viên nghỉ (đơn dạy thay chọn **Không có GV**) mà trợ giảng đứng lớp, trung tâm có thể trả trợ giảng một mức cố định cho ca đó. Nhập số tiền vào ô **Đơn giá trợ giảng dạy thay giáo viên (mỗi ca)** rồi bấm **Lưu**. Để trống là tắt, trợ giảng tính như bình thường. Mức mới áp dụng cho phiếu tính sau lúc lưu, phiếu đã tạo giữ nguyên. Xem thêm [Dạy thay](dan-day-thay.md).

## Lương theo chức vụ cho nhân viên

Vào **Quản lý HR → Quản lý lương**, tab **Cấu hình lương NV**. Tab chia hai bảng: nhân viên toàn thời gian và nhân viên bán thời gian.

![Tab Cấu hình lương NV với hai bảng Nhân viên Full-time và Part-time](../assets/screenshots/cau-hinh-luong-nv.webp)

::: steps
1. Bấm **Thêm cấu hình**.
2. Chọn **Vị trí** (bắt buộc). Các chức vụ lấy từ danh sách chức vụ của trung tâm.
3. Chọn **Loại hợp đồng**: **Full-time (Toàn thời gian)** hoặc **Part-time (Bán thời gian)**.
4. Với toàn thời gian, điền **Lương cơ bản (VND/tháng)** (bắt buộc) và **Hệ số OT (ngày thường)**. Với bán thời gian, điền **Mức lương theo giờ (VND/giờ)** (bắt buộc).
5. Bấm **Tạo mới**.
:::

Mỗi cặp **Vị trí** và **Loại hợp đồng** chỉ có một cấu hình, tạo trùng sẽ bị từ chối. Khi sửa một cấu hình đã tạo, ô **Vị trí** bị khoá. Muốn đổi vị trí thì xoá cấu hình rồi tạo lại.

Toàn thời gian nhận lương cơ bản cố định, cộng tăng ca và phụ cấp, trừ khấu trừ. Bán thời gian nhận số giờ làm nhân đơn giá giờ, không có lương cơ bản.

::: warning Chỉ dùng khi hồ sơ nhân viên để lương cơ bản là 0
Bảng này chỉ là mức dự phòng theo chức vụ. Nếu ô **Lương cơ bản** trong hồ sơ nhân viên đã có số (xem [Danh sách nhân viên](danh-sach-nhan-vien.md)) thì phiếu lương lấy số ở hồ sơ, không lấy ở đây. Hồ sơ để 0 mà chức vụ chưa có cấu hình ở đây thì lương cơ bản ra 0 đồng.
:::

## Tham số theo pháp luật

Vào **Quản lý HR → Cấu hình HR**, tab **Pháp luật VN**, kéo xuống phần cấu hình tham số lương. Có bốn nhóm:

- **Thuế TNCN (PIT)**: giảm trừ bản thân, giảm trừ người phụ thuộc và bảng bậc thuế luỹ tiến. Sửa bậc thuế rồi bấm **Lưu bậc thuế**, hoặc **Thêm bậc** để thêm bậc mới.
- **Bảo hiểm xã hội (NV đóng)**: tỷ lệ BHXH, BHYT, BHTN do nhân viên đóng, trần lương đóng BHXH/BHYT và trần lương đóng BHTN.
- **Hệ số tăng ca (OT)**: hệ số ngày thường, cuối tuần, ngày lễ, mức cộng thêm khi làm đêm và khung giờ đêm.
- **Chấm công & ngày công**: số giờ làm việc mỗi ngày và số ngày công mỗi tháng (dùng để chia lương cơ bản).

Mỗi ô có nút lưu riêng và nút đặt lại về mặc định. Khi chưa lưu gì, hệ thống dùng mức mặc định theo quy định hiện hành.

::: warning Thay đổi ảnh hưởng mọi phiếu tính sau đó
Tham số ở đây áp dụng cho tất cả phiếu lương tính sau khi bạn lưu. Phiếu đã chốt không đổi, nhưng nếu bạn tính lại một kỳ thì kỳ đó dùng số mới. Hãy đối chiếu quy định trước khi đổi.
:::

## Câu hỏi thường gặp

::: details Giáo viên không ra tiền lương dạy, vì sao?
Thường là chưa có bậc đơn giá phù hợp với sĩ số của buổi, hoặc chế độ cố định chưa có mức tiền. Mở **Kiểm tra Lương AI** (xem [Kiểm tra lương](kiem-tra-luong.md)) hoặc xem cảnh báo sau khi tính lương.
:::

::: details Sửa đơn giá có làm đổi phiếu đã tính không?
Không. Phiếu chỉ đổi khi bạn bấm tính lại ở kỳ còn **Nháp** hoặc **Chờ duyệt**.
:::
