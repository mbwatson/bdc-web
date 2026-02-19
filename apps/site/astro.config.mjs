import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import mdx from '@astrojs/mdx';
import react from '@astrojs/react';
import { defineConfig } from 'astro/config';
import robotsTxt from 'astro-robots-txt';

const rootDir = dirname(fileURLToPath(import.meta.url));
const uswdsPackages = join(rootDir, '../../node_modules/@uswds/uswds/packages');

const robotsTxtConfig = {
  policy: [
    {
      userAgent: '*',
      disallow: '/',
    },
  ],
}
export default defineConfig({
  site: 'https://main.d15amurwuuezig.amplifyapp.com',
  integrations: [
    mdx(),
    react(),
    robotsTxt(robotsTxtConfig),
  ],
  markdown: {
    remarkPlugins: [['remark-excerpt', { remove: true }]],
  },
  vite: {
    optimizeDeps: {
      include: ['react', 'react-dom', '@trussworks/react-uswds'],
    },
    css: {
      preprocessorOptions: {
        scss: {
          loadPaths: [uswdsPackages],
          silenceDeprecations: ['import', 'global-builtin', 'if-function'],
        },
      },
    },
  },
});
