import { createContext, useContext, useEffect, useState, ReactNode } from 'react';
import { translations, type Language } from './translations';

type Dict = typeof translations.pt;

interface LanguageContextValue {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: <T = string>(key: string) => T;
  dict: Dict;
}

const LanguageContext = createContext<LanguageContextValue | undefined>(undefined);

function resolve(dict: Dict, path: string): unknown {
  return path.split('.').reduce<unknown>((acc, key) => {
    if (acc && typeof acc === 'object' && key in (acc as Record<string, unknown>)) {
      return (acc as Record<string, unknown>)[key];
    }
    return undefined;
  }, dict);
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>(() => {
    if (typeof window === 'undefined') return 'pt';
    const stored = window.localStorage.getItem('language');
    return stored === 'en' ? 'en' : 'pt';
  });

  useEffect(() => {
    window.localStorage.setItem('language', language);
    document.documentElement.lang = language === 'pt' ? 'pt-BR' : 'en';
  }, [language]);

  const dict = translations[language];

  const value: LanguageContextValue = {
    language,
    setLanguage: setLanguageState,
    t: <T,>(key: string) => (resolve(dict, key) as unknown as T) ?? (key as unknown as T),
    dict,
  };

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return ctx;
}
