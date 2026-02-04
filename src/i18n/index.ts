import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// Import all translation files
import enCommon from './locales/en/common.json';
import enPortfolio from './locales/en/portfolio.json';
import ruCommon from './locales/ru/common.json';
import ruPortfolio from './locales/ru/portfolio.json';
import uzCommon from './locales/uz/common.json';
import uzPortfolio from './locales/uz/portfolio.json';

const resources = {
  en: {
    common: enCommon,
    portfolio: enPortfolio,
  },
  ru: {
    common: ruCommon,
    portfolio: ruPortfolio,
  },
  uz: {
    common: uzCommon,
    portfolio: uzPortfolio,
  },
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    defaultNS: 'common',
    ns: ['common', 'portfolio'],

    detection: {
      order: ['localStorage', 'navigator'],
      lookupLocalStorage: 'i18nextLng',
      caches: ['localStorage'],
    },

    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
