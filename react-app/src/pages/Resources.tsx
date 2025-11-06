import { BookOpen, FileText, Download, Star, Phone, Mail, Calendar } from 'lucide-react';
import { motion } from 'framer-motion';

/**
 * Resources Page Component
 * Patient resources including care guides, forms, and educational materials
 */

interface Resource {
  icon: JSX.Element;
  title: string;
  description: string;
  actionText: string;
  actionHref?: string;
  meta?: string;
}

interface ResourceCategory {
  title: string;
  icon: JSX.Element;
  resources: Resource[];
}

function Resources() {
  const resourceCategories: ResourceCategory[] = [
    {
      title: 'Ghiduri de Îngrijire',
      icon: <BookOpen className="w-6 h-6" />,
      resources: [
        {
          icon: <BookOpen className="w-8 h-8 text-primary-500" />,
          title: 'Înainte de Tratament',
          description: 'Pregătiți-vă pentru vizita la dentist cu acest ghid complet. Aflați ce să așteptați și cum să vă pregătiți pentru diferite proceduri dentare.',
          actionText: 'Citește Ghidul',
          actionHref: '#',
        },
        {
          icon: <BookOpen className="w-8 h-8 text-primary-500" />,
          title: 'După Extracție Dentară',
          description: 'Instrucțiuni detaliate pentru îngrijirea post-extracție. Aflați cum să gestionați durerea, umflarea și să promovați vindecarea rapidă.',
          actionText: 'Citește Ghidul',
          actionHref: '#',
        },
        {
          icon: <BookOpen className="w-8 h-8 text-primary-500" />,
          title: 'După Implant Dentar',
          description: 'Ghid complet pentru îngrijirea implanturilor dentare. Învățați cele mai bune practici pentru a asigura succesul pe termen lung al implantului.',
          actionText: 'Citește Ghidul',
          actionHref: '#',
        },
        {
          icon: <BookOpen className="w-8 h-8 text-primary-500" />,
          title: 'Îngrijirea Coroanelor și Fațetelor',
          description: 'Mențineți restaurările estetice în stare perfectă. Sfaturi pentru curățare, alimentație și îngrijire zilnică a coroanelor și fațetelor.',
          actionText: 'Citește Ghidul',
          actionHref: '#',
        },
        {
          icon: <BookOpen className="w-8 h-8 text-primary-500" />,
          title: 'Îngrijire Zilnică Orală',
          description: 'Rutina perfectă pentru sănătatea orală. Tehnici de periaj, folosirea aței dentare și recomandări pentru produse de îngrijire.',
          actionText: 'Citește Ghidul',
          actionHref: '#',
        },
        {
          icon: <BookOpen className="w-8 h-8 text-primary-500" />,
          title: 'Îngrijirea Protezelor Dentare',
          description: 'Păstrați protezele curate și confortabile. Instrucțiuni pentru curățare, depozitare și întreținere zilnică a protezelor.',
          actionText: 'Citește Ghidul',
          actionHref: '#',
        },
      ],
    },
    {
      title: 'Formulare Descărcabile',
      icon: <FileText className="w-6 h-6" />,
      resources: [
        {
          icon: <FileText className="w-8 h-8 text-primary-500" />,
          title: 'Formular Istoric Medical',
          description: 'Completați acest formular înainte de prima vizită pentru a ne ajuta să înțelegem mai bine starea dumneavoastră de sănătate generală și dentară.',
          actionText: 'Descarcă Formular',
          actionHref: '#',
          meta: 'PDF',
        },
        {
          icon: <FileText className="w-8 h-8 text-primary-500" />,
          title: 'Formular de Consimțământ',
          description: 'Formular de consimțământ informat pentru tratamente dentare. Citiți cu atenție și completați înainte de proceduri.',
          actionText: 'Descarcă Formular',
          actionHref: '#',
          meta: 'PDF',
        },
        {
          icon: <FileText className="w-8 h-8 text-primary-500" />,
          title: 'Formular de Programare',
          description: 'Solicitați o programare completând acest formular. Vă vom contacta în cel mai scurt timp pentru confirmare.',
          actionText: 'Descarcă Formular',
          actionHref: '#',
          meta: 'PDF',
        },
        {
          icon: <FileText className="w-8 h-8 text-primary-500" />,
          title: 'Formular Asigurări',
          description: 'Informații necesare pentru procesarea asigurării dentare. Completați cu detaliile poliței dumneavoastră de asigurare.',
          actionText: 'Descarcă Formular',
          actionHref: '#',
          meta: 'PDF',
        },
      ],
    },
    {
      title: 'Educație Dentară',
      icon: <Star className="w-6 h-6" />,
      resources: [
        {
          icon: <Star className="w-8 h-8 text-primary-500" />,
          title: 'Înțelegerea Cariilor Dentare',
          description: 'Aflați cum se formează cariile, cum pot fi prevenite și ce opțiuni de tratament sunt disponibile pentru restaurarea dinților afectați.',
          actionText: 'Citește Articolul',
          actionHref: '#',
        },
        {
          icon: <Star className="w-8 h-8 text-primary-500" />,
          title: 'Boala Parodontală',
          description: 'Ghid complet despre boala gingiilor: simptome, cauze, stadii și tratamente. Învățați cum să preveniți și să gestionați această afecțiune.',
          actionText: 'Citește Articolul',
          actionHref: '#',
        },
        {
          icon: <Star className="w-8 h-8 text-primary-500" />,
          title: 'Implanturile Dentare Explicate',
          description: 'Tot ce trebuie să știți despre implanturile dentare: procedura, beneficii, îngrijire și ce să așteptați în timpul procesului de vindecare.',
          actionText: 'Citește Articolul',
          actionHref: '#',
        },
        {
          icon: <Star className="w-8 h-8 text-primary-500" />,
          title: 'Albirea Dentară: Opțiuni și Rezultate',
          description: 'Explorați diferitele metode de albire dentară, de la tratamente profesionale la produse de acasă, și aflați care este cea mai potrivită pentru dumneavoastră.',
          actionText: 'Citește Articolul',
          actionHref: '#',
        },
        {
          icon: <Star className="w-8 h-8 text-primary-500" />,
          title: 'Tehnologia CEREC',
          description: 'Descoperiți cum tehnologia CEREC revoluționează stomatologia modernă, oferind restaurări de calitate în aceeași zi cu precizie digitală.',
          actionText: 'Citește Articolul',
          actionHref: '#',
        },
        {
          icon: <Star className="w-8 h-8 text-primary-500" />,
          title: 'Sănătatea Orală la Copii',
          description: 'Ghid pentru părinți despre îngrijirea dentară a copiilor: de la primii dinți până la adolescență, prevenție și vizite regulate.',
          actionText: 'Citește Articolul',
          actionHref: '#',
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
            <BookOpen className="w-16 h-16 mx-auto mb-4 text-white/90" />
            <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">
              Resurse pentru Pacienți
            </h1>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              Informații utile pentru îngrijirea sănătății dumneavoastră orale
            </p>
          </motion.div>
        </div>
      </section>

      {/* Intro */}
      <section className="section bg-white py-12">
        <div className="container mx-auto px-4">
          <p className="text-lg text-gray-600 text-center max-w-3xl mx-auto leading-relaxed">
            Bine ați venit la centrul nostru de resurse! Aici veți găsi ghiduri detaliate de îngrijire, formulare necesare, materiale educaționale și răspunsuri la întrebările dumneavoastră. Toate resursele sunt create pentru a vă ajuta să mențineți un zâmbet sănătos și să înțelegeți mai bine îngrijirea dentară.
          </p>
        </div>
      </section>

      {/* Resource Categories */}
      {resourceCategories.map((category, categoryIndex) => (
        <section
          key={categoryIndex}
          className={`section py-16 ${categoryIndex % 2 === 0 ? 'bg-gray-50' : 'bg-white'}`}
        >
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 rounded-2xl mb-4">
                {category.icon}
              </div>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900">
                {category.title}
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {category.resources.map((resource, resourceIndex) => (
                <motion.div
                  key={resourceIndex}
                  className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all hover:-translate-y-2 border border-gray-100"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: resourceIndex * 0.1 }}
                >
                  <div className="mb-4">{resource.icon}</div>
                  <h3 className="text-xl font-heading font-bold text-gray-900 mb-3">
                    {resource.title}
                  </h3>
                  {resource.meta && (
                    <span className="inline-block px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-sm font-semibold mb-3">
                      {resource.meta}
                    </span>
                  )}
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {resource.description}
                  </p>
                  <a
                    href={resource.actionHref}
                    className="inline-flex items-center gap-2 text-primary-600 hover:text-primary-700 font-semibold transition-colors"
                  >
                    <Download className="w-4 h-4" />
                    {resource.actionText}
                  </a>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* CTA Section */}
      <section className="section bg-gradient-to-br from-primary-600 to-primary-800 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-3xl font-heading font-bold mb-4">
            Aveți nevoie de mai multe informații?
          </h3>
          <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
            Echipa noastră este aici pentru a vă ajuta cu orice întrebări despre îngrijirea dentară. Contactați-ne astăzi!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+40213449317"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-primary-600 rounded-xl font-semibold text-lg hover:bg-gray-50 transition-all hover:scale-105 shadow-xl"
            >
              <Phone className="w-5 h-5" />
              Sunați: +40 21 344 9317
            </a>
            <a
              href="mailto:contact@drdent.ro"
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

export default Resources;