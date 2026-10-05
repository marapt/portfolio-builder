import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import enTranslation from './locales/en-US.json';
import ptTranslation from './locales/pt-PT.json';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      'en-US': { translation: enTranslation },
      en: { translation: enTranslation },       // broad fallback for browser detection
      'pt-PT': { translation: ptTranslation },
      pt: { translation: ptTranslation }         // broad fallback for browser detection
    },
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
