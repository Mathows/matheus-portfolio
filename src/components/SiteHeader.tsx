import { Link } from 'react-router-dom';
import { Mail, Github, Linkedin } from 'lucide-react';
import { useLanguage } from '@/i18n/LanguageContext';

const socials = [
  { icon: Mail, href: 'mailto:matheusalexmc@gmail.com', label: 'Email' },
  { icon: Github, href: 'https://github.com/Mathows', label: 'GitHub' },
  {
    icon: Linkedin,
    href: 'https://www.linkedin.com/in/matheus-alexandre-marques',
    label: 'LinkedIn',
  },
];

const SiteHeader = () => {
  const { lang, toggleLang, t } = useLanguage();

  return (
    <header className="relative z-20 flex items-center justify-between px-8 pt-10 sm:px-16 sm:pt-12">
      {/* Logo / monogram */}
      <Link to="/" className="group flex items-center gap-3" aria-label="Home">
        <div className="flex h-11 w-11 items-center justify-center border border-border-light/60 transition-colors duration-300 group-hover:border-gold/60">
          <span className="text-metallic font-mono text-lg font-medium tracking-tight">MA</span>
        </div>
      </Link>

      {/* Right side: language toggle + socials */}
      <div className="flex items-center gap-6">
        <button
          onClick={toggleLang}
          className="font-mono text-xs uppercase tracking-[0.2em] text-foreground-muted transition-colors duration-300 hover:text-gold-light"
          aria-label={`Switch language to ${t.langSwitchTo}`}
        >
          <span className="text-gold-light">{lang.toUpperCase()}</span>
          <span className="mx-1 text-border-light">/</span>
          <span>{t.langSwitchTo}</span>
        </button>

        <nav className="flex items-center gap-4">
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
