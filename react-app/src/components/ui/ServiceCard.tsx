import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { cn } from '../../utils/cn';
import type { ServiceCardProps } from '../../types/components';

export const ServiceCard = ({
  icon,
  title,
  description,
  href,
  className,
}: ServiceCardProps) => {
  const Component = href ? 'a' : 'div';
  const linkProps = href
    ? {
        href,
        onClick: (e: React.MouseEvent) => {
          e.preventDefault();
          // Smooth scroll to section or navigate
          const targetId = href.replace('#', '');
          const element = document.getElementById(targetId);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        },
      }
    : {};

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -8, scale: 1.02 }}
      className={cn('group', className)}
    >
      <Component
        {...linkProps}
        className={cn(
          'block h-full bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8',
          'border border-gray-100 hover:border-[#0066cc]/30',
          'shadow-sm hover:shadow-xl',
          'transition-all duration-300',
          'cursor-pointer touch-manipulation',
          'focus:outline-none focus:ring-2 focus:ring-[#0080ff]/30'
        )}
      >
        {/* Icon - Smaller on mobile */}
        <div className="mb-3 sm:mb-4 md:mb-6 text-[#0066cc] transform group-hover:scale-110 transition-transform duration-300">
          <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 flex items-center justify-center bg-[#0066cc]/10 rounded-lg sm:rounded-xl">
            {icon}
          </div>
        </div>

        {/* Title - Responsive sizing */}
        <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-gray-900 mb-2 sm:mb-3 group-hover:text-[#0066cc] transition-colors line-clamp-2">
          {title}
        </h3>

        {/* Description - Compact on mobile */}
        <p className="text-xs sm:text-sm md:text-base text-gray-600 mb-3 sm:mb-4 md:mb-6 leading-relaxed line-clamp-3">
          {description}
        </p>

        {/* CTA Link - Smaller on mobile */}
        {href && (
          <div className="flex items-center gap-1 sm:gap-2 text-[#0066cc] font-semibold text-xs sm:text-sm md:text-base group-hover:gap-2 sm:group-hover:gap-3 transition-all">
            <span>Află Mai Mult</span>
            <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
          </div>
        )}
      </Component>
    </motion.div>
  );
};