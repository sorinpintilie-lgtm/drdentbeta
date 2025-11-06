import { motion } from 'framer-motion';
import {
  Smile, Sparkles, Shield, Gem, Circle, Palette, Anchor, Crown, Bone,
  Phone, Star, Award, Zap, Heart, CheckCircle, ArrowRight, Clock, Users
} from 'lucide-react';
import { SwipeableCarousel } from '../components/ui/SwipeableCarousel';

/**
 * Services Page Component - Mobile-First Design
 * Optimized for 9:16 vertical phone format with infinite carousels
 */
function Services() {
  const serviceCategories = [
    {
      category: 'Prevenție & Igienă',
      color: 'from-blue-500 to-blue-600',
      icon: <Shield className="w-6 h-6" />,
      services: [
        { 
          icon: <Smile className="w-8 h-8" />, 
          title: 'Consultație Gratuită', 
          description: 'Examen oral complet cu evaluare detaliată și plan de tratament personalizat',
          price: 'Gratuit',
          duration: '30 min',
          popular: true
        },
        { 
          icon: <Sparkles className="w-8 h-8" />, 
          title: 'Detartraj Profesional', 
          description: 'Curățare profesională cu ultrasunete și periaj cu pastă specială',
          price: 'De la 200 RON',
          duration: '45 min'
        },
        { 
          icon: <Shield className="w-8 h-8" />, 
          title: 'Sigilare Preventivă', 
          description: 'Protecție pentru dinții permanenți împotriva cariilor',
          price: 'De la 150 RON',
          duration: '20 min'
        },
        { 
          icon: <Heart className="w-8 h-8" />, 
          title: 'Control Periodic', 
          description: 'Verificare semestrială pentru menținerea sănătății orale',
          price: 'De la 100 RON',
          duration: '20 min'
        },
      ]
    },
    {
      category: 'Estetică Dentară',
      color: 'from-purple-500 to-pink-500',
      icon: <Gem className="w-6 h-6" />,
      services: [
        { 
          icon: <Gem className="w-8 h-8" />, 
          title: 'Fațete Ceramice', 
          description: 'Transformare completă a zâmbetului cu fațete ultra-subțiri',
          price: 'De la 1500 RON',
          duration: '2 ședințe',
          popular: true
        },
        { 
          icon: <Circle className="w-8 h-8" />, 
          title: 'Albire Profesională', 
          description: 'Albire în cabinet cu tehnologie LED pentru rezultate rapide',
          price: 'De la 800 RON',
          duration: '60 min'
        },
        { 
          icon: <Palette className="w-8 h-8" />, 
          title: 'Restaurări Estetice', 
          description: 'Plombe albe invizibile cu materiale composite premium',
          price: 'De la 300 RON',
          duration: '45 min'
        },
        { 
          icon: <Star className="w-8 h-8" />, 
          title: 'Smile Makeover', 
          description: 'Transformare completă a zâmbetului cu plan personalizat',
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
          title: 'Implant Dentar', 
          description: 'Soluție permanentă pentru dinți lipsă cu implant titan',
          price: 'De la 2500 RON',
          duration: '60 min',
          popular: true
        },
        { 
          icon: <Crown className="w-8 h-8" />, 
          title: 'Coroană pe Implant', 
          description: 'Restaurare completă cu coroană ceramică pe implant',
          price: 'De la 1800 RON',
          duration: '2 ședințe'
        },
        { 
          icon: <Bone className="w-8 h-8" />, 
          title: 'Grefă Osoasă', 
          description: 'Reconstrucție osoasă pentru pregătirea implantului',
          price: 'De la 1200 RON',
          duration: '90 min'
        },
        { 
          icon: <Zap className="w-8 h-8" />, 
          title: 'All-on-4', 
          description: 'Protezare completă pe 4 implanturi într-o singură zi',
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
          title: 'Aparat Dentar Fix', 
          description: 'Corectare precisă a alinierii cu aparate metalice sau ceramice',
          price: 'De la 3500 RON',
          duration: '12-24 luni'
        },
        { 
          icon: <Circle className="w-8 h-8" />, 
          title: 'Invisalign', 
          description: 'Gutiere transparente invizibile pentru adulți',
          price: 'De la 8000 RON',
          duration: '6-18 luni',
          popular: true
        },
        { 
          icon: <Smile className="w-8 h-8" />, 
          title: 'Aparat Mobil', 
          description: 'Soluție pentru copii și corectări minore',
          price: 'De la 1500 RON',
          duration: '6-12 luni'
        },
      ]
    },
  ];

  const benefits = [
    { icon: <CheckCircle className="w-5 h-5" />, text: 'Garanție 5 ani' },
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
              Servicii Complete
            </div>
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-heading font-bold mb-2 sm:mb-3">
              Serviciile Noastre
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

      {/* Philosophy Section - We care. We prevent. We treat */}
      <section className="py-8 sm:py-12 bg-white">
        <div className="container mx-auto px-3 sm:px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-bold text-center text-gray-900 mb-8 sm:mb-12">
              We care. We prevent. We treat
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
              {/* Tratamente fără durere */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl sm:rounded-2xl p-6 sm:p-8"
              >
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-blue-500 rounded-xl flex items-center justify-center text-white mb-4 sm:mb-6">
                  <Heart className="w-6 h-6 sm:w-8 sm:h-8" />
                </div>
                <h3 className="text-lg sm:text-xl font-heading font-bold text-gray-900 mb-3 sm:mb-4">
                  TRATAMENTE FĂRĂ DURERE
                </h3>
                <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                  Având în vedere specializarea şi experienţa vastă a medicilor noştri în stomatologie, sentimentul că te afli pe mâini bune îţi va fi imediat confirmat.
                </p>
              </motion.div>

              {/* Aparatură ultramodernă */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl sm:rounded-2xl p-6 sm:p-8"
              >
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-purple-500 rounded-xl flex items-center justify-center text-white mb-4 sm:mb-6">
                  <Zap className="w-6 h-6 sm:w-8 sm:h-8" />
                </div>
                <h3 className="text-lg sm:text-xl font-heading font-bold text-gray-900 mb-3 sm:mb-4">
                  APARATURĂ ULTRAMODERNĂ
                </h3>
                <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                  Credem cu tărie că prevenirea şi tratarea afecţiunilor ar fi dificile în lipsa unei pregătiri medicale superioare, a atenţiei acordate fiecărui pacient în parte şi a unui echipament medical performant.
                </p>
              </motion.div>

              {/* Servicii */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl sm:rounded-2xl p-6 sm:p-8"
              >
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-green-500 rounded-xl flex items-center justify-center text-white mb-4 sm:mb-6">
                  <Shield className="w-6 h-6 sm:w-8 sm:h-8" />
                </div>
                <h3 className="text-lg sm:text-xl font-heading font-bold text-gray-900 mb-3 sm:mb-4">
                  SERVICII
                </h3>
                <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                  Suntem încântaţi să vă ajutăm în obţinerea şi menţinerea sănătăţii orale. Pentru aceasta, vă punem la dispoziţie o gamă largă de servicii prin intermediul medicilor noştri specialişti.
                </p>
              </motion.div>
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
                        
                        <button className="w-full flex items-center justify-center gap-1 px-3 py-2 bg-primary-50 text-primary-600 rounded-lg font-semibold text-xs hover:bg-primary-100 transition-colors">
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
                      
                      <button className="w-full flex items-center justify-center gap-2 px-4 py-2 bg-primary-50 text-primary-600 rounded-lg font-semibold text-sm hover:bg-primary-100 transition-colors">
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
            De Ce Să Ne Alegi?
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
              Consultație Gratuită
            </div>
            
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-bold mb-3 sm:mb-4">
              Programează-te Astăzi
            </h2>
            
            <p className="text-sm sm:text-base text-white/90 mb-6 sm:mb-8 max-w-md mx-auto leading-relaxed">
              Consultația inițială este gratuită. Vă așteptăm să discutăm despre nevoile dumneavoastră.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
              <a
                href="tel:+40213449317"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-4 bg-white text-primary-600 rounded-xl font-semibold text-sm sm:text-base hover:shadow-2xl transition-all hover:-translate-y-1"
              >
                <Phone className="w-4 h-4 sm:w-5 sm:h-5" />
                Sună Acum
              </a>
              
              <a
                href="#contact"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-4 bg-white/10 backdrop-blur-sm border-2 border-white text-white rounded-xl font-semibold text-sm sm:text-base hover:bg-white/20 transition-all"
              >
                Formular Contact
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

export default Services;