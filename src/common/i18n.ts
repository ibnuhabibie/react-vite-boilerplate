import i18n, { type InitOptions } from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";
import translationEN from "../assets/locales/en/translations.json";
import translationID from "../assets/locales/id/translations.json";
import { isProduction } from "./utils";

export const defaultNS = "translations";
export const resources = {
    en: { translations: translationEN },
    id: { translations: translationID },
} as const;

const i18nOptions: InitOptions = {
    defaultNS,
    ns: [defaultNS],
    debug: !isProduction,
    fallbackLng: "en",
    interpolation: {
        escapeValue: false, // not needed for react as it escapes by default
    },
    resources
};

void i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init(i18nOptions);