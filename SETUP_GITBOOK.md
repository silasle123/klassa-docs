# Setup GitBook — 5 bước thủ công

Toàn bộ nội dung tài liệu đã sẵn sàng trong repo này. Để publish lên GitBook, chỉ cần 5 bước (~5 phút):

## Bước 1 — Đăng ký GitBook (miễn phí)

1. Vào https://www.gitbook.com
2. Bấm **"Get started — it's free"**
3. Đăng ký bằng **GitHub** (tài khoản `silasle123`)
4. Chọn gói **Free** (đủ dùng cho docs công khai, không cần custom domain)

## Bước 2 — Tạo Space mới

1. Sau khi đăng nhập, bấm **"+ New space"**
2. Đặt tên: **"Hướng dẫn KLASSA"**
3. Visibility: **Public** (cho phụ huynh / khách hàng tiềm năng xem)

## Bước 3 — Connect GitHub repo

1. Trong Space → **Settings → Integrations → GitHub**
2. Bấm **"Connect to GitHub"**
3. Cấp quyền cho GitBook truy cập repo `silasle123/klassa-docs`
4. Chọn repo + branch `main`
5. **Sync direction**: GitHub → GitBook (GitHub là nguồn duy nhất, sửa trên GitHub thì GitBook tự cập nhật)

## Bước 4 — Đợi sync lần đầu (~2 phút)

GitBook sẽ:
- Đọc `SUMMARY.md` → sinh sidebar
- Đọc `README.md` → trang chủ
- Đọc các file `.md` trong các folder → các bài hướng dẫn
- Tự load ảnh từ `assets/screenshots/`

Refresh trang → thấy bộ tài liệu hoàn chỉnh.

## Bước 5 — Chia sẻ link

GitBook gán URL công khai dạng:
```
https://klassa-team.gitbook.io/huong-dan-klassa/
```

(URL chính xác sẽ hiển thị sau khi tạo Space)

Gửi link này cho:
- Khách hàng tiềm năng (trước khi mua)
- Khách hàng đã mua (làm tài liệu sử dụng)
- Nhân viên trung tâm (đào tạo)

---

## Cập nhật tài liệu sau này

Mỗi lần sửa hoặc thêm bài:

```bash
cd D:/klassa-docs
# Sửa file .md
git add .
git commit -m "Cập nhật bài XYZ"
git push
```

GitBook tự sync trong ~30 giây — không cần thao tác gì trên GitBook.

---

## Chụp ảnh demo

Nếu sau này muốn cập nhật ảnh (UI KLASSA đổi):

```bash
cd D:/klassa-docs
npm install
npm run install:browsers
npm run capture
```

Ảnh tự xuất vào `assets/screenshots/` — commit + push → GitBook tự cập nhật.

Có thể chạy ở chế độ thấy được:
```bash
npm run capture:headed
```

---

## Tuỳ chọn nâng cao (sau)

### Custom domain (trả phí)
Plan **Plus** ($8/user/tháng) cho phép trỏ `huongdan.klassa.vn` → space của bạn:
- Settings → Domain → Add custom domain
- Cấu hình CNAME ở Cloudflare

### Đa ngôn ngữ (sau khi bán ra nước ngoài)
Plan **Plus** → Variants → tạo phiên bản tiếng Anh / Trung.

### Phân tích lượt xem
Plan **Plus** → Insights → biết khách đọc trang nào nhiều nhất.

---

## Thay thế GitBook (nếu không muốn trả phí sau này)

Repo này tương thích cả 3:

- **Mintlify** — host miễn phí + custom domain miễn phí (mintlify.com)
- **Docusaurus** — self-host trên Coolify VPS của anh, hoàn toàn free
- **Nextra** — Next.js + Vercel, free tier rộng

Cấu trúc `SUMMARY.md` + folder + ảnh giữ nguyên — chỉ cần connect repo mới.
