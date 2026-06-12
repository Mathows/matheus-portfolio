import { useState } from 'react';
import { Mail, MapPin, Clock, Github, Linkedin, Send } from 'lucide-react';
import { useLanguage } from '@/i18n/LanguageContext';
import { useToast } from '@/hooks/use-toast';
import Section from './Section';

const socials = [
  { icon: Github, href: 'https://github.com/Mathows', label: 'GitHub' },
  { icon: Linkedin, href: 'https://www.linkedin.com/in/matheus-alexandre-marques', label: 'LinkedIn' },
];

const ContactSection = () => {
  const { t } = useLanguage();
  const { toast } = useToast();
  const c = t.contact;

  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const text = `${c.messageIntro} ${formData.name}.\n\n${c.messageBody}: ${formData.message}`;
      const whatsappUrl = `https://api.whatsapp.com/send/?phone=5512978149796&text=${encodeURIComponent(text)}&type=phone_number&app_absent=0`;
      window.open(whatsappUrl, '_blank');
      toast({ title: c.toastTitle, description: c.toastDesc });
      setFormData({ name: '', email: '', message: '' });
    } finally {
      setIsSubmitting(false);
    }
  };

  const info = [
    { icon: Mail, label: c.emailLabel, value: 'matheusalexmc@gmail.com' },
    { icon: MapPin, label: c.locationLabel, value: c.locationValue },
    { icon: Clock, label: c.availabilityLabel, value: c.availabilityValue },
  ];

  const inputClass =
    'w-full border-b border-border/70 bg-transparent py-2.5 text-[15px] text-foreground placeholder:text-foreground-muted/50 transition-colors duration-300 focus:border-gold/60 focus:outline-none';

  return (
    <Section id="contato" title={c.title} subtitle={c.subtitle}>
      <div className="grid grid-cols-1 gap-14 lg:grid-cols-2">
        {/* Info */}
        <div>
          <h3 className="font-mono text-xs uppercase tracking-[0.25em] text-foreground-muted">
            {c.infoHeading}
          </h3>
          <ul className="mt-7 space-y-6">
            {info.map(({ icon: Icon, label, value }) => (
              <li key={label} className="flex items-start gap-4">
                <Icon className="mt-1 h-5 w-5 flex-shrink-0 text-gold-light" strokeWidth={1.5} />
                <div>
                  <p className="font-mono text-[11px] uppercase tracking-wider text-foreground-muted/70">
                    {label}
                  </p>
                  <p className="mt-0.5 text-[15px] text-foreground">{value}</p>
                </div>
              </li>
            ))}
          </ul>

          <h3 className="mt-12 font-mono text-xs uppercase tracking-[0.25em] text-foreground-muted">
            {c.socialHeading}
          </h3>
          <div className="mt-5 flex items-center gap-4">
            {socials.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="flex h-11 w-11 items-center justify-center border border-border/70 text-foreground-muted transition-colors duration-300 hover:border-gold/50 hover:text-gold-light"
              >
                <Icon className="h-5 w-5" strokeWidth={1.5} />
              </a>
            ))}
          </div>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-7">
          <div>
            <label htmlFor="name" className="font-mono text-[11px] uppercase tracking-wider text-foreground-muted">
              {c.nameLabel}
            </label>
            <input
              id="name"
              name="name"
              type="text"
              required
              value={formData.name}
              onChange={handleChange}
              placeholder={c.namePlaceholder}
              className={inputClass}
            />
          </div>

          <div>
            <label htmlFor="email" className="font-mono text-[11px] uppercase tracking-wider text-foreground-muted">
              {c.emailLabel}
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              value={formData.email}
              onChange={handleChange}
              placeholder={c.emailPlaceholder}
              className={inputClass}
            />
          </div>

          <div>
            <label htmlFor="message" className="font-mono text-[11px] uppercase tracking-wider text-foreground-muted">
              {c.messageLabel}
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows={4}
              value={formData.message}
              onChange={handleChange}
              placeholder={c.messagePlaceholder}
              className={`${inputClass} resize-none`}
            />
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="group inline-flex items-center gap-2 border border-gold/50 px-7 py-3 font-mono text-xs uppercase tracking-[0.2em] text-gold-light transition-all duration-300 hover:bg-gold/10 disabled:opacity-50"
          >
            <Send className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" strokeWidth={1.5} />
            {isSubmitting ? c.sending : c.submit}
          </button>
        </form>
      </div>
    </Section>
  );
};

export default ContactSection;
