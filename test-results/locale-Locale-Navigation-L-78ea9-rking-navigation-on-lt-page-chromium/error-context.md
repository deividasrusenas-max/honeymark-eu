# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: locale.spec.ts >> Locale Navigation >> Locale: lt >> should have working navigation on lt page
- Location: tests/e2e/locale.spec.ts:52:7

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator: locator('nav')
Expected: visible
Error: strict mode violation: locator('nav') resolved to 2 elements:
    1) <nav id="main-nav" class="fixed top-0 left-0 right-0 z-50 bg-white transition-shadow duration-200">…</nav> aka locator('#main-nav')
    2) <nav class="flex flex-wrap items-center justify-center gap-8">…</nav> aka getByText('Produktai Apie mus Kontaktai', { exact: true })

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
        - /url: /lt/
      - generic [ref=e12]:
        - link "Produktai" [ref=e13] [cursor=pointer]:
          - /url: /lt/#produktai
        - link "Apie mus" [ref=e14] [cursor=pointer]:
          - /url: /lt/#apie
        - link "Kontaktai" [ref=e15] [cursor=pointer]:
          - /url: /lt/#kontaktai
        - generic [ref=e16]:
          - button "lt" [ref=e17]:
            - generic [ref=e18]: lt
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
        - link "Užsakyti" [ref=e21] [cursor=pointer]:
          - /url: /lt/contact/
  - generic [ref=e24]:
    - generic [ref=e25]:
      - paragraph [ref=e26]: B2B medaus tiekėjas · Baltijos šalys
      - heading "Natūralus medus — Jūsų verslui." [level=1] [ref=e27]:
        - text: Natūralus
        - text: medus —
        - text: Jūsų verslui.
      - paragraph [ref=e28]: Medaus didmena maisto ir gėrimų pramonei.
      - generic [ref=e29]:
        - link "Peržiūrėti produktus" [ref=e30] [cursor=pointer]:
          - /url: /lt/products/
        - link "Susisiekti" [ref=e31] [cursor=pointer]:
          - /url: /lt/contact/
      - generic [ref=e32]:
        - generic [ref=e33]: Organic sertifikuotas
        - generic [ref=e34]: ·
        - generic [ref=e35]: Nuo 100 kg
        - generic [ref=e36]: ·
        - generic [ref=e37]: 14 metų patirtis
    - img "Auksinio medaus stiklainis su mediniu šaukšteliu" [ref=e40]
  - generic [ref=e42]:
    - generic [ref=e43]:
      - generic: "01"
      - heading "Patikimas Baltijos medaus tiekėjas" [level=2] [ref=e44]
    - generic [ref=e45]:
      - generic [ref=e46]:
        - paragraph [ref=e47]: Honeymark — MB Lakštena valdomas B2B medaus prekės ženklas su 13 metų patirtimi Baltijos šalių didmeninėje rinkoje. Tiekiame natūralų ir organic sertifikuotą medų maisto gamybos, konditerijos, alkoholinių gėrimų ir kepyklų sektoriams.
        - paragraph [ref=e48]: Mūsų klientai — didžiosios Baltijos šalių maisto ir gėrimų įmonės — pasitiki Honeymark dėl pastovios kokybės, tikslių tiekimų ir ilgalaikio partnerystės požiūrio.
        - link "Sužinoti daugiau apie mus" [ref=e49] [cursor=pointer]:
          - /url: /lt/about/
          - text: Sužinoti daugiau apie mus
          - img [ref=e50]
      - img "Stiklainis auksinio medaus" [ref=e53]
  - generic [ref=e55]:
    - generic [ref=e56]:
      - generic [ref=e57]:
        - heading "Šešios linijos" [level=2] [ref=e58]
        - paragraph [ref=e59]: Kiekviena linija sukurta konkrečiam gamybos procesui — ne bendro pobūdžio žaliava.
      - link "Peržiūrėti visas linijas" [ref=e60] [cursor=pointer]:
        - /url: /lt/products/
        - text: Peržiūrėti visas linijas
        - img [ref=e61]
    - generic [ref=e63]:
      - article [ref=e64]:
        - generic [ref=e69]:
          - heading "Bakery Base" [level=3] [ref=e70]
          - paragraph [ref=e71]: Duona, bandelės, sausainiai
        - paragraph [ref=e72]: Universali kepyklų žaliava su stabilia Maillardo reakcija. Apimties lyderis maisto gamyboje.
        - generic [ref=e73]:
          - generic [ref=e74]:
            - generic [ref=e75]: Drėgmė
            - generic [ref=e79]: 18,0%
          - generic [ref=e80]:
            - generic [ref=e81]: F/G santykis
            - generic [ref=e85]: 1,1–1,2
          - generic [ref=e86]:
            - generic [ref=e87]: Spalva
            - generic [ref=e91]: Šviesi–vid.
          - generic [ref=e92]:
            - generic [ref=e93]: Aromato int.
            - generic [ref=e97]: Neutralus
          - generic [ref=e98]:
            - generic [ref=e99]: Švaros lygis
            - generic [ref=e103]: Standartas
          - generic [ref=e104]:
            - generic [ref=e105]: Apdorojimas
            - generic [ref=e109]: Standartinis
        - generic [ref=e110]:
          - generic [ref=e111]: ES žaliava
          - generic [ref=e112]: Apimties lyderis
          - generic [ref=e113]: Maillardo reakcija
        - paragraph [ref=e115]: Kepyklos, konditerijos, sausainių ir muesli gamintojai
        - generic [ref=e117]: Universalus
        - button "Gauti specifikaciją" [ref=e118]
      - article [ref=e119]:
        - generic [ref=e124]:
          - heading "Mead" [level=3] [ref=e125]
          - paragraph [ref=e126]: Midus, hidromelis
        - paragraph [ref=e127]: Antibiotikų kiekis žemiau aptikimo ribos. Kiekviena partija su laboratoriniais duomenimis ir atsekamumu.
        - generic [ref=e128]:
          - generic [ref=e129]:
            - generic [ref=e130]: Drėgmė
            - generic [ref=e134]: 17,5–18,5%
          - generic [ref=e135]:
            - generic [ref=e136]: F/G santykis
            - generic [ref=e140]: 1,1–1,3
          - generic [ref=e141]:
            - generic [ref=e142]: Spalva
            - generic [ref=e146]: Šviesi–vid.
          - generic [ref=e147]:
            - generic [ref=e148]: Aromato int.
            - generic [ref=e152]: Subalansuotas
          - generic [ref=e153]:
            - generic [ref=e154]: Švaros lygis
            - generic [ref=e158]: Lab. kiekvienai
          - generic [ref=e159]:
            - generic [ref=e160]: Apdorojimas
            - generic [ref=e164]: Šaltai 10–15°C
        - generic [ref=e165]:
          - generic [ref=e166]: LT atsekamumas
          - generic [ref=e167]: Antibiotikai žemiau normos
          - generic [ref=e168]: Honey Passport
        - paragraph [ref=e170]: Midaus daryklos, tradicinės midaus įmonės
        - generic [ref=e172]: Švarumo garantija
        - button "Gauti specifikaciją" [ref=e173]
      - article [ref=e174]:
        - generic [ref=e179]:
          - heading "Ferment" [level=3] [ref=e180]
          - paragraph [ref=e181]: Kombucha, raugai, fermentuoti gėrimai
        - paragraph [ref=e182]: Organic sertifikuotas. Žiedadulkės išsaugotos. Draugiška fermentacijos kultūroms.
        - generic [ref=e183]:
          - generic [ref=e184]:
            - generic [ref=e185]: Drėgmė
            - generic [ref=e189]: 18,5–19,5%
          - generic [ref=e190]:
            - generic [ref=e191]: F/G santykis
            - generic [ref=e195]: 1,0–1,2
          - generic [ref=e196]:
            - generic [ref=e197]: Spalva
            - generic [ref=e201]: Vidutinė
          - generic [ref=e202]:
            - generic [ref=e203]: Aromato int.
            - generic [ref=e207]: Subtilus
          - generic [ref=e208]:
            - generic [ref=e209]: Švaros lygis
            - generic [ref=e213]: Organic + lab.
          - generic [ref=e214]:
            - generic [ref=e215]: Apdorojimas
            - generic [ref=e219]: Minimalus
        - generic [ref=e220]:
          - generic [ref=e221]: Tik Organic
          - generic [ref=e222]: Kultūroms draugiška
          - generic [ref=e223]: Žiedadulkės išsaugotos
        - paragraph [ref=e225]: Kombuchos gamintojai, raugintų gėrimų įmonės
        - generic [ref=e227]: Švarumo garantija
        - button "Gauti specifikaciją" [ref=e228]
  - generic [ref=e231]:
    - generic [ref=e232]:
      - generic [ref=e233]: "01"
      - heading "13 metų patirtis" [level=3] [ref=e234]
      - paragraph [ref=e235]: Nuolatiniai medaus tiekimai Baltijos šalių maisto ir gėrimų pramonei nuo 2012 metų. Žinome jūsų gamybos poreikius.
    - generic [ref=e236]:
      - generic [ref=e237]: "02"
      - heading "Organic sertifikuotas" [level=3] [ref=e238]
      - paragraph [ref=e239]: Turime ekologinio ūkininkavimo sertifikatą. Kiekviena siunta tikrinama laboratorijoje dėl grynumo ir atitikties ES maisto saugos standartams.
    - generic [ref=e240]:
      - generic [ref=e241]: "03"
      - heading "Lanksti logistika" [level=3] [ref=e242]
      - paragraph [ref=e243]: Tiekiame nuo 100 kg kibiruose (7, 14, 29 kg) ir statinėse (290 kg). Pristatymas visose Baltijos šalyse pagal jūsų gamybos grafiką.
  - generic [ref=e245]:
    - heading "Sertifikatai ir kokybė" [level=2] [ref=e246]
    - generic [ref=e247]:
      - generic [ref=e248]:
        - img [ref=e250]
        - paragraph [ref=e252]: ES maisto saugos sertifikatas
      - generic [ref=e253]:
        - img [ref=e255]
        - paragraph [ref=e257]: Tikrintas laboratorijoje — be antibiotikų
      - generic [ref=e258]:
        - img [ref=e260]
        - paragraph [ref=e262]: Drėgmės ir diastazės analizė
      - generic [ref=e263]:
        - img [ref=e265]
        - paragraph [ref=e267]: Pilnas atsekamumas
  - generic [ref=e269]:
    - heading "Tiekimo formatai" [level=2] [ref=e270]
    - generic [ref=e271]:
      - generic [ref=e272]:
        - img [ref=e274]
        - paragraph [ref=e276]: Kibirai 25 kg
      - generic [ref=e277]:
        - img [ref=e279]
        - paragraph [ref=e281]: Statinės 300 kg
      - generic [ref=e282]:
        - img [ref=e284]
        - paragraph [ref=e286]: IBC talpyklos 1400 kg
  - generic [ref=e288]:
    - heading "Pasiruošę bendradarbiauti? bendradarbiauti" [level=2] [ref=e289]
    - paragraph [ref=e290]: Susisiekite dėl didmeninių kainų, mėginių ir tiekimo sąlygų pritaikytų jūsų gamybai.
    - link "Užsakyti" [ref=e291] [cursor=pointer]:
      - /url: /lt/contact/
  - contentinfo [ref=e292]:
    - generic [ref=e293]:
      - generic [ref=e294]:
        - generic [ref=e295]:
          - link "Honeymark" [ref=e296] [cursor=pointer]:
            - /url: /lt/
          - paragraph [ref=e297]: B2B medaus didmena · Baltijos šalys
        - navigation [ref=e298]:
          - link "Produktai" [ref=e299] [cursor=pointer]:
            - /url: /lt/products/
          - link "Apie mus" [ref=e300] [cursor=pointer]:
            - /url: /lt/about/
          - link "Kontaktai" [ref=e301] [cursor=pointer]:
            - /url: /lt/contact/
      - generic [ref=e302]: © 2026 Honeymark. Visos teisės saugomos.
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