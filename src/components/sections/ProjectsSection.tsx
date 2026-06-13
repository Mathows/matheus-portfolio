import { motion } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';
import { useLanguage } from '@/i18n/LanguageContext';
import ProjectGallery from '@/components/ProjectGallery';
import Section from './Section';

const ProjectsSection = () => {
  const { t } = useLanguage();

  const projects = [
    {
      ...t.projects.dima,
      images: [
        '/images/projects/dima/01-dashboard-overview.jpg',
        '/images/projects/dima/02-dashboard-charts.jpg',
        '/images/projects/dima/03-dashboard-expenses.jpg',
        '/images/projects/dima/04-history.jpg',
      ],
      tech: ['.NET 8', 'Blazor WASM', 'MudBlazor', 'EF Core', 'SQL Server', 'Stripe'],
      github: 'https://github.com/Mathows/dima-controle-financeiro',
      live: '',
    },
    {
      ...t.projects.vieira,
      images: ['/images/projects/vieira-hero.jpg'],
      tech: ['.NET 10', 'Blazor WASM', 'MudBlazor', 'EF Core', 'SQL Server', 'MailKit'],
      github: '',
      live: 'https://solutionsvieira.com.br/',
    },
  ];

  return (
    <Section id="projetos" title={t.projects.title} subtitle={t.projects.subtitle}>
      <div className="space-y-20">
        {projects.map((project, index) => (
          <motion.div
            key={project.name}
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-14"
          >
            {/* Gallery — alternates side on desktop */}
            <div className={index % 2 === 1 ? 'lg:order-last' : ''}>
              <ProjectGallery images={project.images} alt={project.name} />
            </div>

            {/* Content */}
            <div>
              <div className="mb-3 flex items-center gap-3">
                <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-gold-light">
                  {project.category}
                </span>
                <span className="h-1 w-1 bg-foreground-muted/40" />
                <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-foreground-muted/70">
                  {t.projects.statusDone}
                </span>
              </div>

              <h3 className="text-2xl font-light text-foreground">{project.name}</h3>

              <p className="mt-3 text-[15px] leading-relaxed text-foreground-muted">
                {project.desc}
              </p>

              <ul className="mt-5 space-y-2">
                {project.highlights.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-[14px] text-foreground-muted">
                    <span className="mt-2 h-1 w-1 flex-shrink-0 bg-metallic" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

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
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
};

export default ProjectsSection;
