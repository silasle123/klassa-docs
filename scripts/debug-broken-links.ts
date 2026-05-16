/**
 * Debug Docsify - skip cover, click sidebar links, check rendering.
 */
import { chromium } from 'playwright'
import * as fs from 'fs'
import * as path from 'path'

const SITE = 'https://silasle123.github.io/klassa-docs/#/README'  // skip cover via hash route
const OUTPUT_DIR = path.join(__dirname, '..', 'debug-screenshots')

async function main() {
  fs.mkdirSync(OUTPUT_DIR, { recursive: true })

  const browser = await chromium.launch({ headless: true })
  const context = await browser.newContext({ viewport: { width: 1280, height: 800 } })
  const page = await context.newPage()

  const consoleErrors: string[] = []
  page.on('console', (msg) => {
    if (msg.type() === 'error') consoleErrors.push(msg.text())
  })
  page.on('pageerror', (err) => consoleErrors.push(`PAGEERROR: ${err.message}`))
  const networkFails: string[] = []
  page.on('response', (resp) => {
    if (resp.status() >= 400) networkFails.push(`${resp.status()} ${resp.url()}`)
  })

  console.log(`🌐 Open: ${SITE}`)
  await page.goto(SITE, { waitUntil: 'networkidle', timeout: 30_000 })
  await page.waitForTimeout(4000)

  // Dump DOM structure
  const domInfo = await page.evaluate(() => {
    return {
      hasSidebar: !!document.querySelector('.sidebar'),
      hasSidebarNav: !!document.querySelector('.sidebar-nav'),
      hasCover: !!document.querySelector('.cover'),
      coverVisible: !!document.querySelector('section.cover.show'),
      sidebarHTML: document.querySelector('.sidebar')?.innerHTML?.slice(0, 500) || 'NONE',
      contentSection: document.querySelector('.markdown-section')?.textContent?.slice(0, 200) || 'NONE',
      bodyClass: document.body.className,
    }
  })
  console.log('DOM:', JSON.stringify(domInfo, null, 2))

  // Try multiple selectors
  const selectors = ['.sidebar-nav a', '.sidebar a[href*="#"]', 'aside a', '.app-nav a']
  for (const sel of selectors) {
    const count = await page.$$eval(sel, (els) => els.length)
    console.log(`Selector "${sel}" → ${count} links`)
  }

  // Get all links in sidebar
  const links = await page.$$eval('aside a, .sidebar a', (els) =>
    Array.from(new Set(
      els
        .map((el) => ({ text: (el.textContent || '').trim(), href: el.getAttribute('href') || '' }))
        .filter((l) => l.href && !l.href.startsWith('http'))
    ))
  )
  console.log(`Found ${links.length} internal links`)

  // Test first 15 links
  const testLinks = links.slice(0, 15)
  const report: any[] = []

  for (let i = 0; i < testLinks.length; i++) {
    const { text, href } = testLinks[i]
    consoleErrors.length = 0
    networkFails.length = 0
    const slug = href.replace(/[^a-z0-9]/gi, '_').slice(0, 60)
    console.log(`\n[${i + 1}/${testLinks.length}] Navigate: "${text}" → ${href}`)

    try {
      // Navigate directly via hash route
      await page.goto(SITE.replace('#/README', '') + href, { waitUntil: 'networkidle', timeout: 15_000 })
      await page.waitForTimeout(1500)

      const contentInfo = await page.evaluate(() => {
        const section = document.querySelector('.markdown-section')
        if (!section) return { len: 0, h1: 'NO_SECTION' }
        return {
          len: (section.textContent || '').trim().length,
          h1: section.querySelector('h1')?.textContent?.trim() || '',
        }
      })

      const isEmpty = contentInfo.len < 100
      const status = isEmpty ? '❌ EMPTY' : '✅ OK'
      console.log(`  ${status} len=${contentInfo.len} h1="${contentInfo.h1}"`)
      if (consoleErrors.length > 0) console.log(`  console errors: ${consoleErrors.length}`)
      if (networkFails.length > 0) console.log(`  network 4xx/5xx: ${networkFails.length}`)
      if (isEmpty) {
        await page.screenshot({ path: path.join(OUTPUT_DIR, `empty_${i + 1}_${slug}.png`) })
      }
      report.push({ text, href, status, contentLen: contentInfo.len, h1: contentInfo.h1, errors: [...consoleErrors], netFails: [...networkFails] })
    } catch (err) {
      console.log(`  💥 ${(err as Error).message}`)
      report.push({ text, href, status: 'CLICK_FAILED', error: (err as Error).message })
    }
  }

  console.log('\n\n=== SUMMARY ===')
  const failed = report.filter((r) => r.status !== '✅ OK')
  console.log(`Failed: ${failed.length}/${report.length}`)
  failed.forEach((r) => {
    console.log(`  ${r.status}  "${r.text}"  →  ${r.href}  (len=${r.contentLen})`)
    if (r.netFails?.length) console.log(`     netFails: ${r.netFails.slice(0,3).join(' / ')}`)
  })

  fs.writeFileSync(path.join(OUTPUT_DIR, 'report.json'), JSON.stringify(report, null, 2))
  await browser.close()
}

main().catch(console.error)
