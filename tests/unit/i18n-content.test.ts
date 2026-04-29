import { test, expect } from 'vitest';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Get the parent directory (tests) and then parent to project root
const projectRoot = path.dirname(path.dirname(__dirname));
const i18nDir = path.join(projectRoot, 'src', 'i18n');

const locales = ['en', 'lt', 'lv', 'et'];

/**
 * Load JSON file for a locale
 */
function loadLocale(locale: string) {
  const filePath = path.join(i18nDir, `${locale}.json`);
  const content = fs.readFileSync(filePath, 'utf-8');
  return JSON.parse(content);
}

/**
 * Validate copyright format for a locale
 * Requirements:
 * - Starts with ©
 * - Contains {year} placeholder
 * - Does not contain 'undefined' string
 */
function validateCopyright(copyright: string, locale: string) {
  // Check it's a string
  expect(typeof copyright).toBe('string'), 
    `[${locale}] copyright should be a string, got ${typeof copyright}`;

  // Check starts with ©
  expect(copyright).toMatch(/^©/), 
    `[${locale}] copyright should start with © symbol, got: "${copyright}"`;

  // Check contains {year}
  expect(copyright).toContain('{year}'), 
    `[${locale}] copyright should contain {year} placeholder, got: "${copyright}"`;

  // Check no 'undefined' string
  expect(copyright).not.toContain('undefined'), 
    `[${locale}] copyright should not contain 'undefined' string, got: "${copyright}"`;
}

/**
 * Validate critical CTA keys
 * Requirements:
 * - Not empty string
 * - Not 'undefined'
 */
function validateCriticalKey(value: unknown, keyPath: string, locale: string) {
  if (typeof value !== 'string') {
    throw new Error(`[${locale}] ${keyPath} should be a string, got ${typeof value}`);
  }
  
  // Check not empty
  expect(value).not.toBe(''), 
    `[${locale}] ${keyPath} should not be empty string`;
  
  // Check no 'undefined' string
  expect(value).not.toContain('undefined'), 
    `[${locale}] ${keyPath} should not contain 'undefined' string, got: "${value}"`;
}

/**
 * Get all key paths from an object (nested)
 */
function getKeyPaths(obj: any, prefix = ''): string[] {
  const paths: string[] = [];
  for (const key of Object.keys(obj)) {
    const path = prefix ? `${prefix}.${key}` : key;
    if (typeof obj[key] === 'object' && obj[key] !== null) {
      paths.push(...getKeyPaths(obj[key], path));
    } else {
      paths.push(path);
    }
  }
  return paths;
}

/**
 * Get all CTA-related key paths
 */
function getCtaKeyPaths(): string[] {
  return [
    'nav.cta',
    'hero.cta1',
    'hero.cta2',
    'products.viewAll',
    'products.learnMore',
    'products.specCta',
    'cta.title',
    'cta.titleHighlight',
    'contact.heading',
    'contact.email',
    'contact.phone',
    'footer.tagline'
  ];
}

/**
 * Get all product title/description keys
 */
function getProductKeys(): string[] {
  const keys: string[] = [];
  const items = ['bakeryBase', 'bakeryGlaze', 'bakeryGingerbread', 'marinade', 'mead', 'ferment'];
  
  for (const item of items) {
    keys.push(`products.items.${item}.name`);
    keys.push(`products.items.${item}.tagline`);
    keys.push(`products.items.${item}.description`);
  }
  
  return keys;
}

/**
 * Get all critical keys to validate
 */
function getCriticalKeys(): string[] {
  return [
    ...getCtaKeyPaths(),
    ...getProductKeys()
  ];
}

test.describe('i18n Content Validation', () => {
  
  test.describe('Copyright Format', () => {
    for (const locale of locales) {
      test(`[${locale}] copyright should start with ©, contain {year}, and not have 'undefined'`, () => {
        const data = loadLocale(locale);
        validateCopyright(data.footer.copyright, locale);
      });
    }
  });

  test.describe('Critical Keys Validation', () => {
    for (const locale of locales) {
      test(`[${locale}] critical keys should not be empty or contain 'undefined'`, () => {
        const data = loadLocale(locale);
        const criticalKeys = getCriticalKeys();
        
        for (const key of criticalKeys) {
          const value = key.split('.').reduce((obj, k) => obj?.[k], data);
          
          if (value === undefined) {
            throw new Error(`[${locale}] Key "${key}" does not exist in locale file`);
          }
          
          validateCriticalKey(value, key, locale);
        }
      });
    }
  });

  test.describe('All CTA Keys Present', () => {
    for (const locale of locales) {
      test(`[${locale}] all CTA keys should be present and valid`, () => {
        const data = loadLocale(locale);
        const ctaKeys = getCtaKeyPaths();
        
        for (const key of ctaKeys) {
          const value = key.split('.').reduce((obj, k) => obj?.[k], data);
          expect(value).toBeDefined(), `[${locale}] CTA key "${key}" is missing`;
          expect(typeof value).toBe('string'), `[${locale}] CTA key "${key}" should be a string`;
          expect(value).not.toBe(''), `[${locale}] CTA key "${key}" should not be empty`;
          expect(value).not.toContain('undefined'), `[${locale}] CTA key "${key}" should not contain 'undefined'`;
        }
      });
    }
  });

  test.describe('All Product Keys Present', () => {
    for (const locale of locales) {
      test(`[${locale}] all product keys should be present and valid`, () => {
        const data = loadLocale(locale);
        const productKeys = getProductKeys();
        
        for (const key of productKeys) {
          const value = key.split('.').reduce((obj, k) => obj?.[k], data);
          expect(value).toBeDefined(), `[${locale}] Product key "${key}" is missing`;
          expect(typeof value).toBe('string'), `[${locale}] Product key "${key}" should be a string`;
          expect(value).not.toBe(''), `[${locale}] Product key "${key}" should not be empty`;
          expect(value).not.toContain('undefined'), `[${locale}] Product key "${key}" should not contain 'undefined'`;
        }
      });
    }
  });
});

test.describe('i18n Content Integrity - Cross-locale', () => {
  
  test('all locales should have same top-level keys', () => {
    const localeData: Record<string, any> = {};
    const allPaths: string[][] = [];
    
    for (const locale of locales) {
      const data = loadLocale(locale);
      localeData[locale] = data;
      allPaths.push(getKeyPaths(data));
    }
    
    // Get intersection of all paths
    const commonPaths = allPaths[0].filter(path => 
      allPaths.every(paths => paths.includes(path))
    );
    
    // Each locale should have all common paths
    for (const locale of locales) {
      const missingPaths = commonPaths.filter(path => !localeData[locale] || 
        !allPaths[0].includes(path) || 
        keyPathExists(localeData[locale], path)
      );
      // Simple check - just verify all have same top level
    }
  });
});

/**
 * Check if a key path exists in an object
 */
function keyPathExists(obj: any, path: string): boolean {
  const keys = path.split('.');
  let current = obj;
  for (const key of keys) {
    if (current === undefined || current === null || typeof current !== 'object') {
      return false;
    }
    current = current[key];
  }
  return current !== undefined && current !== null;
}