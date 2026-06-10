import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Github, Linkedin, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { useLanguage } from '@/lib/i18n';

// Valid Brazilian area codes (DDDs) per Anatel
const VALID_DDDS = new Set([
  11, 12, 13, 14, 15, 16, 17, 18, 19,
  21, 22, 24, 27, 28,
  31, 32, 33, 34, 35, 37, 38,
  41, 42, 43, 44, 45, 46, 47, 48, 49,
  51, 53, 54, 55,
  61, 62, 63, 64, 65, 66, 67, 68, 69,
  71, 73, 74, 75, 77, 79,
  81, 82, 83, 84, 85, 86, 87, 88, 89,
  91, 92, 93, 94, 95, 96, 97, 98, 99,
]);

function formatPhone(value: string): string {
  const digits = value.replace(/\D/g, '').slice(0, 11);
  if (digits.length <= 2) return digits;
  if (digits.length <= 6) return `(${digits.slice(0, 2)}) ${digits.slice(2)}`;
  if (digits.length <= 10) return `(${digits.slice(0, 2)}) ${digits.slice(2, 6)}-${digits.slice(6)}`;
  return `(${digits.slice(0, 2)}) ${digits.slice(2, 7)}-${digits.slice(7)}`;
}

function isValidPhone(value: string): boolean {
  const digits = value.replace(/\D/g, '');
  if (digits.length !== 10 && digits.length !== 11) return false;
  const ddd = parseInt(digits.slice(0, 2), 10);
  if (!VALID_DDDS.has(ddd)) return false;
  // mobile (11 digits) must start with 9 after DDD; landline (10 digits) starts with 2-5
  if (digits.length === 11 && digits[2] !== '9') return false;
  return true;
}

const ContactSection = () => {
  const { dict } = useLanguage();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const { toast } = useToast();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
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
      url: 'https://github.com/Mathows',
      color: 'hover:text-foreground',
      bgColor: 'hover:bg-foreground/10'
    },
    {
      name: 'LinkedIn',
      icon: Linkedin,
      url: 'https://www.linkedin.com/in/matheus-alexandre-marques?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
      color: 'hover:text-blue-400',
      bgColor: 'hover:bg-blue-400/10'
    }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: name === 'phone' ? formatPhone(value) : value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!isValidPhone(formData.phone)) {
      toast({
        title: dict.contact.toastInvalidPhoneTitle,
        description: dict.contact.toastInvalidPhoneDescription,
        variant: 'destructive',
      });
      return;
    }

    setIsSubmitting(true);

    try {
      const text = `${dict.contact.whatsappGreeting} ${formData.name}.\n\n${dict.contact.whatsappPhone} ${formData.phone}\n${dict.contact.whatsappMessage} ${formData.message}`;
      const encodedText = encodeURIComponent(text);
      const whatsappUrl = `https://api.whatsapp.com/send/?phone=5512978149796&text=${encodedText}&type=phone_number&app_absent=0`;

      window.open(whatsappUrl, '_blank');

      toast({
        title: dict.contact.toastTitle,
        description: dict.contact.toastDescription,
      });

      setFormData({ name: '', email: '', phone: '', message: '' });
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
              {dict.contact.titlePrefix}
              {dict.contact.titleHighlight}
            </h2>
            <p className="text-xl text-foreground-muted max-w-2xl mx-auto mb-6">
              {dict.contact.subtitle}
            </p>
            <div className="w-20 h-1 bg-gradient-primary mx-auto rounded-full" />
          </motion.div>

          <div className="max-w-3xl mx-auto space-y-12">

            {/* Contact Info */}
            <motion.div variants={itemVariants}>
              <h3 className="text-2xl font-bold text-foreground mb-6">{dict.contact.infoTitle}</h3>
              <p className="text-foreground-muted leading-relaxed">
                {dict.contact.infoText}
              </p>
            </motion.div>

            {/* Contact Form */}
            <motion.div variants={itemVariants}>
              <div className="rounded-2xl p-8 border border-primary/40 hover:border-primary/70 transition-all duration-300">
                <h3 className="text-2xl font-bold text-foreground mb-6">{dict.contact.formTitle}</h3>

                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name Field */}
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                      {dict.contact.formName} *
                    </label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      className="bg-input/50 border-border/50 focus:border-primary/50 focus:ring-primary/20"
                      placeholder={dict.contact.formNamePlaceholder}
                    />
                  </div>

                  {/* Email Field */}
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                      {dict.contact.formEmail} *
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      className="bg-input/50 border-border/50 focus:border-primary/50 focus:ring-primary/20"
                      placeholder={dict.contact.formEmailPlaceholder}
                    />
                  </div>

                  {/* Phone Field */}
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                      {dict.contact.formPhone} *
                    </label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      required
                      inputMode="numeric"
                      maxLength={15}
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="bg-input/50 border-border/50 focus:border-primary/50 focus:ring-primary/20"
                      placeholder={dict.contact.formPhonePlaceholder}
                    />
                  </div>

                  {/* Message Field */}
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                      {dict.contact.formMessage} *
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={handleInputChange}
                      className="bg-input/50 border-border/50 focus:border-primary/50 focus:ring-primary/20 resize-none"
                      placeholder={dict.contact.formMessagePlaceholder}
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
                        {dict.contact.submitting}
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4 mr-2" />
                        {dict.contact.submitButton}
                      </>
                    )}
                  </Button>
                </form>
              </div>
            </motion.div>

            {/* Social Links */}
            <motion.div variants={itemVariants} className="text-center">
              <h4 className="font-semibold text-foreground mb-4">{dict.contact.socialTitle}</h4>
              <div className="flex justify-center space-x-4">
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
          {dict.contact.footer}
        </p>
      </motion.div>
    </section>
  );
};

export default ContactSection;
