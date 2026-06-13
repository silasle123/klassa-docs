# KLASSA — Bản đồ module (Feature Map) để dựng Infographic

> Trích trực tiếp từ source code production (`lib/menu-config.ts` + `lib/plugins/catalog.ts`).
> Dùng làm input chuẩn cho bộ infographic: Ecosystem, CRM, EMS, HR, AI Hub, hành trình, dashboard.
> Style đề xuất: SaaS hiện đại, 16:9. Màu brand KLASSA: Navy `#1E3A8A`, Gold `#F59E0B`, Cream `#FEFCE8`.

---

## 0. SƠ ĐỒ TỔNG THỂ — KLASSA ECOSYSTEM (8 cụm)

```
                          ┌─────────────────────────┐
                          │        KLASSA           │
                          │  Nền tảng quản lý trung │
                          │   tâm dạy thêm toàn diện │
                          └─────────────┬───────────┘
        ┌───────────┬───────────┬───────┼───────┬───────────┬───────────┐
        ▼           ▼           ▼       ▼       ▼           ▼           ▼
   ① CRM       ② EMS       ③ TÀI    ④ HR/    ⑤ AI HUB   ⑥ GIAO TIẾP  ⑦ MARKETING
   Tuyển sinh  Đào tạo     CHÍNH    HRIS     & Tự động  & Cổng       & Tăng trưởng
                                                          │
                                              ⑧ VẬN HÀNH & QUẢN TRỊ (xuyên suốt)
```

| # | Cụm | Vai trò | Số module chính |
|---|-----|---------|-----------------|
| ① | **CRM Tuyển sinh** | Lead → tư vấn → chốt học viên | 9 |
| ② | **EMS — Quản lý đào tạo** | Học sinh, lớp, lịch, điểm danh, đề thi | 12 |
| ③ | **Tài chính** | Học phí, hoá đơn, kế toán, công nợ | 14 |
| ④ | **HR / HRIS** | Nhân sự, lương, chấm công, hiệu suất | 25 |
| ⑤ | **AI Hub & Tự động hoá** | Trợ lý AI, media, insight, workflow | 8 |
| ⑥ | **Giao tiếp & Cổng** | Zalo, Facebook, cổng PH/NV, mobile | 9 |
| ⑦ | **Marketing & Tăng trưởng** | Marketing, social, giới thiệu/coupon | 4 |
| ⑧ | **Vận hành & Quản trị** | Đa chi nhánh, kho, plugin, admin | 13 |

---

## ① KLASSA CRM — Tuyển sinh (9 module)

```
CRM Tuyển sinh
 ├─ Quản lý Lead (pipeline Kanban tuỳ biến cột)
 ├─ Timeline hoạt động (gọi / nhắn / gặp)
 ├─ Gán tư vấn viên + cập nhật hàng loạt
 ├─ Lịch học thử (nhiều môn × nhiều buổi)
 ├─ Điểm danh & chấm điểm buổi thi thử
 ├─ Tư vấn báo giá (combo nhiều môn → PDF)
 ├─ Chuyển Lead → Học viên (1 click)
 ├─ Báo cáo phễu Trial → Chốt (theo nguồn / tư vấn viên)
 └─ 🤖 AI: chấm điểm lead, gợi ý hành động, tóm tắt cuộc gọi
```

## ② KLASSA EMS — Quản lý đào tạo (12 module)

```
EMS — Đào tạo
 ├─ Học sinh (hồ sơ, trạng thái: đang học/bảo lưu/hoàn tất)
 ├─ Phụ huynh
 ├─ Ghi danh (nhiều môn, chiết khấu combo)
 ├─ Lớp học
 ├─ Lịch học
 │   ├─ Thời khoá biểu
 │   └─ Lịch học thử
 ├─ Giáo viên
 ├─ Điểm danh
 │   ├─ Điểm danh cơ bản (1 chạm)
 │   ├─ Chi tiết điểm danh
 │   └─ Nâng cao
 │       ├─ Đối chiếu xung đột (GV × lễ tân)
 │       ├─ Thao tác hàng loạt
 │       ├─ Xác minh Media
 │       ├─ Gamification
 │       └─ Cài đặt
 ├─ Đề kiểm tra
 │   ├─ Danh sách đề
 │   ├─ Ngân hàng câu hỏi
 │   └─ Ma trận đề thi
 └─ Nhận xét buổi học
```

