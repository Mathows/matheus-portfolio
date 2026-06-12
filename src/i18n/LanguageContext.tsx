import { createContext, useContext, useEffect, useState, type ReactNode } from 'react';
import { translations, type Lang, type Translation } from './translations';

interface LanguageContextValue {
  lang: Lang;
  t: Translation;
  toggleLang: () => void;
  setLang: (lang: Lang) => void;
}

const LanguageContext = createContext<LanguageContextValue | undefined>(undefined);

const STORAGE_KEY = 'portfolio-lang';

function getInitialLang(): Lang {
  if (typeof window === 'undefined') return 'en';
  const stored = window.localStorage.getItem(STORAGE_KEY);
  if (stored === 'en' || stored === 'pt') return stored;
  // Default to Portuguese for pt-* browsers, English otherwise (international focus)
  return navigator.language?.toLowerCase().startsWith('pt') ? 'pt' : 'en';
}

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [lang, setLangState] = useState<Lang>(getInitialLang);

  useEffect(() => {
    window.localStorage.setItem(STORAGE_KEY, lang);
    document.documentElement.lang = lang;
  }, [lang]);

  const setLang = (next: Lang) => setLangState(next);
  const toggleLang = () => setLangState((prev) => (prev === 'en' ? 'pt' : 'en'));

  return (
    <LanguageContext.Provider value={{ lang, t: translations[lang], toggleLang, setLang }}>
      {children}
    </LanguageContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useLanguage = () => {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error('useLanguage must be used within a LanguageProvider');
  return ctx;
};
