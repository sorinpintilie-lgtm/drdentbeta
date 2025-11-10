import { CreditCard, Banknote, Calendar, Shield, CheckCircle, Phone } from 'lucide-react';
import { motion } from 'framer-motion';

/**
 * Fees Page Component
 * Displays complete pricing information from www.drdent.ro
 */

interface PricingItem {
  service: string;
  price: string;
}

interface PricingCategory {
  title: string;
  items: PricingItem[];
}

function Fees() {
  const pricingCategories: PricingCategory[] = [
    {
      title: 'Consultație',
      items: [
        { service: 'Consultație', price: '50 lei' },
        { service: 'Consultație Ortodonție', price: '100 lei' },
      ],
    },
    {
      title: 'Chirurgie Orală',
      items: [
        { service: 'Implant dentar', price: '500 EUR' },
        { service: 'Sinus lift intern', price: '200 EUR' },
        { service: 'Sinus lift extern', price: '800 EUR' },
        { service: 'Un flacon bio oss', price: '100 EUR' },
        { service: 'Membrana', price: '150 EUR' },
        { service: 'Grefa de os autolog', price: '800 EUR' },
        { service: 'Extractie dinte inclus intraosos (odontectomie)', price: '500 lei' },
        { service: 'Extractie molar de minte inferior erupt', price: '400 lei' },
        { service: 'Extractie molar de minte superior erupt', price: '300 lei' },
        { service: 'Extractie dinte pluriradicular', price: '230 lei' },
        { service: 'Extractie dinte monoradicular', price: '170 lei' },
        { service: 'Extractie dinte parodontotic (mobil)', price: '150 lei' },
        { service: 'Rezectie apicala dinte monoradicular', price: '500 lei' },
        { service: 'Rezectie apicala dinte pluriradicular', price: '600 lei' },
        { service: 'Chistectomie', price: '400 lei' },
        { service: 'Frenectomie', price: '400 lei' },
        { service: 'Gingivectomie', price: '100 lei' },
        { service: 'Incizie abces', price: '100 lei' },
        { service: 'Sutura', price: '20 lei' },
        { service: 'Anestezie', price: '10 lei' },
      ],
    },
    {
      title: 'Endodonție',
      items: [
        { service: 'Tratament endodontic monoradicular (fara obturatie)', price: '250 lei' },
        { service: 'Tratament endodontic pluriradicular 2 canale (fara obturatie)', price: '250 lei' },
        { service: 'Tratament endodontic pluriradicular 3 canale (fara obturatie)', price: '300 lei' },
        { service: 'Retratament endodontic dinte monoradicular', price: '350 lei' },
        { service: 'Retratament endodontic pluriradicular 2 canale', price: '400 lei' },
        { service: 'Retratament endodontic pluriradicular 3 canale', price: '450 lei' },
        { service: 'Obturatie un canal', price: '200 lei' },
        { service: 'Obturatie 2 canale', price: '200 lei' },
        { service: 'Obturatie 3 canale', price: '250 lei' },
        { service: 'Reconstituire cu pivot fibra de sticla', price: '350 lei' },
        { service: 'Tratament devitalizant', price: '100 lei' },
        { service: 'Drenaj endodontic dinte mono/pluriradicular', price: '100 lei' },
      ],
    },
    {
      title: 'Terapie Odontală',
      items: [
        { service: 'Obturatie coronara frontala compozit', price: '370 lei' },
        { service: 'Obturatie coronara posterioara compozit', price: '300 lei' },
        { service: 'Obturatie coronara cu tetric EvoCeram', price: '350 lei' },
        { service: 'Obturatie coronara tetric Evetric', price: '300 lei' },
        { service: 'Obturatie coronara ionomer de sticla', price: '200 lei' },
        { service: 'Obturatie coronara compozit pe dinti temporari', price: '250 lei' },
        { service: 'Fateta directa rasina compozit', price: '300 lei' },
      ],
    },
    {
      title: 'Protetică Dentară',
      items: [
        { service: 'Coroana metalo-ceramica', price: '750 lei' },
        { service: 'Coroana Emax (ceramica presata)', price: '1200 lei' },
        { service: 'Coroana integral zirconiu', price: '1300 lei' },
        { service: 'Coroana ceramica pe suport zirconiu', price: '1200 lei' },
        { service: 'Coroana zirconiu pe implant', price: '350 EUR' },
        { service: 'Coroana pe implant dentar - metalo-ceramica', price: '300 EUR' },
        { service: 'Coroana semifizionomica metalo-ceramica', price: '550 lei' },
        { service: 'Coroana metalica', price: '300 lei' },
        { service: 'Fatete dentare', price: '1500 lei' },
        { service: 'Onlay/Inlay ceramica/zirconiu', price: '700 lei' },
        { service: 'Incrustatie compozit', price: '400 lei' },
        { service: 'Proteza mobila acrilica', price: '1500 lei' },
        { service: 'Proteza flexibila', price: '1800 lei' },
        { service: 'Proteza scheletata pe capse (NU include capsa)', price: '2000 lei' },
        { service: 'Capsa proteza', price: '500 lei' },
        { service: 'Proteza cu capse pe 2 implanturi', price: '5800 lei' },
        { service: 'Proteza cu capse pe 3 implanturi', price: '9000 lei' },
        { service: 'Proteza cu capse pe 4 implanturi', price: '11000 lei' },
        { service: 'Proteza inferioara insurubata pe 4 implanturi', price: '10000 lei' },
        { service: 'Proteza superioara insurubata pe 6 implanturi', price: '13000 lei' },
        { service: 'Coroana provizorie in cabinet', price: '80 lei' },
        { service: 'Coroana provizorie in laborator - PMMA', price: '100 lei' },
        { service: 'Reconstructie corono-radiculara metalica', price: '200 lei' },
        { service: 'Reconstructie corono-radiculara zirconiu', price: '400 lei' },
        { service: 'Reparatie proteza', price: '200 lei' },
        { service: 'Captusire proteza', price: '250 lei' },
        { service: 'Cimentare', price: '30 lei' },
      ],
    },
    {
      title: 'Ortodonție',
      items: [
        { service: 'Aparat fix metalic', price: '500 EUR' },
        { service: 'Aparat fix metalic semifizionomic', price: '600 EUR' },
        { service: 'Aparat fix safir', price: '700 EUR' },
        { service: 'Aparat mobil', price: '1000 lei' },
        { service: 'Aparat fix partial', price: '1000 lei' },
        { service: 'Aparat miofunctional', price: '800 lei' },
        { service: 'Disjunctor si masca faciala', price: '1400 lei' },
        { service: 'Control aparat fix', price: '60 lei' },
        { service: 'Control aparat mobil', price: '50 lei' },
        { service: 'Retainer colat', price: '300 lei' },
        { service: 'Gutiera de contentie', price: '300 lei' },
        { service: 'Ortoimplant', price: '400 lei' },
      ],
    },
    {
      title: 'Profilaxie Dentară',
      items: [
        { service: 'Igienizare (detartraj, periaj, air-flow)', price: '250 lei' },
        { service: 'Detartraj + periaj (dinte)', price: '10 lei' },
        { service: 'Periaj', price: '50 lei' },
        { service: 'Air flow', price: '50 lei' },
        { service: 'Albire dentara cu gutiere', price: '800 lei' },
        { service: 'Albire laser', price: '1000 lei' },
        { service: 'Albire lampa zoom', price: '1000 lei' },
        { service: 'Albire dinte devital', price: '100 lei' },
        { service: 'Sigilare dentara', price: '150 lei' },
        { service: 'Fluorizare/desensibilizare', price: '20 lei' },
        { service: 'Gutiera fluorizare', price: '100 lei' },
        { service: 'Gutiera bruxism CAD-CAM', price: '250 lei' },
      ],
    },
    {
      title: 'Parodontologie',
      items: [
        { service: 'Chiuretaj parodontal in camp inchis', price: '50 lei' },
        { service: 'Chiuretaj parodontal in camp deschis', price: 'La cerere' },
      ],
    },
  ];

  const paymentOptions = [
    {
      icon: <Banknote className="w-6 h-6" />,
      title: 'Numerar și Card',
      description: 'Plăți imediate cu carduri de credit/debit sau numerar',
    },
    {
      icon: <CreditCard className="w-6 h-6" />,
      title: 'Transfer Bancar',
      description: 'Opțiune convenabilă pentru plăți mai mari',
    },
    {
      icon: <Calendar className="w-6 h-6" />,
      title: 'Plăți la Termen',
      description: 'Opțiune de plată convenabilă pentru tratamente complexe',
    },
  ];

  const importantInfo = [
    'Consultația costă 50 lei (Consultație Ortodonție: 100 lei)',
    'Prețurile sunt actualizate lunar',
    'Garanție 5 ani pe toate lucrările efectuate',
    'Tehnologie CEREC pentru restaurări în aceeași zi',
    'Transparență totală - fără costuri ascunse',
    'Reduceri disponibile pentru pachete de tratament',
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Page Header */}
      <section className="bg-gradient-to-br from-primary-500 to-primary-700 text-white py-12 md:py-16">
        <div className="container mx-auto px-4 text-center">
          <motion.h1
            className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            Tarife și Prețuri
          </motion.h1>
          <motion.p
            className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            Transparență completă și prețuri competitive
          </motion.p>
        </div>
      </section>

      {/* Intro */}
      <section className="section bg-white py-8 md:py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-base md:text-lg text-gray-600 leading-relaxed mb-4">
              Oferim tarife competitive și transparente pentru toate serviciile noastre dentare.
              Prețurile sunt actualizate lunar pentru a vă oferi cele mai bune prețuri.
            </p>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary-100 text-primary-700 rounded-lg font-semibold">
              <CheckCircle className="w-5 h-5" />
              Consultație: 50 lei
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Tables */}
      <section className="section bg-gray-50 py-8 md:py-16">
        <div className="container mx-auto px-4">
          <div className="space-y-8 md:space-y-12">
            {pricingCategories.map((category, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-xl md:rounded-2xl shadow-lg overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
              >
                <div className="bg-gradient-to-r from-primary-500 to-primary-600 px-4 md:px-6 py-3 md:py-4">
                  <h3 className="text-xl md:text-2xl font-heading font-bold text-white flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 md:w-6 md:h-6" />
                    {category.title}
                  </h3>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-4 md:px-6 py-3 md:py-4 text-left text-xs md:text-sm font-semibold text-gray-700">Serviciu</th>
                        <th className="px-4 md:px-6 py-3 md:py-4 text-right text-xs md:text-sm font-semibold text-gray-700">Preț</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100">
                      {category.items.map((item, itemIndex) => (
                        <tr key={itemIndex} className="hover:bg-gray-50 transition-colors">
                          <td className="px-4 md:px-6 py-3 md:py-4 text-sm md:text-base text-gray-900">{item.service}</td>
                          <td className="px-4 md:px-6 py-3 md:py-4 text-right text-sm md:text-base font-semibold text-primary-600 whitespace-nowrap">{item.price}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Payment Options */}
      <section className="section bg-white py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-heading font-bold text-gray-900 mb-4">
              Opțiuni de Plată
            </h2>
            <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
              Acceptăm diverse metode de plată pentru a facilita accesul la îngrijire dentară de calitate
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {paymentOptions.map((option, index) => (
              <motion.div
                key={index}
                className="bg-gradient-to-br from-primary-50 to-primary-100 rounded-xl md:rounded-2xl p-5 md:p-6 hover:shadow-lg transition-all hover:-translate-y-1"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="w-10 h-10 md:w-12 md:h-12 bg-primary-500 rounded-xl flex items-center justify-center text-white mb-3 md:mb-4">
                  {option.icon}
                </div>
                <h3 className="text-lg md:text-xl font-heading font-bold text-gray-900 mb-2">
                  {option.title}
                </h3>
                <p className="text-sm md:text-base text-gray-600">{option.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Important Info */}
      <section className="section bg-gradient-to-br from-primary-50 to-primary-100 py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-xl md:rounded-2xl shadow-xl p-6 md:p-8">
              <h3 className="text-xl md:text-2xl font-heading font-bold text-gray-900 mb-4 md:mb-6 flex items-center gap-2">
                <Shield className="w-5 h-5 md:w-6 md:h-6 text-primary-500" />
                Informații Importante
              </h3>
              <ul className="space-y-3 md:space-y-4">
                {importantInfo.map((info, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary-500 flex-shrink-0 mt-0.5" />
                    <span className="text-sm md:text-base text-gray-700">{info}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section bg-gradient-to-br from-primary-600 to-primary-800 text-white py-12 md:py-16">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-2xl md:text-3xl font-heading font-bold mb-4">
            Doriți o estimare personalizată?
          </h3>
          <p className="text-base md:text-lg text-white/90 mb-6 md:mb-8 max-w-2xl mx-auto">
            Contactați-ne pentru o consultație (50 lei) și aflați costurile exacte pentru tratamentul dumneavoastră.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+40726530591"
              className="inline-flex items-center justify-center gap-2 px-6 md:px-8 py-3 md:py-4 bg-white text-primary-600 rounded-xl font-semibold text-base md:text-lg hover:bg-gray-50 transition-all hover:scale-105 shadow-xl"
            >
              <Phone className="w-5 h-5" />
              Sunați: 0726 530 591
            </a>
            <a
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-6 md:px-8 py-3 md:py-4 border-2 border-white text-white hover:bg-white hover:text-primary-600 rounded-xl font-semibold text-base md:text-lg transition-all"
            >
              <Calendar className="w-5 h-5" />
              Programați Consultația
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Fees;
