import { useLanguage } from '@/i18n/LanguageContext';
import Section from './Section';

// Day-to-day stack on the job (the broader personal stack lives in the hero)
const stack = [
  'C#',
  '.NET Framework 4.8',
  '.NET Web API',
  'ASP.NET Web Forms',
  'SQL Server',
  'NHibernate',
  'EF Core',
  'DevExpress',
  'Git',
];

const ExperienceSection = () => {
  const { t } = useLanguage();
  const exp = t.experience;

  const subheadingClass = 'font-mono text-xs uppercase tracking-[0.25em] text-foreground-muted';

  return (
    <Section id="experiencia" title={exp.title}>
      <div className="border-l border-gold/50 pl-6">
        <div className="flex flex-wrap items-baseline justify-between gap-2">
          <h3 className="text-2xl font-light text-foreground">{exp.company}</h3>
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-gold-light">
            {exp.period}
          </span>
        </div>
        <p className="mt-1 font-mono text-xs uppercase tracking-[0.2em] text-foreground-muted">
          {exp.role} · {exp.location}
        </p>

        <p className="mt-6 max-w-3xl text-[15px] leading-relaxed text-foreground-muted">
          {exp.summary}
        </p>

        {/* Key numbers */}
        <dl className="mt-10 grid max-w-3xl grid-cols-3 gap-6">
          {exp.stats.map((stat) => (
            <div key={stat.label}>
              <dt className="text-metallic text-3xl font-extralight tracking-tight sm:text-4xl">
                {stat.value}
              </dt>
              <dd className="mt-1 font-mono text-[10px] uppercase tracking-wider text-foreground-muted/80 sm:text-[11px]">
                {stat.label}
              </dd>
            </div>
          ))}
        </dl>

        <h4 className={`mt-12 ${subheadingClass}`}>{exp.highlightsTitle}</h4>
        <ul className="mt-5 grid grid-cols-1 gap-x-10 gap-y-6 md:grid-cols-2">
          {exp.highlights.map((item) => (
            <li key={item.title} className="flex items-start gap-3">
              <span className="mt-2.5 h-1 w-1 flex-shrink-0 bg-metallic" />
              <div>
                <p className="text-[15px] text-foreground">{item.title}</p>
                <p className="mt-1 text-[14px] leading-relaxed text-foreground-muted">{item.desc}</p>
              </div>
            </li>
          ))}
        </ul>

        <h4 className={`mt-12 ${subheadingClass}`}>{exp.approachTitle}</h4>
        <ul className="mt-4 space-y-3">
          {exp.approach.map((item) => (
            <li key={item} className="flex items-start gap-3 text-[15px] text-foreground-muted">
              <span className="mt-2 h-1 w-1 flex-shrink-0 bg-metallic" />
              <span>{item}</span>
            </li>
          ))}
        </ul>

        <h4 className={`mt-12 ${subheadingClass}`}>{exp.stackTitle}</h4>
        <div className="mt-4 flex flex-wrap gap-x-4 gap-y-2">
          {stack.map((tech) => (
            <span
              key={tech}
              className="font-mono text-[11px] uppercase tracking-wider text-foreground-muted/70"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default ExperienceSection;
