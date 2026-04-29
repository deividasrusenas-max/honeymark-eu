import { defineConfig } from 'vitest/config';
import { resolve } from 'path';

export default defineConfig({
  test: {
    globals: true,
    environment: 'jsdom',
    include: ['tests/unit/**/*.test.ts', 'tests/unit/**/*.spec.ts'],
    exclude: ['tests/e2e/**/*.spec.ts', 'tests/*.spec.ts'],
    reporters: ['verbose'],
    setupFiles: ['tests/setup/vitest.setup.ts'],
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src')
    }
  }
});