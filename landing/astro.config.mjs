// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import sitemap from "@astrojs/sitemap";
// https://astro.build/config
export default defineConfig({
    site: "https://xer.juanrcifuentes.com",
    i18n: {
        locales: ["en", "es"],
        defaultLocale: "en",
        routing: {
            prefixDefaultLocale: true,
        },
    },
    integrations: [
        sitemap({
            i18n: {
                defaultLocale: "en",
                locales: { en: "en", es: "es" },
            },
        }),
    ],
    vite: {
        plugins: [tailwindcss()],
    },
});