## ③ KLASSA Tài chính (14 module)

```
Tài chính
 ├─ Tổng quan tài chính (CFO Dashboard)
 ├─ Học phí
 ├─ Thanh toán
 ├─ Hoá đơn điện tử (TT78)
 └─ Kế toán
     ├─ Hoá đơn chi tiết
     ├─ Quản lý công nợ
     ├─ Mẫu hoá đơn
     ├─ Sổ cái công nợ (credit ledger)
     ├─ Báo cáo credit khả dụng
     ├─ Quản lý khuyến mãi
     ├─ Chốt sổ cuối tháng
     └─ Cấu hình tài chính
 └─ Báo cáo: Doanh thu · Học sinh · Credit · Nợ · Phân tích · Funnel · Tiến độ
```

## ④ KLASSA HR / HRIS (25 module) — cụm lớn nhất

```
Quản lý HR
 ├─ Dashboard HR
 ├─ Nhân viên (hồ sơ, hợp đồng, bằng cấp, BHXH)
 ├─ Quản lý lương
 ├─ Mẫu phiếu lương
 ├─ Điểm danh nhân viên
 ├─ Nghỉ phép
 ├─ Giờ dạy
 ├─ Dạy thay
 ├─ Đánh giá hiệu suất
 ├─ Hợp đồng lao động
 ├─ Onboarding
 ├─ Tuyển dụng
 ├─ Phân ca tuần (roster)
 ├─ Duyệt tăng ca (OT)
 ├─ Yêu cầu hồ sơ
 ├─ Sơ đồ tổ chức (org chart)
 ├─ Đội của tôi
 ├─ Báo cáo HR
 ├─ Phân tích rủi ro nghỉ việc
 ├─ 🤖 HR AI Insights
 ├─ 🤖 Kiểm tra Lương AI
 ├─ 🤖 Gợi ý Phân ca AI
 ├─ 🤖 Phát hiện Bất thường (timesheet anomaly)
 ├─ Cấu hình HR
 └─ 🤖 HR AI Assistant
```

## ⑤ KLASSA AI Hub & Tự động hoá (8 module)

```
AI Hub
 ├─ Tổng quan AI Hub
 ├─ Media Center (AI tạo caption / ảnh / video / phụ đề)
 ├─ AI Assistant (chat hỏi đáp bằng dữ liệu thật)
 ├─ AI Knowledge (upload SOP cho AI tham chiếu)
 ├─ Tự động hoá (workflow trigger → điều kiện → hành động)
 ├─ Tích hợp (API / webhook / cron)
 ├─ Công cụ
 └─ Nền tảng AI (ai-core: dùng API key riêng của trung tâm)
```

## ⑥ Giao tiếp & Cổng người dùng (9 module)

```
Giao tiếp & Cổng
 ├─ Chat nội bộ (tin nhắn nhân viên, SSE realtime)
 ├─ Chat Zalo cá nhân (inbox + nhóm + broadcast)
 ├─ Chat Facebook Page (Messenger + comment auto-reply)
 ├─ Truyền thông Email
 ├─ Thông báo
 ├─ KLASSA Office (không gian làm việc dạng pixel)
 ├─ Cổng Phụ huynh (điểm danh, điểm, hoá đơn, thanh toán online)
 ├─ Cổng Nhân viên (phiếu lương, chấm công, phúc lợi, hồ sơ)
 └─ Ứng dụng Di động PWA (đa vai trò: GV / PH / NV / QL)
```

## ⑦ Marketing & Tăng trưởng (4 module)

```
Marketing
 ├─ Marketing (chiến dịch)
 ├─ Social Media (đăng bài đa nền tảng)
 ├─ Giới thiệu & Coupon (referral + mã giảm giá)
 └─ Báo cáo nguồn / tỉ lệ chuyển đổi
```

