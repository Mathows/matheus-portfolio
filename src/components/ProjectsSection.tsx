import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { ExternalLink, Github, Wallet, Megaphone } from 'lucide-react';
import { Button } from '@/components/ui/button';

const ProjectsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
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

  const projects = [
    {
      id: 1,
      title: "Dima — Controle Financeiro",
      description: "Aplicação full stack de gestão financeira pessoal: cadastro de categorias, lançamentos de receitas e despesas, dashboard com gráficos e plano premium com pagamentos integrados via Stripe.",
      technologies: [".NET 8", "Blazor WASM", "MudBlazor", "EF Core", "SQL Server", "Stripe"],
      category: "Finanças",
      status: "Concluído",
      icon: Wallet,
      gradient: "from-emerald-600 to-teal-600",
      github: "https://github.com/Mathows/dima-controle-financeiro",
      demo: ""
    },
    {
      id: 2,
      title: "Vieira Solutions",
      description: "Site institucional e landing page para uma agência digital, com formulário de contato que registra os leads no banco, dispara e-mails automáticos de notificação e auto-resposta, e redireciona o cliente para o WhatsApp.",
      technologies: [".NET 10", "Blazor WASM", "MudBlazor", "EF Core", "SQL Server", "MailKit"],
      category: "Web",
      status: "Em desenvolvimento",
      icon: Megaphone,
      gradient: "from-blue-600 to-purple-600",
      github: "https://github.com/Mathows/vieira-solutions",
      demo: ""
    }
  ];

  return (
    <section id="projetos" className="py-20 relative">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="max-w-7xl mx-auto"
        >
          {/* Section Title */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Meus <span className="text-blue-600">Projetos</span>
            </h2>
            <p className="text-xl text-white max-w-2xl mx-auto mb-6">
              Alguns dos projetos que desenvolvi utilizando as mais modernas tecnologias
            </p>
            <div className="w-20 h-1 bg-gradient-primary mx-auto rounded-full" />
          </motion.div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                variants={itemVariants}
                whileHover={{ y: -10, scale: 1.02 }}
                transition={{ duration: 0.3 }}
                className="group relative"
              >
                <div className="bg-gradient-card backdrop-blur-sm rounded-2xl p-8 border border-border/50 shadow-card hover:shadow-card-hover transition-all duration-500 h-full">
                  {/* Project Header */}
                  <div className="flex items-start justify-between mb-6">
                    <div className="flex items-center space-x-4">
                      <div className={`w-12 h-12 bg-gradient-to-r ${project.gradient} rounded-xl flex items-center justify-center shadow-glow`}>
                        <project.icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                          {project.title}
                        </h3>
                        <div className="flex items-center space-x-2 mt-1">
                          <span className="text-xs px-2 py-1 bg-primary/20 text-primary rounded-full">
                            {project.category}
                          </span>
                          <span className={`text-xs px-2 py-1 rounded-full ${
                            project.status === 'Concluído' 
                              ? 'bg-success/20 text-success' 
                              : 'bg-warning/20 text-warning'
                          }`}>
                            {project.status}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Project Description */}
                  <p className="text-foreground-muted leading-relaxed mb-6">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-border/30 text-foreground text-xs rounded-full border border-border/50 hover:border-primary/30 transition-all duration-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Project Actions */}
                  <div className="flex space-x-3 mt-auto">
                    {project.github && (
                      <Button
                        variant="outline"
                        size="sm"
                        className="flex-1 border-border/50 hover:border-primary/50 hover:bg-primary/10 transition-all duration-300"
                        onClick={() => window.open(project.github, '_blank')}
                      >
                        <Github className="w-4 h-4 mr-2" />
                        Código
                      </Button>
                    )}
                    {project.demo && (
                      <Button
                        size="sm"
                        className="flex-1 bg-gradient-primary hover:bg-gradient-accent text-primary-foreground transition-all duration-300"
                        onClick={() => window.open(project.demo, '_blank')}
                      >
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Demo
                      </Button>
                    )}
                  </div>

                  {/* Hover Effect Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-accent/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                </div>
              </motion.div>
            ))}
          </div>

          {/* Call to Action */}
          <motion.div
            variants={itemVariants}
            className="text-center"
          >
            <div className="bg-gradient-card backdrop-blur-sm rounded-2xl p-8 border border-border/50 max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Interessado em colaborar?
              </h3>
              <p className="text-foreground-muted mb-6">
                Estou sempre aberto a novos desafios e oportunidades de colaboração. 
                Vamos conversar sobre seu próximo projeto!
              </p>
              <Button
                size="lg"
                className="bg-gradient-primary hover:bg-gradient-accent text-primary-foreground font-semibold px-8 py-3 rounded-full shadow-glow hover:shadow-accent transition-all duration-300"
                onClick={() => {
                  const element = document.getElementById('contato');
                  if (element) element.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Entrar em Contato
              </Button>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;