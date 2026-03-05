import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { GraduationCap, Calendar, Award, ExternalLink, BookOpen, Code, Database, Globe, TrendingUp } from 'lucide-react';
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
      title: "Fundamentos do Blazor Web Assembly",
      institution: "balta.io",
      date: "08/01/2024",
      level: "Basic",
      category: "Frontend",
      description: "Curso completo sobre criação de Single Page Applications ricas e interativas utilizando C# e WebAssembly.",
      topics: ["C#", "Blazor", "WebAssembly"],
      icon: Globe,
      gradient: "from-blue-600 to-indigo-600",
      status: "Concluído",
      link: "https://balta.io/certificados/9765ce52-74fd-4540-a4f1-c8c61c5cf3aa"
    },
    {
      id: 2,
      title: "Fundamentos do Blazor Server",
      institution: "balta.io",
      date: "13/12/2023",
      level: "Basic",
      category: "Full Stack",
      description: "Aprendizado focado no ciclo de vida dos componentes e na comunicação em tempo real via SignalR no Blazor Server.",
      topics: ["C#", "Blazor Server", "SignalR"],
      icon: Code,
      gradient: "from-violet-600 to-purple-600",
      status: "Concluído",
      link: "https://balta.io/certificados/8f1f3c89-615d-424a-8f3b-f51938bab7bf"
    },
    {
      id: 3,
      title: "Fundamentos do ASP.NET 6",
      institution: "balta.io",
      date: "31/10/2023",
      level: "Intermediate",
      category: "Backend",
      description: "Conceitos essenciais no ASP.NET 6 para o desenvolvimento de APIs modernas e aplicações baseadas em microserviços.",
      topics: ["C#", "ASP.NET Core", "APIs REST"],
      icon: Code,
      gradient: "from-green-600 to-teal-600",
      status: "Concluído",
      link: "https://balta.io/certificados/5e192151-59b8-4ed7-911f-5c47daae8206"
    },
    {
      id: 4,
      title: "Uma visão geral sobre o ASP.NET Razor Pages",
      institution: "balta.io",
      date: "23/10/2023",
      level: "Basic",
      category: "Full Stack",
      description: "Introdução ao paradigma baseado em páginas usando C# e HTML com ASP.NET Razor Pages, focando em produtividade.",
      topics: ["C#", "Razor Pages", "ASP.NET"],
      icon: BookOpen,
      gradient: "from-orange-600 to-red-600",
      status: "Concluído",
      link: "https://balta.io/certificados/ce3d41c1-3643-4fdb-991f-60ea206e9fbd"
    },
    {
      id: 5,
      title: "Fundamentos do Entity Framework",
      institution: "balta.io",
      date: "19/07/2023",
      level: "Basic",
      category: "Database",
      description: "Mapeamento objeto-relacional com Entity Framework Core para otimizar o acesso e a manipulação de banco de dados.",
      topics: ["C#", "Entity Framework", "ORM"],
      icon: Database,
      gradient: "from-cyan-600 to-blue-600",
      status: "Concluído",
      link: "https://balta.io/certificados/42e8b54a-9f05-46b2-add2-dcfee3516b9f"
    },
    {
      id: 6,
      title: "Acesso à dados com .NET, C#, Dapper e SQL Server",
      institution: "balta.io",
      date: "31/05/2023",
      level: "Beginner",
      category: "Database",
      description: "Técnicas com foco em performance para acesso a dados usando as vantagens do Dapper em conjunto com o SQL Server.",
      topics: ["C#", "Dapper", "SQL Server"],
      icon: Database,
      gradient: "from-blue-600 to-cyan-600",
      status: "Concluído",
      link: "https://balta.io/certificados/e40e6e2f-92ff-4a7f-ad28-3272d3e50de4"
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
                        <span>{course.date}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <TrendingUp className="w-4 h-4" />
                        <span>{course.level}</span>
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
                      onClick={() => course.link && window.open(course.link, '_blank')}
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