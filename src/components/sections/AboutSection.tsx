import { useLanguage } from '@/i18n/LanguageContext';
import Section from './Section';
import matheusProfile from '/images/Gemini_Foto3.png';

const AboutSection = () => {
  const { t } = useLanguage();

  return (
    <Section id="sobre" title={t.links.about}>
      <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-[1fr_1.6fr]">
        {/* Photo */}
        <div className="relative w-fit">
          <img
            src={matheusProfile}
            alt="Matheus Alexandre"
            className="h-64 w-64 object-cover object-center grayscale-[0.15] sm:h-72 sm:w-72"
            style={{ objectPosition: 'center 35%' }}
          />
          <span className="absolute -left-2 -top-2 h-8 w-[2px] bg-metallic" />
          <span className="absolute -left-2 -top-2 h-[2px] w-8 bg-metallic" />
          <span className="absolute -bottom-2 -right-2 h-8 w-[2px] bg-metallic" />
          <span className="absolute -bottom-2 -right-2 h-[2px] w-8 bg-metallic" />
        </div>

        {/* Text */}
        <div className="border-l border-gold/50 pl-6">
          <p className="font-mono text-xs uppercase tracking-[0.25em] text-gold-light">
            {t.about.heading}
          </p>
          <div className="mt-5 space-y-4 text-[15px] leading-relaxed text-foreground-muted">
            <p>{t.about.body1}</p>
            <p>{t.about.body2}</p>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default AboutSection;
