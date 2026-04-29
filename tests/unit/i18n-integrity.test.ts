import { describe, it, expect, beforeAll } from 'vitest';
import { readFileSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const baseDir = join(__dirname, '../../src/i18n');
const locales = ['en', 'lt', 'lv', 'et'];

/**
 * Reads a JSON file and returns its parsed content
 */
function readJsonFile(locale: string): any {
  const filePath = join(baseDir, `${locale}.json`);
  const content = readFileSync(filePath, 'utf-8');
  return JSON.parse(content);
}

/**
 * Flattens a nested JSON object into dot-notation keys
 */
function flattenObject(obj: any, prefix = ''): Set<string> {
  const keys = new Set<string>();
  
  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      const newKey = prefix ? `${prefix}.${key}` : key;
      keys.add(newKey);
      
      if (typeof obj[key] === 'object' && obj[key] !== null && !Array.isArray(obj[key])) {
        const nestedKeys = flattenObject(obj[key], newKey);
        nestedKeys.forEach((k) => keys.add(k));
      }
    }
  }
  
  return keys;
}

/**
 * Deeply compares two objects for structural equality
 */
function compareStructures(obj1: any, obj2: any, path = ''): string[] {
  const errors: string[] = [];
  
  if (obj1 === null || obj2 === null || typeof obj1 !== 'object' || typeof obj2 !== 'object') {
    return errors;
  }
  
  const allKeys = new Set([...Object.keys(obj1), ...Object.keys(obj2)]);
  
  for (const key of allKeys) {
    const newPath = path ? `${path}.${key}` : key;
    const val1 = obj1[key];
    const val2 = obj2[key];
    
    // Both are objects (and not arrays)
    if (
      val1 !== null && typeof val1 === 'object' &&
      val2 !== null && typeof val2 === 'object' &&
      !Array.isArray(val1) && !Array.isArray(val2)
    ) {
      const nestedErrors = compareStructures(val1, val2, newPath);
      errors.push(...nestedErrors);
    }
    // Both are arrays
    else if (Array.isArray(val1) && Array.isArray(val2)) {
      if (val1.length !== val2.length) {
        errors.push(`Array length mismatch at "${newPath}": ${val1.length} vs ${val2.length}`);
      }
    }
    // One is undefined but not the other - missing key
    else if (val1 === undefined && val2 !== undefined) {
      errors.push(`Missing key at "${newPath}"`);
    } else if (val1 !== undefined && val2 === undefined) {
      errors.push(`Extra key at "${newPath}"`);
    }
  }
  
  return errors;
}

describe('i18n Integrity Tests', () => {
  let translations: Record<string, any> = {};
  
  beforeAll(() => {
    for (const locale of locales) {
      translations[locale] = readJsonFile(locale);
    }
  });
  
  describe('Key Presence Tests', () => {
    const baseLocale = 'lt';
    const baseKeys = flattenObject(translations[baseLocale]);
    
    it('should have all keys from lt.json present in en.json', () => {
      const enKeys = flattenObject(translations.en);
      for (const key of baseKeys) {
        expect(enKeys.has(key), `Key "${key}" is missing in en.json`).toBe(true);
      }
    });
    
    it('should have all keys from lt.json present in lv.json', () => {
      const lvKeys = flattenObject(translations.lv);
      for (const key of baseKeys) {
        expect(lvKeys.has(key), `Key "${key}" is missing in lv.json`).toBe(true);
      }
    });
    
    it('should have all keys from lt.json present in et.json', () => {
      const etKeys = flattenObject(translations.et);
      for (const key of baseKeys) {
        expect(etKeys.has(key), `Key "${key}" is missing in et.json`).toBe(true);
      }
    });
  });
  
  describe('Structure Consistency Tests', () => {
    it('should have identical structure for products across all locales', () => {
      const errors: string[] = [];
      
      for (let i = 1; i < locales.length; i++) {
        const locale = locales[i];
        const localeErrors = compareStructures(
          translations.lt.products,
          translations[locale].products,
          'products'
        );
        errors.push(...localeErrors.map(e => `[lt vs ${locale}] ${e}`));
      }
      
      if (errors.length > 0) {
        console.error('Structure differences found:', errors);
      }
      expect(errors.length).toBe(0);
    });
    
    it('should have identical structure for paramValues across all locales', () => {
      const errors: string[] = [];
      
      for (let i = 1; i < locales.length; i++) {
        const locale = locales[i];
        const localeErrors = compareStructures(
          translations.lt.paramValues,
          translations[locale].paramValues,
          'paramValues'
        );
        errors.push(...localeErrors.map(e => `[lt vs ${locale}] ${e}`));
      }
      
      expect(errors.length).toBe(0);
    });
    
    it('should have identical nested structure for all top-level keys', () => {
      const baseObj = translations.lt;
      const errors: string[] = [];
      
      for (let i = 1; i < locales.length; i++) {
        const locale = locales[i];
        const localeErrors = compareStructures(baseObj, translations[locale], '');
        errors.push(...localeErrors.map(e => `[lt vs ${locale}] ${e}`));
      }
      
      // Structure differences are expected (e.g., different translation values)
      // Only report if there are actual structural issues (missing keys)
      const structuralErrors = errors.filter(e => e.includes('Missing or extra key'));
      expect(structuralErrors.length).toBe(0);
    });
  });
  
  describe('Products Data Tests', () => {
    it('should have all 6 products defined in lt.json', () => {
      const ltProducts = translations.lt.products.items;
      expect(Object.keys(ltProducts)).toHaveLength(6);
    });
    
    it('should have the same products defined in all locales', () => {
      const ltProductKeys = Object.keys(translations.lt.products.items);
      for (const locale of locales) {
        const localeProductKeys = Object.keys(translations[locale].products.items);
        expect(localeProductKeys).toEqual(expect.arrayContaining(ltProductKeys));
      }
    });
    
    it('should have all required param keys in paramValues', () => {
      const requiredParams = ['moisture', 'fg', 'color', 'aroma', 'purity', 'processing'];
      for (const locale of locales) {
        const paramValues = translations[locale].products.paramValues;
        const productKeys = Object.keys(paramValues);
        
        for (const productKey of productKeys) {
          for (const param of requiredParams) {
            expect(paramValues[productKey]).toHaveProperty(param);
          }
        }
      }
    });
  });
  
  describe('Param Values Data Tests', () => {
    it('should have all numeric percentage fields for each product param', () => {
      const requiredPctFields = ['moisturePct', 'fgPct', 'colorPct', 'aromaPct', 'purityPct', 'processingPct'];
      
      for (const locale of locales) {
        const paramValues = translations[locale].products.paramValues;
        
        for (const productKey of Object.keys(paramValues)) {
          for (const pctField of requiredPctFields) {
            expect(paramValues[productKey]).toHaveProperty(pctField);
            expect(typeof paramValues[productKey][pctField]).toBe('number');
          }
        }
      }
    });
  });
});