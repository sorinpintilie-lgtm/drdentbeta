import { Calendar, Shield, CheckCircle, Phone } from 'lucide-react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';

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
      title: 'Chirurgie orală',
      items: [
        { service: 'Extracție dinte monoradicular', price: '250 RON' },
        { service: 'Extracție dinte pluriradicular', price: '300 RON' },
        { service: 'Extracție molar de minte superior erupt', price: '350 RON' },
        { service: 'Extracție molar de minte inferior erupt', price: '400 RON' },
        { service: 'Extracție dinte inclus intraosos(odontectomie)(include sutura)', price: '600 RON' },
        { service: 'Chiuretaj perimplant', price: '250 RON' },
        { service: 'Decapusonare', price: '200 RON' },
        { service: 'Extracție dinte parodontotic(mobil)/rest radicular', price: '200 RON' },
        { service: 'Tratament abces parodontotic', price: '150 RON' },
        { service: 'Gingivectomie', price: '150 RON' },
        { service: 'Chistectomie', price: '600 RON' },
        { service: 'Tratament alveolita', price: '150 RON' },
        { service: 'Rezecție apicala dinte monoradicular', price: '500 RON' },
        { service: 'Rezecție apicala dinte pluriradicular', price: '600 RON' },
        { service: 'Descoperire canin/premolar in scop ortodontic', price: '450 RON' },
        { service: 'Implant dentar', price: '500 EUR*' },
        { service: 'Sinus lift intern', price: '200 EUR*' },
        { service: 'Sinus lift extern', price: '800 EUR*' },
        { service: 'Un flacon bio oss', price: '100 EUR*' },
        { service: 'Membrana', price: '150 EUR*' },
        { service: 'Grefa de os autolog', price: '800 EUR*' },
        { service: 'Extracție cu alveolotomie/separație interradiculara', price: '500 RON' },
        { service: 'Frenectomie', price: '400 RON' },
      ],
    },
    {
      title: 'Endodontie',
      items: [
        { service: 'Obturație de canal pluriradicular 3 canale/+', price: '300 RON' },
        { service: 'Reconstituire cu pivot fibra de sticla', price: '350 RON' },
        { service: 'Tratament devitalizant', price: '100 RON' },
        { service: 'Retratament endodontic pluriradicular 3 canale', price: '500 RON' },
        { service: 'Retratament endodontic pluriradicular 2 canale', price: '450 RON' },
        { service: 'Retratament endodontic dinte monoradicular', price: '400 RON' },
        { service: 'Tratament endodontic pluriradicular 3 canale ( fără obturație )', price: '350 RON' },
        { service: 'Tratament endodontic pluriradicular 2 canale ( fără obturație )', price: '300 RON' },
        { service: 'Tratament endodontic dinte monoradicular ( fără obturație )', price: '250 RON' },
        { service: 'Tratament de urgență (pansament calmant/drenaj/tratament pericoronarita etc)', price: '150 RON' },
        { service: 'Refacere perete in vederea tratamentului endodontic', price: '200 RON' },
        { service: 'Indepartare pivot/dentatus', price: '200 RON' },
        { service: 'Obturație de canal monoradicular/un canal', price: '200 RON' },
        { service: 'Obturație de canal biradicular 2 canale', price: '250 RON' },
      ],
    },
    {
      title: 'Estetică dentară',
      items: [
        { service: 'Aplicare bijuterie dentara', price: '250 RON' },
        { service: 'Albire dentara acasă (gutiere incluse)', price: '1200 RON' },
        { service: 'Albire dinte devital', price: '250 RON' },
        { service: 'Albire dentara in cabinet + acasă (gutiere incluse)', price: '1500 RON' },
        { service: 'Albire dentara in cabinet', price: '1000 RON' },
      ],
    },
    {
      title: 'Ortodonție',
      items: [
        { service: 'Disjunctor', price: '1500 RON' },
        { service: 'Aparat fix partial', price: '1000 RON' },
        { service: 'Aparat fix metalic', price: '2800 RON' },
        { service: 'Control aparat fix /per arcada', price: '100 RON' },
        { service: 'Retainer colat', price: '450 RON' },
        { service: 'Gutiera de contentie', price: '550 RON' },
        { service: 'Gutiera acrilica pentru inaltare ocluzala', price: '250 RON' },
        { service: 'Ortoimplant', price: '500 RON' },
        { service: 'Disjunctor si masca faciala', price: '1400 RON' },
        { service: 'Aparat miofunctional', price: '800 RON' },
        { service: 'Aparat fix safir', price: '4000 RON' },
        { service: 'Aparat fix metalic semifizionomic ICONIX', price: '3200 RON' },
      ],
    },
    {
      title: 'Parodontologie',
      items: [
        { service: 'Tratament regenerativ boala parodontala (per dinte)', price: '1100 RON' },
        { service: 'Tunelizare', price: '400 RON' },
        { service: 'Indepartare imobilizare', price: '100 RON' },
        { service: 'Imobilizare 4-5 dinti', price: '500 RON' },
        { service: 'Imobilizare cu fibra (per sextant)', price: '500 RON' },
        { service: 'Chiuretaj camp inchis per arcada', price: '1200 RON' },
        { service: 'Tratament antiinflamator gingivita (per arcada)', price: '100 RON' },
        { service: 'Igienizare pacient parodontopat', price: '400 RON' },
        { service: 'Parodontometrie', price: '200 RON' },
        { service: 'Chiuretaj parodontal in camp inchis dinte pluriradicular', price: '200 RON' },
        { service: 'Gingivectomie (per dinte)', price: '150 RON' },
        { service: 'Tratament biostimulant neypulpin (5 sedinte)', price: '800 RON' },
        { service: 'Chiuretaj parodontal in camp inchis dinte monoradicular', price: '150 RON' },
        { service: 'Chiuretaj parodontal in camp deschis', price: '250 RON' },
      ],
    },
    {
      title: 'Pedodonție',
      items: [
        { service: 'Sigilare dentara largita', price: '200 RON' },
        { service: 'Obturație de canal dinte monoradicular temporar', price: '100 RON' },
        { service: 'Obturație coronara compozit pe dinti temporari', price: '250 RON' },
        { service: 'Pulpectomie vitala dinte pluriradicular temporar', price: '200 RON' },
        { service: 'Extracție dinte temporar mobil (fără anestezie)', price: '150 RON' },
        { service: 'Extracție dinte temporar fără mobilitate (cu anestezie)', price: '200 RON' },
        { service: 'Pulpectomie vitala dinte monoradicular temporar', price: '150 RON' },
        { service: 'Obturație coronara ionomer de sticla', price: '250 RON' },
        { service: 'Obturație de canal dinte pluriradicular temporar', price: '150 RON' },
      ],
    },
    {
      title: 'Profilaxie dentară',
      items: [
        { service: 'Gutiera bruxism', price: '350 RON' },
        { service: 'Fluorizare (per arcada)', price: '150 RON' },
        { service: 'Air flow', price: '150 RON' },
        { service: 'Detaratraj + periaj (ambele arcade)', price: '250 RON' },
        { service: 'Periaj', price: '100 RON' },
        { service: 'Detartraj', price: '200 RON' },
        { service: 'Gutiera fluorizare', price: '100 RON' },
        { service: 'Pachet igienizare (detartraj, periaj, air-flow)', price: '300 RON' },
        { service: 'Sigilare dentara clasica', price: '150 RON' },
      ],
    },
    {
      title: 'Protetică dentară',
      items: [
        { service: 'Incrustatie compozit', price: '400 RON' },
        { service: 'Onlay/Inlay ceramica/zirconiu', price: '700 RON' },
        { service: 'Aplicare capa de vindecare', price: '100 RON' },
        { service: 'Cimentare(per dinte)', price: '50 RON' },
        { service: 'Plasa metalica proteze', price: '500 RON' },
        { service: 'Proteza Kemeny', price: '400 RON' },
        { service: 'Proteza cu capse pe 4 implanturi', price: '13000 RON' },
        { service: 'Proteza cu capse pe 2 implanturi', price: '9000 RON' },
        { service: 'Schimb teflon proteza capse', price: '200 RON' },
        { service: 'Proteza pe sisteme multiunit ( 4 implanturi ) dinti zirconiu', price: '24000 RON' },
        { service: 'Coroana provizorie in cabinet', price: '100 RON' },
        { service: 'Proteza pe sisteme multiunit (5 implanturi) dinti zirconiu', price: '24500 RON' },
        { service: 'Adaugare dinte/croset pe proteza', price: '200 RON' },
        { service: 'Ablatie lucrare veche', price: '50 RON' },
        { service: 'Capsa proteza', price: '1000 RON' },
        { service: 'Captusire proteza', price: '250 RON' },
        { service: 'Proteza scheletata pe capse (pretul NU include contravaloarea capsei de 500 lei)', price: '2000 RON' },
        { service: 'Cimentare provizorie(per dinte)', price: '30 RON' },
        { service: 'Proteza elastica', price: '2000 RON' },
        { service: 'Captusire molosil', price: '150 RON' },
        { service: 'Coroana zirconiu pe implant', price: '390 EUR*' },
        { service: 'Reconstructie corono - radiculara metalica', price: '200 RON' },
        { service: 'Wax-up', price: '100 RON' },
        { service: 'Fatete dentare', price: '2000 RON' },
        { service: 'Coroana Emax (ceramica presata)', price: '1700 RON' },
        { service: 'Coroana integral zirconiu', price: '1500 RON' },
        { service: 'Coroana metalo-ceramica', price: '900 RON' },
        { service: 'Reconstructie cu pivot fibra de sticla', price: '350 RON' },
        { service: 'Reparatie proteza', price: '300 RON' },
        { service: 'Reconstructie corono - radiculara zirconiu', price: '400 RON' },
        { service: 'Coroana provizorie in laborator (PMMA)', price: '300 RON' },
        { service: 'Coroana metalica', price: '350 RON' },
        { service: 'Proteza pe sisteme multiunit (6 implanturi), dinti zirconiu', price: '25000 RON' },
        { service: 'Coroana semifizionomica metalo-ceramica', price: '600 RON' },
        { service: 'Proteza pe sisteme multiunit ( 4 implanturi) dinti acrilat', price: '16000 RON' },
        { service: 'Proteza mobila acrilica', price: '1500 RON' },
        { service: 'Proteza pe sisteme multiunit ( 5 implanturi ) dinti acrilat', price: '17000 RON' },
        { service: 'Proteza pe sisteme multiunit ( 4 implanturi ) dinti acrilat', price: '18000 RON' },
        { service: 'Proteza cu capse pe 3 implanturi', price: '11000 RON' },
        { service: 'Coroana pe implant dentar - metalo-ceramica', price: '350 EUR*' },
        { service: 'Proteza pe sisteme multiunit ( 6 implanturi) dinti acrilat', price: '18000 RON' },
      ],
    },
    {
      title: 'Terapie dentară',
      items: [
        { service: 'Obturație coronara posterioara', price: '350 RON' },
        { service: 'Fatetare directa in cabinet rasina compozit', price: '500 RON' },
        { service: 'Obturație coronara frontala compozit', price: '370 RON' },
        { service: 'Tratament desensibilizant (per dinte)', price: '50 RON' },
      ],
    },
  ];

  const importantInfo = [
    'Transparență totală - fără costuri ascunse',
    'Prețurile afișate în EUR se achită în RON, la cursul BNR din ziua plății.',
  ];

  return (
    <div className="min-h-screen pt-20">
      <Helmet>
        <title>Prețuri servicii stomatologice București | DrDent</title>
        <meta name="description" content="Consultă prețurile DrDent pentru servicii stomatologice în București: consultații, extracții, implanturi, tratamente endodontice, ortodonție și profilaxie." />
        <link rel="canonical" href="https://drdent.ro/preturi" />
        <meta name="robots" content="index,follow" />
        <meta property="og:title" content="Prețuri servicii stomatologice București | DrDent" />
        <meta property="og:description" content="Consultă prețurile DrDent pentru servicii stomatologice în București: consultații, extracții, implanturi, tratamente endodontice, ortodonție și profilaxie." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://drdent.ro/preturi" />
        <meta property="og:locale" content="ro_RO" />
      </Helmet>
      {/* Page Header */}
      <section className="bg-gradient-to-br from-primary-500 to-primary-700 text-white py-12 md:py-16">
        <div className="container mx-auto px-4 text-center">
          <motion.h1
            className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            Tarife și Prețuri Complete
          </motion.h1>
          <motion.p
            className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            Transparență completă și prețuri competitive în RON și EUR
          </motion.p>
        </div>
      </section>

      {/* Intro */}
      <section className="section bg-white py-8 md:py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-base md:text-lg text-gray-600 leading-relaxed mb-4">
              Oferim tarife transparente și competitive pentru toate serviciile noastre dentare.
            </p>
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


      {/* Important Info */}
      <section className="section bg-gradient-to-br from-primary-50 to-primary-100 py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-xl md:rounded-2xl shadow-xl p-6 md:p-8">
              <h3 className="text-xl md:text-2xl font-heading font-bold text-gray-900 mb-4 md:mb-6 flex items-center gap-2">
                <Shield className="w-5 h-5 md:w-6 md:h-6 text-primary-500" />
                Informații importante
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
            Contactați-ne pentru o consultație gratuită și aflați costurile exacte pentru tratamentul dumneavoastră.
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
              href="mailto:programare@drdent.ro"
              className="inline-flex items-center justify-center gap-2 px-6 md:px-8 py-3 md:py-4 border-2 border-white text-white hover:bg-white hover:text-primary-600 rounded-xl font-semibold text-base md:text-lg transition-all"
            >
              <Calendar className="w-5 h-5" />
              Trimiteți email
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
 
export default Fees;
