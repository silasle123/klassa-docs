# Báo cáo tín chỉ học sinh

## Khái niệm

**Tín chỉ (credit)** trong KLASSA là **số tiền** (VNĐ) trung tâm còn "nợ" học sinh — sinh ra khi học sinh đã đóng tiền nhưng vắng buổi (ở chế độ [thu trước có khấu trừ](../hoc-phi/quan-ly-hoc-phi.md)), hoặc khi admin tặng / chuyển / hoàn thủ công. Tín chỉ này **tự trừ vào hoá đơn kỳ sau** thay cho hoàn tiền mặt.

> Tín chỉ là **TIỀN**, không phải đếm số buổi. Một học sinh có thể có số dư tín chỉ vài trăm nghìn đồng chờ khấu trừ.

## Truy cập

Menu **Báo cáo → Tín chỉ** (`/reports/credit`).

![Báo cáo tín chỉ](../assets/screenshots/bao-cao-tin-chi.png)

## Nội dung báo cáo

Báo cáo tổng hợp theo **kỳ (tháng)**:

- **Tổng tín chỉ phát sinh** (VNĐ)
- **Tổng đã khấu trừ** (đã áp vào hoá đơn)
- **Tổng số dư còn lại** (chưa áp)

Mỗi dòng tín chỉ có:
- Học sinh + môn (gắn theo ghi danh)
- Số tiền
- Nguồn: **Vắng buổi** / **Điều chỉnh loại buổi** / **Thủ công** (admin tặng) / **Chuyển** (từ HS khác) / **Hoàn**
- Trạng thái: **Chờ áp** (PENDING) / **Đã áp** (APPLIED)

## Tín chỉ hoạt động thế nào

- Sinh khi học sinh **vắng** (chế độ thu trước có khấu trừ) + đã có hoá đơn kỳ đó.
- Gắn với **đúng một môn** → trừ vào hoá đơn kỳ sau của môn đó.
- Học sinh **nghỉ hẳn một môn** → tín chỉ dư **tự tràn** sang môn còn học của cùng học sinh.
- **Không có hoàn tiền mặt tự động** — tín chỉ chỉ khấu trừ vào hoá đơn.

## Câu hỏi thường gặp

**Học sinh nghỉ học hẳn toàn bộ, tín chỉ dư xử lý sao?**
Tín chỉ kẹt ở trạng thái "Chờ áp". Admin xử lý thủ công: **chuyển** sang học sinh khác (anh/chị/em) hoặc **điều chỉnh** thủ công. Không tự hoàn tiền mặt.

**Sao có học sinh tín chỉ = 0?**
Học sinh ở chế độ "Thu trước trọn gói" (không trừ credit) hoặc "Thu sau theo buổi thực" thì không sinh tín chỉ vắng. Xem [3 chế độ thu học phí](../hoc-phi/quan-ly-hoc-phi.md).

**Xuất báo cáo để đối soát kế toán?**
Bấm xuất Excel ở góc bảng để lấy chi tiết từng dòng tín chỉ theo kỳ.
