import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Code2, Database, Globe, Server, Zap, Monitor } from 'lucide-react';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  const [currentTech, setCurrentTech] = useState(0);
  
  const technologies = [
    "C# & .NET",
    "SQL Server",
    "React & Blazor", 
    "DevExpress",
    "Full Stack Development"
  ];

  const techIcons = [
    { icon: Code2, name: "C#" },
    { icon: Database, name: "SQL" },
    { icon: Globe, name: "React" },
    { icon: Monitor, name: "Blazor" },
    { icon: Server, name: ".NET" },
    { icon: Zap, name: "DevExpress" },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTech((prev) => (prev + 1) % technologies.length);
    }, 3000);
    
    return () => clearInterval(interval);
  }, []);

  const scrollToProjects = () => {
    const element = document.getElementById('projetos');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-hero" />
      <div className="absolute inset-0">
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
              className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 bg-gradient-to-r from-foreground via-primary-light to-accent bg-clip-text text-transparent"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.4 }}
            >
              Olá, eu sou
              <br />
              <span className="text-primary-light">Matheus Alexandre</span>
            </motion.h1>

            <motion.div
              className="mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <h2 className="text-2xl md:text-3xl font-medium text-foreground-muted mb-4">
                Desenvolvedor Full Stack
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

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
              className="mb-12"
            >
              <Button
                onClick={scrollToProjects}
                size="lg"
                className="bg-gradient-primary hover:bg-gradient-accent text-primary-foreground font-semibold px-8 py-4 rounded-full shadow-glow hover:shadow-accent transition-all duration-300 transform hover:scale-105"
              >
                Ver Portfólio
                <ChevronDown className="ml-2 w-5 h-5 animate-bounce" />
              </Button>
            </motion.div>

            {/* Tech Icons */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1.4 }}
              className="flex flex-wrap justify-center gap-6 max-w-md mx-auto"
            >
              {techIcons.map((tech, index) => (
                <motion.div
                  key={tech.name}
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
                  className="p-3 bg-card/50 backdrop-blur-sm rounded-lg border border-border/50 hover:border-primary/50 transition-all duration-300 group cursor-pointer"
                >
                  <tech.icon className="w-6 h-6 text-foreground-muted group-hover:text-primary transition-colors duration-300" />
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 2 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="flex flex-col items-center text-foreground-muted"
          >
            <span className="text-sm mb-2">Role para baixo</span>
            <ChevronDown className="w-5 h-5" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;