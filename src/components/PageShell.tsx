import { type ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { motion } from 'framer-motion';
import { useLanguage } from '@/i18n/LanguageContext';
import CornerBrackets from '@/components/CornerBrackets';
import SiteHeader from '@/components/SiteHeader';

interface PageShellProps {
  title: string;
  subtitle?: string;
  children: ReactNode;
}

const PageShell = ({ title, subtitle, children }: PageShellProps) => {
  const { t } = useLanguage();

  return (
    <div className="relative flex min-h-screen flex-col bg-background-panel">
      <CornerBrackets />
      <SiteHeader />

      <main className="relative z-10 flex-1 px-8 py-16 sm:px-16 lg:py-20">
        <div className="mx-auto w-full max-w-4xl">
          <Link
            to="/"
            className="group inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] text-foreground-muted transition-colors duration-300 hover:text-gold-light"
          >
            <ArrowLeft
              className="h-3.5 w-3.5 transition-transform duration-300 group-hover:-translate-x-1"
              strokeWidth={1.5}
            />
            {t.nav.back}
          </Link>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="mt-8 text-5xl font-extralight tracking-tight text-foreground sm:text-6xl"
          >
            {title}
          </motion.h1>
          {subtitle && (
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="mt-4 max-w-xl text-[15px] leading-relaxed text-foreground-muted"
            >
              {subtitle}
            </motion.p>
          )}

          <div className="mt-14">{children}</div>
        </div>
      </main>

      <footer className="relative z-10 flex justify-end px-8 pb-10 sm:px-16 sm:pb-12">
        <p className="font-mono text-xs tracking-wider text-foreground-muted/70">
          © 2026 matheusalexandre.dev
        </p>
      </footer>
    </div>
  );
};

export default PageShell;
