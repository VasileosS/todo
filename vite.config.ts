import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
    plugins: [react()],
    resolve: {
        alias: {
            app: '/src/app',
            entities: '/src/entities',
            features: '/src/features',
            pages: '/src/pages',
            shared: '/src/shared',
            widgets: '/src/widgets',
        },
    },
    server: {
        port: 3000,
    },
});
