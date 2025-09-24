import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { GraduationCap, Calendar, Award, ExternalLink, BookOpen, Code, Database, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';

const CoursesSection = () => {
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

  const courses = [
    {
      id: 1,
      title: "Formação C# e .NET",
      institution: "Alura",
      year: "2023",
      category: "Backend",
      duration: "120h",
      description: "Formação completa em desenvolvimento backend com C# e .NET, incluindo Entity Framework, APIs RESTful e boas práticas.",
      topics: ["C# Avançado", "ASP.NET Core", "Entity Framework", "APIs RESTful"],
      icon: Code,
      gradient: "from-blue-600 to-indigo-600",
      status: "Concluído"
    },
    {
      id: 2,
      title: "SQL Server - Administração e Performance",
      institution: "Microsoft Learn",
      year: "2023",
      category: "Database",
      duration: "80h",
      description: "Curso focado em administração, otimização e performance de bancos de dados SQL Server.",
      topics: ["Otimização de Queries", "Índices", "Stored Procedures", "Performance Tuning"],
      icon: Database,
      gradient: "from-green-600 to-teal-600",
      status: "Concluído"
    },
    {
      id: 3,
      title: "React - Desenvolvimento Moderno",
      institution: "Rocketseat",
      year: "2024",
      category: "Frontend",
      duration: "100h",
      description: "Desenvolvimento de aplicações web modernas com React, incluindo hooks, context API e performance.",
      topics: ["React Hooks", "Context API", "Performance", "TypeScript"],
      icon: Globe,
      gradient: "from-purple-600 to-pink-600",
      status: "Concluído"
    },
    {
      id: 4,
      title: "DevExpress - Componentes Avançados",
      institution: "DevExpress University",
      year: "2024",
      category: "UI/UX",
      duration: "60h",
      description: "Curso avançado sobre componentes DevExpress para criação de interfaces ricas e relatórios complexos.",
      topics: ["Grid Components", "Reporting", "Charts", "Dashboard"],
      icon: BookOpen,
      gradient: "from-orange-600 to-red-600",
      status: "Em andamento"
    },
    {
      id: 5,
      title: "Azure Fundamentals",
      institution: "Microsoft",
      year: "2024",
      category: "Cloud",
      duration: "40h",
      description: "Fundamentos de computação em nuvem com Microsoft Azure, incluindo serviços básicos e arquitetura.",
      topics: ["Cloud Computing", "Azure Services", "Virtual Machines", "Storage"],
      icon: Award,
      gradient: "from-cyan-600 to-blue-600",
      status: "Planejado"
    },
    {
      id: 6,
      title: "Blazor - Full Stack Web Development",
      institution: "Udemy",
      year: "2023",
      category: "Full Stack",
      duration: "75h",
      description: "Desenvolvimento full stack com Blazor Server e WebAssembly, incluindo integração com APIs.",
      topics: ["Blazor Server", "WebAssembly", "Component Development", "State Management"],
      icon: Code,
      gradient: "from-violet-600 to-purple-600",
      status: "Concluído"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Concluído':
        return 'bg-success/20 text-success border-success/30';
      case 'Emandamento':
        return 'bg-warning/20 text-warning border-warning/30';
      case 'Planejado':
        return 'bg-primary/20 text-primary border-primary/30';
      default:
        return 'bg-foreground-muted/20 text-foreground-muted border-foreground-muted/30';
    }
  };

  return (
    <section id="cursos" className="py-20 relative">
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
            <div className="flex items-center justify-center mb-4">
              <GraduationCap className="w-12 h-12 text-primary mr-4" />
              <h2 className="text-4xl md:text-5xl font-bold text-foreground">
                Cursos & <span className="text-primary">Certificados</span>
              </h2>
            </div>
            <p className="text-xl text-foreground-muted max-w-2xl mx-auto mb-6">
              Sempre em busca de novos conhecimentos e atualizações tecnológicas
            </p>
            <div className="w-20 h-1 bg-gradient-primary mx-auto rounded-full" />
          </motion.div>

          {/* Courses Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {courses.map((course, index) => (
              <motion.div
                key={course.id}
                variants={itemVariants}
                whileHover={{ y: -5, scale: 1.02 }}
                transition={{ duration: 0.3 }}
                className="group relative h-full"
              >
                <div className="bg-gradient-card backdrop-blur-sm rounded-2xl p-6 border border-border/50 shadow-card hover:shadow-card-hover transition-all duration-500 h-full flex flex-col">
                  {/* Course Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div className={`w-12 h-12 bg-gradient-to-r ${course.gradient} rounded-xl flex items-center justify-center shadow-glow flex-shrink-0`}>
                      <course.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className={`px-2 py-1 rounded-full text-xs border ${getStatusColor(course.status)}`}>
                      {course.status}
                    </div>
                  </div>

                  {/* Course Info */}
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                      {course.title}
                    </h3>
                    
                    <div className="flex items-center space-x-4 text-sm text-foreground-muted mb-4">
                      <div className="flex items-center space-x-1">
                        <Calendar className="w-4 h-4" />
                        <span>{course.year}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <BookOpen className="w-4 h-4" />
                        <span>{course.duration}</span>
                      </div>
                    </div>

                    <div className="mb-4">
                      <span className="text-primary font-medium text-sm">{course.institution}</span>
                      <span className="mx-2 text-foreground-muted">•</span>
                      <span className="text-xs px-2 py-1 bg-accent/20 text-accent rounded-full">
                        {course.category}
                      </span>
                    </div>

                    <p className="text-foreground-muted text-sm leading-relaxed mb-4">
                      {course.description}
                    </p>

                    {/* Topics */}
                    <div className="flex flex-wrap gap-1 mb-4">
                      {course.topics.map((topic) => (
                        <span
                          key={topic}
                          className="px-2 py-1 bg-border/30 text-foreground text-xs rounded border border-border/50 hover:border-primary/30 transition-all duration-300"
                        >
                          {topic}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Course Action */}
                  <div className="mt-auto">
                    <Button
                      variant="outline"
                      size="sm"
                      className="w-full border-border/50 hover:border-primary/50 hover:bg-primary/10 transition-all duration-300"
                      disabled={course.status === 'Planejado'}
                    >
                      {course.status === 'Concluído' ? (
                        <>
                          <Award className="w-4 h-4 mr-2" />
                          Ver Certificado
                        </>
                      ) : course.status === 'Em andamento' ? (
                        <>
                          <BookOpen className="w-4 h-4 mr-2" />
                          Acompanhar Progresso
                        </>
                      ) : (
                        <>
                          <Calendar className="w-4 h-4 mr-2" />
                          Em Breve
                        </>
                      )}
                    </Button>
                  </div>

                  {/* Hover Effect Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-accent/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                </div>
              </motion.div>
            ))}
          </div>

          {/* Learning Goals */}
          <motion.div
            variants={itemVariants}
            className="text-center"
          >
            <div className="bg-gradient-card backdrop-blur-sm rounded-2xl p-8 border border-border/50 max-w-4xl mx-auto">
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Próximos Objetivos de Aprendizado
              </h3>
              <p className="text-foreground-muted mb-6">
                Sempre em evolução, planejo expandir meus conhecimentos em novas tecnologias e certificações
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                <div className="p-4 bg-card/30 rounded-lg border border-border/30">
                  <h4 className="font-semibold text-foreground mb-2">Cloud Computing</h4>
                  <p className="text-sm text-foreground-muted">Azure e AWS para soluções em nuvem</p>
                </div>
                <div className="p-4 bg-card/30 rounded-lg border border-border/30">
                  <h4 className="font-semibold text-foreground mb-2">Microservices</h4>
                  <p className="text-sm text-foreground-muted">Arquitetura distribuída e containers</p>
                </div>
                <div className="p-4 bg-card/30 rounded-lg border border-border/30">
                  <h4 className="font-semibold text-foreground mb-2">Machine Learning</h4>
                  <p className="text-sm text-foreground-muted">IA aplicada ao desenvolvimento</p>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default CoursesSection;