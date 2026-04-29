import type { Page } from '@playwright/test';

/**
 * Setup file for Playwright tests
 * Adds runtime error protection (pageerror, console) to all tests
 */

// Store accumulated errors per test
const errorStore = new Map<string, { message: string; stack?: string; type: 'pageerror' | 'console' }[]>();

/**
 * Enable runtime error protection for a page
 * This will fail the test if pageerror occurs or if console has errors/warnings
 */
export function enableRuntimeErrorProtection(page: Page, testName: string): void {
  const errors: { message: string; stack?: string; type: 'pageerror' | 'console' }[] = [];
  errorStore.set(testName, errors);
  
  // Listen for page errors
  const pageErrorHandler = (error: Error) => {
    errors.push({
      message: error.message,
      stack: error.stack,
      type: 'pageerror'
    });
  };
  
  // Listen for console messages - only errors, not warnings (too noisy)
  const consoleHandler = (msg: any) => {
    const type = msg.type();
    if (type === 'error') {
      errors.push({
        message: msg.text(),
        type: 'console'
      });
    }
  };
  
  page.on('pageerror', pageErrorHandler);
  page.on('console', consoleHandler);
  
  // Store error handlers on page for cleanup
  (page as any).__playwrightErrorHandlers = {
    pageErrorHandler,
    consoleHandler,
    testName
  };
}

/**
 * Cleanup runtime error protection for a page
 */
export function cleanupRuntimeErrorProtection(page: Page): void {
  const handlers = (page as any).__playwrightErrorHandlers;
  if (handlers) {
    page.off('pageerror', handlers.pageErrorHandler);
    page.off('console', handlers.consoleHandler);
    delete (page as any).__playwrightErrorHandlers;
  }
}

/**
 * Check for runtime errors and throw if any found
 */
export function checkForRuntimeErrors(page: Page, testName: string): void {
  const errors = errorStore.get(testName) || [];
  
  if (errors.length > 0) {
    const errorMessages = errors.map(e => 
      e.type === 'pageerror' 
        ? `Page Error: ${e.message}\n${e.stack || ''}`
        : `Console Error: ${e.message}`
    ).join('\n\n');
    
    throw new Error(
      `Test "${testName}" failed due to runtime errors:\n\n` +
      errorMessages
    );
  }
}

/**
 * Get accumulated errors for a test
 */
export function getRuntimeErrors(testName: string): { message: string; stack?: string; type: 'pageerror' | 'console' }[] {
  return errorStore.get(testName) || [];
}

/**
 * Clear errors for a test
 */
export function clearRuntimeErrors(testName: string): void {
  errorStore.delete(testName);
}