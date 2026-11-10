// Sau khi dựng trang: chép catalogue (đã gửi link cho khách trước đây) vào bản dựng,
// để đường dẫn cũ docs.klassa.vn/catalog/... vẫn mở được.
import fs from 'node:fs'
import path from 'node:path'

const root = path.resolve(import.meta.dirname, '..')
const dist = path.join(root, '.vitepress', 'dist')
const keep = ['catalog/catalog.html', 'catalog/KLASSA-Catalogue.pdf', 'catalog/img']

for (const rel of keep) {
  const src = path.join(root, rel)
  if (!fs.existsSync(src)) continue
  fs.cpSync(src, path.join(dist, rel), { recursive: true })
}
console.log('postbuild: đã chép catalogue vào bản dựng')
