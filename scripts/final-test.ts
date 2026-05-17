import { chromium, devices } from 'playwright'

async function shoot(name: string, theme: 'light'|'dark', viewport: any, url: string) {
  const browser = await chromium.launch({ headless: true })
  const ctx = await browser.newContext({
    ...viewport,
    colorScheme: theme,
    ignoreHTTPSErrors: true,
  })
  const page = await ctx.newPage()
  await page.addInitScript((t) => localStorage.setItem('klassa-theme', t), theme)
  await page.goto(url, { waitUntil: 'networkidle', timeout: 30_000 })
  await page.waitForTimeout(3500)
  await page.screenshot({ path: `debug-screenshots/${name}_${theme}.png` })
  console.log(`OK ${name}_${theme}.png`)
  await browser.close()
}

const SITE = 'https://docs.klassa.vn/'
;(async () => {
  // Desktop
  const desktop = { viewport: { width: 1440, height: 900 } }
  await shoot('desktop_home', 'light', desktop, SITE)
  await shoot('desktop_home', 'dark', desktop, SITE)
  await shoot('desktop_article', 'light', desktop, SITE + '#/bat-dau/dang-nhap')

  // Mobile
  await shoot('mobile_home', 'light', devices['iPhone 13'], SITE)
  await shoot('mobile_home', 'dark', devices['iPhone 13'], SITE)
  await shoot('mobile_article', 'light', devices['iPhone 13'], SITE + '#/bat-dau/dang-nhap')
})().catch(console.error)
