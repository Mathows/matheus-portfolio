import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { useLanguage } from '@/lib/i18n';
import matheusProfile from '/images/Gemini_Foto3.png';

const AboutSection = () => {
  const { dict } = useLanguage();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
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

  return (
    <section id="sobre" className="py-20 relative">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="max-w-6xl mx-auto"
        >
          <div className="grid grid-cols-1 mt-24 lg:grid-cols-2 gap-12 items-center">
            {/* Profile Image */}
            <motion.div
              variants={itemVariants}
              className="flex justify-center lg:justify-center order-first lg:order-last"
            >
              <div className="relative">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                  className="relative"
                >
                  <div className="absolute inset-0 bg-gradient-primary rounded-full blur-xl opacity-30 animate-glow" />
                  <div className="relative w-80 h-80 rounded-full overflow-hidden border-4 border-card bg-card shadow-card-hover">
                    <img
                      src={matheusProfile}
                      alt="Matheus Alexandre"
                      className="w-full h-full object-cover object-center transition-transform duration-300 hover:scale-110"
                      style={{ objectPosition: 'center 50%' }}
                    />
                  </div>
                </motion.div>
              </div>
            </motion.div>

            {/* Content */}
            <motion.div variants={itemVariants} className="space-y-6">
              <div className="space-y-4">
                <h3 className="text-2xl font-semibold text-foreground">
                  {dict.about.role}
                </h3>

                <div className="text-lg text-foreground leading-relaxed space-y-4">
                  <p>
                    {dict.about.bioStart}
                    <span className="text-primary font-medium">{dict.about.bioStack}</span>
                    {dict.about.bioEnd}
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
