import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Building2, Calendar, MapPin, Code, Database, FileSpreadsheet, Zap } from 'lucide-react';

const ExperienceSection = () => {
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

  const achievements = [
    {
      icon: Code,
      title: "Desenvolvimento Full Stack",
      description: "Criação de aplicações completas usando C# .NET no backend e React/Blazor no frontend"
    },
    {
      icon: Database,
      title: "Otimização de Banco de Dados",
      description: "Otimização de queries SQL Server e estruturação de bases de dados eficientes"
    },
    {
      icon: FileSpreadsheet,
      title: "Relatórios Avançados",
      description: "Desenvolvimento de relatórios complexos utilizando DevExpress para análise de dados"
    },
    {
      icon: Zap,
      title: "Integração de Sistemas",
      description: "Integração de sistemas legados com novas tecnologias e APIs externas"
    }
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
              Minha <span className="text-primary">Experiência</span>
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
                        <h3 className="text-2xl font-bold text-foreground">Titaniumfix</h3>
                        <p className="text-primary font-medium">Desenvolvedor Full Stack</p>
                      </div>
                    </div>
                  </div>

                  {/* Period and Location */}
                  <div className="flex flex-wrap gap-4 mb-6 text-sm text-foreground-muted">
                    <div className="flex items-center space-x-2">
                      <Calendar className="w-4 h-4" />
                      <span>2022 - Atual</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <MapPin className="w-4 h-4" />
                      <span>Remoto</span>
                    </div>
                  </div>

                  {/* Description */}
                  <div className="space-y-4">
                    <p className="text-foreground-muted leading-relaxed">
                      Atuo como desenvolvedor full stack, com foco em aplicações empresariais, 
                      integração de sistemas, relatórios com DevExpress e otimização de banco 
                      de dados em SQL Server.
                    </p>

                    <div className="space-y-3">
                      <h4 className="text-foreground font-semibold">Principais Responsabilidades:</h4>
                      <ul className="space-y-2 text-foreground-muted">
                        <li className="flex items-start space-x-2">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                          <span>Desenvolvimento de aplicações web usando C# .NET e React</span>
                        </li>
                        <li className="flex items-start space-x-2">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                          <span>Criação de interfaces modernas com Blazor</span>
                        </li>
                        <li className="flex items-start space-x-2">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                          <span>Otimização de performance em SQL Server</span>
                        </li>
                        <li className="flex items-start space-x-2">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                          <span>Desenvolvimento de relatórios com DevExpress</span>
                        </li>
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
              <h3 className="text-2xl font-bold text-foreground mb-8">Principais Conquistas</h3>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {achievements.map((achievement, index) => (
                  <motion.div
                    key={achievement.title}
                    variants={itemVariants}
                    whileHover={{ scale: 1.02, y: -2 }}
                    transition={{ duration: 0.2 }}
                    className="bg-card/30 backdrop-blur-sm rounded-xl p-6 border border-border/30 hover:border-primary/30 transition-all duration-300"
                  >
                    <div className="flex items-start space-x-4">
                      <div className="w-10 h-10 bg-gradient-accent rounded-lg flex items-center justify-center flex-shrink-0">
                        <achievement.icon className="w-5 h-5 text-accent-foreground" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground mb-2">{achievement.title}</h4>
                        <p className="text-sm text-foreground-muted leading-relaxed">
                          {achievement.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Skills Progress */}
              <motion.div variants={itemVariants} className="mt-8">
                <h4 className="text-lg font-semibold text-foreground mb-6">Principais Tecnologias</h4>
                <div className="space-y-4">
                  {[
                    { name: 'C# & .NET', level: 90 },
                    { name: 'SQL Server', level: 85 },
                    { name: 'React & Blazor', level: 80 },
                    { name: 'DevExpress', level: 85 }
                  ].map((skill) => (
                    <div key={skill.name} className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="text-foreground font-medium">{skill.name}</span>
                        <span className="text-foreground-muted">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-border rounded-full h-2">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
                          transition={{ duration: 1, delay: 0.5 }}
                          className="bg-gradient-primary h-2 rounded-full"
                        />
                      </div>
                    </div>
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