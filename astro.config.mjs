import { defineConfig } from 'astro/config';

// https://docs.astro.build/en/reference/configuration-reference/
export default defineConfig({
  site: 'https://coherenceism.blog',
  server: { port: 4321 },
  build: { format: 'directory' },
  experimental: {
    contentLayer: true
  }
});

