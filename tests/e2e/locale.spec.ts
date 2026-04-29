import { test, expect } from '@playwright/test';
import { enableRuntimeErrorProtection, cleanupRuntimeErrorProtection, checkForRuntimeErrors } from '../setup/playwright.setup';

const locales = ['en', 'lt', 'lv', 'et'];

test.describe('Locale Navigation', () => {
  for (const locale of locales) {
    test.describe(`Locale: ${locale}`, () => {
      test(`should have ${locale} locale pages`, async ({ page }) => {
        // Enable runtime error protection
        enableRuntimeErrorProtection(page, `should have ${locale} locale pages`);
        
        try {
          await page.goto(`/${locale}/`);
          await expect(page).toHaveTitle(/Honeymark/);
          
          // Check for runtime errors after the test
          checkForRuntimeErrors(page, `should have ${locale} locale pages`);
        } finally {
          cleanupRuntimeErrorProtection(page);
        }
      });

      test(`should not have "undefined" text on ${locale} home page`, async ({ page }) => {
        enableRuntimeErrorProtection(page, `should not have "undefined" text on ${locale} home page`);
        
        try {
          await page.goto(`/${locale}/`);
          const pageText = await page.textContent('body');
          expect(pageText).not.toContain('undefined');
          
          checkForRuntimeErrors(page, `should not have "undefined" text on ${locale} home page`);
        } finally {
          cleanupRuntimeErrorProtection(page);
        }
      });

      test(`should have footer on ${locale} page`, async ({ page }) => {
        enableRuntimeErrorProtection(page, `should have footer on ${locale} page`);
        
        try {
          await page.goto(`/${locale}/`);
          const footer = page.locator('footer');
          await expect(footer).toBeVisible();
          
          checkForRuntimeErrors(page, `should have footer on ${locale} page`);
        } finally {
          cleanupRuntimeErrorProtection(page);
        }
      });

      test(`should have working navigation on ${locale} page`, async ({ page }) => {
        enableRuntimeErrorProtection(page, `should have working navigation on ${locale} page`);
        
        try {
          await page.goto(`/${locale}/`);
          const nav = page.locator('nav');
          await expect(nav).toBeVisible();
          
          // Check for all navigation links
          const links = nav.locator('a');
          const count = await links.count();
          expect(count).toBeGreaterThan(0), `No navigation links found on ${locale}`;
          
          checkForRuntimeErrors(page, `should have working navigation on ${locale} page`);
        } finally {
          cleanupRuntimeErrorProtection(page);
        }
      });
    });
  }
});

test.describe('All Locales - Comprehensive Check', () => {
  test('should load all 4 locale home pages with 200 status', async ({ page }) => {
    const results: { locale: string; status: number }[] = [];
    
    for (const locale of locales) {
      enableRuntimeErrorProtection(page, `should load all 4 locale home pages with 200 status`);
      
      try {
        const response = await page.goto(`/${locale}/`);
        const status = response?.status() ?? 0;
        results.push({ locale, status });
        
        expect(status).toBe(200), `Failed for ${locale}: got status ${status}`;
        
        checkForRuntimeErrors(page, `should load all 4 locale home pages with 200 status`);
      } finally {
        cleanupRuntimeErrorProtection(page);
      }
    }
    
    // Log results
    console.log('Locale Navigation Results:', results);
  });
});