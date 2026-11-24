import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  test: {
    environment: 'jsdom',
    globals: true,
    setupFiles: ['./vitest.setup.ts'],
    // .claude holds agent worktrees with their own copies of the tests.
    exclude: ['node_modules', '.next', 'e2e', '.claude'],
    coverage: {
      provider: 'v8',
      reporter: ['text', 'json', 'html'],
      include: ['lib/**', 'app/actions/**', 'components/**'],
      exclude: ['**/*.test.{ts,tsx}'],
      // The logic and the form's server side must stay tested. Components
      // are reported but have no threshold yet.
      thresholds: {
        'lib/**': { statements: 90, branches: 85, functions: 90, lines: 90 },
        'app/actions/**': {
          statements: 90,
          branches: 80,
          functions: 90,
          lines: 90,
        },
      },
    },
  },
  resolve: {
    alias: {
      '@': path.resolve(process.cwd(), './'),
    },
  },
});
