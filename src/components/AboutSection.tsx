import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import matheusProfile from '/lovable-uploads/a3fcd278-4490-4ae6-bc86-21cafbb57f7c.png';

const AboutSection = () => {
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
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  };

  return (
    <section id="sobre" className="py-20 relative">
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
              Sobre <span className="text-primary">Mim</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-primary mx-auto rounded-full" />
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Profile Image */}
            <motion.div 
              variants={itemVariants}
              className="flex justify-center lg:justify-end"
            >
              <div className="relative">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                  className="relative"
                >
                  <div className="absolute inset-0 bg-gradient-primary rounded-full blur-xl opacity-30 animate-glow" />
                  <div className="relative w-72 h-72 rounded-full overflow-hidden border-4 border-card bg-card shadow-card-hover">
                    <img
                      src={matheusProfile}
                      alt="Matheus Alexandre"
                      className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                    />
                  </div>
                </motion.div>
                
                {/* Floating Elements */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="absolute -top-4 -right-4 w-20 h-20 border-2 border-primary/30 rounded-full"
                />
                <motion.div
                  animate={{ rotate: -360 }}
                  transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                  className="absolute -bottom-6 -left-6 w-16 h-16 border border-accent/30 rounded-full"
                />
              </div>
            </motion.div>

            {/* Content */}
            <motion.div variants={itemVariants} className="space-y-6">
              <div className="space-y-4">
                <h3 className="text-2xl font-semibold text-foreground">
                  Desenvolvedor Full Stack Apaixonado por Tecnologia
                </h3>
                
                <div className="text-lg text-foreground-muted leading-relaxed space-y-4">
                  <p>
                    Sou desenvolvedor full stack apaixonado por tecnologia e soluções eficientes. 
                    Trabalho com <span className="text-primary font-medium">C#, .NET, SQL Server, React, Blazor e DevExpress</span>, 
                    criando aplicações modernas e performáticas.
                  </p>
                  
                  <p>
                    Especializado em desenvolvimento de aplicações empresariais, tenho experiência sólida 
                    em integração de sistemas, otimização de banco de dados e criação de interfaces 
                    intuitivas que proporcionam excelente experiência do usuário.
                  </p>

                  <p>
                    Busco constantemente evoluir minhas habilidades e me manter atualizado com as 
                    mais recentes tecnologias do mercado, sempre focando em entregar soluções 
                    de alta qualidade e impacto.
                  </p>
                </div>
              </div>

              {/* Stats */}
              <motion.div 
                variants={itemVariants}
                className="grid grid-cols-2 gap-6 pt-6"
              >
                <div className="bg-card/50 backdrop-blur-sm rounded-lg p-4 border border-border/50 hover:border-primary/30 transition-all duration-300">
                  <div className="text-2xl font-bold text-primary">2+</div>
                  <div className="text-sm text-foreground-muted">Anos de Experiência</div>
                </div>
                
                <div className="bg-card/50 backdrop-blur-sm rounded-lg p-4 border border-border/50 hover:border-primary/30 transition-all duration-300">
                  <div className="text-2xl font-bold text-accent">15+</div>
                  <div className="text-sm text-foreground-muted">Projetos Concluídos</div>
                </div>
              </motion.div>

              {/* Skills Tags */}
              <motion.div variants={itemVariants} className="flex flex-wrap gap-3 pt-4">
                {['C#', '.NET', 'SQL Server', 'React', 'Blazor', 'DevExpress', 'JavaScript', 'TypeScript'].map((skill) => (
                  <motion.span
                    key={skill}
                    whileHover={{ scale: 1.05, y: -2 }}
                    className="px-3 py-1 bg-gradient-primary text-primary-foreground text-sm rounded-full font-medium shadow-sm hover:shadow-glow transition-all duration-300"
                  >
                    {skill}
                  </motion.span>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;