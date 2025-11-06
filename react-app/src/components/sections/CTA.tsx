import { motion } from 'framer-motion';
import { Smile, Calendar, Phone } from 'lucide-react';

/**
 * CTA (Call-to-Action) Section Component
 * Prominent section encouraging users to book an appointment
 */

interface CTAProps {
  title?: string;
  description?: string;
  primaryButtonText?: string;
  primaryButtonHref?: string;
  secondaryButtonText?: string;
  secondaryButtonHref?: string;
  variant?: 'gradient' | 'solid' | 'image';
  backgroundImage?: string;
}

export function CTA({
  title = 'Pregătit pentru un Zâmbet Perfect?',
  description = 'Programează o consultație gratuită și descoperă cum te putem ajuta să obții zâmbetul pe care ți-l dorești.',
  primaryButtonText = 'Programează Acum',
  primaryButtonHref = 'tel:+40213449317',
  secondaryButtonText = 'Sună Acum',
  secondaryButtonHref = 'tel:+40213449317',
  variant = 'gradient',
  backgroundImage,
}: CTAProps) {
  const containerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const getBackgroundClasses = () => {
    switch (variant) {
      case 'gradient':
        return 'bg-gradient-to-br from-primary-600 via-primary-700 to-primary-800';
      case 'solid':
        return 'bg-primary-600';
      case 'image':
        return 'bg-cover bg-center relative';
      default:
        return 'bg-gradient-to-br from-primary-600 to-primary-800';
    }
  };

  return (
    <section className={`py-16 md:py-24 relative overflow-hidden ${getBackgroundClasses()}`}>
      {variant === 'image' && backgroundImage && (
        <>
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${backgroundImage})` }}
          />
          <div className="absolute inset-0 bg-primary-900/80 backdrop-blur-sm" />
        </>
      )}

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          className="max-w-4xl mx-auto text-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {/* Icon */}
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center justify-center w-16 h-16 md:w-20 md:h-20 bg-white/10 backdrop-blur-sm rounded-2xl mb-6"
          >
            <Smile className="w-10 h-10 md:w-12 md:h-12 text-white" />
          </motion.div>

          {/* Title */}
          <motion.h2
            variants={itemVariants}
            className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-white mb-4 md:mb-6"
          >
            {title}
          </motion.h2>

          {/* Description */}
          <motion.p
            variants={itemVariants}
            className="text-lg md:text-xl text-white/90 mb-8 md:mb-10 max-w-2xl mx-auto leading-relaxed"
          >
            {description}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <a
              href={primaryButtonHref}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 text-lg min-h-[56px] w-full sm:w-auto bg-white text-primary-600 hover:bg-gray-50 shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all rounded-lg font-semibold"
            >
              <Calendar className="w-5 h-5" />
              {primaryButtonText}
            </a>
            <a
              href={secondaryButtonHref}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 text-lg min-h-[56px] w-full sm:w-auto border-2 border-white text-white hover:bg-white hover:text-primary-600 shadow-lg rounded-lg font-semibold transition-all"
            >
              <Phone className="w-5 h-5" />
              {secondaryButtonText}
            </a>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div
            variants={itemVariants}
            className="mt-10 md:mt-12 flex flex-wrap justify-center gap-6 md:gap-8 text-white/80"
          >
            <div className="flex items-center gap-2">
              <svg
                className="w-5 h-5 text-yellow-400"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              <span className="text-sm font-medium">5.0 Rating</span>
            </div>
            <div className="flex items-center gap-2">
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <span className="text-sm font-medium">Consultație Gratuită</span>
            </div>
            <div className="flex items-center gap-2">
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <span className="text-sm font-medium">Răspuns Rapid</span>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
    </section>
  );
}

export default CTA;