---
title: "Điểm danh đối chiếu giáo viên và lễ tân"
description: "Hai bên cùng chấm một buổi để phát hiện sai lệch, và cách xử lý khi hai bên chấm khác nhau."
roles: [Quản trị viên, Quản lý chi nhánh, Quản lý, Lễ tân, Giáo viên, Trợ giảng]
order: 30
---

# Điểm danh đối chiếu giáo viên và lễ tân

Mỗi buổi học có thể được chấm bởi hai phía độc lập: giáo viên (hoặc trợ giảng) trong lớp, và lễ tân ở quầy. Hai kết quả khớp thì hệ thống tự chốt. Hai kết quả lệch thì báo để người có thẩm quyền xem lại. Cách này giúp bắt các trường hợp như giáo viên chấm Có mặt nhưng lễ tân không thấy em vào trung tâm.

## Cách hệ thống đối chiếu

Mọi người vẫn chấm ở cùng một chỗ: **Điểm danh → Điểm danh cơ bản**, nút **Điểm danh**, rồi **Lưu điểm danh**. Hệ thống tự biết bạn thuộc phía nào:

- **Phía giáo viên:** Giáo viên và Trợ giảng. Kết quả của hai vai này ghi chung một phía.
- **Phía lễ tân:** Lễ tân và các vai còn lại (như Quản lý) khi họ bấm chấm.

Sau mỗi lần lưu:

1. Mới một phía chấm: học sinh chờ phía còn lại. Khung **Việc cần làm** hiện mục **Lễ tân chưa chấm đối chiếu**.
2. Hai phía chấm giống nhau: hệ thống tự chốt, không cần ai làm gì.
3. Hai phía chấm khác nhau (ví dụ giáo viên chấm **Có mặt**, lễ tân chấm **Vắng**): em đó bị đánh dấu **Lệch**, và Quản trị viên, Quản lý được báo.

Em đang lệch chưa được tính vào các ô số của trang **Điểm danh** cho đến khi có người chốt.

::: tip Vì sao bảng của bạn không điền sẵn kết quả của bên kia?
Hệ thống cố ý không điền sẵn kết quả của phía kia vào bảng của bạn. Nếu điền sẵn, bạn bấm lưu là xác nhận mà không nhìn lại, và sai lệch sẽ không bao giờ bị phát hiện. Bên dưới tên mỗi học sinh chỉ hiện một dòng nhỏ, ví dụ **Lễ tân: Có mặt** kèm tên người chấm, để bạn tham khảo.
:::

## Lễ tân chấm đối chiếu

::: steps
1. Vào **Điểm danh → Điểm danh cơ bản**. Ở khung **Việc cần làm**, mục **Lễ tân chưa chấm đối chiếu** liệt kê các lớp mới có giáo viên chấm.
2. Bấm **Chấm đối chiếu** để mở đúng buổi đó, hoặc bấm **Điểm danh** ở dòng lớp.
3. Chấm từng em theo những gì bạn thấy ở quầy, rồi bấm **Lưu điểm danh**.
:::

## Khi hai bên chấm lệch

Nếu lần lưu của bạn tạo ra chỗ lệch, hộp **Phát hiện xung đột điểm danh** hiện ngay. Mỗi học sinh lệch có một thẻ cho biết ai đã chấm gì.

**Giáo viên, Trợ giảng, Quản trị viên, Quản lý chi nhánh, Quản lý** có hai nút ở mỗi thẻ:

- **Sửa theo ...**: lấy kết quả của người chấm trước, chốt luôn. Em hết lệch.
- **Giữ nguyên ...**: giữ kết quả của bạn, nhưng chưa chốt. Em vẫn ở trạng thái lệch để Quản trị viên hoặc Quản lý xem xét.

**Lễ tân** không có hai nút này, chỉ thấy dòng **Đã ghi nhận lệch. Quản lý sẽ xem và chốt trạng thái đúng cho em này.**

### Chốt các em còn lệch

Dòng buổi học có nhãn **Lệch** kèm số em. Khung **Việc cần làm** có mục **Lệch điểm danh cần xử lý**. Quản trị viên, Quản lý chi nhánh và Quản lý bấm **Xử lý** để vào trang đối chiếu xung đột (menu **Điểm danh → Nâng cao → Đối chiếu xung đột**) và chốt theo bên giáo viên hoặc bên lễ tân.

Học sinh được chốt thì báo phụ huynh theo kết quả cuối cùng.

::: warning Lưu ý
Kết quả chốt thay cho cả hai lần chấm. Lịch sử vẫn ghi lại giáo viên chấm gì, lễ tân chấm gì và ai chốt.
:::

## Câu hỏi thường gặp

::: details Trung tâm không có lễ tân chấm thì sao?
Không sao. Chỉ cần một phía chấm là đủ để lưu điểm danh. Đối chiếu chỉ xảy ra khi có cả hai phía.
:::

::: details Giáo viên và trợ giảng cùng chấm một buổi thì có lệch không?
Hai vai này dùng chung phía giáo viên nên người chấm sau ghi đè lên người chấm trước, không tạo lệch giữa hai người.
:::

::: details Buổi đã chốt có sửa lại được không?
Được, xem [Xem lại, sửa và xoá điểm danh](sua-loi.md).
:::
