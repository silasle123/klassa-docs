/**
 * Dựng ebook PDF "Cẩm nang vận hành trung tâm dạy thêm" cho klassa.vn.
 * - Viết HTML branded (navy/gold KLASSA) → Playwright in PDF A4.
 * - Ảnh chụp thật lấy từ D:/klassa-website/public/images/blog/*.webp
 * Output: D:/klassa-website/public/downloads/cam-nang-van-hanh-trung-tam-day-them.pdf
 * Chạy: npx tsx scripts/build-ebook.ts
 */
import { chromium } from 'playwright'
import * as fs from 'fs'
import * as path from 'path'

const IMG = 'file:///D:/klassa-website/public/images/blog'
const OUT_DIR = 'D:/klassa-website/public/downloads'
const OUT_PDF = path.join(OUT_DIR, 'cam-nang-van-hanh-trung-tam-day-them.pdf')

const css = `
  @page { size: A4; }
  * { box-sizing: border-box; margin: 0; padding: 0; }
  body { font-family: 'Segoe UI', system-ui, sans-serif; color: #0F172A; font-size: 10.5pt; line-height: 1.65; }
  .page { page-break-after: always; padding: 0; }
  .chapter { page-break-before: always; }
  h1 { font-size: 20pt; color: #1E3A8A; letter-spacing: -0.5px; margin-bottom: 4pt; }
  h2 { font-size: 13pt; color: #1E3A8A; margin: 16pt 0 6pt; }
  h3 { font-size: 11pt; color: #0F172A; margin: 12pt 0 4pt; }
  p { margin: 0 0 7pt; color: #334155; }
  ul, ol { margin: 0 0 8pt 16pt; color: #334155; }
  li { margin-bottom: 3pt; }
  strong { color: #0F172A; }
  table { width: 100%; border-collapse: collapse; margin: 8pt 0 10pt; font-size: 9.5pt; }
  th { background: #1E3A8A; color: #fff; text-align: left; padding: 5pt 7pt; }
  td { border: 1px solid #E2E8F0; padding: 4.5pt 7pt; color: #334155; }
  tr:nth-child(even) td { background: #F8FAFC; }
  .chapnum { display: inline-block; background: #F59E0B; color: #0F1D45; font-weight: 800; font-size: 9pt; padding: 2pt 9pt; border-radius: 99px; letter-spacing: 1px; text-transform: uppercase; margin-bottom: 8pt; }
  .lead { font-size: 11pt; color: #475569; margin-bottom: 12pt; }
  .box { background: #F0F6FF; border-left: 3pt solid #1E3A8A; border-radius: 6pt; padding: 9pt 12pt; margin: 10pt 0; }
  .box.gold { background: #FFFBEB; border-left-color: #F59E0B; }
  .box .t { font-weight: 700; color: #1E3A8A; margin-bottom: 3pt; }
  .box.gold .t { color: #92400E; }
  .shot { width: 100%; border: 1px solid #E2E8F0; border-radius: 8pt; margin: 8pt 0 4pt; }
  .cap { font-size: 8.5pt; color: #94A3B8; text-align: center; margin-bottom: 10pt; }
  .check li { list-style: none; margin-left: -16pt; padding-left: 18pt; position: relative; }
  .check li::before { content: '☐'; position: absolute; left: 0; color: #1E3A8A; }
  /* Cover */
  .cover { height: 277mm; background: linear-gradient(160deg, #0F1D45 0%, #1E3A8A 60%, #1d4ed8 100%); color: #fff; border-radius: 0; padding: 28mm 22mm; display: flex; flex-direction: column; }
  .cover .brand { font-size: 16pt; font-weight: 800; letter-spacing: 4px; color: #F59E0B; }
  .cover h1.title { color: #fff; font-size: 31pt; line-height: 1.18; margin-top: 38mm; letter-spacing: -0.5px; }
  .cover .sub { color: #BFDBFE; font-size: 12pt; margin-top: 8pt; max-width: 130mm; }
  .cover .badge { display: inline-block; background: rgba(245,158,11,0.15); border: 1px solid rgba(245,158,11,0.4); color: #FDE68A; padding: 4pt 12pt; border-radius: 99px; font-size: 9pt; margin-top: 14pt; }
  .cover .foot { margin-top: auto; color: #93C5FD; font-size: 9.5pt; }
  /* TOC */
  .toc li { list-style: none; margin: 0 0 7pt -16pt; display: flex; justify-content: space-between; border-bottom: 1px dotted #CBD5E1; padding-bottom: 4pt; }
  .toc .n { color: #F59E0B; font-weight: 800; margin-right: 8pt; }
  .backcover { background: #0F1D45; color: #fff; border-radius: 10pt; padding: 16pt 18pt; margin-top: 14pt; }
  .backcover h3 { color: #FDE68A; margin-top: 0; }
  .backcover p, .backcover li { color: #BFDBFE; }
`

