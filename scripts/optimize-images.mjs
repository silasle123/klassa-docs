// Nén ảnh chụp màn hình sang WebP và đổi đường dẫn trong bài viết.
//
//   node scripts/optimize-images.mjs                 # nén ảnh đang được bài viết dùng, đổi .png → .webp trong .md
//   node scripts/optimize-images.mjs --delete-unused # thêm: xoá ảnh trong assets/screenshots không bài nào dùng
//
// Ảnh gốc PNG được giữ lại, trừ khi chạy --delete-unused (khi đó chỉ giữ đúng tệp bài viết đang trỏ tới).
import fs from 'node:fs'
import path from 'node:path'
import sharp from 'sharp'

const root = path.resolve(import.meta.dirname, '..')
const shotsDir = path.join(root, 'assets', 'screenshots')
const SKIP = new Set(['node_modules', '.vitepress', '.git', 'catalog', 'scripts', 'public', 'design-system'])
const deleteUnused = process.argv.includes('--delete-unused')

function walk(dir, out = []) {
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    if (e.isDirectory()) {
      if (!SKIP.has(e.name)) walk(path.join(dir, e.name), out)
    } else if (e.name.endsWith('.md')) out.push(path.join(dir, e.name))
  }
  return out
}

const mdFiles = walk(root)
const IMG_RE = /(assets\/screenshots\/)([\w.\-]+)\.(png|jpe?g)/g
let converted = 0
let rewritten = 0
let savedBytes = 0
const used = new Set()

for (const file of mdFiles) {
  const src = fs.readFileSync(file, 'utf8')
  let changed = false
  const out = src.replace(IMG_RE, (m, prefix, name, ext) => {
    const from = path.join(shotsDir, `${name}.${ext}`)
    const to = path.join(shotsDir, `${name}.webp`)
    if (!fs.existsSync(from)) {
      used.add(`${name}.${ext}`)
      return m
    }
    used.add(`${name}.webp`)
    changed = true
    return `${prefix}${name}.webp`
  })
  if (changed) {
    fs.writeFileSync(file, out)
    rewritten++
  }
  for (const m of out.matchAll(/assets\/screenshots\/([\w.\-]+\.(?:webp|png|jpe?g|gif|svg))/g)) used.add(m[1])
}

// ảnh ở trang chủ (import trong theme)
const homeData = path.join(root, '.vitepress', 'theme', 'components', 'home-data.ts')
if (fs.existsSync(homeData)) {
  for (const m of fs.readFileSync(homeData, 'utf8').matchAll(/assets\/screenshots\/([\w.\-]+\.(?:webp|png|jpe?g))/g)) used.add(m[1])
}

for (const f of used) {
  if (!f.endsWith('.webp')) continue
  const name = f.replace(/\.webp$/, '')
  const pngPath = ['png', 'jpg', 'jpeg'].map((e) => path.join(shotsDir, `${name}.${e}`)).find((p) => fs.existsSync(p))
  const webpPath = path.join(shotsDir, f)
  if (!pngPath) continue
  if (fs.existsSync(webpPath) && fs.statSync(webpPath).mtimeMs >= fs.statSync(pngPath).mtimeMs) continue
  const before = fs.statSync(pngPath).size
  await sharp(pngPath).webp({ quality: 84, effort: 5, smartSubsample: true }).toFile(webpPath)
  savedBytes += before - fs.statSync(webpPath).size
  converted++
}

let deleted = 0
if (deleteUnused) {
  for (const f of fs.readdirSync(shotsDir)) {
    // bản PNG gốc của ảnh đã có WebP cũng bị xoá: bài viết chỉ còn trỏ tới WebP
    if (!used.has(f)) {
      fs.rmSync(path.join(shotsDir, f))
      deleted++
    }
  }
}

console.log(
  `Ảnh: nén ${converted} tệp (bớt ${(savedBytes / 1048576).toFixed(1)} MB), sửa ${rewritten} bài` +
    (deleteUnused ? `, xoá ${deleted} ảnh không dùng` : ''),
)
