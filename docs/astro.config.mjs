// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'XER Docs',
			favicon: 'https://xer-assets.juanrcifuentes.com/favicon.svg',
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/withastro/starlight' }],
			defaultLocale: 'root',
			locales: {
				root: {
					label: 'English',
					lang: 'en',
				},
				es: {
					label: 'Español',
					lang: 'es-ES',
				},
			},
			sidebar: [
				{
					label: 'Guides',
					translations: { 'es-ES': 'Guías' },
					autogenerate: { directory: 'guides' },
				},
				{
					label: 'Versions',
					translations: { 'es-ES': 'Versiones' },
					autogenerate: { directory: 'versions' },
				},
			],
		}),
	],
});
