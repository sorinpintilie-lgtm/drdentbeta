import { useState } from 'react';
import { ChevronDown, HelpCircle, Phone, Mail, Calendar } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

/**
 * FAQ Page Component
 * Frequently Asked Questions with accordion functionality
 */

interface FAQItem {
  question: string;
  answer: string | JSX.Element;
}

interface FAQCategory {
  title: string;
  items: FAQItem[];
}

function FAQ() {
  const [openIndex, setOpenIndex] = useState<string | null>(null);

  const toggleFAQ = (id: string) => {
    setOpenIndex(openIndex === id ? null : id);
  };

  const faqCategories: FAQCategory[] = [
    {
      title: 'Programări și Servicii Generale',
      items: [
        {
          question: 'Cum pot face o programare?',
          answer: (
            <>
              <p className="mb-2">Puteți sa faceti programare în mai multe moduri convenabile:</p>
              <ul className="list-disc pl-5 space-y-1">
                <li>Online prin sistemul nostru de programare</li>
                <li>Sunați-ne la: <a href="tel:+40726530591" className="text-primary-600 hover:text-primary-700 font-semibold">0726 530 591</a></li>
                <li>Trimiteți-ne un email la: <a href="mailto:programare@drdent.ro" className="text-primary-600 hover:text-primary-700 font-semibold">programare@drdent.ro</a></li>
              </ul>
            </>
          ),
        },
        {
          question: 'Care este programul cabinetului?',
          answer: (
            <>
              <p className="mb-2">Programul nostru este conceput pentru a fi flexibil și accesibil:</p>
              <ul className="list-disc pl-5 space-y-1">
                <li><strong>Luni - Vineri:</strong> 09:00 - 20:00</li>
                <li><strong>Sâmbătă:</strong> 09:00 - 14:00</li>
                <li><strong>Duminică:</strong> Închis</li>
              </ul>
            </>
          ),
        },
        {
          question: 'Ce ar trebui să aduc la prima vizită?',
          answer: (
            <>
              <p className="mb-2">Pentru a ne asigura că prima vizită decurge cât mai eficient, vă rugăm să aduceți:</p>
              <ul className="list-disc pl-5 space-y-1">
                <li>Cardul de asigurare dentară (dacă este cazul)</li>
                <li>Act de identitate cu fotografie</li>
                <li>Lista medicamentelor actuale</li>
                <li>Radiografii dentare recente (dacă aveți)</li>
                <li>Formular de istoric medical completat</li>
              </ul>
            </>
          ),
        },
        {
          question: 'Ce metode de plată acceptați?',
          answer: (
            <>
              <p className="mb-2">Oferim următoarele opțiuni de plată:</p>
              <ul className="list-disc pl-5 space-y-1">
                <li>Numerar</li>
                <li>Carduri de credit/debit (Visa, MasterCard)</li>
                <li>Transfer bancar</li>
              </ul>
            </>
          ),
        },
      ],
    },
    {
      title: 'Urgențe Dentare',
      items: [
        {
          question: 'Ce este considerată o urgență dentară?',
          answer: 'Urgențele dentare includ: durere severă, sângerare care nu se oprește, dinte rupt sau căzut, abces dentar, umflături faciale severe sau traumatisme dentare. Dacă aveți îndoieli, sunați-ne imediat.',
        },
        {
          question: 'Ce fac dacă mi-a căzut un dinte?',
          answer: 'Păstrați dintele umed (în lapte sau salivă), nu atingeți rădăcina, și contactați-ne imediat. Timpul este esențial - cu cât ajungeți mai repede, cu atât sunt mai mari șansele de salvare a dintelui.',
        },
        {
          question: 'Cum gestionez durerea dentară acută până la programare?',
          answer: 'Luați analgezice fără prescripție medicală (conform instrucțiunilor), aplicați comprese reci pe exterior, evitați alimentele foarte calde sau reci, și sunați-ne pentru o programare de urgență.',
        },
        {
          question: 'Oferiți servicii de urgență în afara programului?',
          answer: 'Pentru urgențe în afara programului, sunați la numărul nostru principal și veți primi instrucțiuni pentru asistență de urgență. Avem protocol pentru situații critice.',
        },
      ],
    },
    {
      title: 'Îngrijirea Copiilor',
      items: [
        {
          question: 'La ce vârstă ar trebui să aduceti copilul la dentist?',
          answer: 'Recomandăm prima vizită la dentist în jurul vârstei de 1 an sau în termen de 6 luni de la apariția primului dinte. Vizitele timpurii ajută la prevenirea problemelor și la familiarizarea copilului cu cabinetul dentar.',
        },
        {
          question: 'Cum îmi pregătesc copilul pentru prima vizită?',
          answer: 'Vorbiți pozitiv despre vizită, citiți cărți despre dentist, evitați să folosiți cuvinte care provoacă frică, și asigurați-vă că cel mic este odihnit.',
        },
        {
          question: 'Sunt sigilările dentare necesare pentru copii?',
          answer: 'Sigilările sunt recomandate pentru protejarea molarilor permanenți ai copiilor. Acestea creează o barieră protectoare împotriva cariilor și sunt o metodă preventivă eficientă și nedureroasă.',
        },
      ],
    },
    {
      title: 'Tratamente și Tehnologie',
      items: [
        {
          question: 'Ce este stomatologia biomimetică?',
          answer: 'Stomatologia biomimetică este o abordare inovatoare inspirată din natură, menită să păstreze cât mai mult din structura naturală a dintelui.',
        },
        {
          question: 'Folosiți tehnologie avansată?',
          answer: (
            <>
              <p className="mb-2">Da, cabinetul nostru este echipat cu echipamente moderne:</p>
              <ul className="list-disc pl-5 space-y-1">
                <li>CEREC® PrimeScan pentru scanări digitale precise</li>
                <li>CEREC® PrimeMill pentru restaurări în aceeași zi</li>
                <li>CEREC® SpeedFire pentru coroane din zirconiu</li>
                <li>Radiografii digitale cu radiații reduse</li>
              </ul>
            </>
          ),
        },
        {
          question: 'Tratamentele sunt dureroase?',
          answer: 'Folosim tehnici moderne și anestezie locală pentru a minimiza disconfortul. Majoritatea pacienților noștri raportează experiențe confortabile și fără durere. Vom discuta cu dumneavoastră despre orice îngrijorare înainte de procedură.',
        },
        {
          question: 'Cât durează o vizită tipică?',
          answer: (
            <>
              <p className="mb-2">Durata variază în funcție de tipul de vizită:</p>
              <ul className="list-disc pl-5 space-y-1">
                <li>Examen și curățare de rutină: 60-90 minute</li>
                <li>Consultație inițială: 45-60 minute</li>
                <li>Proceduri restaurative: 1-3 ore în funcție de complexitate</li>
              </ul>
            </>
          ),
        },
      ],
    },
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Page Header */}
      <section className="bg-gradient-to-br from-primary-500 to-primary-700 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <HelpCircle className="w-16 h-16 mx-auto mb-4 text-white/90" />
            <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">
              Întrebări Frecvente
            </h1>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              Răspunsuri la întrebările dumneavoastră
            </p>
          </motion.div>
        </div>
      </section>

      {/* Intro */}
      <section className="section bg-white py-12">
        <div className="container mx-auto px-4">
          <p className="text-lg text-gray-600 text-center max-w-3xl mx-auto leading-relaxed">
            Găsiți răspunsuri la cele mai frecvente întrebări despre serviciile noastre stomatologice, programări, tratamente și mai mult.
          </p>
        </div>
      </section>

      {/* FAQ Accordion */}
      <section className="section bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-12">
            {faqCategories.map((category, categoryIndex) => (
              <div key={categoryIndex}>
                <h2 className="text-2xl md:text-3xl font-heading font-bold text-gray-900 mb-6">
                  {category.title}
                </h2>
                <div className="space-y-4">
                  {category.items.map((item, itemIndex) => {
                    const faqId = `${categoryIndex}-${itemIndex}`;
                    const isOpen = openIndex === faqId;

                    return (
                      <motion.div
                        key={faqId}
                        className="bg-white rounded-xl shadow-sm overflow-hidden"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: itemIndex * 0.05 }}
                      >
                        <button
                          onClick={() => toggleFAQ(faqId)}
                          className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
                          aria-expanded={isOpen}
                        >
                          <span className="text-lg font-semibold text-gray-900 pr-4">
                            {item.question}
                          </span>
                          <motion.div
                            animate={{ rotate: isOpen ? 180 : 0 }}
                            transition={{ duration: 0.3 }}
                          >
                            <ChevronDown className="w-5 h-5 text-primary-500 flex-shrink-0" />
                          </motion.div>
                        </button>
                        <AnimatePresence>
                          {isOpen && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: 'auto', opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.3 }}
                              className="overflow-hidden"
                            >
                              <div className="px-6 pb-5 text-gray-600 leading-relaxed">
                                {typeof item.answer === 'string' ? (
                                  <p>{item.answer}</p>
                                ) : (
                                  item.answer
                                )}
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </motion.div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section bg-gradient-to-br from-primary-600 to-primary-800 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-3xl font-heading font-bold mb-4">
            Nu ați găsit răspunsul la întrebarea dumneavoastră?
          </h3>
          <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
            Echipa noastră este aici pentru a vă ajuta. Contactați-ne astăzi pentru orice întrebare suplimentară!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+40726530591"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-primary-600 rounded-xl font-semibold text-lg hover:bg-gray-50 transition-all hover:scale-105 shadow-xl"
            >
              <Phone className="w-5 h-5" />
              Sunați: 0726 530 591
            </a>
            <a
              href="mailto:programare@drdent.ro"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-white text-white hover:bg-white hover:text-primary-600 rounded-xl font-semibold text-lg transition-all"
            >
              <Mail className="w-5 h-5" />
              Trimiteți Email
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-white text-white hover:bg-white hover:text-primary-600 rounded-xl font-semibold text-lg transition-all"
            >
              <Calendar className="w-5 h-5" />
              Programați o Consultație
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default FAQ;
