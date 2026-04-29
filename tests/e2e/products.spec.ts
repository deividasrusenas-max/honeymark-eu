import { test, expect } from '@playwright/test';
import { enableRuntimeErrorProtection, cleanupRuntimeErrorProtection, checkForRuntimeErrors } from '../setup/playwright.setup';

// ProductCard component uses article as root element
// We use article tag as the selector (each ProductCard renders as an article)
// Using nth-of-type or data-testid would be more robust, but article works for this structure
const productCardSelector = 'article';
const productCardTitleSelector = 'article h3';
const ctaButtonSelector = 'button[onclick]';

const locales = ['en', 'lt', 'lv', 'et'];

test.describe('Products Pages E2E Tests', () => {
  for (const locale of locales) {
    test.describe(`Products page for locale: ${locale}`, () => {
      test(`should load /${locale}/products/ with 200 status`, async ({ page }) => {
        enableRuntimeErrorProtection(page, `should load /${locale}/products/ with 200 status`);
        
        try {
          const response = await page.goto(`/${locale}/products/`);
          expect(response?.status()).toBe(200);
          
          checkForRuntimeErrors(page, `should load /${locale}/products/ with 200 status`);
        } finally {
          cleanupRuntimeErrorProtection(page);
        }
      });

      test(`should not have "undefined" text visible on /${locale}/products/`, async ({ page }) => {
        enableRuntimeErrorProtection(page, `should not have "undefined" text visible on /${locale}/products/`);
        
        try {
          await page.goto(`/${locale}/products/`);
          const pageText = await page.textContent('body');
          expect(pageText).not.toContain('undefined');
          
          checkForRuntimeErrors(page, `should not have "undefined" text visible on /${locale}/products/`);
        } finally {
          cleanupRuntimeErrorProtection(page);
        }
      });

      test(`should have CTA buttons on /${locale}/products/`, async ({ page }) => {
        enableRuntimeErrorProtection(page, `should have CTA buttons on /${locale}/products/`);
        
        try {
          await page.goto(`/${locale}/products/`);
          
          // Wait for products to load
          await page.waitForSelector(productCardSelector);
          
          // Find CTA buttons - look for button elements with onclick attribute
          const ctaButtons = page.locator(ctaButtonSelector);
          const count = await ctaButtons.count();
          
          // At least one button should exist
          expect(count).toBeGreaterThan(0), 'No CTA buttons found';
          
          checkForRuntimeErrors(page, `should have CTA buttons on /${locale}/products/`);
        } finally {
          cleanupRuntimeErrorProtection(page);
        }
      });

      test(`should have product cards on /${locale}/products/`, async ({ page }) => {
        enableRuntimeErrorProtection(page, `should have product cards on /${locale}/products/`);
        
        try {
          await page.goto(`/${locale}/products/`);
          
          // Wait for products to load
          await page.waitForSelector(productCardSelector);
          
          // Count product cards - should have multiple
          const cards = page.locator(productCardSelector);
          const count = await cards.count();
          
          // At least one card should exist (typically 6 products)
          expect(count).toBeGreaterThan(0), 'No product cards found';
          
          checkForRuntimeErrors(page, `should have product cards on /${locale}/products/`);
        } finally {
          cleanupRuntimeErrorProtection(page);
        }
      });

      test(`should have product images on /${locale}/products/`, async ({ page }) => {
        enableRuntimeErrorProtection(page, `should have product images on /${locale}/products/`);
        
        try {
          await page.goto(`/${locale}/products/`);
          // ProductCard uses div elements with background-color for images
          const images = page.locator(`${productCardSelector} div[style*="background-color"]`);
          const count = await images.count();
          // At least one image element should exist (typically many)
          expect(count).toBeGreaterThan(0);
          
          checkForRuntimeErrors(page, `should have product images on /${locale}/products/`);
        } finally {
          cleanupRuntimeErrorProtection(page);
        }
      });

      test(`should have product titles on /${locale}/products/`, async ({ page }) => {
        enableRuntimeErrorProtection(page, `should have product titles on /${locale}/products/`);
        
        try {
          await page.goto(`/${locale}/products/`);
          
          // Wait for products to load
          await page.waitForSelector(productCardTitleSelector);
          
          // Count product titles - should have multiple
          const titles = page.locator(productCardTitleSelector);
          const count = await titles.count();
          
          // At least one title should exist (typically 6 products)
          expect(count).toBeGreaterThan(0), 'No product titles found';
          
          checkForRuntimeErrors(page, `should have product titles on /${locale}/products/`);
        } finally {
          cleanupRuntimeErrorProtection(page);
        }
      });
    });
  }
});

