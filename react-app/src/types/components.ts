import { ReactNode, ButtonHTMLAttributes } from 'react';

// Button Component Types
export type ButtonVariant = 'primary' | 'secondary' | 'outline';
export type ButtonSize = 'sm' | 'md' | 'lg';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  children: ReactNode;
  fullWidth?: boolean;
  isLoading?: boolean;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
}

// Card Component Types
export interface CardProps {
  children: ReactNode;
  className?: string;
  variant?: 'default' | 'elevated' | 'outlined';
  padding?: 'none' | 'sm' | 'md' | 'lg';
  hover?: boolean;
}

// Badge Component Types
export type BadgeVariant = 'default' | 'primary' | 'secondary' | 'success' | 'warning';
export type BadgeSize = 'sm' | 'md' | 'lg';

export interface BadgeProps {
  children: ReactNode;
  variant?: BadgeVariant;
  size?: BadgeSize;
  className?: string;
}

// Hero Component Types
export interface TrustIndicator {
  value: string;
  label: string;
  icon?: ReactNode;
}

export interface HeroProps {
  headline: string;
  subheadline: string;
  primaryCTA: {
    text: string;
    href: string;
    onClick?: () => void;
  };
  secondaryCTA: {
    text: string;
    href: string;
    onClick?: () => void;
  };
  trustIndicators: TrustIndicator[];
  videoSrc?: string;
  fallbackImage?: string;
  showScrollIndicator?: boolean;
}

// Service Card Component Types
export interface ServiceCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  href?: string;
  className?: string;
}

// Service Data Types
export interface Service {
  id: string;
  icon: ReactNode;
  title: string;
  description: string;
  href?: string;
  detailedDescription?: string;
  price?: string;
  duration?: string;
  popular?: boolean;
}

// Feature Data Types
export interface Feature {
  id: string;
  icon: ReactNode;
  title: string;
  description: string;
}

// Testimonial Data Types
export interface Testimonial {
  id: string;
  name: string;
  avatar?: string;
  rating: number;
  text: string;
  date?: string;
  verified?: boolean;
  service?: string;
}

export interface TestimonialCardProps {
  testimonial: Testimonial;
  className?: string;
}

// Stats Data Types
export interface Stat {
  id: string;
  value: number;
  suffix?: string;
  label: string;
  icon: ReactNode;
}

export interface StatsProps {
  stats: Stat[];
  className?: string;
}
