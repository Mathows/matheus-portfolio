import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Mail, Github, Linkedin, Send, MapPin, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';

const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const { toast } = useToast();
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

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

  const socialLinks = [
    {
      name: 'GitHub',
      icon: Github,
      url: 'https://github.com/matheusalexandre',
      color: 'hover:text-foreground',
      bgColor: 'hover:bg-foreground/10'
    },
    {
      name: 'LinkedIn',
      icon: Linkedin,
      url: 'https://linkedin.com/in/matheusalexandre',
      color: 'hover:text-blue-400',
      bgColor: 'hover:bg-blue-400/10'
    },
    {
      name: 'Email',
      icon: Mail,
      url: 'mailto:matheus@exemplo.com',
      color: 'hover:text-primary',
      bgColor: 'hover:bg-primary/10'
    }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      toast({
        title: "Mensagem enviada!",
        description: "Obrigado pelo contato. Retornarei em breve!",
      });

      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      toast({
        title: "Erro ao enviar mensagem",
        description: "Tente novamente mais tarde.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contato" className="py-20 relative">
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
              Vamos <span className="text-primary">Conversar?</span>
            </h2>
            <p className="text-xl text-foreground-muted max-w-2xl mx-auto mb-6">
              Estou sempre aberto a novas oportunidades e desafios interessantes
            </p>
            <div className="w-20 h-1 bg-gradient-primary mx-auto rounded-full" />
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            
            {/* Contact Info */}
            <motion.div variants={itemVariants} className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-6">Entre em Contato</h3>
                <p className="text-foreground-muted leading-relaxed mb-8">
                  Seja para discutir um projeto, uma oportunidade de trabalho ou apenas trocar ideias 
                  sobre tecnologia, adoraria conversar com você!
                </p>
              </div>

              {/* Contact Details */}
              <div className="space-y-6">
                <motion.div
                  whileHover={{ x: 5 }}
                  className="flex items-center space-x-4 p-4 bg-card/30 backdrop-blur-sm rounded-lg border border-border/30 hover:border-primary/30 transition-all duration-300"
                >
                  <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center shadow-glow">
                    <Mail className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">Email</h4>
                    <p className="text-foreground-muted">matheus@exemplo.com</p>
                  </div>
                </motion.div>

                <motion.div
                  whileHover={{ x: 5 }}
                  className="flex items-center space-x-4 p-4 bg-card/30 backdrop-blur-sm rounded-lg border border-border/30 hover:border-primary/30 transition-all duration-300"
                >
                  <div className="w-12 h-12 bg-gradient-accent rounded-lg flex items-center justify-center shadow-glow">
                    <MapPin className="w-6 h-6 text-accent-foreground" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">Localização</h4>
                    <p className="text-foreground-muted">Brasil - Remoto</p>
                  </div>
                </motion.div>

                <motion.div
                  whileHover={{ x: 5 }}
                  className="flex items-center space-x-4 p-4 bg-card/30 backdrop-blur-sm rounded-lg border border-border/30 hover:border-primary/30 transition-all duration-300"
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-green-600 to-teal-600 rounded-lg flex items-center justify-center shadow-glow">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">Disponibilidade</h4>
                    <p className="text-foreground-muted">Seg - Sex, 9h às 18h</p>
                  </div>
                </motion.div>
              </div>

              {/* Social Links */}
              <div className="pt-8">
                <h4 className="font-semibold text-foreground mb-4">Redes Sociais</h4>
                <div className="flex space-x-4">
                  {socialLinks.map((social) => (
                    <motion.a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      className={`w-12 h-12 flex items-center justify-center rounded-lg bg-card/50 border border-border/50 transition-all duration-300 ${social.bgColor} ${social.color}`}
                    >
                      <social.icon className="w-5 h-5" />
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div variants={itemVariants}>
              <div className="bg-gradient-card backdrop-blur-sm rounded-2xl p-8 border border-border/50 shadow-card">
                <h3 className="text-2xl font-bold text-foreground mb-6">Envie uma Mensagem</h3>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name Field */}
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                      Nome *
                    </label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      className="bg-input/50 border-border/50 focus:border-primary/50 focus:ring-primary/20"
                      placeholder="Seu nome completo"
                    />
                  </div>

                  {/* Email Field */}
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                      Email *
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      className="bg-input/50 border-border/50 focus:border-primary/50 focus:ring-primary/20"
                      placeholder="seu@email.com"
                    />
                  </div>

                  {/* Message Field */}
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                      Mensagem *
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={handleInputChange}
                      className="bg-input/50 border-border/50 focus:border-primary/50 focus:ring-primary/20 resize-none"
                      placeholder="Conte-me sobre seu projeto ou ideia..."
                    />
                  </div>

                  {/* Submit Button */}
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-primary hover:bg-gradient-accent text-primary-foreground font-semibold py-3 rounded-lg shadow-glow hover:shadow-accent transition-all duration-300 disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <>
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                          className="w-4 h-4 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full mr-2"
                        />
                        Enviando...
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4 mr-2" />
                        Enviar Mensagem
                      </>
                    )}
                  </Button>
                </form>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Footer */}
      <motion.div
        variants={itemVariants}
        className="text-center mt-20 pt-8 border-t border-border/30"
      >
        <p className="text-foreground-muted">
          © 2024 Matheus Alexandre. Desenvolvido com ❤️ e tecnologias modernas.
        </p>
      </motion.div>
    </section>
  );
};

export default ContactSection;