import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import english from './english';

export const resources = {
  en: {
    translation: english,
  },
} as const;

i18next.use(initReactI18next).init({
  resources,
  lng: "en",
  interpolation: {
    escapeValue: false,
  },
});
