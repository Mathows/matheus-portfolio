import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Smartphone, type LucideIcon } from 'lucide-react';
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip';
import { useLanguage } from '@/lib/i18n';

type TechIcon = {
  name: string;
  label: string;
  iconClass?: string;
  Icon?: LucideIcon;
};

const HeroSection = () => {
  const { dict } = useLanguage();
  const [currentTech, setCurrentTech] = useState(0);

  const technologies = [
    "C# & .NET",
    "SQL Server",
    "Blazor & .NET MAUI",
    "Microsoft Azure",
    "Full Stack Development"
  ];

  const techIcons: TechIcon[] = [
    { iconClass: "devicon-csharp-plain", name: "C#", label: "C#" },
    { iconClass: "devicon-dotnetcore-plain", name: ".NET", label: ".NET / ASP.NET Core" },
    { Icon: Smartphone, name: ".NET MAUI", label: ".NET MAUI" },
    { iconClass: "devicon-microsoftsqlserver-plain", name: "SQL Server", label: "SQL Server" },
    { iconClass: "devicon-blazor-original", name: "Blazor", label: "Blazor" },
    { iconClass: "devicon-azure-plain", name: "Azure", label: "Microsoft Azure" },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTech((prev) => (prev + 1) % technologies.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-background">
      {/* Background Effects — subtle floating orbs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '-1s' }} />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          {/* Main Content */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.h1
              className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-foreground via-primary-light to-accent bg-clip-text text-transparent"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.4 }}
            >
              {dict.hero.greeting}
              <br />
              <span className="text-primary-light">Matheus Alexandre</span>
            </motion.h1>

            <motion.div
              className="mb-20"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <h2 className="text-2xl md:text-3xl font-medium text-foreground-muted mb-4">
                {dict.hero.role}
              </h2>
              
              {/* Typing Animation */}
              <div className="text-xl md:text-2xl font-medium text-primary min-h-[2rem] flex items-center justify-center">
                <motion.span
                  key={currentTech}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                  className="border-r-2 border-primary pr-2 animate-blink"
                >
                  {technologies[currentTech]}
                </motion.span>
              </div>
            </motion.div>

            {/* Tech Icons */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1.4 }}
              className="flex flex-wrap justify-center gap-6 max-w-md mx-auto mb-24"
            >
              {techIcons.map((tech, index) => (
                <Tooltip key={tech.name}>
                  <TooltipTrigger asChild>
                    <motion.div
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{
                        duration: 0.5,
                        delay: 1.6 + index * 0.1,
                        type: "spring",
                        stiffness: 200
                      }}
                      whileHover={{
                        scale: 1.2,
                        y: -5,
                        transition: { duration: 0.2 }
                      }}
                      className="p-3 bg-card/50 backdrop-blur-sm rounded-lg border border-border/50 hover:border-primary/50 transition-all duration-300 group cursor-pointer flex items-center justify-center"
                    >
                      {tech.Icon ? (
                        <tech.Icon className="w-6 h-6 text-foreground-muted group-hover:text-primary transition-colors duration-300" />
                      ) : (
                        <i className={`${tech.iconClass} text-2xl text-foreground-muted group-hover:text-primary transition-colors duration-300`} />
                      )}
                    </motion.div>
                  </TooltipTrigger>
                  <TooltipContent side="bottom" className="bg-card border-border text-foreground font-medium">
                    {tech.label}
                  </TooltipContent>
                </Tooltip>
              ))}
            </motion.div>

            {/* Scroll Indicator — in flow with guaranteed spacing */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 2 }}
              className="flex justify-center"
            >
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="flex flex-col items-center text-foreground-muted"
              >
                <span className="text-sm mb-2">{dict.hero.scrollDown}</span>
                <ChevronDown className="w-5 h-5" />
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;