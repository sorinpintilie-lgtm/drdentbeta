import React, { forwardRef } from 'react';
import { cn } from '../../utils/cn';

export interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  error?: boolean;
}

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, error, ...props }, ref) => {
    return (
      <textarea
        className={cn(
          'w-full px-4 py-3 rounded-lg border transition-all duration-200',
          'text-base text-gray-900 placeholder:text-gray-400',
          'focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary',
          'disabled:bg-gray-50 disabled:text-gray-500 disabled:cursor-not-allowed',
          'resize-y min-h-[120px]',
          // Mobile-optimized
          'sm:min-h-[100px]',
          error
            ? 'border-red-300 focus:border-red-500 focus:ring-red-500/20'
            : 'border-gray-300',
          className
        )}
        ref={ref}
        aria-invalid={error ? 'true' : 'false'}
        {...props}
      />
    );
  }
);

Textarea.displayName = 'Textarea';