## ⑧ Vận hành & Quản trị (13 module)

```
Vận hành & Quản trị
 ├─ Đa chi nhánh (multi-campus, học bù chéo, báo cáo riêng)
 ├─ Quản lý Kho (inventory)
 ├─ Chi nhánh
 ├─ Cài đặt + Plugin Marketplace
 └─ Quản trị hệ thống
     ├─ Dashboard Quản trị
     ├─ Bảo mật & Compliance
     ├─ Nhật ký hệ thống (audit log)
     ├─ Quản lý Users
     ├─ Thương hiệu (white-label brand)
     ├─ Quản lý Chi nhánh
     ├─ Cấu hình Hệ thống
     ├─ Quản lý Đăng ký
     └─ Thông báo Popup
```

---

## HÀNH TRÌNH (Customer Journeys) — để vẽ flow 16:9

### A. Hành trình Tuyển sinh (Lead → Học viên)
```
Lead vào (web/Zalo/FB/giới thiệu)
 → Pipeline Kanban + AI chấm điểm
 → Đặt lịch học thử + chấm điểm đầu vào
 → Tư vấn báo giá combo (PDF)
 → Chốt: 1 click chuyển thành Học viên + Ghi danh + Hoá đơn
 → Báo cáo phễu chuyển đổi
```

### B. Hành trình Học sinh (Ghi danh → Học → Báo cáo)
```
Ghi danh (nhiều môn, chiết khấu)
 → Xếp lớp + thời khoá biểu
 → Điểm danh 1 chạm → phụ huynh nhận Zalo tự động
 → Học phí tự tính → hoá đơn điện tử → thanh toán online
 → Đề kiểm tra + nhận xét buổi học
 → Cổng phụ huynh: điểm danh, điểm số, công nợ
 → AI cảnh báo học sinh nguy cơ nghỉ
```

### C. Hành trình Giáo viên (Dạy → Lương)
```
Lịch dạy cá nhân
 → Điểm danh học sinh tại lớp (mobile/QR)
 → Xin nghỉ / đăng ký dạy thay
 → Hệ thống tính giờ dạy + sĩ số
 → Lương tự tính theo headcount/buổi
 → Phiếu lương điện tử ở cổng nhân viên
 → Đánh giá hiệu suất + nhận xét
```

---

## DANH MỤC PLUGIN (16 — bật/tắt theo gói)

| Nhóm | Plugin |
|------|--------|
| Tài chính | Hoá đơn điện tử · Tự động hoá đơn học phí · Lương giáo viên |
| CRM | CRM Tuyển sinh + AI |
| Marketing | Giới thiệu & Coupon |
| Giao tiếp | Zalo Cá nhân · Facebook Page Chat · Cổng Phụ huynh · Ứng dụng Di động PWA |
| HR | Nhân sự (HRIS) |
| Năng suất | Giao việc Nội bộ |
| AI | Nền tảng AI · AI Media · AI Gợi ý & Trợ lý |
| Vận hành | Đa chi nhánh · Tự động hoá |

---

## ẢNH MINH HOẠ CÓ SẴN (gửi kèm cho AI nếu cần screenshot)

Đã có **94 ảnh chụp thật** ở `D:\klassa-docs\assets\screenshots\` — ví dụ:
`dashboard-tong-quan`, `leads-trang-chinh`, `pheu-tuyen-sinh`, `hoc-sinh-danh-sach`,
`lop-hoc-danh-sach`, `diem-danh-cham`, `tai-chinh-tong-quan`, `hr-tong-quan`,
`hr-bang-luong`, `bao-cao-ai`, `ai-hub-chat`, `automation-trang-chinh`,
`plugin-marketplace`, `cong-phu-huynh-gioi-thieu`, `cong-nhan-vien-gioi-thieu`,
`menu-trai-tong-quan` (ảnh menu trái đầy đủ), `menu-trai-thu-gon`.
