# Đăng tài liệu lên docs.klassa.vn

- **Công cụ dựng:** VitePress (thư mục `.vitepress/`).
- **Nơi đăng:** GitHub Pages của kho `silasle123/klassa-docs`, tên miền `docs.klassa.vn` (tệp `public/CNAME`).
- **Tự động:** mỗi lần đẩy lên `main`, GitHub Actions (`.github/workflows/deploy.yml`) chạy `npm run docs:build` rồi đăng thư mục `.vitepress/dist`. Mất khoảng 1–2 phút.

## Cài đặt một lần (đã làm thì bỏ qua)

GitHub → kho `klassa-docs` → **Settings → Pages → Build and deployment → Source** chọn **GitHub Actions**.
(Trước đây trang dùng Docsify, Source là "Deploy from a branch". Chưa đổi thì bản mới sẽ không lên.)

Tên miền: vẫn để `docs.klassa.vn`, tick **Enforce HTTPS**. DNS không đổi.

## Link cũ

Trang cũ dùng dạng `docs.klassa.vn/#/thu-muc/bai`. Trang mới tự chuyển các link đó sang đường dẫn mới
(đoạn mã trong `.vitepress/config.mts`, bảng đổi tên ở `.vitepress/redirects.mjs`).

## Catalogue

`catalog/catalog.html` và `catalog/KLASSA-Catalogue.pdf` được chép nguyên vào bản dựng
(`scripts/postbuild.mjs`) nên đường dẫn `docs.klassa.vn/catalog/...` vẫn mở được.
