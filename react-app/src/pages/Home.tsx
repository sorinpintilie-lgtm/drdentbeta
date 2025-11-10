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
    window.location.href = 'tel:+40726530591';
  };

  const handleViewServices = () => {
    const servicesSection = document.getElementById('services');
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section id="hero">
        <Hero
          headline="Zâmbetul Tău Perfect Începe Aici"
          subheadline="Îngrijire dentară profesională cu echipamente moderne și o echipă dedicată sănătății tale orale"
          primaryCTA={{
            text: "Programează Consultație",
            href: "tel:+40726530591",
            onClick: handleBookConsultation,
          }}
          secondaryCTA={{
            text: "Servicii",
            href: "#services",
            onClick: handleViewServices,
          }}
          trustIndicators={[
            {
              value: "15+",
              label: "Ani Experiență",
              icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              ),
            },
            {
              value: "1000+",
              label: "Pacienți Fericiți",
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

      {/* Services Section */}
      <section id="services">
        <Services />
      </section>

      {/* CTA Section 1 - After Services */}
      <CTA
        title="Descoperă Diferența Dr.Dent"
        description="Programează o consultație (50 lei) și află cum tehnologia noastră avansată și echipa dedicată pot transforma zâmbetul tău."
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
              Filosofia Noastră
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              La DrDent, credem în:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Prioritizarea prevenției și sănătății dentare pe termen lung.'
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
        title="Pregătit pentru un Zâmbet Perfect?"
        description="Nu mai aștepta! Echipa noastră este gata să te ajute să obții zâmbetul pe care ți-l dorești. Programează acum consultația ta."
        primaryButtonText="Programează Consultație"
        secondaryButtonText="Sună Acum"
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
