import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Mail, Github, Linkedin, FileDown } from 'lucide-react';
import { useLanguage } from '@/i18n/LanguageContext';

const socials = [
  { icon: Mail, href: 'mailto:matheusalexmc@gmail.com', label: 'Email' },
  { icon: Github, href: 'https://github.com/Mathows', label: 'GitHub' },
  {
    icon: Linkedin,
    href: 'https://www.linkedin.com/in/matheus-alexandre-marques/',
    label: 'LinkedIn',
  },
];

const SiteHeader = () => {
  const { lang, toggleLang, t } = useLanguage();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-30 flex items-center justify-between px-6 transition-all duration-300 sm:px-16 ${
        scrolled
          ? 'border-b border-border/50 bg-background-panel/85 py-4 backdrop-blur-md'
          : 'border-b border-transparent pt-10 sm:pt-12'
      }`}
    >
      {/* Logo / monogram */}
      <Link to="/" className="group flex items-center gap-3" aria-label="Home">
        <div className="flex h-11 w-11 items-center justify-center border border-border-light/60 transition-colors duration-300 group-hover:border-gold/60">
          <span className="text-metallic font-mono text-lg font-medium tracking-tight">MA</span>
        </div>
      </Link>

      {/* Right side: language toggle + CV + socials */}
      <div className="flex items-center gap-4 sm:gap-6">
        <button
          onClick={toggleLang}
          className="font-mono text-xs uppercase tracking-[0.2em] text-foreground-muted transition-colors duration-300 hover:text-gold-light"
          aria-label={`Switch language to ${t.langSwitchTo}`}
        >
          <span className="text-gold-light">{lang.toUpperCase()}</span>
          <span className="mx-1 text-border-light">/</span>
          <span>{t.langSwitchTo}</span>
        </button>

        <a
          href="/cv/Matheus-Alexandre-CV.pdf"
          download
          aria-label={t.cvDownload}
          title={t.cvDownload}
          className="flex items-center gap-1.5 border border-gold/50 px-2.5 py-1.5 sm:px-3 font-mono text-xs uppercase tracking-[0.2em] text-gold-light transition-colors duration-300 hover:bg-gold/10"
        >
          <FileDown className="h-3.5 w-3.5" strokeWidth={1.5} />
          CV
        </a>

        <nav className="flex items-center gap-3 sm:gap-4">
          {socials.map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith('http') ? '_blank' : undefined}
              rel="noopener noreferrer"
              aria-label={label}
              className="text-foreground-muted transition-colors duration-300 hover:text-gold-light"
            >
              <Icon className="h-[18px] w-[18px]" strokeWidth={1.5} />
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default SiteHeader;
