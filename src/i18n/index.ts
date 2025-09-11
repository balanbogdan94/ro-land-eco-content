import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import en from './locales/en.json';
import ro from './locales/ro.json';
import { appInsights } from '@/services/appInsights';

export type SupportedLang = 'ro' | 'en';
const LOCAL_STORAGE_LANG_KEY = 'ro-land-lang';
const FALLBACK_LANG: SupportedLang = 'ro';

function safeGetStoredLang(): SupportedLang | undefined {
  try {
    const raw = localStorage.getItem(LOCAL_STORAGE_LANG_KEY);
    if (raw === 'ro' || raw === 'en') {
      return raw;
    }
  } catch (e: unknown) {
    appInsights.trackException(e);
  }
  return undefined;
}

function safeStoreLang(lang: SupportedLang) {
  try {
    localStorage.setItem(LOCAL_STORAGE_LANG_KEY, lang);
    i18n.changeLanguage(lang);
  } catch (e: unknown) {
    appInsights.trackException(e);
  }
}

const initialLang: SupportedLang = safeGetStoredLang() ?? FALLBACK_LANG;

i18n.use(initReactI18next).init({
  resources: {
    en: { translation: en },
    ro: { translation: ro },
  },
  lng: initialLang,
  fallbackLng: FALLBACK_LANG,
  interpolation: { escapeValue: false },
});

export const getCurrentLanguage = (): SupportedLang =>
  i18n.language && (i18n.language === 'ro' || i18n.language === 'en') ? i18n.language : initialLang;

export const setLanguage = (lang: SupportedLang) => {
  safeStoreLang(lang);
};

// eslint-disable-next-line import/no-default-export
export default i18n;
