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
import { ServiceCard } from '../ui/ServiceCard';
import type { Service } from '../../types/components';

const services: Service[] = [
  {
    id: 'implantologie',
    icon: <Smile className="w-8 h-8" />,
    title: 'Implantologie',
    description:
      'Soluții moderne de implant dentar pentru înlocuirea dinților lipsă. Tehnologie avansată pentru rezultate durabile și naturale.',
    href: '#implantologie',
  },
  {
    id: 'ortodontie',
    icon: <Sparkles className="w-8 h-8" />,
    title: 'Ortodonție',
    description:
      'Corectarea alinierii dinților cu aparate dentare moderne. Zâmbetul perfect prin tratamente personalizate.',
    href: '#ortodontie',
  },
  {
    id: 'estetica',
    icon: <Sparkles className="w-8 h-8" />,
    title: 'Estetică Dentară',
    description:
      'Transformări complete ale zâmbetului cu fațete, albire și restaurări estetice de ultimă generație.',
    href: '#estetica',
  },
  {
    id: 'profilaxie',
    icon: <Shield className="w-8 h-8" />,
    title: 'Profilaxie',
    description:
      'Prevenție și igienă dentară profesională. Curățări periodice pentru menținerea sănătății orale.',
    href: '#profilaxie',
  },
  {
    id: 'chirurgie',
    icon: <Scissors className="w-8 h-8" />,
    title: 'Chirurgie Orală',
    description:
      'Intervenții chirurgicale dentare cu tehnici minim invazive. Experiență și precizie pentru confortul tău.',
    href: '#chirurgie',
  },
  {
    id: 'pedodontie',
    icon: <Baby className="w-8 h-8" />,
    title: 'Pedodonție',
    description:
      'Îngrijire dentară specializată pentru copii. Mediu prietenos și abordare blândă pentru cei mici.',
    href: '#pedodontie',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

export const Services = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <section
      id="services"
      ref={ref}
      className="py-16 sm:py-20 lg:py-24 bg-gradient-to-b from-white to-gray-50"
      aria-labelledby="services-heading"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="inline-block mb-4"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-[#0066cc]/10 text-[#0066cc] rounded-full text-sm font-semibold">
              <Stethoscope className="w-4 h-4" />
              Servicii Complete
            </span>
          </motion.div>

          <h2
            id="services-heading"
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4"
          >
            Serviciile Noastre
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Oferim o gamă completă de servicii stomatologice moderne, adaptate
            nevoilor tale specifice
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
        >
          {services.map((service) => (
            <ServiceCard
              key={service.id}
              icon={service.icon}
              title={service.title}
              description={service.description}
              href={service.href}
            />
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-12 sm:mt-16 text-center"
        >
          <p className="text-gray-600 mb-6">
            Nu găsești serviciul de care ai nevoie?
          </p>
          <a
            href="tel:+40726530591"
            className="inline-flex items-center gap-2 px-8 py-4 bg-[#0066cc] text-white rounded-xl font-semibold text-lg hover:bg-[#004999] transition-all hover:shadow-xl hover:-translate-y-1 focus:outline-none focus:ring-4 focus:ring-[#0080ff]/30"
          >
            <Stethoscope className="w-5 h-5" />
            Contactează-ne
          </a>
        </motion.div>
      </div>
    </section>
  );
};
