import { motion } from 'framer-motion';
import {
  Smile, Sparkles, Shield, Gem, Circle, Palette, Anchor, Crown, Bone,
  Phone, Star, Award, Zap, Heart, CheckCircle, ArrowRight, Clock, Users
} from 'lucide-react';
import { SwipeableCarousel } from '../components/ui/SwipeableCarousel';
import { ServiceModal } from '../components/ui/ServiceModal';
import { useState } from 'react';

/**
 * Services Page Component - Mobile-First Design
 * Optimized for 9:16 vertical phone format with infinite carousels
 */
function Services() {
  const [selectedService, setSelectedService] = useState<{
    title: string;
    description: string;
    icon: React.ReactNode;
  } | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openServiceModal = (service: any) => {
    setSelectedService(service);
    setIsModalOpen(true);
  };

  const closeServiceModal = () => {
    setIsModalOpen(false);
    setSelectedService(null);
  };

  const serviceCategories = [
    {
      category: 'Prevenție & igienă',
      color: 'from-blue-500 to-blue-600',
      icon: <Shield className="w-6 h-6" />,
      services: [
        {
          icon: <Smile className="w-8 h-8" />,
          title: 'Consultație dentară',
          description: 'Examen oral complet cu evaluare detaliată și plan de tratament personalizat',
          detailedDescription: 'O consultație dentară este primul pas către un zâmbet sănătos și frumos. În cadrul vizitei, medicul efectuează un examen complet al dinților, gingiilor și cavității bucale, identificând eventualele probleme ascunse. După evaluare, vei primi un plan de tratament personalizat, adaptat nevoilor tale, pentru ca fiecare etapă să fie clară, sigură și eficientă.',
          price: '100 lei',
          duration: '30 min',
          popular: true
        },
        {
          icon: <Sparkles className="w-8 h-8" />,
          title: 'Detartraj profesional',
          description: 'Curățare profesională cu ultrasunete și periaj cu pastă specială',
          detailedDescription: 'Detartrajul profesional îndepărtează placa bacteriană și tartrul depus pe dinți cu ajutorul ultrasunetelor, fără durere și fără a afecta smalțul. Procedura este urmată de un periaj cu pastă specială, care lasă dinții curați, netezi și strălucitori. Este recomandat să fie realizat periodic, pentru a menține sănătatea gingiilor și prospețimea zâmbetului.',
          price: 'De la 200 RON',
          duration: '45 min'
        },
        {
          icon: <Shield className="w-8 h-8" />,
          title: 'Sigilare preventivă',
          description: 'Protecție pentru dinții permanenți împotriva cariilor',
          detailedDescription: 'Sigilarea dentară este o procedură simplă și nedureroasă prin care medicul aplică un strat subțire de material protector pe suprafața dinților permanenți, în special pe măselele de minte și măselele mari de pe spate. Acest strat acționează ca un scut împotriva resturilor alimentare și a bacteriilor care pot provoca carii. Este o metodă eficientă și sigură de a menține dinții sănătoși pe termen lung.',
          price: 'De la 150 RON',
          duration: '20 min'
        },
        {
          icon: <Heart className="w-8 h-8" />,
          title: 'Control periodic',
          description: 'Verificare semestrială pentru menținerea sănătății orale',
          detailedDescription: 'Controlul periodic este esențial pentru menținerea sănătății orale pe termen lung. Printr-o verificare efectuată la fiecare șase luni, medicul poate depista din timp eventualele probleme dentare și le poate trata înainte să devină dureroase sau costisitoare. Este o vizită scurtă, dar importantă, care ajută la păstrarea unui zâmbet sănătos și curat în fiecare zi.',
          price: 'De la 100 RON',
          duration: '20 min'
        },
      ]
    },
    {
      category: 'Estetică dentară',
      color: 'from-purple-500 to-pink-500',
      icon: <Gem className="w-6 h-6" />,
      services: [
        {
          icon: <Gem className="w-8 h-8" />,
          title: 'Fațete ceramice',
          description: 'Transformare completă a zâmbetului cu fațete ultra-subțiri',
          detailedDescription: 'Fațetele ceramice sunt soluția ideală pentru o transformare completă și naturală a zâmbetului. Aceste foițe ultra-subțiri din ceramică se aplică pe suprafața dinților pentru a corecta forma, culoarea sau micile imperfecțiuni. Rezultatul este un zâmbet alb, armonios și elegant, obținut fără durere și cu o durabilitate de lungă durată.',
          price: 'De la 1500 RON',
          duration: '2 ședințe',
          popular: true
        },
        {
          icon: <Circle className="w-8 h-8" />,
          title: 'Albire profesională',
          description: 'Albire în cabinet cu tehnologie LED pentru rezultate rapide',
          detailedDescription: 'Albirea profesională în cabinet redă dinților strălucirea naturală în doar o singură ședință. Cu ajutorul tehnologiei LED, procedura este sigură, rapidă și eficientă, îndepărtând petele cauzate de cafea, ceai sau fumat. Rezultatul: dinți vizibil mai albi și un zâmbet luminos care inspiră încredere.',
          price: 'De la 800 RON',
          duration: '60 min'
        },
        {
          icon: <Palette className="w-8 h-8" />,
          title: 'Restaurări estetice',
          description: 'Plombe albe invizibile cu materiale composite premium',
          detailedDescription: 'Restaurările estetice redau forma și culoarea naturală a dinților afectați de carii sau mici fracturi. Folosim materiale composite premium, perfect adaptate nuanței dinților tăi, pentru un rezultat invizibil și durabil. Astfel, dinții își recapătă aspectul sănătos, iar zâmbetul tău rămâne natural și armonios.',
          price: 'De la 300 RON',
          duration: '45 min'
        },
        {
          icon: <Star className="w-8 h-8" />,
          title: 'Smile makeover',
          description: 'Transformare completă a zâmbetului cu plan personalizat',
          detailedDescription: 'Smile Makeover înseamnă o transformare completă a zâmbetului, realizată printr-un plan personalizat, adaptat trăsăturilor și dorințelor tale. Combinând tratamente estetice precum fațete, albire și restaurări, medicul creează un zâmbet perfect echilibrat, natural și plin de încredere. Rezultatul: un zâmbet care te reprezintă în cel mai frumos mod posibil.',
          price: 'Consultație',
          duration: 'Variabil'
        },
      ]
    },
    {
      category: 'Implantologie',
      color: 'from-green-500 to-emerald-600',
      icon: <Anchor className="w-6 h-6" />,
      services: [
        {
          icon: <Anchor className="w-8 h-8" />,
          title: 'Implant dentar',
          description: 'Soluție permanentă pentru dinți lipsă cu implant titan',
          detailedDescription: 'Implantul dentar este cea mai sigură și durabilă soluție pentru înlocuirea dinților lipsă. Realizat din titan biocompatibil, implantul se integrează perfect în os și oferă o bază solidă pentru coroana dentară. Rezultatul este un dinte care arată, se simte și funcționează la fel ca unul natural, redând confortul, estetica și încrederea în propriul zâmbet.',
          price: 'De la 2500 RON',
          duration: '60 min',
          popular: true
        },
        {
          icon: <Crown className="w-8 h-8" />,
          title: 'Coroană pe implant',
          description: 'Restaurare completă cu coroană ceramică pe implant',
          detailedDescription: 'Coroana pe implant reprezintă finalizarea tratamentului cu implant dentar, oferind o restaurare completă și estetică. Realizată din ceramică de înaltă calitate, coroana se integrează perfect cu restul dinților, redând aspectul natural și funcționalitatea zâmbetului. Este o soluție durabilă, confortabilă și elegantă, care îți permite să zâmbești din nou cu încredere.',
          price: 'De la 1800 RON',
          duration: '2 ședințe'
        },
        {
          icon: <Bone className="w-8 h-8" />,
          title: 'Grefă osoasă',
          description: 'Reconstrucție osoasă pentru pregătirea implantului',
          detailedDescription: 'Grefa osoasă este o procedură prin care se reface volumul osului maxilar pentru a crea o bază solidă în vederea inserării implantului dentar. Aceasta ajută osul să se regenereze natural, oferind stabilitate și rezistență pe termen lung. Este un pas esențial pentru succesul tratamentului cu implant și pentru un zâmbet sănătos și complet.',
          price: 'De la 1200 RON',
          duration: '90 min'
        },
        {
          icon: <Zap className="w-8 h-8" />,
          title: 'All-on-4',
          description: 'Protezare completă pe 4 implanturi într-o singură zi',
          detailedDescription: 'Sistemul All-on-4 oferă o soluție modernă și rapidă pentru înlocuirea completă a danturii, folosind doar 4 implanturi dentare. Într-o singură zi, pacientul primește o proteză fixă, stabilă și estetică, care redă confortul și funcționalitatea unui zâmbet natural. Este o opțiune ideală pentru cei care își doresc rezultate imediate și durabile, fără proceduri complexe și de lungă durată.',
          price: 'Consultație',
          duration: '1 zi'
        },
      ]
    },
    {
      category: 'Ortodonție',
      color: 'from-orange-500 to-red-500',
      icon: <Award className="w-6 h-6" />,
      services: [
        {
          icon: <Award className="w-8 h-8" />,
          title: 'Aparat dentar fix',
          description: 'Corectare precisă a alinierii cu aparate metalice sau ceramice',
          detailedDescription: 'Aparatul dentar fix corectează cu precizie poziția dinților și aliniază zâmbetul pas cu pas. Poate fi metalic sau ceramic, în funcție de preferințe, oferind rezultate sigure și durabile. Tratamentul este personalizat pentru fiecare pacient, contribuind la o mușcătură corectă, un zâmbet armonios și o sănătate orală îmbunătățită.',
          price: 'De la 3500 RON',
          duration: '12-24 luni'
        },
        {
          icon: <Circle className="w-8 h-8" />,
          title: 'Invisalign',
          description: 'Gutiere transparente invizibile pentru adulți',
          detailedDescription: 'Invisalign este o metodă modernă și confortabilă de îndreptare a dinților, folosind gutiere transparente, aproape invizibile. Realizate special pentru fiecare pacient, acestea se poartă ușor, fără disconfort și fără restricții alimentare. Tratamentul oferă rezultate precise, estetice și discrete — ideal pentru adulții care își doresc un zâmbet perfect, fără aparate metalice.',
          price: 'De la 8000 RON',
          duration: '6-18 luni',
          popular: true
        },
        {
          icon: <Smile className="w-8 h-8" />,
          title: 'Aparat mobil',
          description: 'Soluție pentru copii și corectări minore',
          detailedDescription: 'Aparatul dentar mobil este o soluție ideală pentru copii și pentru corectarea problemelor dentare minore. Ușor de purtat și de curățat, acesta ajută la ghidarea creșterii corecte a dinților și a maxilarului. Fiind detașabil, oferă confort și flexibilitate, contribuind la formarea unui zâmbet sănătos încă din copilărie.',
          price: 'De la 1500 RON',
          duration: '6-12 luni'
        },
      ]
    },
  ];

  const benefits = [
    { icon: <Users className="w-5 h-5" />, text: 'Echipă specializată' },
    { icon: <Clock className="w-5 h-5" />, text: 'Program flexibil' },
    { icon: <Award className="w-5 h-5" />, text: 'Tehnologie modernă' },
  ];

  return (
    <div className="min-h-screen pt-16 bg-gradient-to-b from-gray-50 to-white relative z-0">
      {/* Compact Hero - Mobile Optimized */}
      <section className="bg-gradient-to-br from-primary-500 to-primary-700 text-white py-8 sm:py-12 relative overflow-hidden">
        {/* Decorative circles */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full translate-y-1/2 -translate-x-1/2" />
        
        <div className="container mx-auto px-3 sm:px-4 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-white/20 backdrop-blur-sm rounded-full text-xs sm:text-sm font-semibold mb-3 sm:mb-4">
              <Sparkles className="w-4 h-4" />
              Servicii complete
            </div>
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-heading font-bold mb-2 sm:mb-3">
              Serviciile noastre
            </h1>
            <p className="text-sm sm:text-base text-white/90 max-w-md mx-auto mb-4 sm:mb-6 leading-relaxed">
              Îngrijire dentară completă pentru întreaga familie
            </p>
            
            {/* Benefits Pills */}
            <div className="flex flex-wrap justify-center gap-2 mb-4">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-white/10 backdrop-blur-sm rounded-full text-xs"
                >
                  {benefit.icon}
                  <span>{benefit.text}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Carousels - Mobile First */}
      <section className="py-6 sm:py-8 md:py-12 bg-gray-50">
        <div className="space-y-8 sm:space-y-12">
          {serviceCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="space-y-4">
              {/* Category Header */}
              <div className="container mx-auto px-3 sm:px-4">
                <div className="flex items-center gap-3 mb-4">
                  <div className={`p-2 rounded-lg bg-gradient-to-br ${category.color} text-white`}>
                    {category.icon}
                  </div>
                  <div>
                    <h2 className="text-lg sm:text-xl md:text-2xl font-heading font-bold text-gray-900">
                      {category.category}
                    </h2>
                    <p className="text-xs sm:text-sm text-gray-600">
                      {category.services.length} servicii disponibile
                    </p>
                  </div>
                </div>
              </div>

              {/* Swipeable Carousel for Mobile */}
              <div className="md:hidden px-3">
                <SwipeableCarousel cardWidth={280} gap={12}>
                  {category.services.map((service, serviceIndex) => (
                    <div key={serviceIndex}>
                      <motion.div
                        whileHover={{ scale: 1.02 }}
                        className="bg-white rounded-xl p-4 shadow-md border border-gray-100 h-full"
                      >
                        {service.popular && (
                          <div className="inline-flex items-center gap-1 px-2 py-0.5 bg-yellow-100 text-yellow-700 rounded-full text-xs font-semibold mb-3">
                            <Star className="w-3 h-3 fill-current" />
                            Popular
                          </div>
                        )}
                        
                        <div className={`inline-flex p-3 rounded-lg bg-gradient-to-br ${category.color} text-white mb-3`}>
                          {service.icon}
                        </div>
                        
                        <h3 className="text-base font-bold text-gray-900 mb-2 line-clamp-1">
                          {service.title}
                        </h3>
                        
                        <p className="text-xs text-gray-600 mb-3 line-clamp-2 leading-relaxed">
                          {service.description}
                        </p>
                        
                        <div className="flex items-center justify-between text-xs mb-2">
                          <span className="flex items-center gap-1 text-gray-500">
                            <Clock className="w-3 h-3" />
                            {service.duration}
                          </span>
                          <span className="font-bold text-primary-600">
                            {service.price}
                          </span>
                        </div>
                        
                        <button 
                          onClick={() => openServiceModal(service)}
                          className="w-full flex items-center justify-center gap-1 px-3 py-2 bg-primary-50 text-primary-600 rounded-lg font-semibold text-xs hover:bg-primary-100 transition-colors"
                        >
                          Detalii
                          <ArrowRight className="w-3 h-3" />
                        </button>
                      </motion.div>
                    </div>
                  ))}
                </SwipeableCarousel>
              </div>

              {/* Grid for Tablet/Desktop */}
              <div className="hidden md:block container mx-auto px-4">
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                  {category.services.map((service, serviceIndex) => (
                    <motion.div
                      key={serviceIndex}
                      whileHover={{ y: -4 }}
                      className="bg-white rounded-xl p-5 shadow-md border border-gray-100 hover:shadow-xl transition-all"
                    >
                      {service.popular && (
                        <div className="inline-flex items-center gap-1 px-2 py-1 bg-yellow-100 text-yellow-700 rounded-full text-xs font-semibold mb-3">
                          <Star className="w-3 h-3 fill-current" />
                          Popular
                        </div>
                      )}
                      
                      <div className={`inline-flex p-3 rounded-lg bg-gradient-to-br ${category.color} text-white mb-4`}>
                        {service.icon}
                      </div>
                      
                      <h3 className="text-lg font-bold text-gray-900 mb-2">
                        {service.title}
                      </h3>
                      
                      <p className="text-sm text-gray-600 mb-4 leading-relaxed">
                        {service.description}
                      </p>
                      
                      <div className="flex items-center justify-between text-sm mb-3">
                        <span className="flex items-center gap-1 text-gray-500">
                          <Clock className="w-4 h-4" />
                          {service.duration}
                        </span>
                        <span className="font-bold text-primary-600">
                          {service.price}
                        </span>
                      </div>
                      
                      <button 
                        onClick={() => openServiceModal(service)}
                        className="w-full flex items-center justify-center gap-2 px-4 py-2 bg-primary-50 text-primary-600 rounded-lg font-semibold text-sm hover:bg-primary-100 transition-colors"
                      >
                        Detalii
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose Us - Compact */}
      <section className="py-8 sm:py-12 bg-gradient-to-br from-primary-50 to-blue-50">
        <div className="container mx-auto px-3 sm:px-4">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-heading font-bold text-center text-gray-900 mb-6 sm:mb-8">
            De ce să ne alegi?
          </h2>
          
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 max-w-4xl mx-auto">
            {[
              { icon: <Award className="w-6 h-6 sm:w-8 sm:h-8" />, title: '15+ Ani', subtitle: 'Experiență' },
              { icon: <Users className="w-6 h-6 sm:w-8 sm:h-8" />, title: '1000+', subtitle: 'Pacienți' },
              { icon: <Star className="w-6 h-6 sm:w-8 sm:h-8" />, title: '5.0', subtitle: 'Rating' },
              { icon: <CheckCircle className="w-6 h-6 sm:w-8 sm:h-8" />, title: '100%', subtitle: 'Satisfacție' },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-xl p-4 sm:p-6 text-center shadow-md"
              >
                <div className="inline-flex p-2 sm:p-3 rounded-lg bg-primary-100 text-primary-600 mb-2 sm:mb-3">
                  {stat.icon}
                </div>
                <div className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-1">
                  {stat.title}
                </div>
                <div className="text-xs sm:text-sm text-gray-600">
                  {stat.subtitle}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section - Mobile Optimized */}
      <section className="py-8 sm:py-12 md:py-16 bg-gradient-to-br from-primary-500 to-primary-700 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDE2YzAtMi4yMSAxLjc5LTQgNC00czQgMS43OSA0IDQtMS43OSA0LTQgNC00LTEuNzktNC00em0wIDI0YzAtMi4yMSAxLjc5LTQgNC00czQgMS43OSA0IDQtMS43OSA0LTQgNC00LTEuNzktNC00ek0xMiAxNmMwLTIuMjEgMS43OS00IDQtNHM0IDEuNzkgNCA0LTEuNzkgNC00IDQtNC0xLjc5LTQtNHptMCAyNGMwLTIuMjEgMS43OS00IDQtNHM0IDEuNzkgNCA0LTEuNzkgNC00IDQtNC0xLjc5LTQtNHoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-30" />
        
        <div className="container mx-auto px-3 sm:px-4 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-white/20 backdrop-blur-sm rounded-full text-xs sm:text-sm font-semibold mb-3 sm:mb-4">
              <Phone className="w-4 h-4" />
              Programare rapidă
            </div>
            
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-bold mb-3 sm:mb-4">
              Programează-te astăzi
            </h2>
            
            <p className="text-sm sm:text-base text-white/90 mb-6 sm:mb-8 max-w-md mx-auto leading-relaxed">
              Programează o consultație (100 lei) și discutăm despre nevoile dumneavoastră.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
              <a
                href="tel:+40726530591"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-4 bg-white text-primary-600 rounded-xl font-semibold text-sm sm:text-base hover:shadow-2xl transition-all hover:-translate-y-1"
              >
                <Phone className="w-4 h-4 sm:w-5 sm:h-5" />
                Sună acum
              </a>
              
              <a
                href="#contact"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-4 bg-white/10 backdrop-blur-sm border-2 border-white text-white rounded-xl font-semibold text-sm sm:text-base hover:bg-white/20 transition-all"
              >
                Formular contact
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Service Modal */}
      <ServiceModal
        isOpen={isModalOpen}
        onClose={closeServiceModal}
        service={selectedService}
      />
    </div>
  );
}

export default Services;
