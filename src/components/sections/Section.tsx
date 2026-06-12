import { type ReactNode } from 'react';
import { motion } from 'framer-motion';

interface SectionProps {
  id: string;
  title: string;
  subtitle?: string;
  children: ReactNode;
}

const Section = ({ id, title, subtitle, children }: SectionProps) => {
  return (
    <section id={id} className="relative z-10 scroll-mt-24 px-8 py-24 sm:px-16">
      <div className="mx-auto w-full max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <h2 className="text-4xl font-extralight tracking-tight text-foreground sm:text-5xl">
            {title}
          </h2>
          <div className="mt-4 h-px w-16 bg-metallic" />
          {subtitle && (
            <p className="mt-5 max-w-xl text-[15px] leading-relaxed text-foreground-muted">
              {subtitle}
            </p>
          )}
        </motion.div>

        <div className="mt-12">{children}</div>
      </div>
    </section>
  );
};

export default Section;
