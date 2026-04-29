# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: locale.spec.ts >> Locale Navigation >> Locale: en >> should have working navigation on en page
- Location: tests/e2e/locale.spec.ts:52:7

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator: locator('nav')
Expected: visible
Error: strict mode violation: locator('nav') resolved to 2 elements:
    1) <nav id="main-nav" class="fixed top-0 left-0 right-0 z-50 bg-white transition-shadow duration-200">…</nav> aka locator('#main-nav')
    2) <nav class="flex flex-wrap items-center justify-center gap-8">…</nav> aka getByText('Products About us Contact', { exact: true })

Call log:
  - Expect "toBeVisible" with timeout 5000ms
  - waiting for locator('nav')

```

# Page snapshot

```yaml
- generic [active] [ref=e1]:
  - navigation [ref=e2]:
    - generic [ref=e4]:
      - link "Honeymark" [ref=e5] [cursor=pointer]:
        - /url: /en/
      - generic [ref=e6]:
        - link "Products" [ref=e7] [cursor=pointer]:
          - /url: /en/#produktai
        - link "About us" [ref=e8] [cursor=pointer]:
          - /url: /en/#apie
        - link "Contact" [ref=e9] [cursor=pointer]:
          - /url: /en/#kontaktai
        - generic [ref=e10]:
          - button "en" [ref=e11]:
            - generic [ref=e12]: en
            - img [ref=e13]
          - generic:
            - link "LT":
              - /url: /en/
            - link "LV":
              - /url: /en/
            - link "ET":
              - /url: /en/
            - link "PL":
              - /url: /en/
        - link "Order" [ref=e15] [cursor=pointer]:
          - /url: /en/contact/
  - generic [ref=e18]:
    - generic [ref=e19]:
      - paragraph [ref=e20]: B2B Honey Supplier · Baltic States
      - heading "Natural honey — for your business." [level=1] [ref=e21]:
        - text: Natural
        - text: honey —
        - text: for your business.
      - paragraph [ref=e22]: Wholesale honey for food and beverage manufacturers.
      - generic [ref=e23]:
        - link "View products" [ref=e24] [cursor=pointer]:
          - /url: /en/products/
        - link "Get in touch" [ref=e25] [cursor=pointer]:
          - /url: /en/contact/
      - generic [ref=e26]:
        - generic [ref=e27]: Organic certified
        - generic [ref=e28]: ·
        - generic [ref=e29]: From 100 kg
        - generic [ref=e30]: ·
        - generic [ref=e31]: 14 years of experience
    - img "Jar of golden honey with a wooden dipper" [ref=e34]
  - generic [ref=e36]:
    - generic [ref=e37]:
      - generic: "01"
      - heading "Trusted Baltic honey supplier" [level=2] [ref=e38]
    - generic [ref=e39]:
      - generic [ref=e40]:
        - paragraph [ref=e41]: Honeymark is a B2B honey brand operated by MB Lakštena, with 13 years of experience in the Baltic wholesale market. We supply natural and organic certified honey to food manufacturers, confectioneries, alcoholic beverage producers and bakeries.
        - paragraph [ref=e42]: Our clients — leading Baltic food and beverage companies — trust Honeymark for consistent quality, reliable deliveries and a long-term partnership approach.
        - link "Learn more about us" [ref=e43] [cursor=pointer]:
          - /url: /en/about/
          - text: Learn more about us
          - img [ref=e44]
      - img "Glass jar of golden honey" [ref=e47]
  - generic [ref=e49]:
    - generic [ref=e50]:
      - generic [ref=e51]:
        - heading "Six Lines" [level=2] [ref=e52]
        - paragraph [ref=e53]: Each line is designed for a specific production process — not generic raw material.
      - link "View all lines" [ref=e54] [cursor=pointer]:
        - /url: /en/products/
        - text: View all lines
        - img [ref=e55]
    - generic [ref=e57]:
      - article [ref=e58]:
        - generic [ref=e63]:
          - heading "Bakery Base" [level=3] [ref=e64]
          - paragraph [ref=e65]: Bread, rolls, cookies
        - paragraph [ref=e66]: Universal bakery raw material with stable Maillard reaction. Market leader in food production volume.
        - generic [ref=e67]:
          - generic [ref=e68]:
            - generic [ref=e69]: Moisture
            - generic [ref=e73]: 18,0%
          - generic [ref=e74]:
            - generic [ref=e75]: F/G ratio
            - generic [ref=e79]: 1.1–1.2
          - generic [ref=e80]:
            - generic [ref=e81]: Color
            - generic [ref=e85]: Light–medium
          - generic [ref=e86]:
            - generic [ref=e87]: Aroma int.
            - generic [ref=e91]: Neutral
          - generic [ref=e92]:
            - generic [ref=e93]: Purity level
            - generic [ref=e97]: Standard
          - generic [ref=e98]:
            - generic [ref=e99]: Processing
            - generic [ref=e103]: Standard
        - generic [ref=e104]:
          - generic [ref=e105]: EU raw material
          - generic [ref=e106]: Volume leader
          - generic [ref=e107]: Maillard reaction
        - paragraph [ref=e109]: Bakeries, confectioneries, cookie and muesli manufacturers
        - generic [ref=e111]: Universal
        - button "Get specification" [ref=e112]
      - article [ref=e113]:
        - generic [ref=e118]:
          - heading "Mead" [level=3] [ref=e119]
          - paragraph [ref=e120]: Mead, hydromel
        - paragraph [ref=e121]: Antibiotic levels below detection limit. Every batch with lab results and traceability.
        - generic [ref=e122]:
          - generic [ref=e123]:
            - generic [ref=e124]: Moisture
            - generic [ref=e128]: 17.5–18.5%
          - generic [ref=e129]:
            - generic [ref=e130]: F/G ratio
            - generic [ref=e134]: 1.1–1.3
          - generic [ref=e135]:
            - generic [ref=e136]: Color
            - generic [ref=e140]: Light–medium
          - generic [ref=e141]:
            - generic [ref=e142]: Aroma int.
            - generic [ref=e146]: Balanced
          - generic [ref=e147]:
            - generic [ref=e148]: Purity level
            - generic [ref=e152]: Lab each batch
          - generic [ref=e153]:
            - generic [ref=e154]: Processing
            - generic [ref=e158]: Cold 10–15°C
        - generic [ref=e159]:
          - generic [ref=e160]: LT traceability
          - generic [ref=e161]: Antibiotics below limit
          - generic [ref=e162]: Honey Passport
        - paragraph [ref=e164]: Meaderies, traditional mead producers
        - generic [ref=e166]: Clean guarantee
        - button "Get specification" [ref=e167]
      - article [ref=e168]:
        - generic [ref=e173]:
          - heading "Ferment" [level=3] [ref=e174]
          - paragraph [ref=e175]: Kombucha, ferments, fermented drinks
        - paragraph [ref=e176]: Organic certified. Pollen preserved. Friendly to fermentation cultures.
        - generic [ref=e177]:
          - generic [ref=e178]:
            - generic [ref=e179]: Moisture
            - generic [ref=e183]: 18.5–19.5%
          - generic [ref=e184]:
            - generic [ref=e185]: F/G ratio
            - generic [ref=e189]: 1.0–1.2
          - generic [ref=e190]:
            - generic [ref=e191]: Color
            - generic [ref=e195]: Medium
          - generic [ref=e196]:
            - generic [ref=e197]: Aroma int.
            - generic [ref=e201]: Subtle
          - generic [ref=e202]:
            - generic [ref=e203]: Purity level
            - generic [ref=e207]: Organic + lab
          - generic [ref=e208]:
            - generic [ref=e209]: Processing
            - generic [ref=e213]: Minimal
        - generic [ref=e214]:
          - generic [ref=e215]: Organic only
          - generic [ref=e216]: Culture-friendly
          - generic [ref=e217]: Pollen preserved
        - paragraph [ref=e219]: Kombucha manufacturers, fermented drink producers
        - generic [ref=e221]: Clean guarantee
        - button "Get specification" [ref=e222]
  - generic [ref=e225]:
    - generic [ref=e226]:
      - generic [ref=e227]: "01"
      - heading "13 years of experience" [level=3] [ref=e228]
      - paragraph [ref=e229]: Continuous honey supply to Baltic food and beverage industry since 2012.
    - generic [ref=e230]:
      - generic [ref=e231]: "02"
      - heading "Organic certified" [level=3] [ref=e232]
      - paragraph [ref=e233]: We hold organic farming certification. Every batch is lab-tested for purity and EU food safety compliance.
    - generic [ref=e234]:
      - generic [ref=e235]: "03"
      - heading "Flexible logistics" [level=3] [ref=e236]
      - paragraph [ref=e237]: We supply from 100 kg — in buckets (7, 14, 29 kg) and barrels (290 kg) across all Baltic states.
  - generic [ref=e239]:
    - heading "Certifications and quality" [level=2] [ref=e240]
    - generic [ref=e241]:
      - generic [ref=e242]:
        - img [ref=e244]
        - paragraph [ref=e246]: EU food safety certificate
      - generic [ref=e247]:
        - img [ref=e249]
        - paragraph [ref=e251]: Lab tested — antibiotic-free
      - generic [ref=e252]:
        - img [ref=e254]
        - paragraph [ref=e256]: Moisture and diastase analysis
      - generic [ref=e257]:
        - img [ref=e259]
        - paragraph [ref=e261]: Full traceability
  - generic [ref=e263]:
    - heading "Supply formats" [level=2] [ref=e264]
    - generic [ref=e265]:
      - generic [ref=e266]:
        - img [ref=e268]
        - paragraph [ref=e270]: Buckets 25 kg
      - generic [ref=e271]:
        - img [ref=e273]
        - paragraph [ref=e275]: Barrels 300 kg
      - generic [ref=e276]:
        - img [ref=e278]
        - paragraph [ref=e280]: IBC containers 1400 kg
  - generic [ref=e282]:
    - heading "Ready to work together? work together" [level=2] [ref=e283]
    - paragraph [ref=e284]: Get in touch for wholesale pricing, samples and supply terms tailored to your production.
    - link "Order" [ref=e285] [cursor=pointer]:
      - /url: /en/contact/
  - contentinfo [ref=e286]:
    - generic [ref=e287]:
      - generic [ref=e288]:
        - generic [ref=e289]:
          - link "Honeymark" [ref=e290] [cursor=pointer]:
            - /url: /en/
          - paragraph [ref=e291]: B2B Honey Wholesale · Baltic States
        - navigation [ref=e292]:
          - link "Products" [ref=e293] [cursor=pointer]:
            - /url: /en/products/
          - link "About us" [ref=e294] [cursor=pointer]:
            - /url: /en/about/
          - link "Contact" [ref=e295] [cursor=pointer]:
            - /url: /en/contact/
      - generic [ref=e296]: © 2026 Honeymark. All rights reserved.
