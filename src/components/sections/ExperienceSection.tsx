import { useLanguage } from '@/i18n/LanguageContext';
import Section from './Section';

const stack = [
  { name: 'C#', icon: 'devicon-csharp-plain' },
  { name: '.NET', icon: 'devicon-dotnetcore-plain' },
  { name: 'SQL Server', icon: 'devicon-microsoftsqlserver-plain' },
  { name: 'Blazor', icon: 'devicon-blazor-original' },
  { name: 'React', icon: 'devicon-react-original' },
  { name: 'TypeScript', icon: 'devicon-typescript-plain' },
  { name: 'Java', icon: 'devicon-java-plain' },
  { name: 'Docker', icon: 'devicon-docker-plain' },
  { name: 'Git', icon: 'devicon-git-plain' },
];

const ExperienceSection = () => {
  const { t } = useLanguage();
  const exp = t.experience;

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

        <p className="mt-6 max-w-2xl text-[15px] leading-relaxed text-foreground-muted">
          {exp.summary}
        </p>

        <h4 className="mt-10 font-mono text-xs uppercase tracking-[0.25em] text-foreground-muted">
          {exp.responsibilitiesTitle}
        </h4>
        <ul className="mt-4 space-y-3">
          {exp.responsibilities.map((item) => (
            <li key={item} className="flex items-start gap-3 text-[15px] text-foreground-muted">
              <span className="mt-2 h-1 w-1 flex-shrink-0 bg-metallic" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Stack */}
      <div className="mt-14">
        <h4 className="mb-6 font-mono text-xs uppercase tracking-[0.25em] text-foreground-muted">
          {exp.stackTitle}
        </h4>
        <div className="flex flex-wrap items-start gap-7">
          {stack.map((skill) => (
            <div key={skill.name} className="group flex flex-col items-center gap-2" title={skill.name}>
              <i
                className={`${skill.icon} text-3xl text-foreground-muted transition-colors duration-300 group-hover:text-gold-light`}
              />
              <span className="font-mono text-[10px] uppercase tracking-wider text-foreground-muted/70">
                {skill.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default ExperienceSection;
