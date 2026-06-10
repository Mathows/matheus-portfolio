import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Calendar, MapPin, Smartphone, type LucideIcon } from 'lucide-react';
import { useLanguage } from '@/lib/i18n';

type Skill = {
  name: string;
  iconClass?: string;
  Icon?: LucideIcon;
};

const ExperienceSection = () => {
  const { dict } = useLanguage();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        duration: 0.6
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6
      }
    }
  };

  const skills: Skill[] = [
    { name: 'C#', iconClass: 'devicon-csharp-plain' },
    { name: '.NET', iconClass: 'devicon-dotnetcore-plain' },
    { name: '.NET MAUI', Icon: Smartphone },
    { name: 'SQL Server', iconClass: 'devicon-microsoftsqlserver-plain' },
    { name: 'Blazor', iconClass: 'devicon-blazor-original' },
    { name: 'Azure', iconClass: 'devicon-azure-plain' },
    { name: 'Java', iconClass: 'devicon-java-plain' },
    { name: 'Spring', iconClass: 'devicon-spring-original' },
    { name: 'Git', iconClass: 'devicon-git-plain' },
    { name: 'Docker', iconClass: 'devicon-docker-plain' },
  ];

  return (
    <section id="experiencia" className="py-20 relative">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="max-w-6xl mx-auto"
        >
          {/* Section Title */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              {dict.experience.titlePrefix}
              {dict.experience.titleHighlight}
            </h2>
            <div className="w-20 h-1 bg-gradient-primary mx-auto rounded-full" />
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Timeline Card */}
            <motion.div variants={itemVariants} className="space-y-6">
              <div className="relative">
                {/* Main Experience Card */}
                <motion.div
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.3 }}
                  className="rounded-2xl p-8 border border-primary/40 hover:border-primary/70 transition-all duration-300"
                >
                  {/* Company Header */}
                  <div className="mb-6">
                    <h3 className="text-2xl font-bold text-foreground">{dict.experience.company}</h3>
                    <p className="text-primary font-medium">{dict.experience.role}</p>
                  </div>

                  {/* Period and Location */}
                  <div className="flex flex-wrap gap-4 mb-6 text-sm text-foreground-muted">
                    <div className="flex items-center space-x-2">
                      <Calendar className="w-4 h-4" />
                      <span>{dict.experience.period}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <MapPin className="w-4 h-4" />
                      <span>{dict.experience.location}</span>
                    </div>
                  </div>

                  {/* Description */}
                  <div className="space-y-4">
                    <p className="text-foreground-muted leading-relaxed">
                      {dict.experience.description}
                    </p>

                    <div className="space-y-3">
                      <h4 className="text-foreground font-semibold">{dict.experience.responsibilitiesTitle}</h4>
                      <ul className="space-y-2 text-foreground-muted">
                        {dict.experience.responsibilities.map((item) => (
                          <li key={item} className="flex items-start space-x-2">
                            <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Timeline Line */}
                  <div className="absolute -right-4 top-8 w-px h-full bg-gradient-to-b from-primary via-accent to-transparent" />
                  <div className="absolute -right-6 top-8 w-3 h-3 bg-primary rounded-full shadow-glow" />
                </motion.div>
              </div>
            </motion.div>

            {/* Achievements Grid */}
            <motion.div variants={itemVariants} className="space-y-6">
              <h3 className="text-2xl font-bold text-foreground mb-8">{dict.experience.achievementsTitle}</h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {dict.experience.achievements.map((achievement) => (
                  <motion.div
                    key={achievement.title}
                    variants={itemVariants}
                    whileHover={{ scale: 1.02, y: -2 }}
                    transition={{ duration: 0.2 }}
                    className="rounded-xl p-6 border border-primary/40 hover:border-primary/70 transition-all duration-300"
                  >
                    <h4 className="font-semibold text-foreground mb-2">{achievement.title}</h4>
                    <p className="text-sm text-foreground-muted leading-relaxed">
                      {achievement.description}
                    </p>
                  </motion.div>
                ))}
              </div>

              {/* Skills Progress */}
              <motion.div variants={itemVariants} className="mt-8">
                <h4 className="text-lg font-semibold text-foreground mb-6">{dict.experience.techsTitle}</h4>
                <div className="grid grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-4">
                  {skills.map((skill, idx) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                      transition={{ duration: 0.4, delay: 0.05 * idx }}
                      whileHover={{ scale: 1.05, y: -2 }}
                      className="flex flex-col items-center justify-center p-6 rounded-xl border border-primary/30 bg-card hover:bg-card-hover hover:border-primary hover:shadow-glow transition-all duration-300 group cursor-pointer"
                    >
                      {skill.Icon ? (
                        <skill.Icon className="w-12 h-12 text-foreground-muted group-hover:text-primary transition-colors duration-300 mb-4" />
                      ) : (
                        <i className={`${skill.iconClass} text-5xl text-foreground-muted group-hover:text-primary transition-colors duration-300 mb-4`} />
                      )}
                      <span className="text-sm font-bold text-foreground-muted group-hover:text-foreground transition-colors duration-300 text-center">
                        {skill.name}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ExperienceSection;
