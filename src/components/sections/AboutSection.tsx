import { useLanguage } from '@/i18n/LanguageContext';
import Section from './Section';

const AboutSection = () => {
  const { t } = useLanguage();

  return (
    <Section id="sobre" title={t.links.about}>
      <div className="max-w-3xl border-l border-gold/50 pl-6">
        <p className="font-mono text-xs uppercase tracking-[0.25em] text-gold-light">
          {t.about.heading}
        </p>
        <div className="mt-5 space-y-4 text-[16px] leading-relaxed text-foreground-muted">
          <p>{t.about.body1}</p>
          <p>{t.about.body2}</p>
        </div>
      </div>
    </Section>
  );
};

export default AboutSection;
