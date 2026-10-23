import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { useLanguage } from '@/i18n/LanguageContext';
import Section from './Section';

const courseMeta = [
  { id: 1, date: '2024', topics: ['C#', 'Blazor', 'WebAssembly'], link: 'https://balta.io/certificates/0271319e-0f11-495a-b690-9b04b984e63e' },
  { id: 2, date: '2023', topics: ['.NET', 'C#', 'CLI'], link: 'https://balta.io/certificates/ff554d18-acd7-40d6-b31b-cae5a412c42c' },
  { id: 3, date: '2023', topics: ['C#', 'ASP.NET Core', 'REST APIs'], link: 'https://balta.io/certificates/4c266379-392a-475c-b688-2a37d0284dd0' },
  { id: 4, date: '2023', topics: ['C#', 'OOP', '.NET'], link: 'https://balta.io/certificates/b10eb808-cd59-483f-8ca3-e6798b920776' },
  { id: 5, date: '2023', topics: ['C#', 'Entity Framework', 'ORM'], link: 'https://balta.io/certificates/45bc392f-be62-490a-b1c2-51f9427d9864' },
  { id: 6, date: '2023', topics: ['C#', 'Dapper', 'SQL Server'], link: 'https://balta.io/certificates/cd906328-67bc-411e-9ef3-48e4c2d56c5f' },
] as const;

const CoursesSection = () => {
  const { t } = useLanguage();

  return (
    <Section id="cursos" title={t.courses.title} subtitle={t.courses.subtitle}>
      <ul className="space-y-px">
        {courseMeta.map((course, index) => {
          const text = t.courses.items[course.id];
          return (
            <motion.li
              key={course.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.5, delay: 0.06 * index, ease: [0.22, 1, 0.36, 1] }}
            >
              <a
                href={course.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col gap-3 border-t border-border/60 py-6 transition-colors duration-300 hover:border-gold/40 sm:flex-row sm:items-start sm:justify-between sm:gap-8"
              >
                <div className="max-w-xl">
                  <h3 className="flex items-center gap-1.5 text-[17px] font-light text-foreground transition-colors duration-300 group-hover:text-gold-light">
                    {text.title}
                    <ArrowUpRight
                      className="h-4 w-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                      strokeWidth={1.5}
                    />
                  </h3>
                  <p className="mt-2 text-[14px] leading-relaxed text-foreground-muted">
                    {text.desc}
                  </p>
                  <div className="mt-3 flex flex-wrap gap-x-3 gap-y-1">
                    {course.topics.map((topic) => (
                      <span
                        key={topic}
                        className="font-mono text-[11px] uppercase tracking-wider text-foreground-muted/70"
                      >
                        {topic}
                      </span>
                    ))}
                  </div>
                </div>
                <span className="flex-shrink-0 font-mono text-xs uppercase tracking-[0.2em] text-gold-light/80">
                  balta.io · {course.date}
                </span>
              </a>
            </motion.li>
          );
        })}
      </ul>
    </Section>
  );
};

export default CoursesSection;
