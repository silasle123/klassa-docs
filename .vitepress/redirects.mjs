/**
 * Bảng chuyển hướng link cũ (trang Docsify dạng docs.klassa.vn/#/thu-muc/bai)
 * sang đường dẫn mới. Khoá và giá trị đều KHÔNG có đuôi .md, không có dấu / đầu.
 * Bài bị xoá thì trỏ về bài thay thế gần nhất ('' = trang chủ).
 */
export const REDIRECTS = {
  'bao-cao/cong-no': 'ke-toan/cong-no',
  'bao-cao/doanh-thu': 'ke-toan/bao-cao-doanh-thu',
  'bao-cao/qua-han': 'ke-toan/qua-han',
  'bao-cao/theo-hoc-sinh': 'bao-cao/hoc-sinh',
  'bao-cao/tin-chi': 'ke-toan/tin-chi',
  'bat-dau/dang-ky': 'tai-khoan/dang-ky',
  'bat-dau/dang-nhap': 'tai-khoan/dang-nhap',
  'bat-dau/dashboard': 'tai-khoan/trang-chu',
  'bat-dau/doi-mat-khau': 'tai-khoan/doi-mat-khau',
  'bat-dau/ho-so-ca-nhan': 'tai-khoan/ho-so-ca-nhan',
  'bat-dau/menu-trai': 'tai-khoan/menu-va-giao-dien',
  'bat-dau/nhap-du-lieu-hang-loat': 'tai-khoan/nhap-du-lieu-hang-loat',
  'bat-dau/vai-tro-nguoi-dung': 'tai-khoan/vai-tro-nguoi-dung',
  'cai-dat/cong-cu-admin': 'tai-khoan/nhap-du-lieu-hang-loat',
  'cai-dat/menu-builder': 'cai-dat/giao-dien-v6',
  'cai-dat/phan-quyen': 'tai-khoan/vai-tro-nguoi-dung',
  'cai-dat/setup-wizard': 'bat-dau/02-thiet-lap-trung-tam',
  'cong-phu-huynh/phan-hoi': 'cong-phu-huynh/gop-y',
  'diem-danh/bao-cao': 'bao-cao/diem-danh',
  'hoc-phi/ke-toan': 'ke-toan/tong-quan',
  'hoc-tap/nhan-xet-hoc-sinh': 'hoc-tap/cong-bo-diem',
  'hoc-tap/phan-tich': 'bao-cao/tien-do',
  'lop-hoc/co-so': 'cai-dat/co-so',
  'lop-hoc/ghi-danh': 'hoc-sinh/ghi-danh',
  'nhan-su/xep-ca': 'nhan-su/phan-ca-tuan',
  'phan-hoi/tiep-nhan': 'phan-hoi/gui-ho-tro',
  'phan-hoi/xu-ly': 'phan-hoi/gui-ho-tro',
  'tai-khoan/dashboard': 'tai-khoan/trang-chu',
  'tai-khoan/menu-trai': 'tai-khoan/menu-va-giao-dien',
  'tin-nhan/email': 'tich-hop/email',
}
