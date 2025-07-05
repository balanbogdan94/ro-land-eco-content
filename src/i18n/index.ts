import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import en from './locales/en.json';
import ro from './locales/ro.json';

i18n.use(initReactI18next).init({
  resources: {
    en: { translation: en },
    ro: { translation: ro },
  },
  lng: 'ro', // limba implicită
  fallbackLng: 'ro', // fallback dacă nu găsește traducerea
  interpolation: { escapeValue: false },
});

// eslint-disable-next-line import/no-default-export
export default i18n;
