/**
 * Render catalog.html -> catalog.pdf (A4, brand KLASSA).
 * Dùng: npx tsx catalog/render-pdf.ts   (chạy từ thư mục klassa-docs)
 */
import { chromium } from 'playwright'
import * as path from 'path'

async function main() {
  const htmlPath = path.join(__dirname, 'catalog.html')
  const pdfPath = path.join(__dirname, 'KLASSA-Catalogue.pdf')

  const browser = await chromium.launch()
  const page = await browser.newPage()

  // file:// để ảnh relative + Google Fonts load được
  await page.goto('file://' + htmlPath.replace(/\\/g, '/'), { waitUntil: 'networkidle' })
  // đợi font web render
  await page.waitForTimeout(1200)

  await page.pdf({
    path: pdfPath,
    format: 'A4',
    landscape: true,
    printBackground: true,
    margin: { top: '0', bottom: '0', left: '0', right: '0' },
    preferCSSPageSize: true,
  })

  await browser.close()
  console.log('✅ PDF xuất tại: ' + pdfPath)
}

main().catch((e) => { console.error('💥', e); process.exit(1) })
