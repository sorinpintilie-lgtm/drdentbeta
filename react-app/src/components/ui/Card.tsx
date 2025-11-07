import { motion } from 'framer-motion';
import { cn } from '../../utils/cn';
import type { CardProps } from '../../types/components';

const cardVariants = {
  default: 'bg-white',
  elevated: 'bg-white shadow-lg',
  outlined: 'bg-white border-2 border-gray-200',
};

const cardPadding = {
  none: '',
  sm: 'p-4',
  md: 'p-6',
  lg: 'p-8',
};

export const Card = ({
  children,
  className,
  variant = 'default',
  padding = 'md',
  hover = false,
}: CardProps) => {
  const Component = hover ? motion.div : 'div';
  const motionProps = hover
    ? {
        whileHover: { y: -4, scale: 1.02 },
        transition: { duration: 0.2 },
      }
    : {};

  return (
    <Component
      className={cn(
        'rounded-xl transition-all duration-200',
        cardVariants[variant],
        cardPadding[padding],
        hover && 'cursor-pointer hover:shadow-xl',
        className
      )}
      {...motionProps}
    >
      {children}
    </Component>
  );
};
