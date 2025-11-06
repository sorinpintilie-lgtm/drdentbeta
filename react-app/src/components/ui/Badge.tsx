import { cn } from '../../utils/cn';
import type { BadgeProps } from '../../types/components';

const badgeVariants = {
  default: 'bg-gray-100 text-gray-800',
  primary: 'bg-[#0066cc]/10 text-[#0066cc]',
  secondary: 'bg-[#004999]/10 text-[#004999]',
  success: 'bg-green-100 text-green-800',
  warning: 'bg-yellow-100 text-yellow-800',
};

const badgeSizes = {
  sm: 'px-2 py-0.5 text-xs',
  md: 'px-3 py-1 text-sm',
  lg: 'px-4 py-1.5 text-base',
};

export const Badge = ({
  children,
  variant = 'default',
  size = 'md',
  className,
}: BadgeProps) => {
  return (
    <span
      className={cn(
        'inline-flex items-center justify-center rounded-full font-medium',
        'transition-colors duration-200',
        badgeVariants[variant],
        badgeSizes[size],
        className
      )}
    >
      {children}
    </span>
  );
};