import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {
  Award,
  Users,
  Zap,
  ShieldCheck,
  DollarSign,
  Microscope,
} from 'lucide-react';
import { Card } from '../ui/Card';
import type { Feature } from '../../types/components';

const features: Feature[] = [
  {
    id: 'echipament',
    icon: <Microscope className="w-8 h-8" />,
    title: 'Echipament Modern',
    description:
      'Tehnologie dentară de ultimă generație pentru diagnosticare precisă și tratamente eficiente.',
  },
  {
    id: 'experienta',
    icon: <Award className="w-8 h-8" />,
    title: 'Experiență 15+ Ani',
    description:
      'Peste 15 ani de experiență în stomatologie, cu mii de pacienți mulțumiți și zâmbete transformate.',
  },
  {
    id: 'echipa',
    icon: <Users className="w-8 h-8" />,
    title: 'Echipă Specializată',
    description:
      'Medici stomatologi cu specializări în diverse domenii, dedicați excelenței în îngrijirea dentară.',
  },
  {
    id: 'tehnologie',
    icon: <Zap className="w-8 h-8" />,
    title: 'Tehnologie Avansată',
    description:
      'Utilizăm CEREC, scanere 3D și alte tehnologii moderne pentru rezultate rapide și precise.',
  },
  {
    id: 'garantie',
    icon: <ShieldCheck className="w-8 h-8" />,
    title: 'Garanție Servicii',
    description:
      'Oferim garanție pentru toate serviciile noastre, asigurându-te de calitatea tratamentelor.',
  },
  {
    id: 'preturi',
    icon: <DollarSign className="w-8 h-8" />,
    title: 'Prețuri Transparente',
    description:
      'Tarife clare și competitive, fără costuri ascunse. Planuri de plată flexibile disponibile.',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: 'easeOut',
    },
  },
};

export const Features = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <section
      ref={ref}
      className="py-8 sm:py-12 md:py-16 lg:py-20 xl:py-24 bg-white"
      aria-labelledby="features-heading"
    >
      <div className="container mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
        {/* Section Header - Compact */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-6 sm:mb-8 md:mb-12 lg:mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="inline-block mb-2 sm:mb-3 md:mb-4"
          >
            <span className="inline-flex items-center gap-1 sm:gap-2 px-3 sm:px-4 py-1 sm:py-2 bg-[#0066cc]/10 text-[#0066cc] rounded-full text-xs sm:text-sm font-semibold">
              <ShieldCheck className="w-3 h-3 sm:w-4 sm:h-4" />
              Avantajele Noastre
            </span>
          </motion.div>

          <h2
            id="features-heading"
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-2 sm:mb-3 md:mb-4 px-2"
          >
            De Ce Să Ne Alegi?
          </h2>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-2">
            Combinăm experiența, tehnologia și dedicarea pentru a-ți oferi cea
            mai bună îngrijire dentară
          </p>
        </motion.div>

        {/* Features Grid - Alternating layout on mobile */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 md:gap-6 lg:gap-8"
        >
          {features.map((feature, index) => {
            // Alternate between single and double width
            const isWide = index % 4 === 0 || index % 4 === 3;
            return (
              <motion.div
                key={feature.id}
                variants={itemVariants}
                className={isWide ? 'col-span-2 sm:col-span-1' : 'col-span-1'}
              >
                <Card
                  variant="elevated"
                  padding="lg"
                  hover={true}
                  className="h-full bg-gradient-to-br from-white to-gray-50/50 border border-gray-100 p-3 sm:p-4 md:p-6"
                >
                  <div className="flex flex-col items-center text-center h-full">
                    {/* Icon - Smaller on mobile */}
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={inView ? { scale: 1 } : {}}
                      transition={{
                        duration: 0.5,
                        delay: 0.3 + index * 0.05,
                        type: 'spring',
                        stiffness: 200,
                      }}
                      className="mb-3 sm:mb-4 md:mb-6"
                    >
                      <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 lg:w-20 lg:h-20 flex items-center justify-center bg-gradient-to-br from-[#0066cc] to-[#0080ff] text-white rounded-xl sm:rounded-2xl shadow-lg">
                        <div className="scale-75 sm:scale-90 md:scale-100">
                          {feature.icon}
                        </div>
                      </div>
                    </motion.div>

                    {/* Title - Responsive */}
                    <h3 className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl font-bold text-gray-900 mb-2 sm:mb-3 line-clamp-2">
                      {feature.title}
                    </h3>

                    {/* Description - Compact */}
                    <p className="text-xs sm:text-sm md:text-base text-gray-600 leading-relaxed line-clamp-3">
                      {feature.description}
                    </p>
                  </div>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Bottom CTA - Compact */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-8 sm:mt-12 md:mt-16 text-center"
        >
          <div className="inline-flex flex-col sm:flex-row items-center gap-3 sm:gap-4 p-4 sm:p-6 md:p-8 bg-gradient-to-br from-[#0066cc]/5 to-[#0080ff]/5 rounded-xl sm:rounded-2xl border border-[#0066cc]/20">
            <div className="text-center sm:text-left">
              <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-gray-900 mb-1 sm:mb-2">
                Pregătit pentru un zâmbet sănătos?
              </h3>
              <p className="text-xs sm:text-sm md:text-base text-gray-600">
                Programează o consultație astăzi (50 lei)
              </p>
            </div>
            <a
              href="tel:+40213449317"
              className="inline-flex items-center gap-1.5 sm:gap-2 px-5 sm:px-6 md:px-8 py-2.5 sm:py-3 md:py-4 bg-[#0066cc] text-white rounded-lg sm:rounded-xl font-semibold text-sm sm:text-base md:text-lg hover:bg-[#004999] transition-all hover:shadow-xl hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-[#0080ff]/30 whitespace-nowrap"
            >
              Sună Acum
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};