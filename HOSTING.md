# Hosting tài liệu KLASSA

> **Đang dùng**: GitHub Pages + Docsify (free 100%).
>
> 🌐 **URL live**: https://silasle123.github.io/klassa-docs/

## Cách hoạt động

- `index.html` chứa Docsify (JS lib) → load `.md` trực tiếp từ repo, không cần build
- `_sidebar.md` định nghĩa menu trái
- `_coverpage.md` trang bìa
- `.nojekyll` ngăn GitHub xử lý Jekyll

## Cập nhật nội dung

```bash
cd D:/klassa-docs
# Sửa file .md
git add . && git commit -m "Mô tả" && git push
```

→ Pages tự rebuild trong ~30 giây.

## Cập nhật ảnh

```bash
cd D:/klassa-docs
npm run capture
git add . && git commit -m "Cập nhật ảnh" && git push
```

## Custom domain (tuỳ chọn) — trỏ `huongdan.klassa.vn`

### Bước 1 — DNS ở Cloudflare

```
Type:  CNAME
Name:  huongdan
Value: silasle123.github.io
Proxy: DNS only (đám mây xám)
```

### Bước 2 — File CNAME ở root repo

```bash
echo "huongdan.klassa.vn" > CNAME
git add CNAME && git commit -m "Custom domain" && git push
```

### Bước 3 — Enable HTTPS

GitHub → Settings → Pages → tick "Enforce HTTPS" (sau khi DNS lan ~5 phút).

## Đổi theme

Sửa `index.html` line:

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/docsify@4/lib/themes/vue.css">
```

Đổi `vue.css` → `buble.css` / `dark.css` / `pure.css`.

## Phương án thay thế

- **GitBook** — đẹp hơn nhưng free plan 2026 hạn chế GitHub sync
- **Mintlify** — cần thêm `mint.json`, custom domain free
- **Docusaurus** self-host trên VPS Coolify