const html = `<!DOCTYPE html>
<html lang="vi"><head><meta charset="utf-8"><style>${css}</style></head><body>

<!-- ===== BÌA ===== -->
<div class="page cover">
  <div class="brand">KLASSA</div>
  <h1 class="title">Cẩm nang<br/>Vận hành Trung tâm<br/>Dạy thêm</h1>
  <div class="sub">Từ mở trung tâm đến vận hành trơn tru: học vụ, tài chính, phụ huynh, tuyển sinh và số hoá — đúc kết thực tiễn từ các trung tâm Việt Nam.</div>
  <div><span class="badge">Ấn bản 2026 · Tặng kèm bộ checklist vận hành</span></div>
  <div class="foot">klassa.vn — Phần mềm quản lý trung tâm dạy thêm · Tài liệu miễn phí, không bán</div>
</div>

<!-- ===== MỤC LỤC ===== -->
<div class="page">
  <h1>Mục lục</h1>
  <ul class="toc" style="margin-top:10pt">
    <li><span><span class="n">01</span>Khởi đầu đúng: mô hình, pháp lý, vốn</span></li>
    <li><span><span class="n">02</span>Vận hành học vụ: lớp, lịch, điểm danh</span></li>
    <li><span><span class="n">03</span>Tài chính: học phí, công nợ, lương giáo viên</span></li>
    <li><span><span class="n">04</span>Phụ huynh: minh bạch và giữ chân học sinh</span></li>
    <li><span><span class="n">05</span>Tuyển sinh: phễu, kênh và tỷ lệ chuyển đổi</span></li>
    <li><span><span class="n">06</span>Số hoá: chuyển từ Excel sang hệ thống</span></li>
    <li><span><span class="n">07</span>Bảng chỉ số sức khoẻ trung tâm</span></li>
    <li><span><span class="n">PL</span>Phụ lục: 4 bộ checklist dùng ngay</span></li>
  </ul>
  <div class="box gold" style="margin-top:14pt">
    <div class="t">Cách dùng cẩm nang này</div>
    Mỗi chương độc lập — bạn có thể đọc thẳng chương đang "đau" nhất. Cuối sách là 4 checklist in ra dùng được ngay. Nội dung phản ánh quy định và mặt bằng thị trường tại thời điểm 06/2026; phần pháp lý chỉ mang tính tham khảo, hãy kiểm tra văn bản hiện hành khi áp dụng.
  </div>
</div>

<!-- ===== CHƯƠNG 1 ===== -->
<div class="chapter">
  <span class="chapnum">Chương 01</span>
  <h1>Khởi đầu đúng: mô hình, pháp lý, vốn</h1>
  <p class="lead">Phần lớn trung tâm gặp khủng hoảng ở tháng 6–12 không phải vì dạy kém, mà vì khởi đầu thiếu nền: chọn sai mô hình, bỏ qua pháp lý, hoặc tính vốn thiếu.</p>

  <h2>1.1. Chọn mô hình phù hợp với nguồn lực</h2>
  <table>
    <tr><th>Mô hình</th><th>Vốn khởi điểm</th><th>Điểm mạnh</th><th>Rủi ro chính</th></tr>
    <tr><td>Lớp tại nhà (1 GV)</td><td>10–30 triệu</td><td>Chi phí thấp, linh hoạt</td><td>Trần tăng trưởng thấp</td></tr>
    <tr><td>Trung tâm mini (2–5 phòng)</td><td>100–300 triệu</td><td>Cân bằng chi phí/quy mô</td><td>Lấp lớp chậm 3–6 tháng đầu</td></tr>
    <tr><td>Trung tâm chuẩn (6–10 phòng)</td><td>300–800 triệu</td><td>Thương hiệu, đa môn</td><td>Chi phí cố định lớn</td></tr>
    <tr><td>Chuỗi đa chi nhánh</td><td>1 tỷ+</td><td>Quy mô, sức mạnh tuyển sinh</td><td>Vận hành phân tán, thất thoát</td></tr>
  </table>

  <h2>1.2. Pháp lý dạy thêm — những điều bắt buộc biết</h2>
  <p>Từ khi Thông tư 29/2024/TT-BGDĐT có hiệu lực (02/2025), hoạt động dạy thêm ngoài nhà trường được siết chặt đáng kể. Các điểm cốt lõi cần lưu ý:</p>
  <ul>
    <li><strong>Phải đăng ký kinh doanh</strong> (hộ kinh doanh hoặc doanh nghiệp) khi tổ chức dạy thêm ngoài nhà trường có thu phí.</li>
    <li><strong>Công khai thông tin</strong>: môn học, thời lượng, địa điểm, danh sách giáo viên và mức học phí phải được niêm yết/công khai trước khi tuyển sinh.</li>
    <li><strong>Giáo viên trường công lập</strong> không được tổ chức dạy thêm có thu phí, và không được dạy thêm thu phí với chính học sinh mình đang dạy chính khoá.</li>
    <li><strong>Không tổ chức dạy thêm văn hoá với học sinh tiểu học</strong> (ngoại lệ: nghệ thuật, thể thao, kỹ năng sống).</li>
  </ul>
  <div class="box">
    <div class="t">Gợi ý thực hành</div>
    Chuẩn hoá hồ sơ ngay từ đầu: giấy phép kinh doanh, hợp đồng với giáo viên, bảng học phí niêm yết, nội quy. Khi cơ quan quản lý kiểm tra, trung tâm có hệ thống lưu trữ rõ ràng luôn ở thế chủ động. Quy định có thể thay đổi — kiểm tra văn bản mới nhất của Bộ GD&ĐT và Sở tại địa phương trước khi áp dụng.
  </div>

  <h2>1.3. Công thức vốn 6 tháng</h2>
  <p>Nguyên tắc an toàn: <strong>vốn = chi phí cố định × 6 tháng</strong>, vì trung tâm mới thường cần 4–8 tháng để đạt điểm hoà vốn. Chi phí cố định gồm: thuê mặt bằng, lương nhân sự tối thiểu, điện nước, marketing duy trì. Sai lầm phổ biến nhất là chỉ tính vốn đầu tư ban đầu (sửa chữa, bàn ghế) mà quên "bình oxy" cho 6 tháng đầu.</p>
</div>

<!-- ===== CHƯƠNG 2 ===== -->
<div class="chapter">
  <span class="chapnum">Chương 02</span>
  <h1>Vận hành học vụ: lớp, lịch, điểm danh</h1>
  <p class="lead">Học vụ là "nhà máy" của trung tâm. Nhà máy chạy ổn thì mọi thứ khác (tài chính, phụ huynh) mới có dữ liệu đúng để vận hành.</p>

  <h2>2.1. Tổ chức lớp khoa học</h2>
  <ul>
    <li><strong>Đặt tên lớp theo quy ước</strong>: Môn + Khối/Trình độ + Mã (VD: "Toán 9 — T9.2"). Tên tuỳ hứng là nguồn nhầm lẫn số 1 khi trung tâm vượt 10 lớp.</li>
    <li><strong>Sĩ số mục tiêu theo mô hình</strong>: lớp văn hoá 12–20 em là điểm cân bằng chất lượng/lợi nhuận phổ biến; dưới 60% sĩ số mục tiêu sau 2 tháng → cân nhắc ghép lớp.</li>
    <li><strong>Một học sinh có thể học nhiều lớp</strong> — hồ sơ phải là "1 học sinh – N lớp", không phải mỗi lớp một bản ghi riêng (nguồn trùng lặp dữ liệu kinh điển của Excel).</li>
  </ul>

  <h2>2.2. Xếp lịch chống xung đột</h2>
  <p>Ba xung đột phải kiểm tra mỗi khi xếp ca: <strong>trùng phòng, trùng giáo viên, trùng lịch học sinh</strong>. Kiểm tay trên giấy với 5 lớp còn làm được; trên 15 lớp, gần như chắc chắn sẽ sót — đây là lúc cần công cụ tự cảnh báo.</p>
  <img class="shot" src="${IMG}/klassa-lich-day.webp"/>
  <div class="cap">Lịch dạy tuần trong KLASSA — nhìn theo phòng, giáo viên, ca; tự chặn trùng lịch</div>

  <h2>2.3. Điểm danh — kỷ luật số 1 của trung tâm</h2>
  <p>Điểm danh không phải thủ tục. Nó là <strong>dữ liệu gốc</strong> nuôi 4 hệ thống: học phí (tính theo buổi), lương giáo viên (theo buổi dạy), cảnh báo nghỉ học (vắng liên tiếp), và niềm tin phụ huynh (thông báo sau buổi).</p>
  <div class="box">
    <div class="t">Quy tắc 5 phút</div>
    Điểm danh trong 5 phút đầu giờ, ngay tại lớp, trên điện thoại. Để cuối buổi → quên; để hôm sau → sai. Trung tâm nào giữ được kỷ luật này, toàn bộ số liệu phía sau tự động đúng.
  </div>
  <img class="shot" src="${IMG}/klassa-diem-danh.webp"/>
  <div class="cap">Điểm danh trên KLASSA — đủ trạng thái đi học/vắng/muộn/học bù, tự báo phụ huynh</div>

  <h2>2.4. Xử lý các ca "khó" của mô hình dạy thêm</h2>
  <ul>
    <li><strong>Học bù</strong>: buổi bù phải ghi nhận tách bạch với buổi chính — ảnh hưởng trực tiếp tính phí.</li>
    <li><strong>Dạy thay</strong>: người dạy thay cần thấy danh sách lớp và được tính lương đúng buổi đó.</li>
    <li><strong>Học thử</strong>: học sinh học thử xuất hiện trong điểm danh nhưng chưa phát sinh phí — theo dõi riêng để tư vấn chuyển đổi.</li>
  </ul>
</div>

<!-- ===== CHƯƠNG 3 ===== -->
<div class="chapter">
  <span class="chapnum">Chương 03</span>
  <h1>Tài chính: học phí, công nợ, lương giáo viên</h1>
  <p class="lead">Trung tâm "chết" vì tiền nhiều hơn vì chuyên môn. Ba dòng tiền phải nắm: thu học phí, nợ học phí, chi lương — và cả ba đều phải bắt nguồn từ dữ liệu điểm danh.</p>

  <h2>3.1. Thiết kế biểu phí rõ ràng</h2>
  <ul>
    <li>Chọn 1 hình thức chủ đạo: <strong>theo tháng</strong> (dễ quản), <strong>theo buổi</strong> (linh hoạt, hợp lớp lẻ) hoặc <strong>theo khoá</strong> (dòng tiền tốt, cần phân bổ doanh thu đúng kỳ).</li>
    <li>Chính sách giảm phải thành <strong>quy tắc tự động</strong>: anh chị em ruột, học 2+ môn, đóng sớm — đừng để "thoả thuận miệng" tạo ra trăm mức phí khác nhau.</li>
    <li>Niêm yết công khai (cũng là yêu cầu pháp lý — xem chương 1).</li>
  </ul>

  <h2>3.2. Quy trình thu phí 5 bước</h2>
  <table>
    <tr><th>Ngày</th><th>Việc</th><th>Ai/Cái gì làm</th></tr>
    <tr><td>Ngày 1</td><td>Xuất hoá đơn hàng loạt tháng mới</td><td>Hệ thống tự động</td></tr>
    <tr><td>Ngày 3</td><td>Gửi nhắc phí + mã QR chuyển khoản qua Zalo</td><td>Hệ thống tự động</td></tr>
    <tr><td>Ngày 7</td><td>Nhắc lần 2 với hoá đơn chưa thanh toán</td><td>Hệ thống tự động</td></tr>
    <tr><td>Ngày 12</td><td>Gọi điện trực tiếp các ca còn lại</td><td>Chủ trung tâm / kế toán</td></tr>
    <tr><td>Realtime</td><td>Đối soát chuyển khoản, gắn "đã thanh toán"</td><td>Hệ thống tự động</td></tr>
  </table>
  <img class="shot" src="${IMG}/klassa-tai-chinh.webp"/>
  <div class="cap">Tài chính tổng quan trong KLASSA — dòng tiền, hoá đơn, công nợ một màn hình</div>

  <h2>3.3. Công nợ: nhìn thấy là giảm được</h2>
  <p>Quy luật thực tế: nợ học phí <strong>quá 30 ngày thì khả năng thu giảm một nửa</strong>. Vì vậy báo cáo công nợ phải xem hàng tuần, không phải cuối tháng. Ba con số cần trên một màn hình: tổng nợ, nợ theo tuổi nợ (0–15 / 16–30 / 30+ ngày), danh sách nợ lớn nhất.</p>

  <h2>3.4. Lương giáo viên — minh bạch là giữ người</h2>
  <p>Nguồn tranh cãi lương số 1: đếm buổi sai. Khi lương tính thẳng từ dữ liệu điểm danh (buổi dạy thực tế, sĩ số, dạy thay, hệ số loại lớp), cả hai phía nhìn cùng một con số — tranh cãi gần như biến mất, và giáo viên giỏi ở lại vì cảm giác công bằng.</p>
  <img class="shot" src="${IMG}/klassa-bang-luong.webp"/>
  <div class="cap">Bảng lương KLASSA — tự tổng từ điểm danh, cuối tháng chỉ duyệt</div>
</div>

<!-- ===== CHƯƠNG 4 ===== -->
<div class="chapter">
  <span class="chapnum">Chương 04</span>
  <h1>Phụ huynh: minh bạch và giữ chân học sinh</h1>
  <p class="lead">Chi phí giữ 1 học sinh cũ luôn rẻ hơn nhiều lần chi phí tuyển 1 học sinh mới. Và thứ giữ chân học sinh không phải khuyến mãi — là cảm giác của phụ huynh rằng con mình được quan tâm.</p>

  <h2>4.1. Ba khoảnh khắc vàng với phụ huynh</h2>
  <ul>
    <li><strong>Sau mỗi buổi học</strong>: thông báo điểm danh tự động ("Con đã vào lớp / hôm nay con vắng"). Nhỏ nhưng tích luỹ niềm tin mỗi ngày.</li>
    <li><strong>Cuối tháng</strong>: nhận xét ngắn về từng em (2–3 câu thật, không công thức). Đây là tin nhắn phụ huynh quý nhất.</li>
    <li><strong>Khi có vấn đề</strong>: con vắng 2 buổi liên tiếp — chủ động gọi hỏi thăm TRƯỚC khi phụ huynh quyết định cho nghỉ. Cảnh báo sớm cứu được rất nhiều ca "rời bỏ thầm lặng".</li>
  </ul>

  <h2>4.2. Cổng phụ huynh — chuyển từ bị động sang chủ động</h2>
  <p>Thay vì trả lời từng tin Zalo "tháng này đóng bao nhiêu/lịch học thế nào", cho phụ huynh một nơi tự xem: điểm danh, lịch học, hoá đơn, nhận xét. Trung tâm trông chuyên nghiệp hơn hẳn mặt bằng — và tiết kiệm hàng giờ trả lời tin nhắn mỗi ngày.</p>
  <img class="shot" src="${IMG}/klassa-cong-phu-huynh.webp"/>
  <div class="cap">Cổng phụ huynh KLASSA — minh bạch điểm danh, học phí, lịch học</div>

  <h2>4.3. Đo lường giữ chân</h2>
  <p>Theo dõi mỗi tháng: <strong>tỷ lệ học sinh nghỉ</strong> (churn) = số nghỉ trong tháng ÷ tổng đầu tháng. Mốc tham khảo: dưới 3%/tháng là tốt; trên 5%/tháng là báo động — phải phỏng vấn lý do nghỉ từng ca, thường lộ ra vấn đề ở 1 lớp/1 giáo viên cụ thể.</p>
</div>

<!-- ===== CHƯƠNG 5 ===== -->
<div class="chapter">
  <span class="chapnum">Chương 05</span>
  <h1>Tuyển sinh: phễu, kênh và tỷ lệ chuyển đổi</h1>
  <p class="lead">Tuyển sinh không phải "đăng bài chờ inbox". Nó là một phễu có số liệu: bao nhiêu người quan tâm, bao nhiêu học thử, bao nhiêu ghi danh — và kẹt ở đâu.</p>

  <h2>5.1. Phễu chuẩn 5 bước</h2>
  <table>
    <tr><th>Bước</th><th>Mục tiêu chuyển đổi</th><th>Vũ khí chính</th></tr>
    <tr><td>Lead mới (FB/Zalo/giới thiệu)</td><td>100%</td><td>Phản hồi trong 1 giờ</td></tr>
    <tr><td>Đã tư vấn</td><td>70–80%</td><td>Kịch bản tư vấn theo nhu cầu</td></tr>
    <tr><td>Hẹn học thử</td><td>40–60%</td><td>Nhắc lịch tự động trước 1 ngày</td></tr>
    <tr><td>Đã học thử</td><td>—</td><td>Buổi học thử được thiết kế riêng</td></tr>
    <tr><td>Ghi danh</td><td>30–50% số học thử</td><td>Gọi trong 24h sau buổi thử</td></tr>
  </table>
  <img class="shot" src="${IMG}/klassa-tuyen-sinh.webp"/>
  <div class="cap">CRM tuyển sinh trong KLASSA — lead theo phễu, nguồn, người phụ trách</div>

  <h2>5.2. Kênh hiệu quả theo giai đoạn</h2>
  <ul>
    <li><strong>0–6 tháng đầu</strong>: giới thiệu truyền miệng + nhóm Zalo/Facebook phụ huynh khu vực + biển hiệu. Rẻ và đúng tệp nhất.</li>
    <li><strong>Khi đã có kết quả học tập</strong>: case học sinh tiến bộ (xin phép phụ huynh) là quảng cáo mạnh nhất ngành này.</li>
    <li><strong>Quảng cáo trả phí</strong>: chỉ đổ tiền khi đã đo được phễu — nếu không biết tỷ lệ học thử→ghi danh, tăng ngân sách chỉ tăng lãng phí.</li>
  </ul>

  <h2>5.3. Quy tắc 1 giờ</h2>
  <div class="box gold">
    <div class="t">Lead nguội rất nhanh</div>
    Phụ huynh nhắn 3 trung tâm cùng lúc là chuyện bình thường. Bên nào phản hồi đầu tiên có lợi thế lớn nhất. Đặt chuẩn: mọi lead phải được phản hồi trong 1 giờ làm việc — và có hệ thống nhắc nếu ai đó quên.
  </div>
</div>

<!-- ===== CHƯƠNG 6 ===== -->
<div class="chapter">
  <span class="chapnum">Chương 06</span>
  <h1>Số hoá: chuyển từ Excel sang hệ thống</h1>
  <p class="lead">Excel không sai — nó chỉ có "hạn dùng". Chương này giúp bạn biết khi nào hết hạn, và chuyển đổi thế nào để không gián đoạn một buổi học nào.</p>

  <h2>6.1. Bốn dấu hiệu Excel đã hết hạn dùng</h2>
  <ul>
    <li>Trên 50 học sinh, hoặc trên 2 người cùng nhập liệu</li>
    <li>Từng quên thu học phí ít nhất 1 lần</li>
    <li>Cuối tháng mất hơn 1 buổi để tính lương giáo viên</li>
    <li>Phụ huynh hỏi thông tin (lịch, phí, điểm danh) hơn 3 lần/tuần</li>
  </ul>

  <h2>6.2. Lộ trình chuyển đổi 5 bước (3–7 ngày)</h2>
  <ol>
    <li><strong>Chuẩn hoá file Excel</strong>: mỗi học sinh 1 dòng — họ tên, SĐT phụ huynh, lớp, mức phí.</li>
    <li><strong>Import vào hệ thống</strong> (phần mềm tốt có hỗ trợ 1-1 bước này).</li>
    <li><strong>Thiết lập lịch + biểu phí + phân quyền</strong>.</li>
    <li><strong>Chạy song song 1 tuần</strong>: vẫn giữ Excel, điểm danh trên hệ thống, đối chiếu khớp rồi tắt Excel. Không chạy song song quá 2 tuần.</li>
    <li><strong>Bật tự động hoá theo lớp sóng</strong>: tuần 2 — thông báo phụ huynh; tuần 3 — hoá đơn + nhắc phí; tháng 2 — lương tự động.</li>
  </ol>
  <img class="shot" src="${IMG}/klassa-hoc-sinh.webp"/>
  <div class="cap">Danh sách học sinh trong KLASSA sau khi import từ Excel</div>

  <h2>6.3. Checklist chọn phần mềm (10 câu hỏi)</h2>
  <ul class="check">
    <li>Có được thiết kế cho mô hình dạy thêm Việt Nam (ca lẻ, học bù, dạy thay)?</li>
    <li>Điểm danh trên điện thoại dưới 1 phút/lớp?</li>
    <li>Tự thông báo phụ huynh sau buổi học?</li>
    <li>Hoá đơn + nhắc phí + đối soát tự động?</li>
    <li>Lương giáo viên tính từ dữ liệu điểm danh?</li>
    <li>Cổng/app cho phụ huynh tự tra cứu?</li>
    <li>Phân quyền theo vai trò (GV chỉ thấy lớp mình)?</li>
    <li>Xuất dữ liệu ra Excel bất cứ lúc nào (không bị "khoá" dữ liệu)?</li>
    <li>Có dùng thử miễn phí bản đầy đủ + hỗ trợ setup?</li>
    <li>Giá công khai, rõ ràng theo quy mô?</li>
  </ul>
</div>

<!-- ===== CHƯƠNG 7 ===== -->
<div class="chapter">
  <span class="chapnum">Chương 07</span>
  <h1>Bảng chỉ số sức khoẻ trung tâm</h1>
  <p class="lead">Quản bằng cảm giác là cách nhanh nhất để bất ngờ. 8 chỉ số dưới đây — xem hàng tuần — đủ để nắm sức khoẻ trung tâm.</p>
  <table>
    <tr><th>Chỉ số</th><th>Cách tính</th><th>Mốc tham khảo</th><th>Tần suất</th></tr>
    <tr><td>Sĩ số đang học</td><td>Tổng HS trạng thái đang học</td><td>Tăng đều theo tháng</td><td>Tuần</td></tr>
    <tr><td>Tỷ lệ chuyên cần</td><td>Buổi có mặt ÷ tổng buổi</td><td>≥ 90%</td><td>Tuần</td></tr>
    <tr><td>Tỷ lệ lấp lớp</td><td>Sĩ số thực ÷ sĩ số mục tiêu</td><td>≥ 75%</td><td>Tuần</td></tr>
    <tr><td>Doanh thu tháng</td><td>Tổng hoá đơn đã thu</td><td>So cùng kỳ</td><td>Tuần</td></tr>
    <tr><td>Công nợ quá 30 ngày</td><td>Tổng nợ tuổi &gt; 30 ngày</td><td>&lt; 5% doanh thu</td><td>Tuần</td></tr>
    <tr><td>Tỷ lệ nghỉ học (churn)</td><td>HS nghỉ ÷ tổng đầu tháng</td><td>&lt; 3%/tháng</td><td>Tháng</td></tr>
    <tr><td>Lead → ghi danh</td><td>Số ghi danh ÷ số lead</td><td>10–20%</td><td>Tháng</td></tr>
    <tr><td>Chi phí/HS mới</td><td>Chi marketing ÷ HS ghi danh mới</td><td>&lt; 1 tháng học phí</td><td>Tháng</td></tr>
  </table>
  <img class="shot" src="${IMG}/klassa-bao-cao-doanh-thu.webp"/>
  <div class="cap">Báo cáo doanh thu trong KLASSA — số liệu realtime thay cho tổng hợp tay</div>
  <div class="box">
    <div class="t">Nguyên tắc OMTM</div>
    Mỗi giai đoạn chỉ tập trung cải thiện MỘT chỉ số quan trọng nhất: mới mở → lead & lấp lớp; ổn định → chuyên cần & churn; mở rộng → doanh thu/lớp & công nợ.
  </div>
</div>

<!-- ===== PHỤ LỤC ===== -->
<div class="chapter">
  <span class="chapnum">Phụ lục</span>
  <h1>4 bộ checklist dùng ngay</h1>

  <h2>A. Checklist khai trương trung tâm</h2>
  <ul class="check">
    <li>Đăng ký kinh doanh + niêm yết học phí, môn học, giáo viên</li>
    <li>Hợp đồng thuê mặt bằng ≥ 2 năm, có điều khoản gia hạn</li>
    <li>PCCC, an toàn điện, lối thoát hiểm</li>
    <li>Hợp đồng/thoả thuận với từng giáo viên (mức lương, quy tắc dạy thay)</li>
    <li>Biểu phí + chính sách giảm thành văn bản</li>
    <li>Hệ thống quản lý (phần mềm/quy trình) sẵn sàng TRƯỚC ngày khai giảng</li>
    <li>Kênh liên lạc phụ huynh thống nhất (1 số Zalo trung tâm)</li>
  </ul>

  <h2>B. Checklist vận hành hằng tuần</h2>
  <ul class="check">
    <li>100% buổi học có điểm danh trong ngày</li>
    <li>Xem danh sách HS vắng ≥ 2 buổi liên tiếp → gọi phụ huynh</li>
    <li>Xem công nợ: ca nào quá 7 ngày chưa phản hồi nhắc phí</li>
    <li>Lịch tuần sau: đủ giáo viên, không trùng phòng</li>
    <li>Lead mới trong tuần đã được phản hồi hết chưa</li>
  </ul>

  <h2>C. Checklist chốt tháng tài chính</h2>
  <ul class="check">
    <li>Đối soát thu thực tế vs hoá đơn đã gắn "đã thanh toán"</li>
    <li>Chốt bảng lương từ dữ liệu điểm danh → gửi GV tự kiểm tra → duyệt</li>
    <li>Tổng nợ chuyển kỳ + kế hoạch thu hồi nợ &gt; 30 ngày</li>
    <li>Doanh thu theo lớp: lớp nào dưới điểm hoà vốn 2 tháng liên tiếp</li>
    <li>Báo cáo churn + lý do nghỉ của từng ca</li>
  </ul>

  <h2>D. Checklist chuyển đổi số (3–7 ngày)</h2>
  <ul class="check">
    <li>Chuẩn hoá Excel: 1 HS/dòng, đủ tên + SĐT PH + lớp + mức phí</li>
    <li>Import vào hệ thống, kiểm tra ngẫu nhiên 10 hồ sơ</li>
    <li>Thiết lập lịch các lớp + biểu phí + phân quyền</li>
    <li>Chạy song song 1 tuần, đối chiếu khớp → tắt Excel</li>
    <li>Bật thông báo phụ huynh (tuần 2) → hoá đơn tự động (tuần 3) → lương (tháng 2)</li>
  </ul>

  <div class="backcover">
    <h3>Vận hành những điều trong cẩm nang này — tự động</h3>
    <p>Toàn bộ quy trình trong sách (điểm danh – học phí – công nợ – lương – cổng phụ huynh – CRM tuyển sinh – báo cáo) có sẵn trong KLASSA, phần mềm quản lý trung tâm dạy thêm thiết kế riêng cho Việt Nam.</p>
    <ul>
      <li>Dùng thử miễn phí 14 ngày — không cần thẻ tín dụng</li>
      <li>Hỗ trợ import dữ liệu từ Excel 1-1 qua Zalo</li>
      <li>Giá từ 490.000đ/tháng — công khai tại klassa.vn</li>
    </ul>
    <p style="margin-top:8pt"><strong style="color:#F59E0B">→ klassa.vn</strong> · Tài liệu này được phát hành miễn phí bởi đội ngũ KLASSA, ấn bản 06/2026.</p>
  </div>
</div>

</body></html>`

