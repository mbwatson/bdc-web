import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import starlight from '@astrojs/starlight';
import { defineConfig } from 'astro/config';

const rootDir = dirname(fileURLToPath(import.meta.url));
const uswdsPackages = join(rootDir, '../../node_modules/@uswds/uswds/packages');

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'BDC Documentation',
			logo: {
				src: '@bdc/ui/assets/bdc-logo.svg',
				alt: 'BDC logo',
			},
			social: {
				github: 'https://github.com/stagecc/bdc-web',
			},
			customCss: ['./src/styles/custom.scss'],
			sidebar: [
				{
					label: 'Guides',
					items: [
						{ label: 'Introduction', slug: 'guides/intro' },
					],
				},
				{
					label: 'Reference',
					autogenerate: { directory: 'reference' },
				},
			],
		}),
	],
	vite: {
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
