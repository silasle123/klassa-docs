# Phân quyền chi tiết

## Khi nào dùng

Mặc định 9 vai trò có **bộ quyền cố định**. Nếu trung tâm cần tuỳ chỉnh (vd cho trợ giảng được chấm điểm danh):

Menu trái → **Cài đặt → Phân quyền** (hoặc **/admin/permissions**).

## Cách hoạt động

Phân quyền chia theo:

- **Module** (Lead / Học sinh / Lớp / Điểm danh / Tài chính / HR / Báo cáo)
- **Hành động** (Xem / Tạo / Sửa / Xoá / Xuất file)

Mỗi vai trò = bảng tick các ô cho phép.

## Tuỳ chỉnh

Bấm vào vai trò → bảng tick:

| Module | Xem | Tạo | Sửa | Xoá | Xuất |
|--------|:-:|:-:|:-:|:-:|:-:|
| Lead | ✅ | ✅ | ✅ | ❌ | ✅ |
| Học sinh | ✅ | ❌ | ❌ | ❌ | ❌ |
| Lương | ❌ | ❌ | ❌ | ❌ | ❌ |
| ... | ... | ... | ... | ... | ... |

## Lưu ý

- **Cẩn thận khi mở quyền** — có thể vô tình cho phép xem thông tin nhạy cảm.
- **Test trước**: tạo tài khoản test với vai trò mới, kiểm tra xem có truy cập đúng / sai chỗ nào không.
- **Plugin Multi-branch RLS** — phân quyền nâng cao theo cơ sở.

## Câu hỏi thường gặp

**Tôi muốn tạo vai trò hoàn toàn mới (vd "Giáo vụ"), được không?**
Hiện tại cố định 9 vai trò. Có thể tuỳ chỉnh quyền trong 9 vai trò đó. Vai trò mới đang phát triển.
