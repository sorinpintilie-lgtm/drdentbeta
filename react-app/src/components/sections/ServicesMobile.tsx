import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {
  Smile,
  Sparkles,
  Scissors,
  Shield,
  Stethoscope,
  Baby,
} from 'lucide-react';
import { SwipeableCarousel } from '../ui/SwipeableCarousel';
import { ServiceCard } from '../ui/ServiceCard';
import type { Service } from '../../types/components';

const services: Service[] = [
  {
    id: 'implantologie',
    icon: <Smile className="w-6 h-6 sm:w-8 sm:h-8" />,
    title: 'Implantologie',
    description:
      'Soluții moderne de implant dentar pentru înlocuirea dinților lipsă.',
    href: '#implantologie',
  },
  {
    id: 'ortodontie',
    icon: <Sparkles className="w-6 h-6 sm:w-8 sm:h-8" />,
    title: 'Ortodonție',
    description:
      'Corectarea alinierii dinților cu aparate dentare moderne.',
    href: '#ortodontie',
  },
  {
    id: 'estetica',
    icon: <Sparkles className="w-6 h-6 sm:w-8 sm:h-8" />,
    title: 'Estetică Dentară',
    description:
      'Transformări complete ale zâmbetului cu fațete și albire.',
    href: '#estetica',
  },
  {
    id: 'profilaxie',
    icon: <Shield className="w-6 h-6 sm:w-8 sm:h-8" />,
    title: 'Profilaxie',
    description:
      'Prevenție și igienă dentară profesională.',
    href: '#profilaxie',
  },
  {
    id: 'chirurgie',
    icon: <Scissors className="w-6 h-6 sm:w-8 sm:h-8" />,
    title: 'Chirurgie Orală',
    description:
      'Intervenții chirurgicale dentare cu tehnici minim invazive.',
    href: '#chirurgie',
  },
  {
    id: 'pedodontie',
    icon: <Baby className="w-6 h-6 sm:w-8 sm:h-8" />,
    title: 'Pedodonție',
    description:
      'Îngrijire dentară specializată pentru copii.',
    href: '#pedodontie',
  },
];

export const ServicesMobile = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <section
      id="services"
      ref={ref}
      className="py-8 sm:py-12 md:py-16 lg:py-20 bg-gradient-to-b from-white to-gray-50"
      aria-labelledby="services-heading"
    >
      <div className="container mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-6 sm:mb-8 md:mb-12"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="inline-block mb-2 sm:mb-3 md:mb-4"
          >
            <span className="inline-flex items-center gap-1 sm:gap-2 px-3 sm:px-4 py-1 sm:py-2 bg-[#0066cc]/10 text-[#0066cc] rounded-full text-xs sm:text-sm font-semibold">
              <Stethoscope className="w-3 h-3 sm:w-4 sm:h-4" />
              Servicii Complete
            </span>
          </motion.div>

          <h2
            id="services-heading"
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-2 sm:mb-3 md:mb-4"
          >
            Serviciile Noastre
          </h2>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-2">
            Oferim o gamă completă de servicii stomatologice moderne
          </p>
        </motion.div>

        {/* Mobile: Swipeable Carousel with 2 cards visible */}
        <div className="block md:hidden mb-10 px-4">
          <SwipeableCarousel gap={12} visibleItems={2}>
            {services.map((service) => (
              <ServiceCard
                key={service.id}
                icon={service.icon}
                title={service.title}
                description={service.description}
                href={service.href}
                className="h-full border border-gray-100 shadow-sm"
              />
            ))}
          </SwipeableCarousel>
        </div>

        {/* Tablet/Desktop: Grid with alternating layout */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {services.map((service, index) => {
            // Alternate between single and double width on tablet
            const isWide = index % 5 === 0 || index % 5 === 3;
            return (
              <div
                key={service.id}
                className={isWide ? 'md:col-span-2 lg:col-span-1' : 'md:col-span-1'}
              >
                <ServiceCard
                  icon={service.icon}
                  title={service.title}
                  description={service.description}
                  href={service.href}
                />
              </div>
            );
          })}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-8 sm:mt-12 md:mt-16 text-center"
        >
          <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6">
            Nu găsești serviciul de care ai nevoie?
          </p>
          <a
            href="tel:+40726530591"
            className="inline-flex items-center gap-1.5 sm:gap-2 px-5 sm:px-6 md:px-8 py-2.5 sm:py-3 md:py-4 bg-[#0066cc] text-white rounded-lg sm:rounded-xl font-semibold text-sm sm:text-base md:text-lg hover:bg-[#004999] transition-all hover:shadow-xl hover:-translate-y-1 focus:outline-none focus:ring-4 focus:ring-[#0080ff]/30"
          >
            <Stethoscope className="w-4 h-4 sm:w-5 sm:h-5" />
            Contactează-ne
          </a>
        </motion.div>
      </div>
    </section>
  );
};
