import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { useLanguage } from '@/i18n/LanguageContext';
import CornerBrackets from '@/components/CornerBrackets';
import SiteHeader from '@/components/SiteHeader';
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
    { label: t.links.experience, to: '/experience' },
    { label: t.links.courses, to: '/courses' },
  ];

  return (
    <div className="relative flex min-h-screen flex-col bg-background-panel">
      <CornerBrackets />
      <SiteHeader />

      <main className="relative z-10 flex flex-1 items-center px-8 py-16 sm:px-16 lg:py-20">
        <div className="mx-auto grid w-full max-w-6xl grid-cols-1 gap-16 lg:grid-cols-[1.4fr_1fr] lg:gap-24">
          {/* Left column — intro */}
          <div>
            <motion.div custom={0} variants={fadeUp} initial="hidden" animate="visible">
              <div className="relative inline-block">
                <img
                  src={matheusProfile}
                  alt="Matheus Alexandre"
                  className="h-28 w-28 object-cover object-center grayscale-[0.15] sm:h-32 sm:w-32"
                  style={{ objectPosition: 'center 35%' }}
                />
                {/* gold corner accents on the photo */}
                <span className="absolute -left-1.5 -top-1.5 h-5 w-[2px] bg-metallic" />
                <span className="absolute -left-1.5 -top-1.5 h-[2px] w-5 bg-metallic" />
                <span className="absolute -bottom-1.5 -right-1.5 h-5 w-[2px] bg-metallic" />
                <span className="absolute -bottom-1.5 -right-1.5 h-[2px] w-5 bg-metallic" />
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
            <motion.div
              custom={4}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="mt-10"
            >
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
                  <a
                    href={project.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group block"
                  >
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
                <li key={item.to}>
                  <Link to={item.to} className="group block">
                    <span className="link-underline flex items-center gap-1.5 text-[15px] text-foreground transition-colors duration-300 group-hover:text-gold-light">
                      {item.label}
                      <ArrowUpRight
                        className="h-3.5 w-3.5 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                        strokeWidth={1.5}
                      />
                    </span>
                  </Link>
                </li>
              ))}
            </motion.ul>
          </div>
        </div>
      </main>

      <footer className="relative z-10 flex justify-end px-8 pb-10 sm:px-16 sm:pb-12">
        <p className="font-mono text-xs tracking-wider text-foreground-muted/70">
          © 2026 matheusalexandre.dev
        </p>
      </footer>
    </div>
  );
};

export default Home;
