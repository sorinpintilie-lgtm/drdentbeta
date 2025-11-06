import { forwardRef } from 'react';
import { motion } from 'framer-motion';
import { cn } from '../../utils/cn';
import type { ButtonProps } from '../../types/components';

const buttonVariants = {
  primary: 'bg-[#0066cc] text-white hover:bg-[#004999] active:bg-[#003366] shadow-lg hover:shadow-xl',
  secondary: 'bg-[#004999] text-white hover:bg-[#003366] active:bg-[#002244] shadow-md hover:shadow-lg',
  outline: 'bg-transparent border-2 border-[#0066cc] text-[#0066cc] hover:bg-[#0066cc] hover:text-white active:bg-[#004999]',
};

const buttonSizes = {
  sm: 'px-4 py-2 text-sm min-h-[44px]',
  md: 'px-6 py-3 text-base min-h-[48px]',
  lg: 'px-8 py-4 text-lg min-h-[56px]',
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = 'primary',
      size = 'md',
      children,
      className,
      fullWidth = false,
      isLoading = false,
      leftIcon,
      rightIcon,
      disabled,
      ...props
    },
    ref
  ) => {
    return (
      <motion.div
        whileHover={{ scale: disabled || isLoading ? 1 : 1.02 }}
        whileTap={{ scale: disabled || isLoading ? 1 : 0.98 }}
        transition={{ duration: 0.2 }}
        className={fullWidth ? 'w-full' : 'inline-block'}
      >
        <button
          ref={ref}
          className={cn(
            'inline-flex items-center justify-center gap-2 rounded-lg font-semibold',
            'transition-all duration-200 ease-in-out',
            'focus:outline-none focus:ring-4 focus:ring-[#0080ff]/30',
            'disabled:opacity-50 disabled:cursor-not-allowed',
            'touch-manipulation', // Improves touch responsiveness
            buttonVariants[variant],
            buttonSizes[size],
            fullWidth && 'w-full',
            className
          )}
          disabled={disabled || isLoading}
          aria-busy={isLoading}
          {...props}
        >
          {isLoading ? (
            <>
              <svg
                className="animate-spin h-5 w-5"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                />
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                />
              </svg>
              <span>Se încarcă...</span>
            </>
          ) : (
            <>
              {leftIcon && <span className="flex-shrink-0">{leftIcon}</span>}
              <span>{children}</span>
              {rightIcon && <span className="flex-shrink-0">{rightIcon}</span>}
            </>
          )}
        </button>
      </motion.div>
    );
  }
);

Button.displayName = 'Button';