import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Award, Users, Star, TrendingUp } from 'lucide-react';
import type { Stat } from '../../types/components';

const stats: Stat[] = [
  {
    id: 'experience',
    value: 15,
    suffix: '+',
    label: 'Ani Experiență',
    icon: <Award className="w-8 h-8" />,
  },
  {
    id: 'patients',
    value: 1000,
    suffix: '+',
    label: 'Pacienți Mulțumiți',
    icon: <Users className="w-8 h-8" />,
  },
  {
    id: 'rating',
    value: 5.0,
    suffix: '',
    label: 'Rating Mediu',
    icon: <Star className="w-8 h-8" />,
  },
  {
    id: 'satisfaction',
    value: 98,
    suffix: '%',
    label: 'Rată de Satisfacție',
    icon: <TrendingUp className="w-8 h-8" />,
  },
];

interface CounterProps {
  end: number;
  duration?: number;
  suffix?: string;
  decimals?: number;
  inView: boolean;
}

const Counter = ({
  end,
  duration = 2,
  suffix = '',
  decimals = 0,
  inView,
}: CounterProps) => {
  const [count, setCount] = useState(0);
  const countRef = useRef(0);
  const startTimeRef = useRef<number | null>(null);

  useEffect(() => {
    if (!inView) return;

    const animate = (timestamp: number) => {
      if (!startTimeRef.current) {
        startTimeRef.current = timestamp;
      }

      const progress = (timestamp - startTimeRef.current) / (duration * 1000);

      if (progress < 1) {
        countRef.current = end * easeOutQuart(progress);
        setCount(countRef.current);
        requestAnimationFrame(animate);
      } else {
        setCount(end);
      }
    };

    // Easing function for smooth animation
    const easeOutQuart = (x: number): number => {
      return 1 - Math.pow(1 - x, 4);
    };

    requestAnimationFrame(animate);

    return () => {
      startTimeRef.current = null;
    };
  }, [end, duration, inView]);

  const formattedCount = decimals > 0 ? count.toFixed(decimals) : Math.floor(count);

  return (
    <span className="tabular-nums">
      {formattedCount}
      {suffix}
    </span>
  );
};

export const Stats = () => {
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  };

  return (
    <section
      ref={ref}
      className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-[#0066cc] to-[#004999] relative overflow-hidden"
      aria-labelledby="stats-heading"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
          backgroundSize: '40px 40px',
        }} />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="inline-block mb-4"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 text-white rounded-full text-sm font-semibold backdrop-blur-sm">
              <TrendingUp className="w-4 h-4" />
              Rezultate Dovedite
            </span>
          </motion.div>

          <h2
            id="stats-heading"
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4"
          >
            Rezultate în Cifre
          </h2>
          <p className="text-lg sm:text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
            Cifrele vorbesc despre dedicarea și calitatea serviciilor noastre
          </p>
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.id}
              variants={itemVariants}
              className="relative group"
            >
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 sm:p-8 border border-white/20 hover:bg-white/15 transition-all duration-300 hover:scale-105 hover:shadow-2xl">
                {/* Icon */}
                <motion.div
                  initial={{ scale: 0, rotate: -180 }}
                  animate={inView ? { scale: 1, rotate: 0 } : {}}
                  transition={{
                    duration: 0.6,
                    delay: 0.3 + index * 0.1,
                    type: 'spring',
                    stiffness: 200,
                  }}
                  className="mb-4"
                >
                  <div className="w-14 h-14 sm:w-16 sm:h-16 flex items-center justify-center bg-white/20 text-white rounded-xl backdrop-blur-sm group-hover:bg-white/30 transition-colors">
                    {stat.icon}
                  </div>
                </motion.div>

                {/* Counter */}
                <div className="mb-2">
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={inView ? { opacity: 1 } : {}}
                    transition={{ duration: 0.3, delay: 0.5 + index * 0.1 }}
                    className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white"
                  >
                    <Counter
                      end={stat.value}
                      suffix={stat.suffix}
                      decimals={stat.id === 'rating' ? 1 : 0}
                      duration={2.5}
                      inView={inView}
                    />
                  </motion.div>
                </div>

                {/* Label */}
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={inView ? { opacity: 1 } : {}}
                  transition={{ duration: 0.3, delay: 0.6 + index * 0.1 }}
                  className="text-base sm:text-lg text-white/90 font-medium"
                >
                  {stat.label}
                </motion.p>

                {/* Decorative element */}
                <div className="absolute top-0 right-0 w-20 h-20 bg-white/5 rounded-full blur-2xl group-hover:bg-white/10 transition-colors" />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="mt-12 sm:mt-16 text-center"
        >
          <p className="text-white/90 text-lg mb-6">
            Alătură-te miilor de pacienți mulțumiți
          </p>
          <a
            href="tel:+40726530591"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-[#0066cc] rounded-xl font-semibold text-lg hover:bg-gray-50 transition-all hover:shadow-2xl hover:-translate-y-1 focus:outline-none focus:ring-4 focus:ring-white/30"
          >
            Programează Consultație
          </a>
        </motion.div>
      </div>
    </section>
  );
};
