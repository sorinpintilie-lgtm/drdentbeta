import { ArrowRight, BookOpen, Calendar, Mail, Phone } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { groupResourcesByCategory } from '../data/resourcesData';

function Resources() {
  const resourceCategories = groupResourcesByCategory();

  return (
    <div className="min-h-screen pt-20">
      <Helmet>
        <title>Resurse stomatologice pentru pacienți | DrDent București</title>
        <meta name="description" content="Articole utile despre tratamente dentare, recuperare, igienă orală și întrebări frecvente pentru pacienții DrDent din București." />
        <meta name="robots" content="index,follow" />
        <meta property="og:title" content="Resurse pentru pacienți | DrDent" />
        <meta property="og:description" content="Ghiduri de îngrijire, articole educaționale și resurse utile despre tratamente dentare." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://drdent.ro/resources" />
        <link rel="canonical" href="https://drdent.ro/resources" />
      </Helmet>
      <section className="bg-gradient-to-br from-primary-500 to-primary-700 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <BookOpen className="w-16 h-16 mx-auto mb-4 text-white/90" />
            <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">
              Resurse pentru pacienți
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Ghiduri utile, articole educaționale și resurse SEO dedicate pacienților care caută
              informații clare despre tratamente, recuperare și sănătatea orală.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="bg-white py-12">
        <div className="container mx-auto px-4">
          <p className="text-lg text-gray-600 text-center max-w-4xl mx-auto leading-relaxed">
            Pagina de resurse DrDent reunește articole utile despre îngrijirea dinților și a
            gingiilor, recuperarea după proceduri stomatologice și informații de bază despre
            tratamentele pe care pacienții le caută frecvent. Fiecare articol are propriul URL și
            poate fi accesat separat.
          </p>
        </div>
      </section>

      {resourceCategories.map((category, categoryIndex) => {
        const CategoryIcon = category.icon;

        if (!category.resources.length) {
          return null;
        }

        return (
          <section
            key={category.category}
            className={`py-16 ${categoryIndex % 2 === 0 ? 'bg-gray-50' : 'bg-white'}`}
          >
            <div className="container mx-auto px-4">
              <motion.div
                className="text-center mb-12"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 rounded-2xl mb-4">
                  <CategoryIcon className="w-6 h-6 text-primary-600" />
                </div>
                <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-3">
                  {category.title}
                </h2>
                <p className="text-gray-600 max-w-3xl mx-auto">{category.intro}</p>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {category.resources.map((resource, resourceIndex) => (
                  <motion.article
                    key={resource.slug}
                    className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all hover:-translate-y-1 border border-gray-100 flex flex-col"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: resourceIndex * 0.06 }}
                  >
                    <div className="mb-4 inline-flex">
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-primary-50 text-primary-700">
                        {resource.readTime} citire
                      </span>
                    </div>

                    <h3 className="text-xl font-heading font-bold text-gray-900 mb-3">
                      {resource.title}
                    </h3>

                    <p className="text-gray-600 leading-relaxed mb-6 flex-grow">
                      {resource.description}
                    </p>

                    <Link
                      to={`/resources/${resource.slug}`}
                      className="inline-flex items-center gap-2 text-primary-600 hover:text-primary-700 font-semibold transition-colors mt-auto"
                    >
                      <ArrowRight className="w-4 h-4" />
                      Citește articolul
                    </Link>
                  </motion.article>
                ))}
              </div>
            </div>
          </section>
        );
      })}

      <section className="bg-gradient-to-br from-primary-600 to-primary-800 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-3xl font-heading font-bold mb-4">
            Aveți nevoie de mai multe informații?
          </h3>
          <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
            Echipa DrDent vă poate ajuta cu recomandări personalizate, investigații și programări
            pentru evaluare.
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
              Trimiteți email
            </a>

            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-white text-white hover:bg-white hover:text-primary-600 rounded-xl font-semibold text-lg transition-all"
            >
              <Calendar className="w-5 h-5" />
              Programează o consultație
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Resources;
