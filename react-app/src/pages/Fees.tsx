import { DollarSign, CreditCard, Banknote, Calendar, Shield, CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';

/**
 * Fees Page Component
 * Displays pricing information and payment options
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
      title: 'Îngrijire Preventivă',
      items: [
        { service: 'Consultație și examen oral', price: 'Gratuit' },
        { service: 'Curățare dentară profesională', price: '150 - 250 RON' },
        { service: 'Fluorizare', price: '50 RON' },
        { service: 'Radiografie dentară', price: '30 - 80 RON' },
        { service: 'Detartraj și periaj profesional', price: '200 - 350 RON' },
      ],
    },
    {
      title: 'Tratament Restaurativ',
      items: [
        { service: 'Plombă compozit (un dinte)', price: '200 - 400 RON' },
        { service: 'Plombă amalgama', price: '150 - 300 RON' },
        { service: 'Încoronare ceramică', price: '800 - 1500 RON' },
        { service: 'Încoronare metalo-ceramică', price: '600 - 1000 RON' },
        { service: 'Tratament canal (endodontic)', price: '500 - 1200 RON' },
      ],
    },
    {
      title: 'Proceduri Cosmetice',
      items: [
        { service: 'Albire dentară profesională', price: '800 - 1500 RON' },
        { service: 'Fațete dentare (per dinte)', price: '1200 - 2500 RON' },
        { service: 'Conturare și finisare', price: '300 - 600 RON' },
        { service: 'Înlăturare tartru cu laser', price: '400 - 700 RON' },
        { service: 'Proteze dentare parțiale', price: '1500 - 4000 RON' },
      ],
    },
    {
      title: 'Chirurgie Orală',
      items: [
        { service: 'Extracție dinte simplu', price: '150 - 300 RON' },
        { service: 'Extracție dinte inclus', price: '400 - 800 RON' },
        { service: 'Implant dentar (inclus implant)', price: '2500 - 4500 RON' },
        { service: 'Coroană pe implant', price: '1000 - 2000 RON' },
        { service: 'Chirurgie parodontală', price: '500 - 1500 RON' },
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
      title: 'Rate Lunare',
      description: 'Planuri de plată flexibile pentru tratamente extinse (0% dobândă pentru până la 12 luni)',
    },
    {
      icon: <DollarSign className="w-6 h-6" />,
      title: 'Finanțare Externă',
      description: 'Colaborăm cu instituții financiare pentru credite dentare cu dobânzi reduse',
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: 'Asigurări de Sănătate',
      description: 'Acceptăm majoritatea asigurărilor medicale și dentare private',
    },
  ];

  const importantInfo = [
    'Prețurile sunt orientative și pot varia în funcție de complexitatea cazului',
    'Oferim consultație gratuită pentru estimarea costurilor exacte',
    'Reduceri disponibile pentru pachete de tratament și plăți anticipate',
    'Garanție pe toate lucrările efectuate conform standardelor internaționale',
    'Transparență totală - fără costuri ascunse',
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Page Header */}
      <section className="bg-gradient-to-br from-primary-500 to-primary-700 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <motion.h1
            className="text-4xl md:text-5xl font-heading font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            Tarife și Asigurări
          </motion.h1>
          <motion.p
            className="text-xl text-white/90 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            Transparență și opțiuni flexibile de plată
          </motion.p>
        </div>
      </section>

      {/* Intro */}
      <section className="section bg-white py-12">
        <div className="container mx-auto px-4">
          <p className="text-lg text-gray-600 text-center max-w-3xl mx-auto leading-relaxed">
            Oferim tarife competitive și transparente pentru toate serviciile noastre dentare. Prețurile pot varia în funcție de complexitatea cazului și materialele utilizate. Consultația inițială este gratuită pentru evaluarea nevoilor dumneavoastră.
          </p>
        </div>
      </section>

      {/* Pricing Tables */}
      <section className="section bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="space-y-12">
            {pricingCategories.map((category, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-2xl shadow-lg overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="bg-gradient-to-r from-primary-500 to-primary-600 px-6 py-4">
                  <h3 className="text-2xl font-heading font-bold text-white flex items-center gap-2">
                    <CheckCircle className="w-6 h-6" />
                    {category.title}
                  </h3>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Serviciu</th>
                        <th className="px-6 py-4 text-right text-sm font-semibold text-gray-700">Preț</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100">
                      {category.items.map((item, itemIndex) => (
                        <tr key={itemIndex} className="hover:bg-gray-50 transition-colors">
                          <td className="px-6 py-4 text-gray-900">{item.service}</td>
                          <td className="px-6 py-4 text-right font-semibold text-primary-600">{item.price}</td>
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
      <section className="section bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-4">
              Opțiuni de Plată și Finanțare
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Acceptăm diverse metode de plată pentru a facilita accesul la îngrijire dentară de calitate
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {paymentOptions.map((option, index) => (
              <motion.div
                key={index}
                className="bg-gradient-to-br from-primary-50 to-primary-100 rounded-2xl p-6 hover:shadow-lg transition-all hover:-translate-y-1"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="w-12 h-12 bg-primary-500 rounded-xl flex items-center justify-center text-white mb-4">
                  {option.icon}
                </div>
                <h3 className="text-xl font-heading font-bold text-gray-900 mb-2">
                  {option.title}
                </h3>
                <p className="text-gray-600">{option.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Important Info */}
      <section className="section bg-gradient-to-br from-primary-50 to-primary-100 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h3 className="text-2xl font-heading font-bold text-gray-900 mb-6 flex items-center gap-2">
                <Shield className="w-6 h-6 text-primary-500" />
                Informații Importante
              </h3>
              <ul className="space-y-4">
                {importantInfo.map((info, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{info}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section bg-gradient-to-br from-primary-600 to-primary-800 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-3xl font-heading font-bold mb-4">
            Doriți o estimare personalizată?
          </h3>
          <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
            Contactați-ne pentru o consultație gratuită și aflați costurile exacte pentru tratamentul dumneavoastră.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+40213449317"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-primary-600 rounded-xl font-semibold text-lg hover:bg-gray-50 transition-all hover:scale-105 shadow-xl"
            >
              <DollarSign className="w-5 h-5" />
              Sunați-ne: +40 21 344 9317
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-white text-white hover:bg-white hover:text-primary-600 rounded-xl font-semibold text-lg transition-all"
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