import { defineConfig } from 'vitest/config';

export default defineConfig({
    test: {
        globals: true, // damit describe/it funktionieren
        environment: 'jsdom', // für Angular Komponenten (Browser-Simulation)
        coverage: {
            provider: 'v8', // für Coverage-Reports
            reporter: ['text', 'lcov'],
        },
    },
});
