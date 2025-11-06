import React, { forwardRef } from 'react';
import { cn } from '../../utils/cn';

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  error?: boolean;
  icon?: React.ReactNode;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, error, icon, type = 'text', ...props }, ref) => {
    return (
      <div className="relative">
        {icon && (
          <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none">
            {icon}
          </div>
        )}
        <input
          type={type}
          className={cn(
            'w-full px-4 py-3 rounded-lg border transition-all duration-200',
            'text-base text-gray-900 placeholder:text-gray-400',
            'focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary',
            'disabled:bg-gray-50 disabled:text-gray-500 disabled:cursor-not-allowed',
            // Mobile-optimized: larger touch targets
            'min-h-[48px] sm:min-h-[44px]',
            icon && 'pl-12',
            error
              ? 'border-red-300 focus:border-red-500 focus:ring-red-500/20'
              : 'border-gray-300',
            className
          )}
          ref={ref}
          aria-invalid={error ? 'true' : 'false'}
          {...props}
        />
      </div>
    );
  }
);

Input.displayName = 'Input';