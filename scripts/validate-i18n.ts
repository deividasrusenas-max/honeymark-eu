import { readFileSync } from 'fs';
import { join, resolve } from 'path';
import { fileURLToPath } from 'url';

// ES module compatibility for __dirname
const __filename = fileURLToPath(import.meta.url);
const __dirname = join(__filename, '..');

const LOCALES = ['en', 'lt', 'lv', 'et'];

function getProjectRoot(): string {
  return resolve(__dirname, '..');
}

function compareKeys(): { success: boolean; missing: Record<string, string[]> } {
  const missing: Record<string, string[]> = {};
  
  // Get all keys from lt.json (base)
  const baseData = JSON.parse(
    readFileSync(join(getProjectRoot(), 'src', 'i18n', 'lt.json'), 'utf-8')
  );
  
  for (const locale of LOCALES.filter((l) => l !== 'lt')) {
    const filePath = join(getProjectRoot(), 'src', 'i18n', `${locale}.json`);
    const localeData = JSON.parse(readFileSync(filePath, 'utf-8'));
    
    const missingKeys = findMissingKeys(baseData, localeData, '');
    if (missingKeys.length > 0) {
      missing[locale] = missingKeys;
    }
  }
  
  return {
    success: Object.keys(missing).length === 0,
    missing,
  };
}

function findMissingKeys(base: any, comparison: any, prefix: string): string[] {
  const missing: string[] = [];
  
  for (const key in base) {
    const currentPath = prefix ? `${prefix}.${key}` : key;
    
    if (typeof base[key] === 'object' && base[key] !== null) {
      if (typeof comparison[key] !== 'object' || comparison[key] === null) {
        missing.push(currentPath);
      } else {
        missing.push(...findMissingKeys(base[key], comparison[key], currentPath));
      }
    } else if (!(key in comparison)) {
      missing.push(currentPath);
    }
  }
  
  return missing;
}

function validateProductKeys(): { success: boolean; issues: string[] } {
  const issues: string[] = [];
  
  // Load all translations
  const translations: Record<string, any> = {};
  for (const locale of LOCALES) {
    translations[locale] = JSON.parse(
      readFileSync(join(getProjectRoot(), 'src', 'i18n', `${locale}.json`), 'utf-8')
    );
  }
  
  // Check products.items keys consistency
  const baseItems = Object.keys(translations.lt.products.items);
  for (const locale of LOCALES.filter((l) => l !== 'lt')) {
    const localeItems = Object.keys(translations[locale].products.items);
    const missingInLocale = baseItems.filter((k) => !localeItems.includes(k));
    const extraInLocale = localeItems.filter((k) => !baseItems.includes(k));
    
    if (missingInLocale.length > 0) {
      issues.push(`Products.items missing keys in ${locale}: ${missingInLocale.join(', ')}`);
    }
    if (extraInLocale.length > 0) {
      issues.push(`Products.items extra keys in ${locale}: ${extraInLocale.join(', ')}`);
    }
  }
  
  // Check products.paramValues keys consistency
  const baseParamValues = Object.keys(translations.lt.products.paramValues);
  for (const locale of LOCALES.filter((l) => l !== 'lt')) {
    const localeParamValues = Object.keys(translations[locale].products.paramValues);
    const missingInLocale = baseParamValues.filter((k) => !localeParamValues.includes(k));
    const extraInLocale = localeParamValues.filter((k) => !baseParamValues.includes(k));
    
    if (missingInLocale.length > 0) {
      issues.push(`Products.paramValues missing keys in ${locale}: ${missingInLocale.join(', ')}`);
    }
    if (extraInLocale.length > 0) {
      issues.push(`Products.paramValues extra keys in ${locale}: ${extraInLocale.join(', ')}`);
    }
  }
  
  return {
    success: issues.length === 0,
    issues,
  };
}

// Main execution
console.log('='.repeat(60));
console.log('i18n Translation Validation');
console.log('='.repeat(60));
console.log();

// Step 1: Compare keys across all files
console.log('Step 1: Comparing keys across all translation files...');
console.log('-'.repeat(40));
const keyComparison = compareKeys();
if (keyComparison.success) {
  console.log('✓ All translation files have identical keys\n');
} else {
  console.log('Missing keys found:');
  Object.entries(keyComparison.missing).forEach(([locale, keys]) => {
    console.log(`  ${locale}.json is missing: ${keys.join(', ')}`);
  });
}

// Step 2: Validate product keys consistency
console.log();
console.log('Step 2: Validating products keys consistency...');
console.log('-'.repeat(40));
const productValidation = validateProductKeys();
if (productValidation.success) {
  console.log('✓ All products keys are consistent across all files\n');
} else {
  console.log('Product key issues:');
  productValidation.issues.forEach((issue) => console.log(`  ✗ ${issue}`));
}

// Final result
console.log();
console.log('='.repeat(60));
const allSuccess = keyComparison.success && productValidation.success;
if (allSuccess) {
  console.log('✓ ALL VALIDATIONS PASSED');
} else {
  console.log('✗ VALIDATION FAILED');
}
console.log('='.repeat(60));

// Exit with appropriate code
process.exit(allSuccess ? 0 : 1);