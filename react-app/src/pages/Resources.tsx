import { BookOpen, Download, Star, Phone, Mail, Calendar, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

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
  detailedDescription?: string;
}

interface ResourceCategory {
  title: string;
  icon: JSX.Element;
  resources: Resource[];
}

function Resources() {
  const [selectedResource, setSelectedResource] = useState<Resource | null>(null);

  const openResourceModal = (resource: Resource) => {
    setSelectedResource(resource);
  };

  const closeResourceModal = () => {
    setSelectedResource(null);
  };

  const resourceCategories: ResourceCategory[] = [
    {
      title: 'Ghiduri de îngrijire',
      icon: <BookOpen className="w-6 h-6" />,
      resources: [
        {
          icon: <BookOpen className="w-8 h-8 text-primary-500" />,
          title: 'Înainte de tratament',
          description: 'Pregătiți-vă pentru vizita la dentist cu acest ghid complet. Aflați ce să așteptați și cum să vă pregătiți pentru diferite proceduri dentare.',
          actionText: 'Citește Ghidul',
          detailedDescription: 'Vizita la medicul stomatolog începe întotdeauna cu o evaluare atentă a stării de sănătate orală. În această etapă, medicul analizează dinții, gingiile și mucoasa orală, iar la nevoie pot fi recomandate investigații suplimentare, precum radiografii sau fotografii intraorale. Scopul este stabilirea unui diagnostic corect și a unui plan de tratament personalizat.\n\nEste important ca pacientul să comunice deschis orice problemă medicală generală, tratament medicamentos urmat, alergii cunoscute sau temeri legate de procedurile stomatologice. Aceste informații ajută medicul să aleagă cea mai sigură și eficientă abordare.\n\nÎnainte de tratament, se recomandă o igienă orală corectă și respectarea indicațiilor primite în urma consultației. O bună pregătire contribuie la confortul pacientului și la obținerea unor rezultate optime.',
        },
        {
          icon: <BookOpen className="w-8 h-8 text-primary-500" />,
          title: 'După extracție dentară',
          description: 'Instrucțiuni detaliate pentru îngrijirea post-extracție. Aflați cum să gestionați durerea, umflarea și să promovați vindecarea rapidă.',
          actionText: 'Citește Ghidul',
          detailedDescription: 'După o extracție dentară, organismul are nevoie de timp pentru vindecare. În primele ore pot apărea ușoare dureri, inflamații sau sângerări minore, reacții normale ale țesuturilor. Este recomandat să se evite clătirea energică a gurii și consumul de alimente fierbinți în primele 24 de ore.\n\nPentru a favoriza vindecarea, este indicat să se evite fumatul, consumul de alcool și efortul fizic intens. Alimentația trebuie să fie una ușoară, cu alimente moi, la temperatură moderată. Igiena orală se menține cu atenție, evitând zona extracției în primele zile.\n\nRespectarea indicațiilor medicului stomatolog reduce riscul de complicații și ajută la o recuperare rapidă și fără probleme.',
        },
        {
          icon: <BookOpen className="w-8 h-8 text-primary-500" />,
          title: 'După implant dentar',
          description: 'Ghid complet pentru îngrijirea implanturilor dentare. Învățați cele mai bune practici pentru a asigura succesul pe termen lung al implantului.',
          actionText: 'Citește Ghidul',
          detailedDescription: 'Implantul dentar este o procedură modernă, sigură și predictibilă, însă succesul său depinde în mare măsură de perioada postoperatorie. După inserarea implantului, urmează o etapă importantă de vindecare, în care implantul se integrează în os.\n\nÎn această perioadă, este esențială menținerea unei igiene orale riguroase, dar delicate, precum și evitarea masticației în zona implantului. Medicul poate recomanda tratament medicamentos și controale periodice pentru monitorizarea evoluției.\n\nRespectarea recomandărilor postoperatorii contribuie la stabilitatea implantului și la obținerea unui rezultat funcțional și estetic pe termen lung.',
        },
        {
          icon: <BookOpen className="w-8 h-8 text-primary-500" />,
          title: 'Îngrijirea coroanelor și fațetelor',
          description: 'Mențineți restaurările estetice în stare perfectă. Sfaturi pentru curățare, alimentație și îngrijire zilnică a coroanelor și fațetelor.',
          actionText: 'Citește Ghidul',
          detailedDescription: 'Coroanele și fațetele dentare sunt restaurări estetice și funcționale care necesită o îngrijire corespunzătoare pentru a-și păstra aspectul și durabilitatea. Deși acestea nu se cariază, dinții naturali și gingiile din jur pot fi afectați dacă igiena orală este deficitară.\n\nPeriajul dentar de două ori pe zi, utilizarea aței dentare și controalele regulate sunt esențiale. Se recomandă evitarea obiceiurilor nocive, precum mușcarea obiectelor dure sau scrâșnirea dinților.\n\nO îngrijire corectă prelungește durata de viață a coroanelor și fațetelor și menține un zâmbet sănătos și estetic.',
        },
        {
          icon: <BookOpen className="w-8 h-8 text-primary-500" />,
          title: 'Îngrijire zilnică orală',
          description: 'Rutina perfectă pentru sănătatea orală. Tehnici de periaj, folosirea aței dentare și recomandări pentru produse de îngrijire.',
          actionText: 'Citește Ghidul',
          detailedDescription: 'Igiena orală zilnică reprezintă fundamentul sănătății dentare. Aceasta include periajul corect, de cel puțin două ori pe zi, utilizarea aței dentare și, la recomandarea medicului, a apei de gură sau a altor produse auxiliare.\n\nTehnica de periaj este la fel de importantă ca frecvența acestuia. Un periaj realizat corect ajută la îndepărtarea plăcii bacteriene și previne apariția cariilor și a inflamațiilor gingivale.\n\nO rutină zilnică bine stabilită, alături de controale periodice, contribuie la menținerea sănătății orale pe termen lung.',
        },
        {
          icon: <BookOpen className="w-8 h-8 text-primary-500" />,
          title: 'Îngrijirea protezelor dentare',
          description: 'Păstrați protezele curate și confortabile. Instrucțiuni pentru curățare, depozitare și întreținere zilnică a protezelor.',
          actionText: 'Citește Ghidul',
          detailedDescription: 'Protezele dentare necesită o îngrijire atentă pentru a rămâne confortabile și funcționale. Este recomandată curățarea zilnică cu produse special destinate protezelor și clătirea acestora după fiecare masă.\n\nProtezele trebuie îndepărtate pe timpul nopții pentru a permite mucoasei orale să se refacă. Controalele periodice sunt importante pentru ajustări și prevenirea leziunilor sau disconfortului.\n\nO proteză bine întreținută contribuie la o masticație eficientă și la o stare generală de confort.',
        },
      ],
    },
    {
      title: 'Educație dentară',
      icon: <Star className="w-6 h-6" />,
      resources: [
        {
          icon: <Star className="w-8 h-8 text-primary-500" />,
          title: 'Înțelegerea cariilor dentare',
          description: 'Aflați cum se formează cariile, cum pot fi prevenite și ce opțiuni de tratament sunt disponibile pentru restaurarea dinților afectați.',
          actionText: 'Citește Articolul',
          detailedDescription: 'Cariile dentare apar ca urmare a acumulării plăcii bacteriene și a consumului frecvent de zahăr. Acizii produși de bacterii atacă smalțul dentar, ducând la apariția leziunilor carioase.\n\nÎn fazele incipiente, cariile pot fi asimptomatice, însă netratate pot provoca durere, infecții și pierderea dintelui. Prevenția constă în igienă orală corectă, alimentație echilibrată și vizite regulate la medicul stomatolog.\n\nTratamentul realizat la timp este minim invaziv și ajută la păstrarea dintelui natural.',
        },
        {
          icon: <Star className="w-8 h-8 text-primary-500" />,
          title: 'Boala parodontală',
          description: 'Ghid complet despre boala gingiilor: simptome, cauze, stadii și tratamente. Învățați cum să preveniți și să gestionați această afecțiune.',
          actionText: 'Citește Articolul',
          detailedDescription: 'Boala parodontală afectează gingiile și structurile de susținere ale dinților. Primele semne includ sângerarea gingiilor, respirația neplăcută și inflamația. În stadii avansate, pot apărea retracția gingivală și mobilitatea dentară.\n\nCauzele includ igiena orală deficitară, fumatul și anumite afecțiuni generale. Boala parodontală poate evolua fără durere, de aceea controalele regulate sunt esențiale.\n\nTratamentul precoce ajută la stoparea evoluției bolii și la menținerea dinților pe termen lung.',
        },
        {
          icon: <Star className="w-8 h-8 text-primary-500" />,
          title: 'Implanturile dentare explicate',
          description: 'Tot ce trebuie să știți despre implanturile dentare: procedura, beneficii, îngrijire și ce să așteptați în timpul procesului de vindecare.',
          actionText: 'Citește Articolul',
          detailedDescription: 'Implanturile dentare sunt soluții moderne pentru înlocuirea dinților lipsă, oferind stabilitate și estetică naturală. Procedura presupune inserarea unui implant în os, urmată de aplicarea unei coroane dentare.\n\nImplanturile nu afectează dinții vecini și permit o masticație normală. O igienă corectă și controalele periodice sunt esențiale pentru durabilitatea acestora.\n\nUn implant bine întreținut poate reprezenta o soluție pe termen foarte lung.',
        },
        {
          icon: <Star className="w-8 h-8 text-primary-500" />,
          title: 'Albirea dentară: opțiuni și rezultate',
          description: 'Explorați diferitele metode de albire dentară, de la tratamente profesionale la produse de acasă, și aflați care este cea mai potrivită pentru dumneavoastră.',
          actionText: 'Citește Articolul',
          detailedDescription: 'Albirea dentară este o procedură estetică sigură, atunci când este realizată sub supravegherea medicului stomatolog. Există metode profesionale în cabinet și soluții personalizate pentru utilizare acasă.\n\nRezultatele depind de structura dintelui și de obiceiurile pacientului. Albirea nu afectează smalțul atunci când este realizată corect și ajută la obținerea unui zâmbet mai luminos și mai încrezător.\n\nMedicul va recomanda metoda potrivită fiecărui pacient.',
        },
        {
          icon: <Star className="w-8 h-8 text-primary-500" />,
          title: 'Sănătatea orală la copii',
          description: 'Ghid pentru părinți despre îngrijirea dentară a copiilor: de la primii dinți până la adolescență, prevenție și vizite regulate.',
          actionText: 'Citește Articolul',
          detailedDescription: 'Sănătatea orală a copiilor începe încă din primii ani de viață. Dinții temporari au un rol important în dezvoltarea corectă a dinților permanenți și a masticației.\n\nEducația privind igiena orală, alimentația echilibrată și vizitele regulate la medic sunt esențiale pentru prevenirea cariilor. O experiență pozitivă la stomatolog contribuie la reducerea anxietății și la formarea unor obiceiuri sănătoase pe termen lung.',
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
                  className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all hover:-translate-y-2 border border-gray-100 flex flex-col"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: resourceIndex * 0.1 }}
                >
                  <div className="flex-grow">
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
                  </div>
                  {resource.detailedDescription ? (
                    <button
                      onClick={() => openResourceModal(resource)}
                      className="inline-flex items-center gap-2 text-primary-600 hover:text-primary-700 font-semibold transition-colors mt-auto"
                    >
                      <Download className="w-4 h-4" />
                      {resource.actionText}
                    </button>
                  ) : (
                    <a
                      href={resource.actionHref}
                      className="inline-flex items-center gap-2 text-primary-600 hover:text-primary-700 font-semibold transition-colors mt-auto"
                    >
                      <Download className="w-4 h-4" />
                      {resource.actionText}
                    </a>
                  )}
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
              Programați o consultație
            </a>
          </div>
        </div>
      </section>

      {/* Resource Modal */}
      <AnimatePresence>
        {selectedResource && (
          <motion.div
            className="fixed inset-0 z-[1000] flex items-center justify-center bg-black/50 backdrop-blur-sm pt-16 md:pt-20 pb-20 md:pb-12 lg:pb-16"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeResourceModal}
          >
            <motion.div
              className="bg-white rounded-2xl shadow-2xl max-w-sm sm:max-w-lg md:max-w-xl lg:max-w-2xl w-full max-h-[75vh] sm:max-h-[85vh] m-4 flex flex-col"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className="sticky top-0 bg-gradient-to-r from-primary-500 to-primary-600 text-white p-3 sm:p-4 md:p-6 flex items-start justify-between z-10 rounded-t-2xl">
                <div className="flex-1">
                  <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-heading font-bold mb-1 sm:mb-2">
                    {selectedResource.title}
                  </h2>
                  <p className="text-white/80 text-[0.7rem] sm:text-xs md:text-sm">
                    {selectedResource.description}
                  </p>
                </div>
                <button
                  onClick={closeResourceModal}
                  className="p-1.5 sm:p-2 hover:bg-white/10 rounded-lg transition-colors flex-shrink-0"
                  aria-label="Închide"
                >
                  <X className="w-5 h-5 sm:w-6 sm:h-6" />
                </button>
              </div>

              {/* Modal Body */}
              <div className="flex-1 overflow-y-auto p-3 sm:p-4 md:p-6">
                <div className="prose prose-sm sm:prose-base max-w-none">
                  {selectedResource.detailedDescription?.split('\n').map((paragraph, index) => (
                    <p key={index} className="mb-4 text-gray-700 leading-relaxed">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>

              {/* Modal Footer */}
              <div className="p-3 sm:p-4 md:p-6 border-t border-gray-200 flex justify-center gap-4">
                <button
                  onClick={closeResourceModal}
                  className="px-6 py-2.5 bg-gray-500 hover:bg-gray-600 text-white rounded-xl text-base font-semibold transition-all"
                >
                  Înapoi
                </button>
                <a
                  href="tel:+40726530591"
                  onClick={() => {
                    const contactElement = document.getElementById('contact');
                    if (contactElement) {
                      contactElement.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                  className="px-6 py-2.5 bg-gradient-to-r from-primary-500 to-primary-600 text-white rounded-xl text-base font-semibold hover:shadow-lg hover:scale-105 transition-all inline-block text-center flex items-center gap-2"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Detalii de contact</span>
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default Resources;
