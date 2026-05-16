# AI Insights HR — phân tích thông minh

## Khái niệm

Plugin **AI HR Insights** dùng AI phân tích sâu dữ liệu nhân sự để rút ra **kết luận thông minh** mà số liệu thô không thể hiện:

- "Phòng ban nào sắp có nguy cơ thiếu nhân lực?"
- "Giáo viên nào đang quá tải?"
- "Mẫu nhân viên nghỉ việc trong 6 tháng đầu có điểm chung gì?"

## Truy cập

Menu trái → **Nhân sự → AI Insights** (hoặc **/hr/ai-insights**).

## Các insight mẫu

### 1. Phân tích retention

- Nhóm tuổi nào ở lại lâu nhất?
- Phòng ban nào có turnover cao nhất?
- Yếu tố nào ảnh hưởng quyết định ở/đi?

### 2. Tối ưu lương

- Có chênh lệch lương bất hợp lý giữa cùng vị trí không?
- Lương trung bình của trung tâm so với thị trường?
- Đề xuất tăng lương cho ai để giữ chân?

### 3. Năng suất

- Giáo viên nào có hiệu quả cao bất thường (lớp đông, chuyên cần tốt, KPI cao)?
- Có pattern nào để học theo không?

### 4. Tuyển dụng

- Nguồn ứng viên nào hiệu quả nhất?
- Đặc điểm nào của ứng viên dẫn đến thành công lâu dài?

## Cách dùng

Trang AI Insights tự sinh báo cáo định kỳ. Có thể:

- **Đặt câu hỏi tự do** — gõ câu hỏi bằng tiếng Việt, AI trả lời dựa trên dữ liệu nội bộ
- **Yêu cầu sinh báo cáo cho cuộc họp** — VD "Báo cáo nhân sự quý 2 cho cuộc họp HĐQT"

## Lưu ý

- **Plugin trả phí** — tính theo số nhân viên + số insight / tháng.
- **Cần dữ liệu đủ** — trung tâm <10 NV thì AI khó rút ra insight ý nghĩa.

## Câu hỏi thường gặp

**Dữ liệu của tôi có được gửi cho bên ngoài không?**
Có. AI Insights dùng nhà cung cấp AI (OpenAI / Anthropic / Gemini). Dữ liệu được gửi đi nhưng có ràng buộc bảo mật (zero retention).

**Tôi không muốn AI đụng dữ liệu nhạy cảm, có cấu hình được không?**
Có. Trong Cài đặt → AI → "Phạm vi dữ liệu" — chọn loại dữ liệu cho phép AI đọc.
