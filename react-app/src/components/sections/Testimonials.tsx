import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { TestimonialCard } from '../ui/TestimonialCard';
import type { Testimonial } from '../../types/components';

const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Maria Popescu',
    rating: 5,
    text: 'Am fost impresionată de profesionalismul echipei și de tehnologia modernă folosită. Implantul dentar a fost realizat fără durere și rezultatul este perfect. Recomand cu încredere!',
    verified: true,
    service: 'Implant Dentar',
  },
  {
    id: '2',
    name: 'Alexandru Ionescu',
    rating: 5,
    text: 'După ani de zile în care am evitat dentistul, am găsit în sfârșit o clinică unde mă simt confortabil. Echipa este prietenoasă, iar tratamentul ortodontic progresează excelent.',
    verified: true,
    service: 'Ortodonție',
  },
  {
    id: '3',
    name: 'Elena Dumitrescu',
    rating: 5,
    text: 'Albirea dentară profesională a depășit așteptările mele! Rezultatul este natural și strălucitor. Personalul este foarte atent și răbdător cu toate întrebările mele.',
    verified: true,
    service: 'Estetică Dentară',
  },
  {
    id: '4',
    name: 'Andrei Constantinescu',
    rating: 5,
    text: 'Tratamentul canalului radicular a fost mult mai ușor decât mă așteptam. Doctorul a explicat fiecare pas și s-a asigurat că sunt confortabil. Clinică modernă, echipament de top!',
    verified: true,
    service: 'Endodonție',
  },
  {
    id: '5',
    name: 'Ioana Radu',
    rating: 5,
    text: 'Copiii mei adoră să vină la control! Personalul este minunat cu cei mici, iar cabinetul este primitor și curat. Ne simțim ca acasă aici.',
    verified: true,
    service: 'Stomatologie Pediatrică',
  },
  {
    id: '6',
    name: 'Mihai Georgescu',
    rating: 5,
    text: 'Proteza dentară realizată cu tehnologia CEREC este incredibilă - precisă, rapidă și confortabilă. Nu mai trebuie să aștept săptămâni pentru rezultate!',
    verified: true,
    service: 'Protetică Dentară',
  },
];

export const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [direction, setDirection] = useState(0);
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying || !inView) return;

    const interval = setInterval(() => {
      handleNext();
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, [currentIndex, isAutoPlaying, inView]);

  const handleNext = useCallback(() => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  }, []);

  const handlePrev = useCallback(() => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  }, []);

  const handleDotClick = (index: number) => {
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
    setIsAutoPlaying(false);
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') {
        handlePrev();
        setIsAutoPlaying(false);
      } else if (e.key === 'ArrowRight') {
        handleNext();
        setIsAutoPlaying(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleNext, handlePrev]);

  // Swipe gesture support
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);

  const minSwipeDistance = 50;

  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;

    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) {
      handleNext();
      setIsAutoPlaying(false);
    } else if (isRightSwipe) {
      handlePrev();
      setIsAutoPlaying(false);
    }
  };

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    }),
  };

  return (
    <section
      ref={ref}
      className="py-8 sm:py-12 md:py-16 lg:py-20 xl:py-24 bg-gradient-to-br from-gray-50 to-white"
      aria-labelledby="testimonials-heading"
      onMouseEnter={() => setIsAutoPlaying(false)}
      onMouseLeave={() => setIsAutoPlaying(true)}
    >
      <div className="container mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
        {/* Section Header - Compact */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-6 sm:mb-8 md:mb-12 lg:mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="inline-block mb-2 sm:mb-3 md:mb-4"
          >
            <span className="inline-flex items-center gap-1 sm:gap-2 px-3 sm:px-4 py-1 sm:py-2 bg-[#0066cc]/10 text-[#0066cc] rounded-full text-xs sm:text-sm font-semibold">
              <Quote className="w-3 h-3 sm:w-4 sm:h-4" />
              Mărturii
            </span>
          </motion.div>

          <h2
            id="testimonials-heading"
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-2 sm:mb-3 md:mb-4 px-2"
          >
            Ce Spun Pacienții Noștri
          </h2>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-2">
            Descoperă experiențele pacienților și motivele pentru care recomandă DrDent.
          </p>
        </motion.div>

        {/* Carousel Container - Compact */}
        <div className="relative max-w-6xl mx-auto">
          {/* Navigation Buttons - Desktop Only */}
          <div className="hidden lg:block">
            <button
              onClick={() => {
                handlePrev();
                setIsAutoPlaying(false);
              }}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 xl:-translate-x-16 z-10 w-10 h-10 xl:w-12 xl:h-12 flex items-center justify-center bg-white rounded-full shadow-lg hover:bg-gray-50 transition-all hover:scale-110 focus:outline-none focus:ring-2 focus:ring-[#0080ff]/30"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-5 h-5 xl:w-6 xl:h-6 text-gray-700" />
            </button>
            <button
              onClick={() => {
                handleNext();
                setIsAutoPlaying(false);
              }}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 xl:translate-x-16 z-10 w-10 h-10 xl:w-12 xl:h-12 flex items-center justify-center bg-white rounded-full shadow-lg hover:bg-gray-50 transition-all hover:scale-110 focus:outline-none focus:ring-2 focus:ring-[#0080ff]/30"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-5 h-5 xl:w-6 xl:h-6 text-gray-700" />
            </button>
          </div>

          {/* Testimonials Slider - Touch optimized */}
          <div
            className="relative overflow-hidden rounded-xl sm:rounded-2xl"
            onTouchStart={onTouchStart}
            onTouchMove={onTouchMove}
            onTouchEnd={onTouchEnd}
          >
            <AnimatePresence initial={false} custom={direction} mode="wait">
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: 'spring', stiffness: 300, damping: 30 },
                  opacity: { duration: 0.2 },
                }}
                className="px-2 sm:px-0"
              >
                {/* Current testimonial - Full width on mobile */}
                <TestimonialCard
                  testimonial={testimonials[currentIndex]}
                  className="w-full"
                />
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Dots - Smaller on mobile */}
          <div className="flex items-center justify-center gap-1.5 sm:gap-2 mt-4 sm:mt-6 md:mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => handleDotClick(index)}
                className={`transition-all focus:outline-none focus:ring-1 focus:ring-[#0080ff]/30 rounded-full ${
                  index === currentIndex
                    ? 'w-6 sm:w-8 h-2 sm:h-3 bg-[#0066cc]'
                    : 'w-2 sm:w-3 h-2 sm:h-3 bg-gray-300 hover:bg-gray-400'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
                aria-current={index === currentIndex}
              />
            ))}
          </div>

          {/* Mobile Navigation Buttons - Compact */}
          <div className="flex lg:hidden items-center justify-center gap-3 sm:gap-4 mt-4 sm:mt-6">
            <button
              onClick={() => {
                handlePrev();
                setIsAutoPlaying(false);
              }}
              className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center bg-white rounded-full shadow-md hover:shadow-lg hover:bg-gray-50 transition-all hover:scale-105 focus:outline-none focus:ring-2 focus:ring-[#0080ff]/30"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 text-gray-700" />
            </button>
            <button
              onClick={() => {
                handleNext();
                setIsAutoPlaying(false);
              }}
              className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center bg-white rounded-full shadow-md hover:shadow-lg hover:bg-gray-50 transition-all hover:scale-105 focus:outline-none focus:ring-2 focus:ring-[#0080ff]/30"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 text-gray-700" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
