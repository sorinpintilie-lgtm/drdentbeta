import { motion } from 'framer-motion';
import { Star, Quote, CheckCircle } from 'lucide-react';
import { cn } from '../../utils/cn';
import type { TestimonialCardProps } from '../../types/components';

export const TestimonialCard = ({
  testimonial,
  className,
}: TestimonialCardProps) => {
  const { name, avatar, rating, text, date, verified, service } = testimonial;

  // Generate star rating - Smaller on mobile
  const renderStars = () => {
    return Array.from({ length: 5 }).map((_, index) => (
      <Star
        key={index}
        className={cn(
          'w-3 h-3 sm:w-4 sm:h-4',
          index < rating
            ? 'fill-yellow-400 text-yellow-400'
            : 'fill-gray-200 text-gray-200'
        )}
      />
    ));
  };

  // Generate avatar initials if no avatar provided
  const getInitials = (name: string) => {
    return name
      .split(' ')
      .map((n) => n[0])
      .join('')
      .toUpperCase()
      .slice(0, 2);
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.3 }}
      className={cn(
        'relative bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 shadow-md hover:shadow-lg border border-gray-100 h-full flex flex-col select-none touch-pan-y',
        'transition-shadow duration-300',
        className
      )}
    >
      {/* Quote Icon - Smaller on mobile */}
      <div className="absolute top-3 right-3 sm:top-4 sm:right-4 md:top-6 md:right-6 text-[#0066cc]/10">
        <Quote className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-16 lg:h-16" fill="currentColor" />
      </div>

      {/* Rating - Compact */}
      <div className="flex items-center gap-0.5 sm:gap-1 mb-3 sm:mb-4 relative z-10">
        {renderStars()}
      </div>

      {/* Testimonial Text - Responsive sizing */}
      <blockquote className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed mb-4 sm:mb-5 md:mb-6 flex-grow relative z-10">
        "{text}"
      </blockquote>

      {/* Service Badge - Smaller on mobile */}
      {service && (
        <div className="mb-3 sm:mb-4">
          <span className="inline-block px-2 sm:px-3 py-0.5 sm:py-1 bg-[#0066cc]/10 text-[#0066cc] text-xs sm:text-sm rounded-full font-medium">
            {service}
          </span>
        </div>
      )}

      {/* Author Info - Compact */}
      <div className="flex items-center gap-2 sm:gap-3 md:gap-4 pt-3 sm:pt-4 border-t border-gray-100">
        {/* Avatar - Smaller on mobile */}
        <div className="flex-shrink-0">
          {avatar ? (
            <img
              src={avatar}
              alt={name}
              className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-full object-cover border-2 border-[#0066cc]/20"
            />
          ) : (
            <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-full bg-gradient-to-br from-[#0066cc] to-[#0080ff] flex items-center justify-center text-white font-bold text-sm sm:text-base md:text-lg">
              {getInitials(name)}
            </div>
          )}
        </div>

        {/* Name and Verification - Compact */}
        <div className="flex-grow min-w-0">
          <h4 className="font-semibold text-gray-900 text-sm sm:text-base md:text-lg truncate">
            {name}
          </h4>
          <div className="flex items-center gap-1 sm:gap-2 text-xs sm:text-sm text-gray-600">
            {verified && (
              <>
                <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4 text-green-500 flex-shrink-0" />
                <span className="truncate">Pacient Verificat</span>
              </>
            )}
            {date && !verified && <span className="truncate">{date}</span>}
          </div>
        </div>
      </div>
    </motion.div>
  );
};
