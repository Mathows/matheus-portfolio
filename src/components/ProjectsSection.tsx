import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { ExternalLink, Github, Wallet, Smartphone, Megaphone, Sparkles, type LucideIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/lib/i18n';

type Project = {
  id: number;
  title: string;
  description: string;
  category: string;
  technologies: string[];
  status: string;
  icon: LucideIcon;
  gradient: string;
  github: string;
  demo: string | null;
  image: string | null; // path under /public, e.g. '/images/projects/dima-web.png'
  featured: boolean;
};

const ProjectsSection = () => {
  const { dict } = useLanguage();
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

  const projects: Project[] = [
    {
      id: 1,
      title: dict.projects.list.dima.title,
      description: dict.projects.list.dima.description,
      category: dict.projects.list.dima.category,
      technologies: [".NET 8", "Blazor WASM", "MudBlazor", "EF Core", "SQL Server", "Stripe", "Azure"],
      status: dict.projects.status.completed,
      icon: Wallet,
      gradient: "from-emerald-600 to-teal-600",
      github: "https://github.com/Mathows/dima-controle-financeiro",
      demo: "https://black-sand-042c6dc03.7.azurestaticapps.net",
      image: "/images/projects/dima-web.jpg",
      featured: true,
    },
    {
      id: 2,
      title: dict.projects.list.dimaMobile.title,
      description: dict.projects.list.dimaMobile.description,
      category: dict.projects.list.dimaMobile.category,
      technologies: [".NET 9", ".NET MAUI", "Blazor Hybrid", "MudBlazor", "JWT"],
      status: dict.projects.status.completed,
      icon: Smartphone,
      gradient: "from-blue-600 to-indigo-600",
      github: "https://github.com/Mathows/dima-controle-financeiro",
      demo: "https://github.com/Mathows/dima-controle-financeiro/releases/latest",
      image: null,
      featured: false,
    },
    {
      id: 3,
      title: dict.projects.list.vieira.title,
      description: dict.projects.list.vieira.description,
      category: dict.projects.list.vieira.category,
      technologies: [".NET 10", "Blazor WASM", "MudBlazor", "EF Core", "SQL Server", "MailKit"],
      status: dict.projects.status.completed,
      icon: Megaphone,
      gradient: "from-purple-600 to-pink-600",
      github: "https://github.com/Mathows/vieira-solutions",
      demo: null,
      image: null,
      featured: false,
    }
  ];

  const featuredProjects = projects.filter((p) => p.featured);
  const otherProjects = projects.filter((p) => !p.featured);

  const ProjectVisual = ({ project, className = '' }: { project: Project; className?: string }) => (
    <div className={`relative overflow-hidden rounded-xl ${className}`}>
      {project.image ? (
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      ) : (
        <div className={`w-full h-full bg-gradient-to-br ${project.gradient} flex items-center justify-center transition-transform duration-500 group-hover:scale-105`}>
          <project.icon className="w-20 h-20 text-white/30" strokeWidth={1.5} />
        </div>
      )}
      <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent pointer-events-none" />
    </div>
  );

  const ProjectActions = ({ project }: { project: Project }) => (
    <div className="flex space-x-3">
      <Button
        variant="outline"
        size="sm"
        className="flex-1 border-border/50 hover:border-primary/50 hover:bg-primary/10 transition-all duration-300"
        onClick={() => window.open(project.github, '_blank')}
      >
        <Github className="w-4 h-4 mr-2" />
        {dict.projects.buttonCode}
      </Button>
      {project.demo && (
        <Button
          size="sm"
          className="flex-1 bg-gradient-primary hover:bg-gradient-accent text-primary-foreground transition-all duration-300"
          onClick={() => window.open(project.demo!, '_blank')}
        >
          <ExternalLink className="w-4 h-4 mr-2" />
          {dict.projects.buttonAccess}
        </Button>
      )}
    </div>
  );

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
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              {dict.projects.titlePrefix}
              {dict.projects.titleHighlight}
            </h2>
            <p className="text-xl text-foreground max-w-2xl mx-auto mb-6">
              {dict.projects.subtitle}
            </p>
            <div className="w-20 h-1 bg-gradient-primary mx-auto rounded-full" />
          </motion.div>

          {/* Featured Projects */}
          {featuredProjects.length > 0 && (
            <div className="mb-20">
              <motion.div variants={itemVariants} className="flex items-center gap-3 mb-8">
                <Sparkles className="w-5 h-5 text-primary" />
                <h3 className="text-2xl font-bold text-foreground">{dict.projects.featuredHeading}</h3>
                <div className="flex-1 h-px bg-border/50" />
              </motion.div>

              <div className="space-y-8">
                {featuredProjects.map((project) => (
                  <motion.article
                    key={project.id}
                    variants={itemVariants}
                    whileHover={{ y: -6 }}
                    transition={{ duration: 0.3 }}
                    className="group relative grid grid-cols-1 lg:grid-cols-5 gap-8 rounded-3xl p-6 lg:p-8 border border-primary/40 hover:border-primary/70 transition-all duration-500"
                  >
                    {/* Visual */}
                    <div className="lg:col-span-3 aspect-video lg:aspect-auto lg:min-h-[320px]">
                      <ProjectVisual project={project} className="w-full h-full" />
                    </div>

                    {/* Content */}
                    <div className="lg:col-span-2 flex flex-col">
                      <div className="flex items-center gap-2 mb-3">
                        <span className="text-[10px] font-bold tracking-wider px-2 py-1 bg-gradient-primary text-primary-foreground rounded-full">
                          {dict.projects.featuredBadge}
                        </span>
                        <span className="text-xs px-2 py-1 bg-primary/15 text-primary rounded-full">
                          {project.category}
                        </span>
                        <span className="text-xs px-2 py-1 bg-success/15 text-success rounded-full">
                          {project.status}
                        </span>
                      </div>

                      <h4 className="text-2xl lg:text-3xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                        {project.title}
                      </h4>

                      <p className="text-foreground-muted leading-relaxed mb-5 flex-1">
                        {project.description}
                      </p>

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

                      <ProjectActions project={project} />
                    </div>
                  </motion.article>
                ))}
              </div>
            </div>
          )}

          {/* All Other Projects */}
          {otherProjects.length > 0 && (
            <div className="mb-16">
              <motion.div variants={itemVariants} className="flex items-center gap-3 mb-8">
                <h3 className="text-2xl font-bold text-foreground">{dict.projects.allHeading}</h3>
                <div className="flex-1 h-px bg-border/50" />
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {otherProjects.map((project) => (
                  <motion.article
                    key={project.id}
                    variants={itemVariants}
                    whileHover={{ y: -8 }}
                    transition={{ duration: 0.3 }}
                    className="group flex flex-col rounded-2xl border border-primary/40 hover:border-primary/70 transition-all duration-500 overflow-hidden"
                  >
                    {/* Visual */}
                    <div className="aspect-video">
                      <ProjectVisual project={project} className="w-full h-full rounded-none" />
                    </div>

                    {/* Content */}
                    <div className="p-6 flex flex-col flex-1">
                      <div className="flex items-center gap-2 mb-3">
                        <span className="text-xs px-2 py-1 bg-primary/15 text-primary rounded-full">
                          {project.category}
                        </span>
                        <span className="text-xs px-2 py-1 bg-success/15 text-success rounded-full">
                          {project.status}
                        </span>
                      </div>

                      <h4 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                        {project.title}
                      </h4>

                      <p className="text-foreground-muted text-sm leading-relaxed mb-5 flex-1">
                        {project.description}
                      </p>

                      <div className="flex flex-wrap gap-2 mb-5">
                        {project.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-2.5 py-1 bg-border/30 text-foreground text-xs rounded-full border border-border/50"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      <ProjectActions project={project} />
                    </div>
                  </motion.article>
                ))}
              </div>
            </div>
          )}

        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;