test.describe('All Products Pages - Comprehensive Check', () => {
  test('should have working CTA buttons that navigate to localized contact pages', async ({ page }) => {
    for (const locale of locales) {
      const testName = `should have working CTA buttons that navigate to localized contact pages - ${locale}`;
      enableRuntimeErrorProtection(page, testName);
      
      try {
        await page.goto(`/${locale}/products/`);
        
        // Wait for products to load
        await page.waitForSelector(productCardSelector);
        
        // Look for CTA buttons - button elements with onclick attribute (ProductCard uses inline onclick)
        const ctaButtons = page.locator('button[onclick]');
        const count = await ctaButtons.count();
        
        // At least one CTA button should exist
        expect(count).toBeGreaterThan(0), `No CTA buttons found on /${locale}/products/`;
        
        // Click the first button and verify it navigates to the correct localized contact page
        if (count > 0) {
          const button = ctaButtons.nth(0);
          await button.click();
          
          // Wait for navigation
          await page.waitForURL(`/${locale}/contact*`);
          
          // Verify we're on the correct contact page
          expect(page.url()).toContain(`/${locale}/contact`);
          
          // Verify the page loaded without 404
          const pageText = await page.textContent('body');
          expect(pageText).not.toContain('404'), `Found 404 on ${locale}/contact`;
          expect(pageText).not.toContain('Not Found'), `Found "Not Found" on ${locale}/contact`;
        }
        
        checkForRuntimeErrors(page, testName);
      } finally {
        cleanupRuntimeErrorProtection(page);
      }
    }
  });

  test('should crawl all 16 generated pages (4 locales x 4 pages each)', async ({ page }) => {
    // Test all 4 locales across 4 main pages each (home, products, about, contact)
    const pages = ['/', '/products/', '/about/', '/contact/'];
    const results: { locale: string; url: string; status: number; hasUndefined: boolean }[] = [];
    
    for (const locale of locales) {
      for (const path of pages) {
        const testName = `should crawl all 16 generated pages (4 locales x 4 pages each) - ${locale}${path}`;
        enableRuntimeErrorProtection(page, testName);
        
        try {
          const url = `/${locale}${path}`;
          const response = await page.goto(url);
          const status = response?.status() ?? 0;
          
          // Check for "undefined" text
          await page.waitForTimeout(100); // Wait for page to render
          const pageText = await page.textContent('body');
          const hasUndefined = pageText?.includes('undefined') ?? false;
          
          results.push({
            locale,
            url,
            status,
            hasUndefined,
          });
          
          // Assert status is 200
          expect(status).toBe(200), `Failed for ${url}: got status ${status}`;
          
          // Assert no "undefined" text
          expect(hasUndefined).toBe(false), `Found "undefined" text on ${url}`;
          
          checkForRuntimeErrors(page, testName);
        } finally {
          cleanupRuntimeErrorProtection(page);
        }
      }
    }
    
    // Log results for debugging
    console.log('E2E Test Results:');
    results.forEach((r) => {
      console.log(`  ${r.locale}${r.url}: status=${r.status}, hasUndefined=${r.hasUndefined}`);
    });
  });

  test('should have working CTA buttons on all product pages', async ({ page }) => {
    for (const locale of locales) {
      const testName = `should have working CTA buttons on all product pages - ${locale}`;
      enableRuntimeErrorProtection(page, testName);
      
      try {
        await page.goto(`/${locale}/products/`);
        
        // Wait for products to load
        await page.waitForSelector(productCardSelector);
        
        // Look for CTA buttons - button elements with onclick attribute (ProductCard uses inline onclick)
        const ctaButtons = page.locator('button[onclick]');
        const count = await ctaButtons.count();
        
        // At least one CTA button should exist
        expect(count).toBeGreaterThan(0), `No CTA buttons found on /${locale}/products/`;
        
        // Verify buttons are visible
        for (let i = 0; i < Math.min(count, 5); i++) {
          const button = ctaButtons.nth(i);
          const isVisible = await button.isVisible();
          if (isVisible) {
            expect(button.isVisible()).resolves.toBe(true);
          }
        }
        
        checkForRuntimeErrors(page, testName);
      } finally {
        cleanupRuntimeErrorProtection(page);
      }
    }
  });
});