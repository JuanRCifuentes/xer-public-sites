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
					items: [
						{ label: 'Create a Project', slug: 'guides/create-project', translations: { 'es-ES': 'Crear un Proyecto' } },
						{ label: 'Upload Files', slug: 'guides/upload-files', translations: { 'es-ES': 'Subir Archivos' } },
						{ label: 'Download Files', slug: 'guides/download-files', translations: { 'es-ES': 'Descargar Archivos' } },
						{ label: 'Check Results', slug: 'guides/check-results', translations: { 'es-ES': 'Revisar Resultados' } },
					],
				},
			],
		}),
	],
});
