import { useState, useEffect } from 'react';
import { X, Award, Briefcase, GraduationCap, Heart } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '../utils/cn';

/**
 * Team Page Component
 * Displays team members with modal popups for detailed information
 */

interface TeamMember {
  name: string;
  role: string;
  specialty?: string;
  description: string;
  credentials?: string[];
  image?: string;
  type: 'doctor' | 'student' | 'assistant';
}

function Team() {
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (selectedMember) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [selectedMember]);

  const teamMembers: TeamMember[] = [
    {
      name: 'Dr. Anca Ciomag',
      role: 'Specialist Stomatologie Generală',
      description:
        'Medic stomatolog dedicat oferirii celor mai bune servicii de îngrijire dentară, cu o abordare personalizată pentru fiecare pacient.',
      credentials: [
        'Medic Stomatolog Principal',
        'Experiență vastă în stomatologie',
      ],
      image:
        "/images/newimg/Pics site/Poze portret/Anca Ciomag - specialist stomatologie generală/IMG_0274.jpg",
      type: 'doctor',
    },
    {
      name: 'Dr. Daniela Căpățână',
      role: 'Stomatolog generalist',
      description:
        'Specializată în stomatologie generală, oferind tratamente de calitate superioară.',
      credentials: [
        'Medic Stomatolog',
        'Specialist în tratamente generale',
      ],
      image:
        "/images/newimg/Pics site/Poze portret/Daniela Căpățână - Specialist stomatologie generală/IMG_0294.jpg",
      type: 'doctor',
    },
    {
      name: 'Dr. Vlad Petrescu',
      role: 'Specialist Chirurgie OMF',
      description: 'Medic specialist cu 24 de ani de experiență în Chirurgie Oro-Maxilo-Facială și Implantologie Orală. Președinte al Asociației Române de Implantologie Orală și membru al European Association for Cranio-Maxillo-Facial Surgery.',
      credentials: [
        'Medic Stomatolog',
        'Specialist Chirurgie OMF',
      ],
      image: '/images/Dr.Vlad-Petrescu.jpg',
      type: 'doctor',
    },
    {
      name: 'Dr. Cristina Popa',
      role: 'Pedodonție',
      description:
        'Medic stomatolog dedicat îngrijirii sănătății orale a pacienților.',
      credentials: [
        'Medic Stomatolog',
        'Abordare empatică',
      ],
      image: '/images/Cristina-popa.jpg',
      type: 'doctor',
    },
    {
      name: 'Dr. Iulia Deleanu',
      role: 'Specialist ortodonție',
      description: 'Specializată în ortodonție și ortopedie dento-facială.',
      credentials: [
        'Medic Stomatolog',
        'Specialist Ortodonție',
      ],
      image: '/images/dr-iulia-deleanu.jpg',
      type: 'doctor',
    },
    {
      name: 'Dr. Daria Petrescu Seceleanu',
      role: 'Specialist chirurgie dento-alveolară',
      description:
        'Dedicată oferirii de servicii stomatologice de înaltă calitate.',
      credentials: [
        'Medic Stomatolog',
        'Profesionalism și grijă',
      ],
      image:
        "/images/newimg/Pics site/Poze portret/Daria Petrescu-Seceleanu - Chirurgie dento-alveolară/IMG_0392.jpg",
      type: 'doctor',
    },
    {
      name: 'Dr. Roxana Rândașu',
      role: 'Specialist parodontologie',
      description:
        'Medic stomatolog dedicat sănătății orale, cu o abordare calmă și empatică.',
      credentials: [
        'Medic Stomatolog',
        'Experiență în îngrijirea pacienților anxioși',
      ],
      image:
        "/images/newimg/Pics site/Poze portret/Roxana Ioana Rîndașu - Specialist parodontolog/IMG_0143.jpg",
      type: 'doctor',
    },
    {
      name: 'Dr. Oxana Predușelu',
      role: 'Stomatologie generală',
      description:
        'Medic stomatolog cu experiență în tratamente dentare moderne.',
      credentials: [
        'Medic Stomatolog',
        'Experiență în tratamente avansate',
      ],
      image: '/images/drdent-home-opt.jpg',
      type: 'doctor',
    },
    {
      name: 'Dr. Paul Staicu',
      role: 'Stomatologie generală',
      description:
        'Medic stomatolog dedicat îngrijirii sănătății orale a pacienților.',
      credentials: [
        'Medic Stomatolog',
        'Abordare empatică',
      ],
      image: '/images/paul.jpg',
      type: 'doctor',
    },
    {
      name: 'Ana-Maria Dragne',
      role: 'Asistentă stomatologie',
      description:
        'Asistentă medicală specializată în sprijinirea procedurilor dentare.',
      credentials: [
        'Asistent medical',
        'Suport în tratamente dentare',
      ],
      image: '/images/dr-ana-maria-dragne.jpg',
      type: 'assistant',
    },
    {
      name: 'Ioana Smocot',
      role: 'Registrator medical',
      description:
        'Responsabilă cu organizarea programărilor și administrarea cabinetului.',
      credentials: [
        'Registrator medical',
        'Organizare și coordonare',
      ],
      image: '/images/Ioana-Smocot.jpg',
      type: 'assistant',
    },
    {
      name: 'Dr. Marin Cristiana',
      role: 'Specializare endodonție',
      description:
        'Medic stomatolog dedicat îngrijirii sănătății orale a pacienților.',
      credentials: [
        'Medic Stomatolog',
        'Abordare empatică',
      ],
      image:
        "/images/newimg/Pics site/Poze portret/Marin Cristiana - specializare endodonție/IMG_0315.jpg",
      type: 'doctor',
    },
  ];

  const getRoleIcon = (type: string) => {
    switch (type) {
      case 'doctor':
        return <Briefcase className="w-5 h-5" />;
      case 'student':
        return <GraduationCap className="w-5 h-5" />;
      case 'assistant':
        return <Heart className="w-5 h-5" />;
      default:
        return <Briefcase className="w-5 h-5" />;
    }
  };

  const getRoleBadgeColor = (type: string) => {
    switch (type) {
      case 'doctor':
        return 'bg-primary-100 text-primary-700';
      case 'student':
        return 'bg-purple-100 text-purple-700';
      case 'assistant':
        return 'bg-pink-100 text-pink-700';
      default:
        return 'bg-gray-100 text-gray-700';
    }
  };

  return (
    <div className="min-h-screen pt-20 relative z-0">
      {/* Page Header - Compact for mobile */}
      <section className="bg-gradient-to-br from-primary-500 to-primary-700 text-white py-8 sm:py-12 md:py-16">
        <div className="container mx-auto px-3 sm:px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <Award className="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 mx-auto mb-3 sm:mb-4 text-white/90" />
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-heading font-bold mb-2 sm:mb-3 md:mb-4">
              Echipa Noastră
            </h1>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-white/90 max-w-2xl mx-auto px-2">
              Profesioniști dedicați sănătății dumneavoastră orale
            </p>
          </motion.div>
        </div>
      </section>

      {/* Despre Dr. Dent Section */}
      <section className="section bg-gradient-to-br from-blue-50 to-white py-8 sm:py-12 md:py-16">
        <div className="container mx-auto px-3 sm:px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-heading font-bold text-gray-900 mb-4 sm:mb-6 text-center">
              Despre Dr. Dent
            </h2>
            <div className="space-y-4 sm:space-y-5 text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed">
              <p>
                La Dr. Dent, fiecare zâmbet este o misiune — nu doar un rezultat. Am construit clinica noastră plecând de la dorinţa sinceră de a oferi pacienţilor o experienţă completă: ambienţă prietenoasă, tehnologie de ultimă generaţie şi o echipă de profesionişti care îşi asumă fiecare tratament cu responsabilitate și grijă.
              </p>
              <p>
                Fondată de dr. Anca Ciomag în anul 2008, clinica Dr. Dent a crescut pe baza unui principiu simplu: fără compromisuri în ceea ce priveşte calitatea actului medical. Creăm un spaţiu unde tehnologia avansată se împleteşte cu empatia, iar fiecare pacient se simte în siguranţă.
              </p>
              <p>
                Echipa noastră include specialişti în estetică dentară, protetică, chirurgie orală, ortodonţie, endodonţie, pedodonţie şi parodontologie. Fiecare medic, fiecare asistentă, fiecare colaborator aduce în cabinet nu doar competenţă, ci şi o atitudine atentă — ascultăm temerile, explicăm paşii, oferim cu claritate opţiunile.
              </p>
              
              <div className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 shadow-md border border-gray-100 my-6 sm:my-8">
                <h3 className="text-lg sm:text-xl md:text-2xl font-heading font-bold text-primary-600 mb-3 sm:mb-4">
                  În clinica Dr. Dent:
                </h3>
                <ul className="space-y-3 sm:space-y-4">
                  <li className="flex items-start gap-2 sm:gap-3">
                    <Heart className="w-5 h-5 sm:w-6 sm:h-6 text-primary-500 flex-shrink-0 mt-0.5" />
                    <span><strong>Tehnologia de ultimă generaţie</strong> ne permite să oferim tratamente rapide, eficiente și mai puţin invazive.</span>
                  </li>
                  <li className="flex items-start gap-2 sm:gap-3">
                    <Heart className="w-5 h-5 sm:w-6 sm:h-6 text-primary-500 flex-shrink-0 mt-0.5" />
                    <span><strong>Confortul pacientului</strong> este prioritar; ne dorim ca fiecare vizită să se transforme în experienţă pozitivă.</span>
                  </li>
                  <li className="flex items-start gap-2 sm:gap-3">
                    <Heart className="w-5 h-5 sm:w-6 sm:h-6 text-primary-500 flex-shrink-0 mt-0.5" />
                    <span><strong>Transparanţa</strong> este fundamentală: comunicăm clar paşii, costurile și opţiunile fiecărui plan de tratament.</span>
                  </li>
                </ul>
              </div>

              <p className="text-center text-base sm:text-lg md:text-xl font-semibold text-primary-600 italic">
                Alegând Dr. Dent, alegi o echipă dedicată sănătății tale orale. Zâmbetul tău e obiectivul nostru și motivul pentru care ne străduim zi de zi.
              </p>
              
              <p className="text-center text-lg sm:text-xl md:text-2xl font-heading font-bold text-gray-900 mt-6 sm:mt-8">
                Dr. Dent – O echipă dedicată, echipamente moderne, servicii dentare de calitate.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Team Grid - Alternating layout on mobile */}
      <section className="section bg-white py-8 sm:py-12 md:py-16">
        <div className="container mx-auto px-3 sm:px-4">
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 md:gap-6">
            {teamMembers.map((member, index) => {
              // Alternate between single and double column on mobile
              const isFeatured = index % 3 === 0;
              return (
                <motion.div
                  key={index}
                  className={cn(
                    "bg-white rounded-xl sm:rounded-2xl shadow-md hover:shadow-xl overflow-hidden cursor-pointer transition-all hover:-translate-y-1 border border-gray-100",
                    isFeatured ? "col-span-2 sm:col-span-1" : "col-span-1"
                  )}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  onClick={() => setSelectedMember(member)}
                >
                  {/* Member Image - 9:16 Portrait Format */}
                  <div className={cn(
                    "relative overflow-hidden bg-gray-100",
                    "aspect-[9/16]"
                  )}>
                  {member.image ? (
                    <>
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full object-cover object-top"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                    </>
                  ) : (
                    <div className="h-full bg-gradient-to-br from-primary-100 to-primary-200 flex items-center justify-center">
                      {member.type === 'doctor' && <Briefcase className="w-24 h-24 text-primary-600" />}
                      {member.type === 'student' && <GraduationCap className="w-24 h-24 text-purple-600" />}
                      {member.type === 'assistant' && <Heart className="w-24 h-24 text-pink-600" />}
                    </div>
                  )}
                </div>

                  {/* Member Info - Compact on mobile */}
                  <div className={cn(
                    "p-3 sm:p-4 md:p-6",
                    isFeatured ? "space-y-2" : "space-y-1"
                  )}>
                    <div className="flex items-center gap-1 sm:gap-2 mb-1 sm:mb-2">
                      <span className={cn(
                        "inline-flex items-center gap-0.5 sm:gap-1 px-2 sm:px-3 py-0.5 sm:py-1 rounded-full font-semibold",
                        "text-[0.65rem] sm:text-xs",
                        getRoleBadgeColor(member.type)
                      )}>
                        <span className="w-3 h-3 sm:w-4 sm:h-4">{getRoleIcon(member.type)}</span>
                        <span className="hidden sm:inline">
                          {member.type === 'doctor' && 'Medic'}
                          {member.type === 'student' && 'Student'}
                          {member.type === 'assistant' && 'Asistent'}
                        </span>
                      </span>
                    </div>
                    <h3 className={cn(
                      "font-heading font-bold text-gray-900 line-clamp-2",
                      isFeatured ? "text-base sm:text-lg md:text-xl mb-1 sm:mb-2" : "text-sm sm:text-base md:text-lg mb-1"
                    )}>
                      {member.name}
                    </h3>
                    <p className={cn(
                      "text-primary-600 font-semibold line-clamp-2",
                      isFeatured ? "text-xs sm:text-sm md:text-base mb-2" : "text-[0.7rem] sm:text-xs md:text-sm mb-1"
                    )}>
                      {member.role}
                    </p>
                    {member.specialty && isFeatured && (
                      <p className="text-[0.7rem] sm:text-xs md:text-sm text-gray-600 mb-2 line-clamp-2">
                        {member.specialty}
                      </p>
                    )}
                    <button className="text-primary-600 hover:text-primary-700 font-semibold text-[0.7rem] sm:text-xs md:text-sm flex items-center gap-1">
                      <span className="hidden sm:inline">Citește mai mult</span>
                      <span className="sm:hidden">Detalii</span> →
                    </button>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team Philosophy - Compact */}
      <section className="section bg-gradient-to-br from-primary-50 to-primary-100 py-8 sm:py-12 md:py-16">
        <div className="container mx-auto px-3 sm:px-4 text-center">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-heading font-bold text-gray-900 mb-3 sm:mb-4 md:mb-6">
            Filozofia Noastră
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-gray-600 mb-6 sm:mb-8 max-w-3xl mx-auto leading-relaxed px-2">
            La Dr.Dent, credem în îngrijirea personalizată și în construirea de relații pe termen lung cu pacienții noștri.
            Fiecare specialist din echipa noastră se implică cu grijă și profesionalism pentru a vă oferi o experiență dentară impecabilă.
          </p>
          <a
            href="tel:+40726530591"
            className="inline-flex items-center gap-1.5 sm:gap-2 px-4 sm:px-6 md:px-8 py-2.5 sm:py-3 md:py-4 bg-gradient-to-r from-primary-500 to-primary-600 text-white rounded-lg sm:rounded-xl font-semibold text-sm sm:text-base md:text-lg hover:shadow-xl transition-all hover:-translate-y-1"
          >
            <Award className="w-4 h-4 sm:w-5 sm:h-5" />
            <span className="hidden sm:inline">Programați o Consultație</span>
            <span className="sm:hidden">Programează</span>
          </a>
        </div>
      </section>

      {/* Clinic Environment Section */}
      <section className="section bg-white py-8 sm:py-12 md:py-16">
        <div className="container mx-auto px-3 sm:px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-8 sm:mb-12"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-4">
              Clinica noastră în acțiune
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Descoperiți atmosfera cabinetului nostru modern și modul în care echipa lucrează zi de zi.
            </p>
          </motion.div>

          {/* Environment Photos Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {[
              {
                src: '/images/newimg/Pics site/Consultatie Iasmina/IMG_0208.jpg',
                alt: 'Tânără doctoriță în cabinetul dentar',
                title: 'Cabinet Modern',
                description: 'Spații moderne și echipamente de ultimă generație'
              },
              {
                src: '/images/newimg/Pics site/Consultatie Iasmina/IMG_0225.jpg',
                alt: 'Doctor cu experiență și instrumente',
                title: 'Experiență și Expertiză',
                description: 'Medici cu ani de experiență și dedicare'
              },
              {
                src: '/images/newimg/Pics site/Extra/IMG_0493.jpg',
                alt: 'Doctor și pacient în centru medical',
                title: 'Relația Medic-Pacient',
                description: 'Comunicare deschisă și încredere reciprocă'
              }
            ].map((photo, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative overflow-hidden rounded-2xl shadow-lg group"
              >
                <img
                  src={photo.src}
                  alt={photo.alt}
                  className="w-full h-64 sm:h-80 object-cover object-top group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 text-white">
                  <h3 className="text-lg sm:text-xl font-bold mb-1">{photo.title}</h3>
                  <p className="text-sm sm:text-base text-white/90">{photo.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal */}
      <AnimatePresence>
        {selectedMember && (
          <motion.div
            className="fixed inset-0 z-[1000] flex items-center justify-center bg-black/50 backdrop-blur-sm pt-16 md:pt-20 pb-20 md:pb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedMember(null)}
          >
            <motion.div
              className="bg-white rounded-2xl shadow-2xl max-w-3xl w-full max-h-[75vh] sm:max-h-[85vh] m-4 flex flex-col"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header - Compact */}
              <div className="sticky top-0 bg-gradient-to-r from-primary-500 to-primary-600 text-white p-3 sm:p-4 md:p-6 flex items-start justify-between z-10 rounded-t-2xl">
                <div className="flex-1">
                  <div className="flex items-center gap-1 sm:gap-2 mb-1 sm:mb-2">
                    <span className="inline-flex items-center gap-0.5 sm:gap-1 px-2 sm:px-3 py-0.5 sm:py-1 rounded-full text-[0.65rem] sm:text-xs font-semibold bg-white/20 text-white">
                      {getRoleIcon(selectedMember.type)}
                      {selectedMember.type === 'doctor' && 'Medic'}
                      {selectedMember.type === 'student' && 'Student'}
                      {selectedMember.type === 'assistant' && 'Asistent'}
                    </span>
                  </div>
                  <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-heading font-bold mb-1 sm:mb-2">
                    {selectedMember.name} – {selectedMember.role}
                  </h2>
                  {selectedMember.specialty && (
                    <p className="text-white/80 text-[0.7rem] sm:text-xs md:text-sm mt-1 sm:mt-2">
                      {selectedMember.specialty}
                    </p>
                  )}
                </div>
                <button
                  onClick={() => setSelectedMember(null)}
                  className="p-1.5 sm:p-2 hover:bg-white/10 rounded-lg transition-colors flex-shrink-0"
                  aria-label="Închide"
                >
                  <X className="w-5 h-5 sm:w-6 sm:h-6" />
                </button>
              </div>

              {/* Scrollable Content */}
              <div className="flex-1 overflow-y-auto p-3 sm:p-4 md:p-6">
                {/* Modal Body - Responsive Layout */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4 md:gap-6">
                  {/* Left Column - Image - 9:16 Portrait */}
                  <div className="order-1">
                    <div className="aspect-[9/16] md:max-h-[300px] rounded-lg sm:rounded-xl overflow-hidden bg-gray-100">
                      {selectedMember.image ? (
                        <img
                          src={selectedMember.image}
                          alt={selectedMember.name}
                          className="w-full h-full object-cover object-top"
                        />
                      ) : (
                        <div className="h-full bg-gradient-to-br from-primary-100 to-primary-200 flex items-center justify-center">
                          {selectedMember.type === 'doctor' && <Briefcase className="w-20 h-20 text-primary-600" />}
                          {selectedMember.type === 'student' && <GraduationCap className="w-20 h-20 text-purple-600" />}
                          {selectedMember.type === 'assistant' && <Heart className="w-20 h-20 text-pink-600" />}
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Right Column - Details - Compact */}
                  <div className="order-2 space-y-3 sm:space-y-4 md:space-y-6">
                    {/* Description */}
                    <div>
                      <h3 className="text-base sm:text-lg font-heading font-bold text-gray-900 mb-2 sm:mb-3">
                        Despre
                      </h3>
                      <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                        {selectedMember.description}
                      </p>
                    </div>

                    {/* Credentials */}
                    {selectedMember.credentials && selectedMember.credentials.length > 0 && (
                      <div>
                        <h3 className="text-base sm:text-lg font-heading font-bold text-gray-900 mb-2 sm:mb-3">
                          Credențiale
                        </h3>
                        <ul className="space-y-2 sm:space-y-3">
                          {selectedMember.credentials.map((credential, index) => (
                            <li key={index} className="flex items-start gap-2 sm:gap-3">
                              <Award className="w-4 h-4 sm:w-5 sm:h-5 text-primary-500 flex-shrink-0 mt-0.5" />
                              <span className="text-sm sm:text-base text-gray-700">{credential}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </div>

                {/* Modal Footer - Compact */}
                <div className="border-t border-gray-200 pt-3 sm:pt-4 md:pt-6 mt-3 sm:mt-4 md:mt-6 bg-gray-50 -mx-3 sm:-mx-4 md:-mx-6 -mb-3 sm:-mb-4 md:-mb-6 px-3 sm:px-4 md:px-6 pb-3 sm:pb-4 md:pb-6">
                  <button
                    onClick={() => setSelectedMember(null)}
                    className="w-full px-4 sm:px-6 py-2.5 sm:py-3 bg-primary-500 hover:bg-primary-600 text-white rounded-lg sm:rounded-xl text-sm sm:text-base font-semibold transition-all"
                  >
                    Închide
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default Team;
