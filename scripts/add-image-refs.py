# Add image refs to articles after "## Truy cập" first paragraph.
import re
import os
import sys
sys.stdout.reconfigure(encoding='utf-8')

ROOT = os.path.join(os.path.dirname(__file__), '..')

ARTICLES = [
    ("cong-nhan-vien/gioi-thieu.md", "cong-nhan-vien-gioi-thieu.png", "Cổng nhân viên"),
    ("cong-nhan-vien/cham-cong.md", "cong-nhan-vien-cham-cong.png", "Chấm công cá nhân"),
    ("cong-nhan-vien/ho-so.md", "cong-nhan-vien-ho-so.png", "Hồ sơ NV"),
    ("cong-nhan-vien/viec-can-lam.md", "cong-nhan-vien-viec-can-lam.png", "Việc cần làm hôm nay"),
    ("cong-phu-huynh/gioi-thieu.md", "cong-phu-huynh-gioi-thieu.png", "Cổng phụ huynh"),
    ("cong-phu-huynh/ho-so.md", "cong-phu-huynh-ho-so.png", "Hồ sơ phụ huynh"),
    ("cong-phu-huynh/lich-hoc.md", "cong-phu-huynh-lich-hoc.png", "Lịch học của con"),
    ("cong-phu-huynh/phan-hoi.md", "cong-phu-huynh-phan-hoi.png", "Gửi phản hồi"),
    ("ai-hub/chat.md", "ai-hub-chat.png", "AI Chat"),
    ("ai-hub/media.md", "ai-hub-media.png", "AI tạo media"),
    ("bao-cao/qua-han.md", "bao-cao-qua-han.png", "Báo cáo quá hạn"),
    ("bao-cao/at-risk.md", "bao-cao-at-risk.png", "Học sinh có nguy cơ"),
    ("bao-cao/tin-chi.md", "bao-cao-tin-chi.png", "Báo cáo tín chỉ"),
    ("bao-cao/pheu-tuyen-sinh.md", "bao-cao-pheu-tuyen-sinh.png", "Báo cáo phễu tuyển sinh"),
    ("bao-cao/theo-giao-vien.md", "bao-cao-theo-giao-vien.png", "Báo cáo theo giáo viên"),
    ("bao-cao/theo-hoc-sinh.md", "bao-cao-theo-hoc-sinh.png", "Báo cáo theo học sinh"),
]


def add(rel_md, img_name, alt):
    path = os.path.join(ROOT, rel_md)
    with open(path, encoding='utf-8') as f:
        content = f.read()

    if img_name in content:
        return f"SKIP {rel_md} (đã có ảnh)"

    img_md = f"\n![{alt}](../assets/screenshots/{img_name})\n"

    # Try insert after "## Truy cập\n\n<para>\n"
    m = re.search(r'(## Truy cập\n\n[^\n#]+\n)', content)
    if m:
        new = content[:m.end()] + img_md + content[m.end():]
        with open(path, 'w', encoding='utf-8') as f:
            f.write(new)
        return f"ADD {rel_md} (sau Truy cập)"

    # Fallback: insert after "## Cách dùng" first line
    m = re.search(r'(## Cách dùng\n\n[^\n#]+\n)', content)
    if m:
        new = content[:m.end()] + img_md + content[m.end():]
        with open(path, 'w', encoding='utf-8') as f:
            f.write(new)
        return f"ADD {rel_md} (sau Cách dùng)"

    # Last fallback: insert right after h1 title
    m = re.search(r'(^# [^\n]+\n)', content, re.M)
    if m:
        # Insert after first blank line following h1
        idx = content.find('\n\n', m.end())
        if idx != -1:
            new = content[:idx + 2] + img_md + content[idx + 2:]
            with open(path, 'w', encoding='utf-8') as f:
                f.write(new)
            return f"ADD {rel_md} (sau H1)"

    return f"FAIL {rel_md} - không tìm được anchor"


for rel_md, img, alt in ARTICLES:
    print(add(rel_md, img, alt))
