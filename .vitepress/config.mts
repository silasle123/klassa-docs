import { defineConfig, type DefaultTheme } from 'vitepress'
import container from 'markdown-it-container'
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { REDIRECTS } from './redirects.mjs'

const ROOT = fileURLToPath(new URL('..', import.meta.url))

/**
 * Mục lục bên trái được dựng TỰ ĐỘNG từ thư mục bài viết.
 * Thêm bài mới: chỉ cần tạo tệp .md trong đúng thư mục, có frontmatter `title`.
 * Thứ tự trong nhóm: theo `order` trong frontmatter (nhỏ đứng trước), sau đó theo tên tệp.
 * Bài có `group: <tên>` sẽ được gom vào nhóm con cùng tên (vd Nhân sự).
 * Bài có `sidebar: false` không hiện ở mục lục (vẫn mở được bằng liên kết).
 */
export const GROUPS: { text: string; dirs: string[]; collapsed?: boolean }[] = [
  { text: 'Bắt đầu', dirs: ['bat-dau'], collapsed: false },
  { text: 'Tài khoản & thao tác chung', dirs: ['tai-khoan'] },
  { text: 'Tuyển sinh', dirs: ['tuyen-sinh'] },
  { text: 'Học sinh & Phụ huynh', dirs: ['hoc-sinh'] },
  { text: 'Lớp học & Thời khoá biểu', dirs: ['lop-hoc', 'giao-vien'] },
  { text: 'Điểm danh & Nhận xét', dirs: ['diem-danh'] },
  { text: 'Học tập & Đánh giá', dirs: ['hoc-tap'] },
  { text: 'Học online', dirs: ['hoc-online'] },
  { text: 'Học phí & Hoá đơn', dirs: ['hoc-phi'] },
  { text: 'Kế toán & Công nợ', dirs: ['ke-toan'] },
  { text: 'Nhân sự', dirs: ['nhan-su'] },
  { text: 'Báo cáo', dirs: ['bao-cao'] },
  { text: 'Tin nhắn & Kết nối', dirs: ['tin-nhan', 'tich-hop'] },
  { text: 'AI & Tự động hoá', dirs: ['ai-hub', 'tu-dong-hoa'] },
  { text: 'Cổng phụ huynh & App', dirs: ['cong-phu-huynh', 'mobile'] },
  { text: 'Cổng nhân viên', dirs: ['cong-nhan-vien'] },
  { text: 'Cài đặt hệ thống', dirs: ['cai-dat', 'plugin'] },
  { text: 'Kho vật tư', dirs: ['kho-vat-tu'] },
  { text: 'Hỏi đáp & Hỗ trợ', dirs: ['faq', 'phan-hoi'] },
]

type Page = { link: string; title: string; order: number; group?: string; file: string; hidden?: boolean }

