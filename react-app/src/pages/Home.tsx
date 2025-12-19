import { useEffect } from 'react';
import { Hero } from '../components/sections/Hero';
import { Services } from '../components/sections/Services';
import { Features } from '../components/sections/Features';
import { Testimonials } from '../components/sections/Testimonials';
import { Stats } from '../components/sections/Stats';
import { Contact } from '../components/sections/Contact';
import { CTA } from '../components/sections/CTA';
import { handleHashNavigation } from '../utils/scroll';

/**
 * Home Page Component
 * Landing page with hero section and overview of services
 * Includes section IDs for smooth scroll navigation
 */
function Home() {
  // Handle hash navigation on mount and hash changes
  useEffect(() => {
    handleHashNavigation();
    
    const handleHashChange = () => {
      handleHashNavigation();
    };
    
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleBookConsultation = () => {
    window.location.href = 'tel:+40724055872';
  };

  const handleViewServices = () => {
    window.location.href = '/servicii';
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section id="hero">
        <Hero
          headline="Zâmbetul tău perfect începe aici"
          subheadline="Îngrijire dentară profesională cu echipamente moderne și o echipă dedicată sănătății tale orale"
          primaryCTA={{
            text: "Programează consultație",
            href: "tel:+40724055872",
            onClick: handleBookConsultation,
          }}
          secondaryCTA={{
            text: "Servicii",
            href: "/servicii",
            onClick: handleViewServices,
          }}
          trustIndicators={[
            {
              value: "15+",
              label: "Ani experiență",
              icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              ),
            },
            {
              value: "1000+",
              label: "Pacienți fericiți",
              icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              ),
            },
            {
              value: "5.0",
              label: "Rating Google",
              icon: (
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
              ),
            },
          ]}
          videoSrc="/images/hero-video.mov"
          fallbackImage="/images/young-female-dentist-in-dental-office-dentist-at-2025-03-15-16-02-16-utc-min.jpg"
          showScrollIndicator={true}
        />
      </section>

      {/* Urgentele Dentare Section */}
      <section id="urgent-care" className="section bg-red-50 py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-red-100 text-red-700 rounded-full text-sm font-semibold mb-4">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.732-.833-2.464 0L4.35 16.5c-.77.833.192 2.5 1.732 2.5z" />
              </svg>
              Urgențe Dentare
            </div>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-4">
              Ajutor Rapid pentru Urgențe Dentare
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
              Durere de dinți? Urgență dentară? Suntem aici pentru tine! Contactează-ne imediat pentru asistență de urgență.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="bg-white rounded-xl p-6 border border-red-100 hover:shadow-lg transition-all">
              <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Program Extins</h3>
              <p className="text-gray-600">Disponibil pentru urgențe în afara programului normal de lucru.</p>
            </div>

            <div className="bg-white rounded-xl p-6 border border-red-100 hover:shadow-lg transition-all">
              <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Contact Imediat</h3>
              <p className="text-gray-600">Sună acum pentru asistență de urgență: <a href="tel:+40726530591" className="text-red-600 font-semibold">0726 530 591</a></p>
            </div>

            <div className="bg-white rounded-xl p-6 border border-red-100 hover:shadow-lg transition-all">
              <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Ameliorare Rapidă</h3>
              <p className="text-gray-600">Tratament imediat pentru durere și disconfort.</p>
            </div>
          </div>

         <div className="text-center">
           <div className="bg-red-600 text-white rounded-xl p-6 max-w-2xl mx-auto">
             <h3 className="text-xl font-bold mb-2">Urgență Dentară? Sună Acum!</h3>
             <p className="mb-4">Echipa noastră este pregătită să te ajute în orice moment de urgență.</p>
             <div className="flex flex-col sm:flex-row gap-4 justify-center">
               <a
                 href="tel:+40726530591"
                 className="inline-flex items-center gap-2 px-6 py-3 bg-white text-red-600 rounded-lg font-semibold hover:bg-red-50 transition-colors"
               >
                 <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                 </svg>
                 Sună: 0726 530 591
               </a>
               <a
                 href="tel:+40724055872"
                 className="inline-flex items-center gap-2 px-6 py-3 bg-red-700 text-white rounded-lg font-semibold hover:bg-red-800 transition-colors"
               >
                 <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                 </svg>
                 Programează Urgență
               </a>
             </div>
           </div>
         </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services">
        <Services />
      </section>

      {/* CTA Section 1 - After Services */}
      <CTA
        title="Descoperă diferența Dr.Dent"
        description="Programează o consultație (100 lei) și află cum tehnologia noastră avansată și echipa dedicată pot transforma zâmbetul tău."
        variant="gradient"
      />

      {/* Features Section */}
      <section id="features">
        <Features />
      </section>

      {/* Stats Section */}
      <section id="stats">
        <Stats />
      </section>

      {/* Testimonials Section */}
      <section id="testimonials">
        <Testimonials />
      </section>

      {/* Philosophy Section */}
      <section id="philosophy" className="section bg-white py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-4">
              Filosofia noastră
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              La DrDent, credem în:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Prioritizarea prevenirii și sănătății dentare pe termen lung.'
              },
              {
                title: 'Utilizarea celor mai bune tehnologii pentru intervenții sigure.'
              },
              {
                title: 'Crearea unei atmosfere relaxante și reconfortante pentru fiecare pacient.'
              }
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 border border-gray-100 hover:shadow-lg transition-all hover:-translate-y-2"
              >
                <h3 className="text-xl font-heading font-bold text-gray-900 mb-3">
                  {item.title}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section 2 - Before Contact */}
      <CTA
        title="Pregătit pentru un zâmbet perfect?"
        description="Nu mai aștepta! Echipa noastră este gata să te ajute să obții zâmbetul pe care ți-l dorești. Programează acum consultația ta."
        primaryButtonText="Programează consultație"
        secondaryButtonText="Sună acum"
        variant="gradient"
      />

      {/* Contact Section with Appointment Form */}
      <section id="contact">
        <Contact />
      </section>
    </div>
  );
}

export default Home;
