# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: locale.spec.ts >> Locale Navigation >> Locale: lv >> should have working navigation on lv page
- Location: tests/e2e/locale.spec.ts:52:7

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator: locator('nav')
Expected: visible
Error: strict mode violation: locator('nav') resolved to 2 elements:
    1) <nav id="main-nav" class="fixed top-0 left-0 right-0 z-50 bg-white transition-shadow duration-200">…</nav> aka locator('#main-nav')
    2) <nav class="flex flex-wrap items-center justify-center gap-8">…</nav> aka getByText('Produkti Par mums Kontakti', { exact: true })

Call log:
  - Expect "toBeVisible" with timeout 5000ms
  - waiting for locator('nav')

```

# Page snapshot

```yaml
- generic [active] [ref=e1]:
  - generic [ref=e3]:
    - generic [ref=e4]:
      - generic [ref=e5]: It looks like you might prefer English.
      - link "View site in English →" [ref=e6] [cursor=pointer]:
        - /url: /en/
    - button "Dismiss" [ref=e7]: ×
  - navigation [ref=e8]:
    - generic [ref=e10]:
      - link "Honeymark" [ref=e11] [cursor=pointer]:
        - /url: /lv/
      - generic [ref=e12]:
        - link "Produkti" [ref=e13] [cursor=pointer]:
          - /url: /lv/#produktai
        - link "Par mums" [ref=e14] [cursor=pointer]:
          - /url: /lv/#apie
        - link "Kontakti" [ref=e15] [cursor=pointer]:
          - /url: /lv/#kontaktai
        - generic [ref=e16]:
          - button "lv" [ref=e17]:
            - generic [ref=e18]: lv
            - img [ref=e19]
          - generic:
            - link "LT":
              - /url: /lt/
            - link "LV":
              - /url: /lv/
            - link "ET":
              - /url: /et/
            - link "PL":
              - /url: /pl/
        - link "Pasūtīt" [ref=e21] [cursor=pointer]:
          - /url: /lv/contact/
  - generic [ref=e24]:
    - generic [ref=e25]:
      - paragraph [ref=e26]: B2B medus piegādātājs · Baltijas valstis
      - heading "Dabiskais medus — jūsu uzņēmumam." [level=1] [ref=e27]:
        - text: Dabiskais
        - text: medus —
        - text: jūsu uzņēmumam.
      - paragraph [ref=e28]: Medus lielumtirgošana pārtikas un dzēruņu ražošanai.
      - generic [ref=e29]:
        - link "Skatīt produktus" [ref=e30] [cursor=pointer]:
          - /url: /lv/products/
        - link "Sazināties" [ref=e31] [cursor=pointer]:
          - /url: /lv/contact/
      - generic [ref=e32]:
        - generic [ref=e33]: Organiski sertificēts
        - generic [ref=e34]: ·
        - generic [ref=e35]: No 100 kg
        - generic [ref=e36]: ·
        - generic [ref=e37]: 14 gadu pieredze
    - img "Zeltainas medus stikla trauks ar koka karodziņu" [ref=e40]
  - generic [ref=e42]:
    - generic [ref=e43]:
      - generic: "01"
      - heading "Uzticams Baltijas medus piegādātājs" [level=2] [ref=e44]
    - generic [ref=e45]:
      - generic [ref=e46]:
        - paragraph [ref=e47]: Honeymark ir B2B medus zīmols, ko pārvalda MB Lakštena, ar 13 gadu pieredzi Baltijas lielumtirgošanas tirgū. Mēs piegādājam dabisku un organiski sertificētu medu pārtikas ražošanas, konfekšu, alkoholisko dzēruņu un cepumu nozarēm.
        - paragraph [ref=e48]: Mūsu klientsi — lielākās Baltijas pārtikas un dzēruņu uzņēmumi — uzticas Honeymark vienmērīgai kvalitātei, uzticamiem piegādājumiem un garlaicīgas partneristes pieejas dēļ.
        - link "Uzzināt vairāk par mums" [ref=e49] [cursor=pointer]:
          - /url: /lv/about/
          - text: Uzzināt vairāk par mums
          - img [ref=e50]
      - img "Stikls zeltainā medā" [ref=e53]
  - generic [ref=e55]:
    - generic [ref=e56]:
      - generic [ref=e57]:
        - heading "Sešas līnijas" [level=2] [ref=e58]
        - paragraph [ref=e59]: Katru līniju izveidoja konkrētam ražošanas procesam — nevis vispārīgai izejvielai.
      - link "Skatīt visas līnijas" [ref=e60] [cursor=pointer]:
        - /url: /lv/products/
        - text: Skatīt visas līnijas
        - img [ref=e61]
    - generic [ref=e63]:
      - article [ref=e64]:
        - generic [ref=e69]:
          - heading "Bakery Base" [level=3] [ref=e70]
          - paragraph [ref=e71]: Pārējas, maizes izdelījumi, cepumi
        - paragraph [ref=e72]: Universāla cepumu izejviela ar stabilu Maillard reakciju. Tirgus līderis pārtikas ražošanas apjomiem.
        - generic [ref=e73]:
          - generic [ref=e74]:
            - generic [ref=e75]: Mitruma sat.
            - generic [ref=e79]: 18,0%
          - generic [ref=e80]:
            - generic [ref=e81]: F/G attiecība
            - generic [ref=e85]: 1,1–1,2
          - generic [ref=e86]:
            - generic [ref=e87]: Krāsa
            - generic [ref=e91]: Gaiša–vidēja
          - generic [ref=e92]:
            - generic [ref=e93]: Aromāta int.
            - generic [ref=e97]: Neitrāls
          - generic [ref=e98]:
            - generic [ref=e99]: Tīrības līmenis
            - generic [ref=e103]: Standarts
          - generic [ref=e104]:
            - generic [ref=e105]: Apstrāde
            - generic [ref=e109]: Standarta
        - generic [ref=e110]:
          - generic [ref=e111]: ES izejviela
          - generic [ref=e112]: Apjoma līderis
          - generic [ref=e113]: Maillard reakcija
        - paragraph [ref=e115]: Cepumnieki, konfekšu ražotāji, cepumu un muesli ražotāji
        - generic [ref=e117]: Universāls
        - button "Iegūt specifikāciju" [ref=e118]
      - article [ref=e119]:
        - generic [ref=e124]:
          - heading "Mead" [level=3] [ref=e125]
          - paragraph [ref=e126]: Medus, hidromēls
        - paragraph [ref=e127]: Antibiotiku līmenis zem noteikšanas robežas. Katra partija ar laboratorijas datiem un atsekojamību.
        - generic [ref=e128]:
          - generic [ref=e129]:
            - generic [ref=e130]: Mitruma sat.
            - generic [ref=e134]: 17,5–18,5%
          - generic [ref=e135]:
            - generic [ref=e136]: F/G attiecība
            - generic [ref=e140]: 1,1–1,3
          - generic [ref=e141]:
            - generic [ref=e142]: Krāsa
            - generic [ref=e146]: Gaiša–vidēja
          - generic [ref=e147]:
            - generic [ref=e148]: Aromāta int.
            - generic [ref=e152]: Līdzsvars
          - generic [ref=e153]:
            - generic [ref=e154]: Tīrības līmenis
            - generic [ref=e158]: Lab. katrai
          - generic [ref=e159]:
            - generic [ref=e160]: Apstrāde
            - generic [ref=e164]: Silts 10–15°C
        - generic [ref=e165]:
          - generic [ref=e166]: LV atsekojamība
          - generic [ref=e167]: Antibiotikas zem normas
          - generic [ref=e168]: Honey Passport
        - paragraph [ref=e170]: Medus darītavas, tradicionālās medus iestādes
        - generic [ref=e172]: Tīrības garantija
        - button "Iegūt specifikāciju" [ref=e173]
      - article [ref=e174]:
        - generic [ref=e179]:
          - heading "Ferment" [level=3] [ref=e180]
          - paragraph [ref=e181]: Kombuča, raugājami dzērieni, fermentēti dzērieni
        - paragraph [ref=e182]: Organiski sertificēts. Pylus saglabāts. Draudzīgs fermentācijas kultūrām.
        - generic [ref=e183]:
          - generic [ref=e184]:
            - generic [ref=e185]: Mitruma sat.
            - generic [ref=e189]: 18,5–19,5%
          - generic [ref=e190]:
            - generic [ref=e191]: F/G attiecība
            - generic [ref=e195]: 1,0–1,2
          - generic [ref=e196]:
            - generic [ref=e197]: Krāsa
            - generic [ref=e201]: Vidēja
          - generic [ref=e202]:
            - generic [ref=e203]: Aromāta int.
            - generic [ref=e207]: Subtils
          - generic [ref=e208]:
            - generic [ref=e209]: Tīrības līmenis
            - generic [ref=e213]: Organiski + lab.
          - generic [ref=e214]:
            - generic [ref=e215]: Apstrāde
            - generic [ref=e219]: Minimāls
        - generic [ref=e220]:
          - generic [ref=e221]: Tikai organic
          - generic [ref=e222]: Kultūrām draudzīgs
          - generic [ref=e223]: Pylus saglabāts
        - paragraph [ref=e225]: Kombučas ražotāji, raugotu dzēruņu iestādes
        - generic [ref=e227]: Tīrības garantija
        - button "Iegūt specifikāciju" [ref=e228]
  - generic [ref=e231]:
    - generic [ref=e232]:
      - generic [ref=e233]: "01"
      - heading "13 gadu pieredze" [level=3] [ref=e234]
      - paragraph [ref=e235]: Nepārtraukta medus piegāde Baltijas pārtikas un dzēruņu nozarē no 2012. gada. Mēs zinām jūsu ražošanas vajadzības.
    - generic [ref=e236]:
      - generic [ref=e237]: "02"
      - heading "Organiski sertificēts" [level=3] [ref=e238]
      - paragraph [ref=e239]: Mums ir organiskās lauksaimniecības sertifikāts. Katrs partijas testējums laboratorijā ir tīrības un Eiropas Kopīgās tirgus drošības standartu atbilstības dēļ.
    - generic [ref=e240]:
      - generic [ref=e241]: "03"
      - heading "Lieksta logistika" [level=3] [ref=e242]
      - paragraph [ref=e243]: Mēs piegādājam no 100 kg kastes (7, 14, 29 kg) un bļodās (290 kg). Piegāde visās Baltijas valstīs pēc jūsu ražošanas grafika.
  - generic [ref=e245]:
    - heading "Sertifikāti un kvalitāte" [level=2] [ref=e246]
    - generic [ref=e247]:
      - generic [ref=e248]:
        - img [ref=e250]
        - paragraph [ref=e252]: ES pārtikas drošības sertifikāts
      - generic [ref=e253]:
        - img [ref=e255]
        - paragraph [ref=e257]: Pārbaudīts laboratorijā — bez antibiotikām
      - generic [ref=e258]:
        - img [ref=e260]
        - paragraph [ref=e262]: Mitruma un diastāzes analīze
      - generic [ref=e263]:
        - img [ref=e265]
        - paragraph [ref=e267]: Pilns atsekojamības ceļš
  - generic [ref=e269]:
    - heading "Piegādes formāti" [level=2] [ref=e270]
    - generic [ref=e271]:
      - generic [ref=e272]:
        - img [ref=e274]
        - paragraph [ref=e276]: Kastes 25 kg
      - generic [ref=e277]:
        - img [ref=e279]
        - paragraph [ref=e281]: Bļodas 300 kg
      - generic [ref=e282]:
        - img [ref=e284]
        - paragraph [ref=e286]: IBC konteineri 1400 kg
  - generic [ref=e288]:
    - heading "Gatavi sadarboties? sadarboties" [level=2] [ref=e289]
    - paragraph [ref=e290]: Sazinieties par lielumtirgošanas cenām, paraugiem un piegādes nosacījumiem, kas piemēroti jūsu ražošanai.
    - link "Pasūtīt" [ref=e291] [cursor=pointer]:
      - /url: /lv/contact/
  - contentinfo [ref=e292]:
    - generic [ref=e293]:
      - generic [ref=e294]:
        - generic [ref=e295]:
          - link "Honeymark" [ref=e296] [cursor=pointer]:
            - /url: /lv/
          - paragraph [ref=e297]: B2B medus lielumtirgošana · Baltijas valstis
        - navigation [ref=e298]:
          - link "Produkti" [ref=e299] [cursor=pointer]:
            - /url: /lv/products/
          - link "Par mums" [ref=e300] [cursor=pointer]:
            - /url: /lv/about/
          - link "Kontakti" [ref=e301] [cursor=pointer]:
            - /url: /lv/contact/
      - generic [ref=e302]: © 2026 Honeymark. Visas tiesības aizsargātas.
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