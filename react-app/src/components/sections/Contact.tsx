import React from 'react';
import { motion } from 'framer-motion';

export const Contact: React.FC = () => {
  const contactInfo = [
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
          />
        </svg>
      ),
      label: 'Telefon',
      value: '0724 055 872',
      href: 'tel:+40724055872',
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
          />
        </svg>
      ),
      label: 'Telefon',
      value: '0726 530 591',
      href: 'tel:+40726530591',
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
          />
        </svg>
      ),
      label: 'Email',
      value: 'programare@drdent.ro',
      href: 'mailto:programare@drdent.ro',
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
          />
        </svg>
      ),
      label: 'Adresă',
      value: 'Strada Arh. Ionescu Grigore Nr.100, bl. 34, sc. 1, ap. 2, sector 2, București',
      href: 'https://maps.google.com/?q=Strada+Arh.+Ionescu+Grigore+Nr.100+bl.+34+sc.+1+ap.+2+sector+2+București',
    },
  ];

  const workingHours = [
    { day: 'Luni - Vineri', hours: '09:00 - 20:00' },
    { day: 'Sâmbătă', hours: '09:00 - 14:00' },
    { day: 'Duminică', hours: 'Închis' },
  ];

  const socialLinks = [
    {
      name: 'Facebook',
      href: 'https://www.facebook.com/drdent.ro',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
        </svg>
      ),
    },
    {
      name: 'Instagram',
      href: 'https://www.instagram.com/drdent.ro/?utm_source=qr',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
        </svg>
      ),
    },
  ];

  return (
    <section id="contact" className="py-16 sm:py-20 lg:py-24 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Informații de Contact
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
            Alege metoda de contact preferată și te vom ajuta în cel mai scurt timp cu detaliile de care ai nevoie.
          </p>
        </motion.div>
 
        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Left Column: Contact + Program + Social */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8"
          >
            <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm space-y-6">
              {/* Contact + Program grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
               {/* Contact rapid */}
               <div className="space-y-4">
                 <h3 className="text-lg font-semibold text-gray-900">Contact rapid</h3>
                 {[contactInfo[0], contactInfo[1], contactInfo[2]].map((item, index) => (
                   <a
                     key={index}
                     href={item.href}
                     className="flex items-start gap-3 rounded-lg hover:bg-gray-50 px-3 py-2 transition-colors group"
                   >
                     <div className="flex-shrink-0 w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                       {item.icon}
                     </div>
                     <div className="flex-1 min-w-0">
                       <p className="text-xs text-gray-500 mb-0.5 uppercase tracking-wide">
                         {item.label}
                       </p>
                       <p className="text-sm font-medium text-gray-900 break-words">
                         {item.value}
                       </p>
                     </div>
                   </a>
                 ))}
               </div>
 
                {/* Adresă + Program */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-gray-900">Adresă & Program</h3>
                  {/* Adresă */}
                  <a
                    href={contactInfo[3].href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-start gap-3 rounded-lg hover:bg-gray-50 px-3 py-2 transition-colors group"
                  >
                    <div className="flex-shrink-0 w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                      {contactInfo[3].icon}
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-xs text-gray-500 mb-0.5 uppercase tracking-wide">
                        {contactInfo[3].label}
                      </p>
                      <p className="text-sm font-medium text-gray-900 break-words">
                        {contactInfo[3].value}
                      </p>
                    </div>
                  </a>
 
                  {/* Program de lucru */}
                  <div className="rounded-xl bg-gray-50 px-3 py-3">
                    <div className="flex items-center gap-2 mb-2">
                      <svg className="w-4 h-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                      <p className="text-xs font-semibold text-gray-700 uppercase tracking-wide">
                        Program de lucru
                      </p>
                    </div>
                    <div className="space-y-1.5">
                      {workingHours.map((schedule, index) => (
                        <div key={index} className="flex justify-between text-xs text-gray-700">
                          <span>{schedule.day}</span>
                          <span className="font-medium">{schedule.hours}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
 
              {/* Social row */}
              <div className="border-t border-gray-100 pt-5 mt-2 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div>
                  <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1">
                    Urmărește-ne
                  </p>
                  <p className="text-sm text-gray-600">
                    Rămâi la curent cu noutățile și sfaturile de la Dr.Dent.
                  </p>
                </div>
                <div className="flex gap-3">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-colors"
                      aria-label={social.name}
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
 
          {/* Right Column: Map card */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex"
          >
            <a
              href="https://maps.google.com/?q=Strada+Arh.+Ionescu+Grigore+Nr.100+bl.+34+sc.+1+ap.+2+sector+2+București"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm hover:shadow-lg transition-shadow group flex flex-col w-full"
            >
              <div className="flex items-center justify-between mb-4 sm:mb-6">
                <div>
                  <p className="text-xs font-semibold text-primary uppercase tracking-wide mb-1">
                    Hartă - Locația Dr.Dent
                  </p>
                  <h3 className="text-lg sm:text-xl font-heading font-bold text-gray-900">
                    Vezi rapid locația cabinetului
                  </h3>
                </div>
                <div className="hidden sm:flex w-10 h-10 rounded-full bg-primary/10 items-center justify-center text-primary">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                  </svg>
                </div>
              </div>
 
              <div className="aspect-video bg-gray-200 rounded-xl overflow-hidden relative mb-4 sm:mb-6">
                <img
                  src="/images/snapshot.png"
                  alt="Hartă - Locația Dr.Dent"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-primary/10 group-hover:bg-primary/20 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100">
                  <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                  </svg>
                </div>
              </div>
 
              <div className="flex items-center justify-between">
                <p className="text-sm text-gray-600">
                  Deschide în Google Maps pentru indicații pas cu pas.
                </p>
                <span className="text-sm font-semibold text-primary group-hover:text-secondary transition-colors">
                  Vezi pe hartă →
                </span>
              </div>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
