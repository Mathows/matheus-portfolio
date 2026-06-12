import { motion } from 'framer-motion';
import { useLanguage } from '@/i18n/LanguageContext';
import PageShell from '@/components/PageShell';

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

const Experience = () => {
  const { t } = useLanguage();
  const exp = t.experience;

  return (
    <PageShell title={exp.title}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        className="border-l border-gold/50 pl-6"
      >
        <div className="flex flex-wrap items-baseline justify-between gap-2">
          <h2 className="text-2xl font-light text-foreground">{exp.company}</h2>
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

        <h3 className="mt-10 font-mono text-xs uppercase tracking-[0.25em] text-foreground-muted">
          {exp.responsibilitiesTitle}
        </h3>
        <ul className="mt-4 space-y-3">
          {exp.responsibilities.map((item) => (
            <li key={item} className="flex items-start gap-3 text-[15px] text-foreground-muted">
              <span className="mt-2 h-1 w-1 flex-shrink-0 bg-metallic" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </motion.div>

      {/* Stack */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
        className="mt-14"
      >
        <h3 className="mb-5 font-mono text-xs uppercase tracking-[0.25em] text-foreground-muted">
          {exp.stackTitle}
        </h3>
        <div className="flex flex-wrap items-center gap-6">
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
      </motion.div>
    </PageShell>
  );
};

export default Experience;
