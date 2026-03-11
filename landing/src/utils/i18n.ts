export const locales = ["en", "es"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "en";

export function getLocalePath(locale: Locale, path: string = "/"): string {
  const cleanPath = path.startsWith("/") ? path : `/${path}`;
  return `/${locale}${cleanPath === "/" ? "/" : cleanPath}`;
}

export function getAlternateLocale(locale: Locale): Locale {
  return locale === "en" ? "es" : "en";
}

export function getLocaleLabel(locale: Locale): string {
  const labels: Record<Locale, string> = {
    en: "EN",
    es: "ES",
  };
  return labels[locale];
}

export const localeNames: Record<Locale, string> = {
  en: "English",
  es: "Español",
};
