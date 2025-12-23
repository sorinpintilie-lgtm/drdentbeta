import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useState } from 'react';
import {
  Smile,
  Sparkles,
  Shield,
  Stethoscope,
  Anchor,
  Award,
} from 'lucide-react';
import { ServiceCard } from '../ui/ServiceCard';
import { ServiceModal } from '../ui/ServiceModal';
import type { Service } from '../../types/components';

const services: Service[] = [
  {
    id: 'consultatie',
    icon: <Smile className="w-8 h-8" />,
    title: 'Consultație Dentară',
    description:
      'Examen oral complet cu evaluare detaliată și plan de tratament personalizat',
    href: '#consultatie',
    detailedDescription: 'O consultație dentară este primul pas către un zâmbet sănătos și frumos. În cadrul vizitei, medicul efectuează un examen complet al dinților, gingiilor și cavității bucale, identificând eventualele probleme ascunse. După evaluare, vei primi un plan de tratament personalizat, adaptat nevoilor tale, pentru ca fiecare etapă să fie clară, sigură și eficientă.',
    price: '100 lei',
    duration: '30 min',
    popular: true
  },
  {
    id: 'detartraj',
    icon: <Shield className="w-8 h-8" />,
    title: 'Detartraj Profesional',
    description:
      'Curățare profesională cu ultrasunete și periaj cu pastă specială',
    href: '#detartraj',
    detailedDescription: 'Detartrajul profesional îndepărtează placa bacteriană și tartrul depus pe dinți cu ajutorul ultrasunetelor, fără durere și fără a afecta smalțul. Procedura este urmată de un periaj cu pastă specială, care lasă dinții curați, netezi și strălucitori. Este recomandat să fie realizat periodic, pentru a menține sănătatea gingiilor și prospețimea zâmbetului.',
    price: 'De la 200 RON',
    duration: '45 min'
  },
  {
    id: 'facete',
    icon: <Sparkles className="w-8 h-8" />,
    title: 'Fațete Ceramice',
    description:
      'Transformare completă a zâmbetului cu fațete ultra-subțiri',
    href: '#facete',
    detailedDescription: 'Fațetele ceramice sunt soluția ideală pentru o transformare completă și naturală a zâmbetului. Aceste foițe ultra-subțiri din ceramică se aplică pe suprafața dinților pentru a corecta forma, culoarea sau micile imperfecțiuni. Rezultatul este un zâmbet alb, armonios și elegant, obținut fără durere și cu o durabilitate de lungă durată.',
    price: 'De la 1500 RON',
    duration: '2 ședințe',
    popular: true
  },
  {
    id: 'albire',
    icon: <Sparkles className="w-8 h-8" />,
    title: 'Albire Profesională',
    description:
      'Albire în cabinet cu tehnologie LED pentru rezultate rapide',
    href: '#albire',
    detailedDescription: 'Albirea profesională în cabinet redă dinților strălucirea naturală în doar o singură ședință. Cu ajutorul tehnologiei LED, procedura este sigură, rapidă și eficientă, îndepărtând petele cauzate de cafea, ceai sau fumat. Rezultatul: dinți vizibil mai albi și un zâmbet luminos care inspiră încredere.',
    price: 'De la 800 RON',
    duration: '60 min'
  },
  {
    id: 'implant',
    icon: <Anchor className="w-8 h-8" />,
    title: 'Implant Dentar',
    description:
      'Soluție permanentă pentru dinți lipsă cu implant titan',
    href: '#implant',
    detailedDescription: 'Implantul dentar este cea mai sigură și durabilă soluție pentru înlocuirea dinților lipsă. Realizat din titan biocompatibil, implantul se integrează perfect în os și oferă o bază solidă pentru coroana dentară. Rezultatul este un dinte care arată, se simte și funcționează la fel ca unul natural, redând confortul, estetica și încrederea în propriul zâmbet.',
    price: 'De la 2500 RON',
    duration: '60 min',
    popular: true
  },
  {
    id: 'invisalign',
    icon: <Award className="w-8 h-8" />,
    title: 'Invisalign',
    description:
      'Gutiere transparente invizibile pentru adulți',
    href: '#invisalign',
    detailedDescription: 'Invisalign este o metodă modernă și confortabilă de îndreptare a dinților, folosind gutiere transparente, aproape invizibile. Realizate special pentru fiecare pacient, acestea se poartă ușor, fără disconfort și fără restricții alimentare. Tratamentul oferă rezultate precise, estetice și discrete — ideal pentru adulții care își doresc un zâmbet perfect, fără aparate metalice.',
    price: 'De la 8000 RON',
    duration: '6-18 luni',
    popular: true
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

  const [selectedService, setSelectedService] = useState<any>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openServiceModal = (service: any) => {
    setSelectedService(service);
    setIsModalOpen(true);
  };

  const closeServiceModal = () => {
    setIsModalOpen(false);
    setSelectedService(null);
  };

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
              Servicii complete
            </span>
          </motion.div>

          <h2
            id="services-heading"
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4"
          >
            Serviciile noastre
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
            <div key={service.id} onClick={() => openServiceModal(service)}>
              <ServiceCard
                icon={service.icon}
                title={service.title}
                description={service.description}
                className="cursor-pointer"
              />
            </div>
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
            onClick={() => {
              const contactElement = document.getElementById('contact');
              if (contactElement) {
                contactElement.scrollIntoView({ behavior: 'smooth' });
              }
            }}
            className="inline-flex items-center gap-2 px-8 py-4 bg-[#0066cc] text-white rounded-xl font-semibold text-lg hover:bg-[#004999] transition-all hover:shadow-xl hover:-translate-y-1 focus:outline-none focus:ring-4 focus:ring-[#0080ff]/30"
          >
            <Stethoscope className="w-5 h-5" />
            Contactează-ne
          </a>
        </motion.div>

        {/* Clinic Gallery Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-12 sm:mt-16"
        >
          <div className="text-center mb-8 sm:mb-12">
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
              Cu ce ne ocupăm zilnic
            </h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              O privire în clinica noastră modernă și echipa dedicată
            </p>
          </div>

          {/* Image Gallery Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                src: '/images/newimages/IMG_0493.jpg',
                alt: 'Consultație dentară profesională',
                title: 'Consultații Complete',
                description: 'Examinări detaliate cu tehnologie modernă',
                href: '/servicii',
              },
              {
                src: '/images/newimg/Pics site/Extra/IMG_0498.jpg',
                alt: 'Procedură dentară în curs',
                title: 'Tratamente Profesionale',
                description: 'Proceduri realizate cu precizie și atenție',
                href: '/servicii',
              },
              {
                src: '/images/newimg/Pics site/Consultatie Iasmina/IMG_0232.jpg',
                alt: 'Examinare dentară detaliată',
                title: 'Diagnosticare Precisă',
                description: 'Identificarea problemelor din timp',
                href: '/servicii',
              },
              {
                src: '/images/newimg/Pics site/Poze grup/IMG_0173.jpg',
                alt: 'Echipa medicală cu pacientul',
                title: 'Echipa Noastră',
                description: 'Profesioniști dedicați îngrijirii tale',
                href: '/team',
              },
              {
                src: '/images/IMG_0611.jpg',
                alt: 'Pacient la consultație',
                title: 'Confort Pacienți',
                description: 'Mediu prietenos și relaxant',
                href: '/team',
              },
              {
                src: '/images/newimg/Pics site/Extra/IMG_0503.jpg',
                alt: 'Doctoriță în cabinetul dentar',
                title: 'Medici Specializați',
                description: 'Experiență și competență în domeniu',
                href: '/team',
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.9 + index * 0.1 }}
                className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer"
                onClick={() => window.location.href = item.href}
              >
                <div className="aspect-w-4 aspect-h-3">
                  <img
                    src={item.src}
                    alt={item.alt}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 text-white">
                  <h4 className="text-lg sm:text-xl font-bold mb-1">{item.title}</h4>
                  <p className="text-sm sm:text-base text-white/90">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Service Modal */}
        <ServiceModal
          isOpen={isModalOpen}
          onClose={closeServiceModal}
          service={selectedService}
        />
      </div>
    </section>
  );
};
