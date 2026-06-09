import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Building2, Calendar, MapPin, Code, Database, FileSpreadsheet, Zap } from 'lucide-react';
import { useLanguage } from '@/lib/i18n';

const achievementIcons = [Code, Database, FileSpreadsheet, Zap];

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

  const skills = [
    { name: 'C#', iconClass: 'devicon-csharp-plain' },
    { name: '.NET', iconClass: 'devicon-dotnetcore-plain' },
    { name: '.NET MAUI', iconClass: 'devicon-dotnetcore-plain' },
    { name: 'SQL Server', iconClass: 'devicon-microsoftsqlserver-plain' },
    { name: 'React', iconClass: 'devicon-react-original' },
    { name: 'Blazor', iconClass: 'devicon-blazor-original' },
    { name: 'Java', iconClass: 'devicon-java-plain' },
    { name: 'TypeScript', iconClass: 'devicon-typescript-plain' },
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
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              {dict.experience.titlePrefix}
              <span className="text-blue-600">{dict.experience.titleHighlight}</span>
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
                  className="bg-gradient-card backdrop-blur-sm rounded-2xl p-8 border border-border/50 shadow-card hover:shadow-card-hover transition-all duration-300"
                >
                  {/* Company Header */}
                  <div className="flex items-start justify-between mb-6">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center shadow-glow">
                        <Building2 className="w-6 h-6 text-primary-foreground" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-foreground">{dict.experience.company}</h3>
                        <p className="text-primary font-medium">{dict.experience.role}</p>
                      </div>
                    </div>
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
                {dict.experience.achievements.map((achievement, index) => {
                  const Icon = achievementIcons[index] ?? Code;
                  return (
                    <motion.div
                      key={achievement.title}
                      variants={itemVariants}
                      whileHover={{ scale: 1.02, y: -2 }}
                      transition={{ duration: 0.2 }}
                      className="bg-card/30 backdrop-blur-sm rounded-xl p-6 border border-border/30 hover:border-primary/30 transition-all duration-300"
                    >
                      <div className="flex items-start space-x-4">
                        <div className="w-10 h-10 bg-gradient-accent rounded-lg flex items-center justify-center flex-shrink-0">
                          <Icon className="w-5 h-5 text-accent-foreground" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-foreground mb-2">{achievement.title}</h4>
                          <p className="text-sm text-foreground-muted leading-relaxed">
                            {achievement.description}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
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
                      className="flex flex-col items-center justify-center p-6 rounded-xl border border-primary/30 bg-card hover:bg-[#1a1025] hover:border-primary hover:shadow-[0_0_15px_rgba(139,92,246,0.3)] transition-all duration-300 group cursor-pointer"
                    >
                      <i className={`${skill.iconClass} text-5xl text-gray-300 group-hover:text-white transition-colors duration-300 mb-4`} />
                      <span className="text-sm font-bold text-gray-300 group-hover:text-white transition-colors duration-300 text-center">
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
