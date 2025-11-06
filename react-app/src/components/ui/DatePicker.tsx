import React, { forwardRef } from 'react';
import { cn } from '../../utils/cn';

export interface DatePickerProps extends React.InputHTMLAttributes<HTMLInputElement> {
  error?: boolean;
}

export const DatePicker = forwardRef<HTMLInputElement, DatePickerProps>(
  ({ className, error, ...props }, ref) => {
    // Get today's date in YYYY-MM-DD format for min attribute
    const today = new Date().toISOString().split('T')[0];

    return (
      <div className="relative">
        <input
          type="date"
          min={today}
          className={cn(
            'w-full px-4 py-3 rounded-lg border transition-all duration-200',
            'text-base text-gray-900',
            'focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary',
            'disabled:bg-gray-50 disabled:text-gray-500 disabled:cursor-not-allowed',
            // Mobile-optimized: larger touch targets
            'min-h-[48px] sm:min-h-[44px]',
            // Custom calendar icon styling
            '[&::-webkit-calendar-picker-indicator]:cursor-pointer',
            '[&::-webkit-calendar-picker-indicator]:opacity-60',
            '[&::-webkit-calendar-picker-indicator]:hover:opacity-100',
            error
              ? 'border-red-300 focus:border-red-500 focus:ring-red-500/20'
              : 'border-gray-300',
            className
          )}
          ref={ref}
          aria-invalid={error ? 'true' : 'false'}
          {...props}
        />
        {/* Calendar icon */}
        <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none">
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
            />
          </svg>
        </div>
      </div>
    );
  }
);

DatePicker.displayName = 'DatePicker';