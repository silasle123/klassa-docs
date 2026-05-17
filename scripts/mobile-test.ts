import { chromium, devices } from 'playwright'

async function shoot(name: string, theme: 'light' | 'dark', url: string) {
  const browser = await chromium.launch({ headless: true })
  const ctx = await browser.newContext({
    ...devices['iPhone 13'],
    colorScheme: theme,
    ignoreHTTPSErrors: true,
  })
  const page = await ctx.newPage()
  await page.addInitScript((t) => localStorage.setItem('klassa-theme', t), theme)
  await page.goto(url, { waitUntil: 'networkidle', timeout: 30_000 })
  await page.waitForTimeout(3500)
  await page.screenshot({ path: `debug-screenshots/mobile_${name}_${theme}.png` })
  console.log(`OK mobile_${name}_${theme}.png`)
  await browser.close()
}

async function main() {
  const SITE = 'https://docs.klassa.vn/'
  await shoot('cover', 'light', SITE)
  await shoot('cover', 'dark', SITE)
  await shoot('article', 'light', SITE + '#/bat-dau/dang-nhap')
  await shoot('chat', 'light', SITE + '#/cong-nhan-vien/chat')
}
main().catch(console.error)
