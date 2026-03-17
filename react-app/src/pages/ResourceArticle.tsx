import { useEffect, useMemo } from 'react';
import { Link, useParams } from 'react-router-dom';
import { ArrowLeft, Calendar, Clock, Phone, Tag } from 'lucide-react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { getRelatedResources, getResource } from '../data/resourcesData';

function formatDate(date: string) {
  try {
    return new Intl.DateTimeFormat('ro-RO', {
      day: '2-digit',
      month: 'long',
      year: 'numeric',
    }).format(new Date(date));
  } catch {
    return date;
  }
}

function ResourceArticle() {
  const { slug } = useParams();
  const article = useMemo(() => getResource(slug || ''), [slug]);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'auto' });
  }, [slug]);

  const relatedResources = useMemo(
    () => getRelatedResources(article?.related).filter((item) => item.slug !== article?.slug).slice(0, 3),
    [article]
  );

  const canonicalUrl = article ? `https://drdent.ro/resources/${article.slug}` : '';

  if (!article) {
    return (
      <>
        <Helmet>
          <title>Resursă negăsită | DrDent</title>
          <meta name="robots" content="noindex,follow" />
        </Helmet>
        <div className="min-h-screen pt-20 flex items-center justify-center px-4">
          <div className="text-center max-w-lg">
            <h1 className="text-3xl font-heading font-bold text-gray-900 mb-4">
              Resursa nu a fost găsită
            </h1>
            <p className="text-gray-600 mb-6">
              Articolul căutat nu este disponibil momentan sau slug-ul nu există.
            </p>
            <Link
              to="/resources"
              className="inline-flex items-center gap-2 text-primary-600 hover:text-primary-700 font-semibold"
            >
              <ArrowLeft className="w-4 h-4" />
              Înapoi la resurse
            </Link>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <Helmet>
        <title>{article.seoTitle}</title>
        <meta name="description" content={article.metaDescription} />
        <meta name="robots" content="index,follow" />
        <meta property="og:title" content={article.seoTitle} />
        <meta property="og:description" content={article.metaDescription} />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={canonicalUrl} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={article.seoTitle} />
        <meta name="twitter:description" content={article.metaDescription} />
        <link rel="canonical" href={canonicalUrl} />
        <script type="application/ld+json">
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Article',
            headline: article.title,
            description: article.metaDescription,
            mainEntityOfPage: canonicalUrl,
            dateModified: article.lastUpdated,
            author: {
              '@type': 'Organization',
              name: 'DrDent',
            },
            publisher: {
              '@type': 'Organization',
              name: 'DrDent',
            },
            keywords: article.seoKeywords.join(', '),
          })}
        </script>
        {article.faq?.length && (
          <script type="application/ld+json">
            {JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'FAQPage',
              mainEntity: article.faq.map((item: { question: string; answer: string }) => ({
                '@type': 'Question',
                name: item.question,
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: item.answer,
                },
              })),
            })}
          </script>
        )}
      </Helmet>
      <div className="min-h-screen pt-20">
      <section className="bg-gradient-to-br from-primary-500 to-primary-700 text-white py-12">
        <div className="container mx-auto px-4">
          <Link
            to="/resources"
            className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-6"
          >
            <ArrowLeft className="w-4 h-4" />
            Înapoi la resurse
          </Link>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <span className="inline-flex px-3 py-1 bg-white/20 rounded-full text-sm mb-4">
              {article.categoryTitle}
            </span>

            <h1 className="text-3xl md:text-5xl font-heading font-bold mb-4 max-w-5xl">
              {article.title}
            </h1>

            <p className="text-lg md:text-xl text-white/90 mb-6 max-w-3xl">{article.description}</p>

            <div className="flex flex-wrap gap-4 text-white/80 text-sm">
              <span className="inline-flex items-center gap-2">
                <Clock className="w-4 h-4" />
                {article.readTime} citire
              </span>
              <span className="inline-flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                Actualizat: {formatDate(article.lastUpdated)}
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <article className="prose prose-lg max-w-none">
              <p className="text-xl text-gray-700 leading-relaxed">{article.excerpt}</p>

              {article.content.map((section) => (
                <section key={section.heading} className="mt-10">
                  <h2 className="text-2xl md:text-3xl font-heading font-bold text-gray-900 mb-4">
                    {section.heading}
                  </h2>
                  {section.paragraphs.map((paragraph, index) => (
                    <p key={`${section.heading}-${index}`} className="text-gray-700 leading-relaxed mb-5">
                      {paragraph}
                    </p>
                  ))}
                </section>
              ))}

              {article.faq?.length ? (
                <section className="mt-12">
                  <h2 className="text-2xl md:text-3xl font-heading font-bold text-gray-900 mb-6">
                    Întrebări frecvente
                  </h2>
                  <div className="space-y-4">
                    {article.faq.map((item) => (
                      <div key={item.question} className="rounded-2xl border border-gray-200 p-5">
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.question}</h3>
                        <p className="text-gray-700 leading-relaxed mb-0">{item.answer}</p>
                      </div>
                    ))}
                  </div>
                </section>
              ) : null}
            </article>

            <div className="mt-10 flex flex-wrap gap-2">
              {article.seoKeywords.map((keyword) => (
                <span
                  key={keyword}
                  className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-50 text-primary-700 text-sm font-medium"
                >
                  <Tag className="w-4 h-4" />
                  {keyword}
                </span>
              ))}
            </div>

            <div className="mt-12 rounded-3xl bg-gray-50 border border-gray-100 p-8">
              <h3 className="text-2xl font-heading font-bold text-gray-900 mb-3">
                Aveți nevoie de o evaluare?
              </h3>
              <p className="text-gray-600 mb-6">
                Dacă aveți simptome sau întrebări legate de tratamentul descris în acest articol,
                o consultație vă poate oferi un răspuns clar și un plan potrivit.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="tel:+40726530591"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-primary-600 text-white rounded-xl font-semibold hover:bg-primary-700 transition-colors"
                >
                  <Phone className="w-5 h-5" />
                  Sunați acum
                </a>

                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 border-2 border-primary-600 text-primary-600 rounded-xl font-semibold hover:bg-primary-50 transition-colors"
                >
                  <Calendar className="w-5 h-5" />
                  Programează o consultație
                </Link>

                <Link
                  to="/preturi"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 border-2 border-gray-300 text-gray-700 rounded-xl font-semibold hover:bg-white transition-colors"
                >
                  Vezi prețurile
                </Link>
              </div>
            </div>

            {relatedResources.length ? (
              <section className="mt-14">
                <h2 className="text-2xl md:text-3xl font-heading font-bold text-gray-900 mb-6">
                  Resurse similare
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {relatedResources.map((related) => (
                    <Link
                      key={related.slug}
                      to={`/resources/${related.slug}`}
                      className="rounded-2xl border border-gray-200 p-5 hover:border-primary-200 hover:shadow-md transition-all"
                    >
                      <p className="text-sm text-primary-700 font-semibold mb-2">{related.categoryTitle}</p>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">{related.title}</h3>
                      <p className="text-gray-600 text-sm leading-relaxed">{related.description}</p>
                    </Link>
                  ))}
                </div>
              </section>
            ) : null}
          </div>
        </div>
      </section>
    </div>
    </>
  );
}

export default ResourceArticle;
