import { useState } from 'react';
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

  const teamMembers: TeamMember[] = [
    {
      name: 'Dr. Anca Ciomag',
      role: 'Fondatoare și Medic Dentist Specialist',
      specialty: 'Stomatologie generală & Competențe în implantologie și estetică dentară',
      description: 'Dr. Anca Ciomag a pus bazele clinicii Dr. Dent din anul 2008. A practicat rezidențiatul în cadrul Spitalului Militar Central. Este membru al Colegiului Medicilor Dentiști București din 2001.',
      credentials: [
        'Fondatoare Dr. Dent (2008)',
        'Rezidențiat - Spitalul Militar Central',
        'Membru Colegiul Medicilor Dentiști București (2001)',
        'Specialist Implantologie',
        'Specialist Estetică Dentară',
      ],
      image: '/images/Dr-Anca-Ciomag.jpg',
      type: 'doctor',
    },
    {
      name: 'Dr. Daniela Căpățână',
      role: 'Specialist stomatologie generală',
      description: 'Medic Dentist Generalist și membru al Colegiului Medicilor Dentiști București din 2014. Cu o abordare blândă și metodică fiecărui pacient i se va explica în detaliu etapele tratamentului, păstrând un raport natural și egal cu pacienții.',
      credentials: [
        'Membru Colegiul Medicilor Dentiști București (2014)',
        'Specialist Stomatologie Generală',
        'Abordare blândă și metodică',
      ],
      image: '/images/Dr.Daniela-Capatana.jpg',
      type: 'doctor',
    },
    {
      name: 'Dr. Miruna Popescu',
      role: 'Specialist stomatologie generală',
      description: 'Dr. Popescu Miruna Ana a absolvit în anul 2014 Facultatea de Medicină Dentară. Este o personă caldă, mereu optimistă care înțelege nevoile și fricile pacienților și îi ajută să se relaxeze înainte de orice manevră.',
      credentials: [
        'Absolventă Facultatea de Medicină Dentară (2014)',
        'Specialist Stomatologie Generală',
        'Abordare empatică și caldă',
      ],
      image: '/images/Dr.Miruna-Popescu.jpg',
      type: 'doctor',
    },
    {
      name: 'Dr. Mădălina Cazan',
      role: 'Medic stomatolog generalist',
      specialty: 'Specialist Pedodonție',
      description: 'Datorită pasiunii pentru pedodonție, Dr. Mădălina Cazan a devenit preferata copiilor. "Îmi doresc ca pacienții mei să aibă parte de o experiență lipsită de frică, oferindu-le un plan de tratament adecvat"',
      credentials: [
        'Specialist Pedodonție',
        'Medic Stomatolog Generalist',
        'Experiență în tratarea copiilor',
      ],
      image: '/images/Dr.Madalina-Cazan.jpg',
      type: 'doctor',
    },
    {
      name: 'Dr. Vlad Petrescu',
      role: 'Medic Specialist Chirurgie OMF',
      specialty: 'Chirurgie Oro-Maxilo-Facială',
      description: 'Dr Vlad Petrescu este medic specialist chirurgie Oro-Maxilo-Facială. Este vicepreședinte al Asociației Române de Implantologie și membru al European Association for Cranio-Maxillofacial Surgery. Pasiunea lui este spitalul și munca pe care o depune acolo.',
      credentials: [
        'Specialist Chirurgie Oro-Maxilo-Facială',
        'Vicepreședinte Asociația Română de Implantologie',
        'Membru European Association for Cranio-Maxillofacial Surgery',
        'Profesionalism desăvârșit',
      ],
      image: '/images/Dr.Vlad-Petrescu.jpg',
      type: 'doctor',
    },
    {
      name: 'Dr. Iulia Deleanu',
      role: 'Medic Specialist Ortodonție și Ortopedie dento-facială',
      specialty: 'Ortodonție și Ortopedie dento-facială',
      description: 'Absolventă a Facultății de Medicină Dentară Carol Davila și membru al Colegiului Medicilor Dentiști București din 2010. "Am ales să profesez în această specialitate pentru a îmbina estetica cu sănătatea dentară. Particip la numeroase congrese internaționale și cursuri adaptate ortodonției moderne din dorința de a mă menține printre profesioniști."',
      credentials: [
        'Absolventă UMF Carol Davila',
        'Membru Colegiul Medicilor Dentiști București (2010)',
        'Specialist Ortodonție și Ortopedie dento-facială',
        'Participare la congrese internaționale',
      ],
      image: '/images/dr-iulia-deleanu.jpg',
      type: 'doctor',
    },
    {
      name: 'Chirică Roxana',
      role: 'Studentă an 6',
      description: 'Studentă a ultimului an de facultate, așteaptă cu nerăbdare începerea carierei de medic dentist. Preocupată de ascensiunea în plan profesional, Roxana a urmat stagiul de practică în cadrul clinicii Dr. Dent pentru a aprofunda cunoștințele în domeniul medicinei.',
      credentials: [
        'Studentă an 6 Medicină Dentară',
        'Stagiu de practică Dr. Dent',
      ],
      image: '/images/Dr.chirica-roxana.jpg',
      type: 'student',
    },
    {
      name: 'Ana Maria Trască',
      role: 'Asistentă',
      description: 'Ana este absolventă a școlii Postliceale "Colegiul Romano-Catolic Sfântul Iosif". Răbdarea, profesionalismul, entuziasmul, cât și o bună organizare sunt calitățile ce o caracterizează, completând armonios echipa Dr. Dent.',
      credentials: [
        'Absolventă Colegiul Romano-Catolic Sfântul Iosif',
        'Asistentă medicală dentară',
        'Profesionalism și organizare',
      ],
      image: '/images/As.Ana-Maria_Trasca.jpg',
      type: 'assistant',
    },
    {
      name: 'Micu Denisa',
      role: 'Asistentă',
      description: 'Asistentă medicală dentară dedicată, contribuie la buna funcționare a clinicii și la confortul pacienților.',
      credentials: [
        'Asistentă medicală dentară',
      ],
      image: '/images/micu-denisa.jpg',
      type: 'assistant',
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
            Fiecare membru al echipei noastre este dedicat să vă ofere cea mai bună experiență dentară posibilă.
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
              Clinica Noastră în Acțiune
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              O privire în cabinetul nostru modern și echipa în timpul programului
            </p>
          </motion.div>

          {/* Environment Photos Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {[
              {
                src: '/images/young-female-dentist-in-dental-office-dentist-at-2025-03-18-14-08-17-utc-min.jpg',
                alt: 'Tânără doctoriță în cabinetul dentar',
                title: 'Cabinet Modern',
                description: 'Spații moderne și echipamente de ultimă generație'
              },
              {
                src: '/images/portrait-of-senior-male-dentist-with-dental-instru-2025-01-16-22-34-30-utc-min.jpg',
                alt: 'Doctor cu experiență și instrumente',
                title: 'Experiență și Expertiză',
                description: 'Medici cu ani de experiență și dedicare'
              },
              {
                src: '/images/dentist-and-patient-at-modern-medical-center-doct-2025-02-21-07-25-59-utc.jpg',
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
                  className="w-full h-64 sm:h-80 object-cover group-hover:scale-105 transition-transform duration-500"
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
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedMember(null)}
          >
            <motion.div
              className="bg-white rounded-2xl shadow-2xl max-w-5xl w-full max-h-[90vh] overflow-y-auto"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header - Compact */}
              <div className="sticky top-0 bg-gradient-to-r from-primary-500 to-primary-600 text-white p-3 sm:p-4 md:p-6 flex items-start justify-between z-10">
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
                    {selectedMember.name}
                  </h2>
                  <p className="text-white/90 font-semibold text-xs sm:text-sm md:text-base">
                    {selectedMember.role}
                  </p>
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

              {/* Modal Body - Responsive Layout */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4 md:gap-6 p-3 sm:p-4 md:p-6">
                {/* Left Column - Image - 9:16 Portrait */}
                <div className="order-1">
                  <div className="aspect-[9/16] md:max-h-[600px] rounded-lg sm:rounded-xl overflow-hidden bg-gray-100 md:sticky md:top-24">
                    {selectedMember.image ? (
                      <img
                        src={selectedMember.image}
                        alt={selectedMember.name}
                        className="w-full h-full object-cover object-top"
                      />
                    ) : (
                      <div className="h-full bg-gradient-to-br from-primary-100 to-primary-200 flex items-center justify-center">
                        {selectedMember.type === 'doctor' && <Briefcase className="w-32 h-32 text-primary-600" />}
                        {selectedMember.type === 'student' && <GraduationCap className="w-32 h-32 text-purple-600" />}
                        {selectedMember.type === 'assistant' && <Heart className="w-32 h-32 text-pink-600" />}
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
              <div className="border-t border-gray-200 p-3 sm:p-4 md:p-6 bg-gray-50">
                <button
                  onClick={() => setSelectedMember(null)}
                  className="w-full px-4 sm:px-6 py-2.5 sm:py-3 bg-primary-500 hover:bg-primary-600 text-white rounded-lg sm:rounded-xl text-sm sm:text-base font-semibold transition-all"
                >
                  Închide
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default Team;