function readFrontmatter(file: string): Record<string, string> {
  const raw = fs.readFileSync(file, 'utf8').replace(/^﻿/, '')
  const out: Record<string, string> = {}
  const m = raw.match(/^---\r?\n([\s\S]*?)\r?\n---/)
  if (m) {
    for (const line of m[1].split(/\r?\n/)) {
      const kv = line.match(/^([A-Za-z_][\w-]*):\s*(.*)$/)
      if (kv) out[kv[1]] = kv[2].trim().replace(/^['"]|['"]$/g, '')
    }
  }
  if (!out.title) {
    const h1 = raw.match(/^#\s+(.+)$/m)
    if (h1) out.title = h1[1].trim()
  }
  return out
}

function pagesOf(dir: string): Page[] {
  const abs = path.join(ROOT, dir)
  if (!fs.existsSync(abs)) return []
  return fs
    .readdirSync(abs)
    .filter((f) => f.endsWith('.md'))
    .map((f) => {
      const fm = readFrontmatter(path.join(abs, f))
      const slug = f.replace(/\.md$/, '')
      return {
        file: `${dir}/${f}`,
        link: slug === 'index' ? `/${dir}/` : `/${dir}/${slug}`,
        title: fm.sidebarTitle || fm.title || slug,
        order: fm.order ? Number(fm.order) : slug === 'index' ? -1 : 999,
        group: fm.group || undefined,
        hidden: fm.sidebar === 'false',
      }
    })
    .filter((p) => !p.hidden)
    .sort((a, b) => a.order - b.order || a.file.localeCompare(b.file, 'vi'))
}

function buildSidebar(): DefaultTheme.SidebarItem[] {
  const items: DefaultTheme.SidebarItem[] = []
  for (const g of GROUPS) {
    // gộp bài của mọi thư mục trong nhóm rồi xếp theo `order` (giữ thứ tự thư mục khi cùng order)
    const pages = g.dirs
      .flatMap((d, di) => pagesOf(d).map((p, pi) => ({ ...p, _k: di * 1000 + pi })))
      .sort((a, b) => a.order - b.order || a._k - b._k)
    if (!pages.length) continue
    const loose = pages.filter((p) => !p.group)
    const sub = new Map<string, Page[]>()
    for (const p of pages.filter((p) => p.group)) {
      if (!sub.has(p.group!)) sub.set(p.group!, [])
      sub.get(p.group!)!.push(p)
    }
    items.push({
      text: g.text,
      collapsed: g.collapsed ?? true,
      items: [
        ...loose.map((p) => ({ text: p.title, link: p.link })),
        ...[...sub.entries()].map(([text, ps]) => ({
          text,
          collapsed: true,
          items: ps.map((p) => ({ text: p.title, link: p.link })),
        })),
      ],
    })
  }
  return items
}

/** Chuyển link cũ dạng docs.klassa.vn/#/thu-muc/bai sang đường dẫn mới (trang cũ dùng Docsify). */
const HASH_REDIRECT = `(function(){try{var h=location.hash;if(h.indexOf('#/')!==0)return;var p=decodeURIComponent(h.slice(2)).split('?')[0].replace(/\\.md$/,'').replace(/^\\/+|\\/+$/g,'');var m=${JSON.stringify(
  REDIRECTS,
)};if(!p||p==='README'){location.replace('/');return}var t=Object.prototype.hasOwnProperty.call(m,p)?m[p]:p;location.replace('/'+t)}catch(e){}})();`

export default defineConfig({
  lang: 'vi-VN',
  title: 'Hướng dẫn KLASSA',
  titleTemplate: ':title · Hướng dẫn KLASSA',
  description:
    'Hướng dẫn sử dụng KLASSA, phần mềm quản lý trung tâm dạy thêm: từ lần đăng nhập đầu tiên đến điểm danh, xuất phiếu học phí và báo cáo.',
  cleanUrls: true,
  // KLASSA_IGNORE_DEADLINKS=1 chỉ dùng khi thử giao diện lúc bài viết còn dở; bản thật phải 0 link gãy
  ignoreDeadLinks: process.env.KLASSA_IGNORE_DEADLINKS === '1',
  lastUpdated: true,
  srcExclude: [
    'README.md',
    'HOSTING.md',
    'KLASSA-MODULE-MAP.md',
    'SUMMARY.md',
    '_sidebar.md',
    'catalog/**',
    'scripts/**',
    'node_modules/**',
    'design-system/**',
    'debug-screenshots/**',
  ],
  sitemap: { hostname: 'https://docs.klassa.vn' },
  // chỉ mục tìm kiếm (~1,1 MB, ~250 kB khi nén, chỉ tải khi bấm Tìm) vượt ngưỡng cảnh báo mặc định 500 kB
  vite: { build: { chunkSizeWarningLimit: 1400 } },
  head: [
    ['script', {}, HASH_REDIRECT],
    ['link', { rel: 'icon', type: 'image/svg+xml', href: '/brand/klassa-icon.svg' }],
    ['meta', { name: 'theme-color', content: '#1E3A8A' }],
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:site_name', content: 'Hướng dẫn KLASSA' }],
    ['meta', { property: 'og:locale', content: 'vi_VN' }],
    ['meta', { property: 'og:image', content: 'https://docs.klassa.vn/og.png' }],
    ['meta', { property: 'og:image:width', content: '1200' }],
    ['meta', { property: 'og:image:height', content: '630' }],
    ['meta', { name: 'twitter:card', content: 'summary_large_image' }],
  ],
  // tiêu đề + mô tả riêng từng bài khi dán link vào Zalo/Facebook
  transformHead({ pageData }) {
    const title = pageData.frontmatter.title || pageData.title || 'Hướng dẫn KLASSA'
    const desc = pageData.frontmatter.description || pageData.description || ''
    const url = 'https://docs.klassa.vn/' + pageData.relativePath.replace(/(^|\/)index\.md$/, '$1').replace(/\.md$/, '')
    return [
      ['meta', { property: 'og:title', content: title }],
      ['meta', { property: 'og:description', content: desc }],
      ['meta', { property: 'og:url', content: url }],
      ['link', { rel: 'canonical', href: url }],
    ]
  },
  markdown: {
    image: { lazyLoading: true },
    config(md) {
      // ::: steps — danh sách bước có số tròn nối bằng đường dọc
      md.use(container, 'steps', {
        render(tokens: any[], idx: number) {
          return tokens[idx].nesting === 1 ? '<div class="steps">\n' : '</div>\n'
        },
      })
      md.core.ruler.push('klassa_doc_meta', (state: any) => {
        const t = state.tokens
        // danh sách đánh số bắt đầu khác 1 vẫn đếm đúng trong ::: steps
        for (const tok of t) {
          if (tok.type === 'ordered_list_open') {
            const start = Number(tok.attrGet('start') || 1)
            if (start > 1) tok.attrSet('style', `counter-reset: step ${start - 1}`)
          }
        }
        // chèn khối "Dành cho / Cần gói" ngay dưới tiêu đề H1
        const i = t.findIndex((x: any) => x.type === 'heading_close' && x.tag === 'h1')
        if (i >= 0) {
          const tok = new state.Token('html_block', '', 0)
          tok.content = '<DocMeta />\n'
          t.splice(i + 1, 0, tok)
        }
      })
    },
  },
  themeConfig: {
    logo: { src: '/brand/klassa-icon.svg', alt: 'KLASSA' },
    siteTitle: 'Hướng dẫn KLASSA',
    nav: [
      { text: 'Bắt đầu', link: '/bat-dau/', activeMatch: '^/bat-dau/' },
      {
        text: 'Theo vai',
        items: [
          { text: 'Quản lý chi nhánh & Nhân sự', link: '/bat-dau/vai-quan-ly-chi-nhanh' },
          { text: 'Lễ tân', link: '/bat-dau/vai-le-tan' },
          { text: 'Giáo viên & Trợ giảng', link: '/bat-dau/vai-giao-vien' },
          { text: 'Kế toán', link: '/bat-dau/vai-ke-toan' },
          { text: 'Phụ huynh & Học sinh', link: '/bat-dau/vai-phu-huynh' },
        ],
      },
      { text: 'Hỏi đáp', link: '/faq/tong-hop', activeMatch: '^/faq/' },
      { text: 'klassa.vn', link: 'https://www.klassa.vn' },
    ],
    sidebar: buildSidebar(),
    outline: { level: [2, 3], label: 'Trong bài này' },
    docFooter: { prev: 'Bài trước', next: 'Bài tiếp theo' },
    lastUpdated: { text: 'Cập nhật', formatOptions: { dateStyle: 'short' } },
    returnToTopLabel: 'Lên đầu trang',
    sidebarMenuLabel: 'Mục lục',
    darkModeSwitchLabel: 'Giao diện',
    lightModeSwitchTitle: 'Chuyển sang nền sáng',
    darkModeSwitchTitle: 'Chuyển sang nền tối',
    externalLinkIcon: true,
    notFound: {
      title: 'Không tìm thấy trang',
      quote: 'Trang này có thể đã được đổi tên hoặc gộp vào bài khác.',
      linkLabel: 'Về trang chủ',
      linkText: 'Về trang chủ hướng dẫn',
    },
    footer: {
      message: 'KLASSA, phần mềm quản lý trung tâm dạy thêm.',
      copyright: '© 2026 KLASSA',
    },
    search: {
      provider: 'local',
      options: {
        detailedView: true,
        translations: {
          button: { buttonText: 'Tìm hướng dẫn', buttonAriaLabel: 'Tìm hướng dẫn' },
          modal: {
            displayDetails: 'Hiện đoạn trích',
            resetButtonTitle: 'Xoá ô tìm',
            backButtonTitle: 'Đóng',
            noResultsText: 'Không có bài nào khớp với',
            footer: {
              selectText: 'mở bài',
              selectKeyAriaLabel: 'Enter',
              navigateText: 'chọn',
              navigateUpKeyAriaLabel: 'Mũi tên lên',
              navigateDownKeyAriaLabel: 'Mũi tên xuống',
              closeText: 'đóng',
              closeKeyAriaLabel: 'Esc',
            },
          },
        },
        miniSearch: {
          options: {
            // gõ không dấu vẫn ra: "diem danh" khớp "điểm danh"
            processTerm: (term: string) =>
              term
                .toLowerCase()
                .normalize('NFD')
                .replace(/[̀-ͯ]/g, '')
                .replace(/đ/g, 'd'),
          },
          searchOptions: {
            fuzzy: 0.15,
            prefix: true,
            boost: { title: 5, titles: 2, text: 1 },
          },
        },
      },
    },
  },
})