async function main() {
  fs.mkdirSync(OUT_DIR, { recursive: true })
  const tmpHtml = path.join(OUT_DIR, '_ebook_tmp.html')
  fs.writeFileSync(tmpHtml, html, 'utf8')

  const browser = await chromium.launch()
  const page = await browser.newPage()
  await page.goto('file:///' + tmpHtml.replace(/\\/g, '/'), { waitUntil: 'networkidle' })
  await page.pdf({
    path: OUT_PDF,
    format: 'A4',
    printBackground: true,
    margin: { top: '14mm', bottom: '16mm', left: '15mm', right: '15mm' },
    displayHeaderFooter: true,
    headerTemplate: '<span></span>',
    footerTemplate: `<div style="width:100%; font-size:7.5pt; color:#94A3B8; display:flex; justify-content:space-between; padding:0 15mm;">
      <span>Cẩm nang vận hành trung tâm dạy thêm — klassa.vn</span>
      <span>Trang <span class="pageNumber"></span>/<span class="totalPages"></span></span>
    </div>`,
  })
  await browser.close()
  fs.unlinkSync(tmpHtml)
  const kb = Math.round(fs.statSync(OUT_PDF).size / 1024)
  console.log('✅ PDF:', OUT_PDF, `(${kb} KB)`)
}

main().catch((e) => { console.error(e); process.exit(1) })