```

# Test source

```ts
  1  | import { test, expect } from '@playwright/test';
  2  | import { enableRuntimeErrorProtection, cleanupRuntimeErrorProtection, checkForRuntimeErrors } from '../setup/playwright.setup';
  3  | 
  4  | const locales = ['en', 'lt', 'lv', 'et'];
  5  | 
  6  | test.describe('Locale Navigation', () => {
  7  |   for (const locale of locales) {
  8  |     test.describe(`Locale: ${locale}`, () => {
  9  |       test(`should have ${locale} locale pages`, async ({ page }) => {
  10 |         // Enable runtime error protection
  11 |         enableRuntimeErrorProtection(page, `should have ${locale} locale pages`);
  12 |         
  13 |         try {
  14 |           await page.goto(`/${locale}/`);
  15 |           await expect(page).toHaveTitle(/Honeymark/);
  16 |           
  17 |           // Check for runtime errors after the test
  18 |           checkForRuntimeErrors(page, `should have ${locale} locale pages`);
  19 |         } finally {
  20 |           cleanupRuntimeErrorProtection(page);
  21 |         }
  22 |       });
  23 | 
  24 |       test(`should not have "undefined" text on ${locale} home page`, async ({ page }) => {
  25 |         enableRuntimeErrorProtection(page, `should not have "undefined" text on ${locale} home page`);
  26 |         
  27 |         try {
  28 |           await page.goto(`/${locale}/`);
  29 |           const pageText = await page.textContent('body');
  30 |           expect(pageText).not.toContain('undefined');
  31 |           
  32 |           checkForRuntimeErrors(page, `should not have "undefined" text on ${locale} home page`);
  33 |         } finally {
  34 |           cleanupRuntimeErrorProtection(page);
  35 |         }
  36 |       });
  37 | 
  38 |       test(`should have footer on ${locale} page`, async ({ page }) => {
  39 |         enableRuntimeErrorProtection(page, `should have footer on ${locale} page`);
  40 |         
  41 |         try {
  42 |           await page.goto(`/${locale}/`);
  43 |           const footer = page.locator('footer');
  44 |           await expect(footer).toBeVisible();
  45 |           
  46 |           checkForRuntimeErrors(page, `should have footer on ${locale} page`);
  47 |         } finally {
  48 |           cleanupRuntimeErrorProtection(page);
  49 |         }
  50 |       });
  51 | 
  52 |       test(`should have working navigation on ${locale} page`, async ({ page }) => {
  53 |         enableRuntimeErrorProtection(page, `should have working navigation on ${locale} page`);
  54 |         
  55 |         try {
  56 |           await page.goto(`/${locale}/`);
  57 |           const nav = page.locator('nav');
> 58 |           await expect(nav).toBeVisible();
     |                             ^ Error: expect(locator).toBeVisible() failed
  59 |           
  60 |           // Check for all navigation links
  61 |           const links = nav.locator('a');
  62 |           const count = await links.count();
  63 |           expect(count).toBeGreaterThan(0), `No navigation links found on ${locale}`;
  64 |           
  65 |           checkForRuntimeErrors(page, `should have working navigation on ${locale} page`);
  66 |         } finally {
  67 |           cleanupRuntimeErrorProtection(page);
  68 |         }
  69 |       });
  70 |     });
  71 |   }
  72 | });
  73 | 
  74 | test.describe('All Locales - Comprehensive Check', () => {
  75 |   test('should load all 4 locale home pages with 200 status', async ({ page }) => {
  76 |     const results: { locale: string; status: number }[] = [];
  77 |     
  78 |     for (const locale of locales) {
  79 |       enableRuntimeErrorProtection(page, `should load all 4 locale home pages with 200 status`);
  80 |       
  81 |       try {
  82 |         const response = await page.goto(`/${locale}/`);
  83 |         const status = response?.status() ?? 0;
  84 |         results.push({ locale, status });
  85 |         
  86 |         expect(status).toBe(200), `Failed for ${locale}: got status ${status}`;
  87 |         
  88 |         checkForRuntimeErrors(page, `should load all 4 locale home pages with 200 status`);
  89 |       } finally {
  90 |         cleanupRuntimeErrorProtection(page);
  91 |       }
  92 |     }
  93 |     
  94 |     // Log results
  95 |     console.log('Locale Navigation Results:', results);
  96 |   });
  97 | });
```