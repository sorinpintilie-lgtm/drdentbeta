import { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Button } from '../ui/Button';
import { Card } from '../ui/Card';
import { Badge } from '../ui/Badge';
import type { HeroProps } from '../../types/components';

export const Hero = ({
  headline,
  subheadline,
  primaryCTA,
  secondaryCTA,
  trustIndicators,
  videoSrc,
  fallbackImage,
  showScrollIndicator = true,
}: HeroProps) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [videoError, setVideoError] = useState(false);
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);
  const scale = useTransform(scrollY, [0, 300], [1, 1.1]);

  useEffect(() => {
    if (videoRef.current && !videoError) {
      videoRef.current.play().catch(() => {
        setVideoError(true);
      });
    }
  }, [videoError]);

  const handleScrollDown = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth',
    });
  };

  return (
    <section
      ref={ref}
      className="relative min-h-[85vh] sm:min-h-[90vh] md:min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#0066cc]/5 to-[#004999]/10"
      aria-label="Hero section"
    >
      {/* Video Background */}
      <motion.div
        className="absolute inset-0 z-0"
        style={{ scale }}
      >
        {videoSrc && !videoError ? (
          <video
            ref={videoRef}
            className="w-full h-full object-cover"
            autoPlay
            muted
            loop
            playsInline
            poster={fallbackImage}
            onError={() => setVideoError(true)}
            aria-hidden="true"
          >
            <source src={videoSrc} type="video/mp4" />
            <source src={videoSrc} type="video/quicktime" />
          </video>
        ) : fallbackImage ? (
          <img
            src={fallbackImage}
            alt=""
            className="w-full h-full object-cover"
            aria-hidden="true"
          />
        ) : null}
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/50" />
      </motion.div>

      {/* Content - Compact for mobile */}
      <motion.div
        style={{ opacity }}
        className="relative z-10 container mx-auto px-3 sm:px-4 md:px-6 lg:px-8 py-12 sm:py-16 md:py-20"
      >
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge - Smaller on mobile */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-3 sm:mb-4 md:mb-6"
          >
            <Badge variant="primary" size="lg" className="text-xs sm:text-sm px-3 sm:px-4 py-1 sm:py-1.5">
              Clinică Dentară Premium
            </Badge>
          </motion.div>

          {/* Headline - Responsive sizing */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-bold text-white mb-3 sm:mb-4 md:mb-6 leading-tight px-2"
          >
            {headline}
          </motion.h1>

          {/* Subheadline - Compact */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-white/90 mb-6 sm:mb-8 md:mb-10 max-w-2xl mx-auto leading-relaxed px-2"
          >
            {subheadline}
          </motion.p>

          {/* CTA Buttons - Smaller on mobile */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex flex-col sm:flex-row gap-2.5 sm:gap-3 md:gap-4 justify-center items-center mb-8 sm:mb-12 md:mb-16"
          >
            <Button
              variant="primary"
              size="lg"
              onClick={primaryCTA.onClick}
              className="w-full sm:w-auto min-w-[160px] sm:min-w-[180px] md:min-w-[200px] text-sm sm:text-base py-2.5 sm:py-3"
              aria-label={primaryCTA.text}
            >
              {primaryCTA.text}
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={secondaryCTA.onClick}
              className="w-full sm:w-auto min-w-[160px] sm:min-w-[180px] md:min-w-[200px] text-sm sm:text-base py-2.5 sm:py-3 bg-white/10 backdrop-blur-sm border-white text-white hover:bg-white hover:text-[#0066cc]"
              aria-label={secondaryCTA.text}
            >
              {secondaryCTA.text}
            </Button>
          </motion.div>

          {/* Trust Indicators - Compact grid */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="grid grid-cols-3 gap-2 sm:gap-3 md:gap-4 lg:gap-6 max-w-3xl mx-auto"
          >
            {trustIndicators.map((indicator, index) => (
              <Card
                key={index}
                variant="elevated"
                padding="md"
                className="bg-white/95 backdrop-blur-sm p-2 sm:p-3 md:p-4"
              >
                <div className="flex flex-col items-center text-center">
                  {indicator.icon && (
                    <div className="mb-1 sm:mb-2 text-[#0066cc] scale-75 sm:scale-90 md:scale-100" aria-hidden="true">
                      {indicator.icon}
                    </div>
                  )}
                  <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-[#0066cc] mb-0.5 sm:mb-1">
                    {indicator.value}
                  </div>
                  <div className="text-[0.65rem] sm:text-xs md:text-sm lg:text-base text-gray-600 leading-tight">
                    {indicator.label}
                  </div>
                </div>
              </Card>
            ))}
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll Indicator - Smaller on mobile */}
      {showScrollIndicator && (
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.6 }}
          onClick={handleScrollDown}
          className="absolute bottom-4 sm:bottom-6 md:bottom-8 left-1/2 -translate-x-1/2 z-20 text-white cursor-pointer focus:outline-none focus:ring-2 focus:ring-white/30 rounded-full p-1.5 sm:p-2"
          aria-label="Scroll down"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
          >
            <svg
              className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </motion.div>
        </motion.button>
      )}
    </section>
  );
};
