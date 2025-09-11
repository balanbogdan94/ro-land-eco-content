import React, { createContext, useState, useContext, ReactNode } from 'react';
import i18n, {
  SupportedLang,
  getCurrentLanguage,
  setLanguage as setCurrentLanguage,
} from '../i18n';

interface LanguageContextType {
  language: SupportedLang;
  setLanguage: (lang: SupportedLang) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<SupportedLang>(() => getCurrentLanguage());

  const changeLanguage = (lang: SupportedLang) => {
    setCurrentLanguage(lang);
    setLanguage(lang);
  };

  const t = (key: string): string => {
    return i18n.t(key);
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage: changeLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useTranslations = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
