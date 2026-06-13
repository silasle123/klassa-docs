import { chromium } from 'playwright'
import * as path from 'path'
import * as fs from 'fs'

async function main() {
  const htmlPath = path.join(__dirname, 'catalog.html')
  const outDir = path.join(__dirname, 'verify')
  fs.mkdirSync(outDir, { recursive: true })

  const browser = await chromium.launch()
  // 96dpi: A4 landscape = 1123 x 794 px
  const page = await browser.newPage({ viewport: { width: 1123, height: 794 } })
  await page.goto('file://' + htmlPath.replace(/\\/g, '/'), { waitUntil: 'networkidle' })
  await page.waitForTimeout(1200)

  const pages = await page.$$('.page')
  console.log('Số trang: ' + pages.length)
  for (let i = 0; i < pages.length; i++) {
    await pages[i].screenshot({ path: path.join(outDir, `page-${String(i + 1).padStart(2, '0')}.png`) })
  }
  await browser.close()
  console.log('✅ Đã chụp ' + pages.length + ' trang vào ' + outDir)
}
main().catch((e) => { console.error(e); process.exit(1) })
