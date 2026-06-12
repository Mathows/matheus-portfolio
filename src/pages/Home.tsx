import { motion } from 'framer-motion';
import { ArrowUpRight, ChevronDown } from 'lucide-react';
import { useLanguage } from '@/i18n/LanguageContext';
import CornerBrackets from '@/components/CornerBrackets';
import SiteHeader from '@/components/SiteHeader';
import AboutSection from '@/components/sections/AboutSection';
import ExperienceSection from '@/components/sections/ExperienceSection';
import ProjectsSection from '@/components/sections/ProjectsSection';
import CoursesSection from '@/components/sections/CoursesSection';
import ContactSection from '@/components/sections/ContactSection';
import matheusProfile from '/images/Gemini_Foto3.png';

const skills = [
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

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: 0.1 * i, ease: [0.22, 1, 0.36, 1] as const },
  }),
};

const Home = () => {
  const { t } = useLanguage();

  const projects = [
    { ...t.projects.dima, href: 'https://github.com/Mathows/dima-controle-financeiro' },
    { ...t.projects.vieira, href: 'https://github.com/Mathows/vieira-solutions' },
  ];

  const explore = [
    { label: t.links.experience, href: '#experiencia' },
    { label: t.links.courses, href: '#cursos' },
    { label: t.links.contact, href: '#contato' },
  ];

  return (
    <div className="relative bg-background-panel">
      <CornerBrackets />
      <SiteHeader />

      {/* Hero — first screen */}
      <section className="relative z-10 flex min-h-[calc(100vh-5.5rem)] items-center px-8 py-16 sm:px-16">
        <div className="mx-auto grid w-full max-w-6xl grid-cols-1 gap-16 lg:grid-cols-[1.4fr_1fr] lg:gap-24">
          {/* Left column — intro */}
          <div>
            <motion.div custom={0} variants={fadeUp} initial="hidden" animate="visible">
              <div className="relative inline-block">
                <img
                  src={matheusProfile}
                  alt="Matheus Alexandre"
                  className="h-28 w-28 rounded-full border border-gold/30 object-cover object-center grayscale-[0.15] sm:h-32 sm:w-32"
                  style={{ objectPosition: 'center 35%' }}
                />
              </div>
            </motion.div>

            <motion.h1
              custom={1}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="mt-10 text-6xl font-extralight tracking-tight text-foreground sm:text-7xl lg:text-8xl"
            >
              {t.home.greeting}
            </motion.h1>

            <motion.p
              custom={2}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="mt-3 font-mono text-sm uppercase tracking-[0.25em] text-gold-light"
            >
              {t.home.role}
            </motion.p>

            <motion.div
              custom={3}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="mt-8 max-w-xl space-y-4 border-l border-gold/50 pl-6 text-[15px] leading-relaxed text-foreground-muted"
            >
              <p>{t.home.intro1}</p>
              <p>{t.home.intro2}</p>
            </motion.div>

            {/* Stack */}
            <motion.div custom={4} variants={fadeUp} initial="hidden" animate="visible" className="mt-10">
              <p className="mb-4 font-mono text-xs uppercase tracking-[0.25em] text-foreground-muted">
                {t.home.stackTitle}
              </p>
              <div className="flex flex-wrap items-center gap-5">
                {skills.map((skill) => (
                  <div key={skill.name} className="group flex items-center gap-2" title={skill.name}>
                    <i
                      className={`${skill.icon} text-2xl text-foreground-muted transition-colors duration-300 group-hover:text-gold-light`}
                    />
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right column — projects + explore */}
          <div className="lg:pt-2">
            <motion.h2
              custom={2}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="text-3xl font-extralight tracking-tight text-foreground"
            >
              {t.home.projectsTitle}
            </motion.h2>

            <motion.ul
              custom={3}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="mt-6 space-y-5 border-l border-gold/50 pl-6"
            >
              {projects.map((project) => (
                <li key={project.name}>
                  <a href={project.href} target="_blank" rel="noopener noreferrer" className="group block">
                    <span className="link-underline flex items-center gap-1.5 text-[15px] text-foreground transition-colors duration-300 group-hover:text-gold-light">
                      {project.name}
                      <ArrowUpRight
                        className="h-3.5 w-3.5 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                        strokeWidth={1.5}
                      />
                    </span>
                    <span className="mt-1 block max-w-sm text-[13px] leading-relaxed text-foreground-muted/80">
                      {project.desc}
                    </span>
                  </a>
                </li>
              ))}
            </motion.ul>

            <motion.h2
              custom={4}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="mt-12 text-3xl font-extralight tracking-tight text-foreground"
            >
              {t.home.exploreTitle}
            </motion.h2>

            <motion.ul
              custom={5}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="mt-6 space-y-4 border-l border-gold/50 pl-6"
            >
              {explore.map((item) => (
                <li key={item.href}>
                  <a href={item.href} className="group block">
                    <span className="link-underline flex items-center gap-1.5 text-[15px] text-foreground transition-colors duration-300 group-hover:text-gold-light">
                      {item.label}
                      <ArrowUpRight
                        className="h-3.5 w-3.5 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                        strokeWidth={1.5}
                      />
                    </span>
                  </a>
                </li>
              ))}
            </motion.ul>
          </div>
        </div>

        {/* Scroll cue */}
        <motion.a
          href="#sobre"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4, duration: 0.8 }}
          className="absolute bottom-8 left-1/2 flex -translate-x-1/2 flex-col items-center gap-2 text-foreground-muted transition-colors duration-300 hover:text-gold-light"
          aria-label={t.home.scroll}
        >
          <span className="font-mono text-[10px] uppercase tracking-[0.3em]">{t.home.scroll}</span>
          <motion.span animate={{ y: [0, 6, 0] }} transition={{ duration: 2, repeat: Infinity }}>
            <ChevronDown className="h-4 w-4" strokeWidth={1.5} />
          </motion.span>
        </motion.a>
      </section>

      {/* Scrolling sections (old model order) */}
      <AboutSection />
      <ExperienceSection />
      <ProjectsSection />
      <CoursesSection />
      <ContactSection />

      <footer className="relative z-10 flex flex-col items-center gap-1 border-t border-border/40 px-8 py-10 sm:flex-row sm:justify-between sm:px-16">
        <p className="font-mono text-xs tracking-wider text-foreground-muted/70">
          © 2026 matheusalexandre.dev
        </p>
        <p className="font-mono text-xs tracking-wider text-foreground-muted/50">
          Matheus Alexandre · {t.footer.rights}
        </p>
      </footer>
    </div>
  );
};

export default Home;
