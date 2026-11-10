# Tài liệu hướng dẫn KLASSA (docs.klassa.vn)

Kho này chứa toàn bộ bài hướng dẫn sử dụng KLASSA. Trang được dựng bằng **VitePress** và tự đăng lên **docs.klassa.vn** mỗi khi đẩy lên nhánh `main` (xem `HOSTING.md`).

## Viết hoặc sửa một bài

Mỗi bài là một tệp `.md` trong thư mục của nhóm (vd `hoc-phi/tao-hoa-don.md`). Mục lục bên trái **tự dựng** từ thư mục, không cần sửa tệp mục lục nào.

```md
---
title: Tạo hoá đơn học phí
description: Một câu mô tả, hiện ở kết quả tìm kiếm.
roles: [Quản trị viên, Kế toán]        # hiện thành nhãn "Dành cho"
plugin: Hoá đơn điện tử                # chỉ khi tính năng thuộc gói mở rộng
order: 3                               # thứ tự trong nhóm (nhỏ đứng trước), bỏ trống = xếp theo tên tệp
group: Lương & chấm công               # (tuỳ chọn) gom vào nhóm con trong mục lục
sidebarTitle: Tạo hoá đơn              # (tuỳ chọn) tên ngắn hơn cho mục lục
---

# Tạo hoá đơn học phí

Một–hai câu mở đầu.

::: steps
1. Vào **Tài chính → Học phí**.
2. Bấm **Tạo hoá đơn**.
:::

::: tip Mẹo
...
:::

::: warning Lưu ý
...
:::

::: details Câu hỏi thường gặp?
Trả lời.
:::
```

- Liên kết sang bài khác bằng đường dẫn tương đối tới tệp `.md`: `[Tạo lớp](../lop-hoc/tao-moi.md)`. Bản dựng sẽ **báo lỗi nếu link gãy**.
- Ảnh để trong `assets/screenshots/`, chèn bằng `![Mô tả](../assets/screenshots/ten-anh.png)`.
- Nhóm mục lục và thứ tự nhóm khai ở `GROUPS` trong `.vitepress/config.mts`.
- Đổi tên/xoá bài: thêm dòng vào `.vitepress/redirects.mjs` để link cũ (dạng `#/thu-muc/bai`) vẫn chuyển đúng.

## Xem thử trên máy

```bash
npm install
npm run docs:dev      # mở http://localhost:5180
npm run docs:build    # dựng bản thật vào .vitepress/dist (kiểm link gãy)
```

## Chụp lại ảnh màn hình

`scripts/capture.ts` đăng nhập bản demo và chụp theo danh sách `SHOTS` (xem đầu tệp).

```bash
npx tsx scripts/capture.ts --only=ten-anh-1,ten-anh-2
```
