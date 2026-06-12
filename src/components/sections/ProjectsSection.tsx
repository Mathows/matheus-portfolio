import { motion } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';
import { useLanguage } from '@/i18n/LanguageContext';
import Section from './Section';

const ProjectsSection = () => {
  const { t } = useLanguage();

  const projects = [
    {
      ...t.projects.dima,
      tech: ['.NET 8', 'Blazor WASM', 'MudBlazor', 'EF Core', 'SQL Server', 'Stripe'],
      github: 'https://github.com/Mathows/dima-controle-financeiro',
      live: '',
    },
    {
      ...t.projects.vieira,
      tech: ['.NET 10', 'Blazor WASM', 'MudBlazor', 'EF Core', 'SQL Server', 'MailKit'],
      github: '',
      live: 'https://solutionsvieira.com.br/',
    },
  ];

  return (
    <Section id="projetos" title={t.projects.title} subtitle={t.projects.subtitle}>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {projects.map((project, index) => (
          <motion.div
            key={project.name}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.1 * index, ease: [0.22, 1, 0.36, 1] }}
            className="group flex flex-col border border-border/70 p-7 transition-colors duration-300 hover:border-gold/40"
          >
            <div className="mb-4 flex items-center gap-3">
              <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-gold-light">
                {project.category}
              </span>
              <span className="h-1 w-1 bg-foreground-muted/40" />
              <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-foreground-muted/70">
                {t.projects.statusDone}
              </span>
            </div>

            <h3 className="text-xl font-light text-foreground transition-colors duration-300 group-hover:text-gold-light">
              {project.name}
            </h3>

            <p className="mt-3 flex-1 text-[14px] leading-relaxed text-foreground-muted">
              {project.desc}
            </p>

            <div className="mt-5 flex flex-wrap gap-x-3 gap-y-1.5">
              {project.tech.map((tech) => (
                <span
                  key={tech}
                  className="font-mono text-[11px] uppercase tracking-wider text-foreground-muted/70"
                >
                  {tech}
                </span>
              ))}
            </div>

            {project.live ? (
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="link-underline mt-6 inline-flex items-center gap-2 text-sm text-foreground transition-colors duration-300 hover:text-gold-light"
              >
                <ExternalLink className="h-4 w-4" strokeWidth={1.5} />
                {t.projects.access}
              </a>
            ) : (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="link-underline mt-6 inline-flex items-center gap-2 text-sm text-foreground transition-colors duration-300 hover:text-gold-light"
              >
                <Github className="h-4 w-4" strokeWidth={1.5} />
                {t.projects.code}
              </a>
            )}
          </motion.div>
        ))}
      </div>
    </Section>
  );
};

export default ProjectsSection;
