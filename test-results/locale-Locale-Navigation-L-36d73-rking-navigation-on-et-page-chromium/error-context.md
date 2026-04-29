# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: locale.spec.ts >> Locale Navigation >> Locale: et >> should have working navigation on et page
- Location: tests/e2e/locale.spec.ts:52:7

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator: locator('nav')
Expected: visible
Error: strict mode violation: locator('nav') resolved to 2 elements:
    1) <nav id="main-nav" class="fixed top-0 left-0 right-0 z-50 bg-white transition-shadow duration-200">…</nav> aka locator('#main-nav')
    2) <nav class="flex flex-wrap items-center justify-center gap-8">…</nav> aka getByText('Tooted Meist Kontakt', { exact: true })

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
        - /url: /et/
      - generic [ref=e12]:
        - link "Tooted" [ref=e13] [cursor=pointer]:
          - /url: /et/#produktai
        - link "Meist" [ref=e14] [cursor=pointer]:
          - /url: /et/#apie
        - link "Kontakt" [ref=e15] [cursor=pointer]:
          - /url: /et/#kontaktai
        - generic [ref=e16]:
          - button "et" [ref=e17]:
            - generic [ref=e18]: et
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
        - link "Telli" [ref=e21] [cursor=pointer]:
          - /url: /et/contact/
  - generic [ref=e24]:
    - generic [ref=e25]:
      - paragraph [ref=e26]: B2B mee tarnija · Balti riigid
      - heading "Looduslik mesi — Teie ärile." [level=1] [ref=e27]:
        - text: Looduslik
        - text: mesi —
        - text: Teie ärile.
      - paragraph [ref=e28]: Mee hulgimüük toidu- ja joogitööstusele.
      - generic [ref=e29]:
        - link "Vaata tooteid" [ref=e30] [cursor=pointer]:
          - /url: /et/products/
        - link "Võta ühendust" [ref=e31] [cursor=pointer]:
          - /url: /et/contact/
      - generic [ref=e32]:
        - generic [ref=e33]: Organic sertifitseeritud
        - generic [ref=e34]: ·
        - generic [ref=e35]: Alates 100 kg
        - generic [ref=e36]: ·
        - generic [ref=e37]: 14 aastat kogemust
    - img "Kuldse mee purk puidust lusikaga" [ref=e40]
  - generic [ref=e42]:
    - generic [ref=e43]:
      - generic: "01"
      - heading "Usaldusväärne Balti mesi tarnija" [level=2] [ref=e44]
    - generic [ref=e45]:
      - generic [ref=e46]:
        - paragraph [ref=e47]: Honeymark — MB Lakštena hallatav B2B mee kaubamärk 13-aastase kogemusega Balti riikide hulgimüügiturul. Tarnime looduslikku ja organic sertifitseeritud mett toidutootmise, kondiitritööstuse, alkohoolsete jookide tootjatele ja pagaritöökodadele.
        - paragraph [ref=e48]: Meie kliendid — suurimad Balti riikide toidu- ja joogiettevõtted — usaldavad Honeymarki stabiilse kvaliteedi, täpsete tarnete ja pikaajalise partnerluse tõttu.
        - link "Uuri meist rohkem" [ref=e49] [cursor=pointer]:
          - /url: /et/about/
          - text: Uuri meist rohkem
          - img [ref=e50]
      - img "Klaaspurk kuldse meega" [ref=e53]
  - generic [ref=e55]:
    - generic [ref=e56]:
      - generic [ref=e57]:
        - heading "Šeis linni" [level=2] [ref=e58]
        - paragraph [ref=e59]: Iga linn on loodud konkreetsel tootmisprotsessile — mitte üldise põhiaine.
      - link "Vaata kõiki linne" [ref=e60] [cursor=pointer]:
        - /url: /et/products/
        - text: Vaata kõiki linne
        - img [ref=e61]
    - generic [ref=e63]:
      - article [ref=e64]:
        - generic [ref=e69]:
          - heading "Bakery Base" [level=3] [ref=e70]
          - paragraph [ref=e71]: Leib, piparkookid, kookid
        - paragraph [ref=e72]: Universaalne pagaritööstuse põhiaine stabiliseeritud Maillardi reaktsiooniga. Maailma tootmismahus lider.
        - generic [ref=e73]:
          - generic [ref=e74]:
            - generic [ref=e75]: Niiskus
            - generic [ref=e79]: 18,0%
          - generic [ref=e80]:
            - generic [ref=e81]: F/G suhe
            - generic [ref=e85]: 1,1–1,2
          - generic [ref=e86]:
            - generic [ref=e87]: Värv
            - generic [ref=e91]: Hele–keskmine
          - generic [ref=e92]:
            - generic [ref=e93]: Aroomi int.
            - generic [ref=e97]: Neutraalne
          - generic [ref=e98]:
            - generic [ref=e99]: Puhtuse tase
            - generic [ref=e103]: Standartne
          - generic [ref=e104]:
            - generic [ref=e105]: Töötlus
            - generic [ref=e109]: Standartne
        - generic [ref=e110]:
          - generic [ref=e111]: ES põhiaine
          - generic [ref=e112]: Mahu lider
          - generic [ref=e113]: Maillardi reaktsioon
        - paragraph [ref=e115]: Pagarikompleksid, kondiitritööstus, kookide ja muesli tootjad
        - generic [ref=e117]: Universaalne
        - button "Hanki spetsifikatsioon" [ref=e118]
      - article [ref=e119]:
        - generic [ref=e124]:
          - heading "Mead" [level=3] [ref=e125]
          - paragraph [ref=e126]: Mesi, hidromeel
        - paragraph [ref=e127]: Antibiootikumite kogus allakäigurajal. Iga partii laboriandmetega ja jälgitavusega.
        - generic [ref=e128]:
          - generic [ref=e129]:
            - generic [ref=e130]: Niiskus
            - generic [ref=e134]: 17,5–18,5%
          - generic [ref=e135]:
            - generic [ref=e136]: F/G suhe
            - generic [ref=e140]: 1,1–1,3
          - generic [ref=e141]:
            - generic [ref=e142]: Värv
            - generic [ref=e146]: Hele–keskmine
          - generic [ref=e147]:
            - generic [ref=e148]: Aroomi int.
            - generic [ref=e152]: Balansseeritud
          - generic [ref=e153]:
            - generic [ref=e154]: Puhtuse tase
            - generic [ref=e158]: Lab. igaüks
          - generic [ref=e159]:
            - generic [ref=e160]: Töötlus
            - generic [ref=e164]: Külm 10–15°C
        - generic [ref=e165]:
          - generic [ref=e166]: EE jälgitavus
          - generic [ref=e167]: Antibiootikumid allakäigurajal
          - generic [ref=e168]: Honey Passport
        - paragraph [ref=e170]: Mesi tootjad, traditsioonilised mesi ettevõtted
        - generic [ref=e172]: Puhtuse garantii
        - button "Hanki spetsifikatsioon" [ref=e173]
      - article [ref=e174]:
        - generic [ref=e179]:
          - heading "Ferment" [level=3] [ref=e180]
          - paragraph [ref=e181]: Kombucha, raugad, fermentatsioonijookid
        - paragraph [ref=e182]: Organic sertifitseeritud. Tütar säilitatud. Sõbralik fermentatsioonikultuuridele.
        - generic [ref=e183]:
          - generic [ref=e184]:
            - generic [ref=e185]: Niiskus
            - generic [ref=e189]: 18,5–19,5%
          - generic [ref=e190]:
            - generic [ref=e191]: F/G suhe
            - generic [ref=e195]: 1,0–1,2
          - generic [ref=e196]:
            - generic [ref=e197]: Värv
            - generic [ref=e201]: Keskmine
          - generic [ref=e202]:
            - generic [ref=e203]: Aroomi int.
            - generic [ref=e207]: Subtilne
          - generic [ref=e208]:
            - generic [ref=e209]: Puhtuse tase
            - generic [ref=e213]: Organic + lab.
          - generic [ref=e214]:
            - generic [ref=e215]: Töötlus
            - generic [ref=e219]: Minimaalne
        - generic [ref=e220]:
          - generic [ref=e221]: Ainult Organic
          - generic [ref=e222]: Kultuuride sõbralik
          - generic [ref=e223]: Tütar säilitatud
        - paragraph [ref=e225]: Kombucha tootjad, raugatud jookide ettevõtted
        - generic [ref=e227]: Puhtuse garantii
        - button "Hanki spetsifikatsioon" [ref=e228]
  - generic [ref=e231]:
    - generic [ref=e232]:
      - generic [ref=e233]: "01"
      - heading "13 aastat kogemust" [level=3] [ref=e234]
      - paragraph [ref=e235]: Pidevad mee tarned Balti riikide toidu- ja joogitööstusele alates 2012. aastast. Teame teie tootmise vajadusi.
    - generic [ref=e236]:
      - generic [ref=e237]: "02"
      - heading "Organic sertifitseeritud" [level=3] [ref=e238]
      - paragraph [ref=e239]: Omame mahepõllumajanduse sertifikaati. Iga partii kontrollitakse laboris puhtuse ja EL toiduohutuse standardite vastavuse poolest.
    - generic [ref=e240]:
      - generic [ref=e241]: "03"
      - heading "Paindlik logistika" [level=3] [ref=e242]
      - paragraph [ref=e243]: Tarnime alates 100 kg annetes (7, 14, 29 kg) ja sildades (290 kg). Tarned kõigis Balti riikides teie tootmise graafiku järgi.
  - generic [ref=e245]:
    - heading "Sertifikaadid ja kvaliteet" [level=2] [ref=e246]
    - generic [ref=e247]:
      - generic [ref=e248]:
        - img [ref=e250]
        - paragraph [ref=e252]: EL toiduohutuse sertifikaat
      - generic [ref=e253]:
        - img [ref=e255]
        - paragraph [ref=e257]: Laboris testitud — antibiootikumivaba
      - generic [ref=e258]:
        - img [ref=e260]
        - paragraph [ref=e262]: Niiskuse ja diastaasi analüüs
      - generic [ref=e263]:
        - img [ref=e265]
        - paragraph [ref=e267]: Täielik jälgitavus
  - generic [ref=e269]:
    - heading "Tarnevormid" [level=2] [ref=e270]
    - generic [ref=e271]:
      - generic [ref=e272]:
        - img [ref=e274]
        - paragraph [ref=e276]: Anneted 25 kg
      - generic [ref=e277]:
        - img [ref=e279]
        - paragraph [ref=e281]: Sillad 300 kg
      - generic [ref=e282]:
        - img [ref=e284]
        - paragraph [ref=e286]: IBC konteinerid 1400 kg
  - generic [ref=e288]:
    - heading "Valmis koostööks? koostööks" [level=2] [ref=e289]
    - paragraph [ref=e290]: Võtke ühendust hulgihindade, näidiste ja tarnimistingimuste kohta, mis sobivad teie tootmisele.
    - link "Telli" [ref=e291] [cursor=pointer]:
      - /url: /et/contact/
  - contentinfo [ref=e292]:
    - generic [ref=e293]:
      - generic [ref=e294]:
        - generic [ref=e295]:
          - link "Honeymark" [ref=e296] [cursor=pointer]:
            - /url: /et/
          - paragraph [ref=e297]: B2B mee hulgimüük · Balti riigid
        - navigation [ref=e298]:
          - link "Tooted" [ref=e299] [cursor=pointer]:
            - /url: /et/products/
          - link "Meist" [ref=e300] [cursor=pointer]:
            - /url: /et/about/
          - link "Kontakt" [ref=e301] [cursor=pointer]:
            - /url: /et/contact/
      - generic [ref=e302]: © 2026 Honeymark. Kõik õigused kaitstud.
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