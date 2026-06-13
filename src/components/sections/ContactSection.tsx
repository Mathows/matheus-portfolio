import { useState } from 'react';
import { Send } from 'lucide-react';
import { useLanguage } from '@/i18n/LanguageContext';
import { useToast } from '@/hooks/use-toast';
import Section from './Section';

// Formata como celular BR: (XX) XXXXX-XXXX — aceita só dígitos, máx. 11
function formatPhone(value: string): string {
  const d = value.replace(/\D/g, '').slice(0, 11);
  if (d.length <= 2) return d;
  if (d.length <= 6) return `(${d.slice(0, 2)}) ${d.slice(2)}`;
  if (d.length <= 10) return `(${d.slice(0, 2)}) ${d.slice(2, 6)}-${d.slice(6)}`;
  return `(${d.slice(0, 2)}) ${d.slice(2, 7)}-${d.slice(7)}`;
}

const ContactSection = () => {
  const { t } = useLanguage();
  const { toast } = useToast();
  const c = t.contact;

  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: name === 'phone' ? formatPhone(value) : value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      if (!res.ok) throw new Error('Request failed');
      toast({ title: c.toastTitle, description: c.toastDesc });
      setFormData({ name: '', email: '', phone: '', message: '' });
    } catch {
      toast({ title: c.toastErrorTitle, description: c.toastErrorDesc, variant: 'destructive' });
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputClass =
    'w-full border-b border-border/70 bg-transparent py-2.5 text-[15px] text-foreground placeholder:text-foreground-muted/50 transition-colors duration-300 focus:border-gold/60 focus:outline-none';

  return (
    <Section id="contato" title={c.title} subtitle={c.subtitle}>
      <form onSubmit={handleSubmit} className="max-w-xl space-y-7">
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
          <label htmlFor="phone" className="font-mono text-[11px] uppercase tracking-wider text-foreground-muted">
            {c.phoneLabel}
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            inputMode="numeric"
            autoComplete="tel"
            maxLength={15}
            required
            value={formData.phone}
            onChange={handleChange}
            placeholder={c.phonePlaceholder}
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
    </Section>
  );
};

export default ContactSection;
