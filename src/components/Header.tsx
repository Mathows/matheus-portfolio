import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '@/lib/i18n';

const Header = () => {
  const { language, setLanguage, dict } = useLanguage();
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);

  const navItems = [
    { id: 'home', label: dict.nav.home },
    { id: 'sobre', label: dict.nav.sobre },
    { id: 'experiencia', label: dict.nav.experiencia },
    { id: 'projetos', label: dict.nav.projetos },
    { id: 'cursos', label: dict.nav.cursos },
    { id: 'contato', label: dict.nav.contato },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      const sections = navItems.map(item => document.getElementById(item.id));
      const scrollPosition = window.scrollY + 100;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(navItems[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-background/90 backdrop-blur-md shadow-card border-b border-border'
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-end gap-6">
          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <motion.button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`relative text-sm font-medium transition-colors duration-300 ${
                  activeSection === item.id
                    ? 'text-blue-600'
                    : 'text-gray-400 hover:text-white'
                }`}
                whileHover={{ y: -2 }}
                whileTap={{ y: 0 }}
              >
                {item.label}
                {activeSection === item.id && (
                  <motion.div
                    layoutId="activeIndicator"
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-primary rounded-full"
                    initial={false}
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </motion.button>
            ))}
          </nav>

          {/* Language Toggle */}
          <div className="flex items-center bg-card/40 backdrop-blur-sm border border-border/50 rounded-full p-1 text-xs font-semibold">
            <button
              onClick={() => setLanguage('pt')}
              className={`px-3 py-1 rounded-full transition-colors duration-200 ${
                language === 'pt'
                  ? 'bg-gradient-primary text-primary-foreground shadow-glow'
                  : 'text-foreground-muted hover:text-foreground'
              }`}
              aria-label="Português"
            >
              PT
            </button>
            <button
              onClick={() => setLanguage('en')}
              className={`px-3 py-1 rounded-full transition-colors duration-200 ${
                language === 'en'
                  ? 'bg-gradient-primary text-primary-foreground shadow-glow'
                  : 'text-foreground-muted hover:text-foreground'
              }`}
              aria-label="English"
            >
              EN
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <motion.button
              whileTap={{ scale: 0.95 }}
              className="w-8 h-8 flex flex-col justify-center items-center space-y-1"
            >
              <span className="w-6 h-0.5 bg-foreground rounded-full" />
              <span className="w-6 h-0.5 bg-foreground rounded-full" />
              <span className="w-6 h-0.5 bg-foreground rounded-full" />
            </motion.button>
          </div>
        </div>
      </div>
    </motion.header>
  );
};

export default Header;
