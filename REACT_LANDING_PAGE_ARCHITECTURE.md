# DrDent React Application Architecture Plan
**Project:** Complete Site Rebuild with React & Modern Stack  
**Date:** November 6, 2025  
**Version:** 1.0  
**Scope:** Full-stack React application replacing current HTML site

---

## Executive Summary

This document provides a comprehensive architecture plan for rebuilding the DrDent dental clinic website as a modern React application with a Node.js backend. The architecture is designed to be mobile-first, highly performant, and maintainable while preserving the professional dental clinic aesthetic and improving user experience.

### Strategic Objectives

1. **Modern React Architecture** - Component-based, reusable, and scalable
2. **Mobile-First Design** - Optimized for 9:16 portrait format with progressive enhancement
3. **Full-Stack Integration** - Node.js backend for appointments, forms, and content management
4. **Performance Excellence** - Sub-2 second load times, optimized for mobile networks
5. **Professional Medical UX** - Trust-building, accessible, conversion-optimized

### Key Technology Decisions

- **Frontend:** React 18+ with TypeScript
- **Styling:** Tailwind CSS + Custom Component Library (inspired by reactbits.dev patterns)
- **State Management:** React Context API + React Query for server state
- **Routing:** React Router v6
- **Backend:** Node.js + Express
- **Database:** MongoDB for appointments and content
- **Deployment:** Vercel (frontend) + Railway/Render (backend)

---

## 1. Current Site Analysis

### 1.1 Existing Page Structure

Based on analysis of [`index.html`](index.html:1) and related files:

**Current Pages:**
1. **Landing Page** ([`index.html`](index.html:1)) - Hero, philosophy, services overview, testimonials, trust signals, contact CTA
2. **Services** ([`services.html`](services.html:1)) - Detailed service categories and descriptions
3. **Fees** ([`fees.html`](fees.html:1)) - Pricing tables and payment options
4. **Team** ([`team.html`](team.html:1)) - Doctor profiles and credentials
5. **FAQ** ([`faq.html`](faq.html:1)) - Accordion-style questions and answers
6. **Location** ([`location.html`](location.html:1)) - Contact info, map, directions, contact form
7. **Resources** ([`resurse.html`](resurse.html:1)) - Patient education materials

### 1.2 Current Features & Functionality

**Navigation:**
- Fixed header with logo and desktop menu
- Mobile hamburger menu with full-screen overlay
- Bottom navigation for mobile (9:16 format)
- Smooth scroll to sections

**Hero Section:**
- Video/image background with overlay
- Trust badge
- Primary headline with gradient text
- Subtitle
- Primary CTA (booking)
- Quick contact buttons (call, location)
- Trust indicators (rating, patients, experience)
- Gesture indicator for mobile
- Emergency contact floating button

**Content Sections:**
- Philosophy grid (3 items)
- Services overview grid (3 items)
- Testimonials grid (3 items with rating)
- Trust signals grid (3 items)
- Contact CTA with decoration

**Footer:**
- Social media links
- Contact information (4 boxes: address, hours, phone, booking)
- Gradient background with decorative elements

**Interactive Elements:**
- Mobile menu toggle
- FAQ accordion
- Form validation
- Smooth scrolling
- Scroll animations
- Touch gestures (swipe, pull-to-refresh)
- Video controls

### 1.3 Design System Analysis

**Color Palette** (from [`css/style.css`](css/style.css:11)):
- Primary: `#2196F3` (Blue), `#1976D2` (Dark Blue), `#BBDEFB` (Light Blue)
- Secondary: `#1565C0` (Navy), `#FFFFFF` (White), `#FAFAFA` (Off-white)
- Accent: `#2196F3` (Blue accent), `#E3F2FD` (Mint), `#F5F5F5` (Light gray)
- Gradients: Blue-based gradients for hero and CTAs

**Typography:**
- Headings: `'Space Grotesk'` - Bold, modern sans-serif
- Body: `'Plus Jakarta Sans'` - Clean, readable sans-serif
- Scale: Responsive with clamp() functions

**Spacing System:**
- Base unit: 12px
- Scale: 4px, 8px, 12px, 16px, 24px, 32px, 48px, 64px, 96px

**Component Patterns:**
- Cards with rounded corners (16-24px radius)
- Subtle shadows and hover effects
- Border-left accents on cards
- Gradient backgrounds for CTAs
- Glass morphism effects (backdrop-filter)

---

## 2. React Component Architecture

### 2.1 Component Hierarchy

```
App
├── Layout
│   ├── Header
│   │   ├── Logo
│   │   ├── DesktopNav
│   │   └── MobileMenuToggle
│   ├── MobileMenu
│   │   ├── MobileMenuOverlay
│   │   ├── MobileMenuContent
│   │   └── MobileMenuClose
│   ├── BottomNavigation (mobile only)
│   │   ├── NavItem (x5)
│   │   └── CTAButton
│   └── Footer
│       ├── SocialLinks
│       └── ContactBoxes (x4)
│
├── Pages
│   ├── HomePage
│   │   ├── HeroSection
│   │   │   ├── HeroBackground (video/image)
│   │   │   ├── HeroContent
│   │   │   │   ├── TrustBadge
│   │   │   │   ├── HeroTitle
│   │   │   │   ├── HeroSubtitle
│   │   │   │   ├── PrimaryCTA
│   │   │   │   ├── QuickContactRow
│   │   │   │   └── TrustIndicators
│   │   │   ├── GestureIndicator
│   │   │   └── EmergencyContactButton
│   │   ├── PhilosophySection
│   │   │   ├── SectionHeader
│   │   │   └── PhilosophyGrid
│   │   │       └── PhilosophyCard (x3)
│   │   ├── ServicesOverviewSection
│   │   │   ├── SectionHeader
│   │   │   ├── ServicesGrid
│   │   │   │   └── ServiceCard (x3)
│   │   │   └── ViewAllCTA
│   │   ├── TestimonialsSection
│   │   │   ├── SectionHeader
│   │   │   ├── TestimonialsGrid
│   │   │   │   └── TestimonialCard (x3)
│   │   │   └── RatingDisplay
│   │   ├── TrustSignalsSection
│   │   │   ├── SectionHeader
│   │   │   └── TrustGrid
│   │   │       └── TrustCard (x3)
│   │   └── ContactCTASection
│   │       ├── CTAContent
│   │       ├── CTAActions
│   │       └── DecorationElements
│   │
│   ├── ServicesPage
│   │   ├── PageHero
│   │   ├── ServiceCategories
│   │   │   └── CategorySection (multiple)
│   │   │       ├── CategoryTitle
│   │   │       └── ServicesGrid
│   │   │           └── ServiceDetailCard (multiple)
│   │   └── BookingCTA
│   │
│   ├── FeesPage
│   │   ├── PageHero
│   │   ├── FeeCategories
│   │   │   └── FeeSection (multiple)
│   │   │       ├── SectionTitle
│   │   │       └── PricingTable
│   │   ├── PaymentOptions
│   │   └── ImportantInfo
│   │
│   ├── TeamPage
│   │   ├── PageHero
│   │   ├── FeaturedDoctor
│   │   │   ├── DoctorImage
│   │   │   ├── DoctorInfo
│   │   │   └── Credentials
│   │   ├── TeamGrid
│   │   │   └── TeamMemberCard (multiple)
│   │   └── PhilosophySection
│   │
│   ├── FAQPage
│   │   ├── PageHero
│   │   ├── FAQAccordion
│   │   │   └── FAQItem (multiple)
│   │   │       ├── Question
│   │   │       └── Answer
│   │   └── ContactCTA
│   │
│   ├── LocationPage
│   │   ├── PageHero
│   │   ├── ContactInfoGrid
│   │   │   ├── ContactDetails
│   │   │   └── ContactMethods
│   │   ├── ContactForm
│   │   ├── MapSection
│   │   │   ├── GoogleMap
│   │   │   └── Directions
│   │   └── EmergencyContact
│   │
│   └── ResourcesPage
│       ├── PageHero
│       ├── ResourceCategories
│       │   └── ResourceSection (multiple)
│       │       ├── CategoryTitle
│       │       └── ResourcesGrid
│       │           └── ResourceCard (multiple)
│       └── ContactCTA
│
└── Shared Components
    ├── UI Components
    │   ├── Button (primary, secondary, ghost, icon)
    │   ├── Card (service, team, testimonial, trust, resource)
    │   ├── Input (text, email, tel, textarea, select)
    │   ├── Modal (booking, service detail, team member)
    │   ├── BottomSheet (mobile modals)
    │   ├── Badge (trust, service, status)
    │   ├── Icon (SVG sprite system)
    │   ├── Image (responsive with lazy loading)
    │   ├── Video (optimized player)
    │   └── Loader (skeleton, spinner)
    │
    ├── Section Components
    │   ├── SectionHeader (title, subtitle, decoration)
    │   ├── Grid (responsive, staggered)
    │   ├── Container (max-width wrapper)
    │   └── Divider (decorative section breaks)
    │
    └── Feature Components
        ├── BookingModal (multi-step form)
        ├── ServiceModal (detail view)
        ├── TeamMemberModal (bio, credentials)
        ├── ContactModal (quick contact options)
        ├── LocationModal (map, directions)
        ├── SearchBar (FAQ, services)
        ├── CategoryFilter (chips/tabs)
        └── ScrollToTop (floating button)
```

### 2.2 Component Specifications

#### Core Layout Components

**Header Component**
```typescript
// components/layout/Header.tsx
interface HeaderProps {
  transparent?: boolean;
  sticky?: boolean;
}

const Header: React.FC<HeaderProps> = ({ transparent, sticky }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  return (
    <header className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
      isScrolled && "bg-white/95 backdrop-blur-lg shadow-sm",
      transparent && !isScrolled && "bg-transparent"
    )}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          <Logo />
          <DesktopNav className="hidden md:flex" />
          <MobileMenuToggle 
            isOpen={isMobileMenuOpen}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          />
        </div>
      </div>
    </header>
  );
};
```

**Bottom Navigation Component (Mobile)**
```typescript
// components/layout/BottomNavigation.tsx
interface NavItem {
  icon: string;
  label: string;
  href: string;
  isCTA?: boolean;
}

const BottomNavigation: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  
  const navItems: NavItem[] = [
    { icon: '🏠', label: 'Acasă', href: '/' },
    { icon: '🦷', label: 'Servicii', href: '/services' },
    { icon: '📅', label: 'Programare', href: '/booking', isCTA: true },
    { icon: '📍', label: 'Locație', href: '/location' },
    { icon: '📞', label: 'Sună', href: 'tel:+40213449317' },
  ];
  
  return (
    <nav className="fixed bottom-0 left-0 right-0 z-40 md:hidden">
      <div className="bg-white/95 backdrop-blur-lg border-t border-gray-200">
        <div className="grid grid-cols-5 gap-1 px-4 py-2 pb-safe">
          {navItems.map((item) => (
            <BottomNavItem
              key={item.href}
              {...item}
              isActive={location.pathname === item.href}
              onClick={() => navigate(item.href)}
            />
          ))}
        </div>
      </div>
    </nav>
  );
};
```

#### Hero Section Components

**Hero Section**
```typescript
// components/sections/HeroSection.tsx
interface HeroSectionProps {
  title: string;
  subtitle: string;
  backgroundImage?: string;
  backgroundVideo?: string;
  trustBadge?: string;
  stats?: TrustStat[];
  primaryCTA: CTAConfig;
  quickActions?: QuickAction[];
}

const HeroSection: React.FC<HeroSectionProps> = ({
  title,
  subtitle,
  backgroundImage,
  backgroundVideo,
  trustBadge,
  stats,
  primaryCTA,
  quickActions
}) => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <HeroBackground 
        image={backgroundImage}
        video={backgroundVideo}
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/80 via-blue-600/60 to-blue-800/80 z-10" />
      
      {/* Content */}
      <div className="relative z-20 container mx-auto px-4 text-center text-white">
        {trustBadge && (
          <TrustBadge text={trustBadge} className="mb-8" />
        )}
        
        <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
          {title.split('\n').map((line, i) => (
            <span key={i} className="block">
              {line}
            </span>
          ))}
        </h1>
        
        <p className="text-lg md:text-xl mb-8 opacity-95 max-w-2xl mx-auto">
          {subtitle}
        </p>
        
        <PrimaryCTA {...primaryCTA} className="mb-6" />
        
        {quickActions && (
          <QuickContactRow actions={quickActions} />
        )}
        
        {stats && (
          <TrustIndicators stats={stats} className="mt-8" />
        )}
      </div>
      
      {/* Mobile Gesture Indicator */}
      <GestureIndicator className="md:hidden" />
      
      {/* Emergency Contact */}
      <EmergencyContactButton className="md:hidden" />
    </section>
  );
};
```

**Service Card Component**
```typescript
// components/cards/ServiceCard.tsx
interface ServiceCardProps {
  icon: string;
  title: string;
  description: string;
  price?: string;
  features?: string[];
  onClick?: () => void;
  variant?: 'default' | 'highlighted' | 'compact';
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  icon,
  title,
  description,
  price,
  features,
  onClick,
  variant = 'default'
}) => {
  return (
    <article 
      className={cn(
        "bg-white rounded-2xl p-6 shadow-sm border border-gray-100",
        "transition-all duration-300 cursor-pointer",
        "hover:shadow-lg hover:-translate-y-2 hover:border-blue-500",
        "active:scale-98",
        variant === 'highlighted' && "border-2 border-blue-500 shadow-lg"
      )}
      onClick={onClick}
    >
      <div className="flex items-start justify-between mb-4">
        <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center text-2xl">
          {icon}
        </div>
        {price && (
          <Badge variant="price">{price}</Badge>
        )}
      </div>
      
      <h3 className="text-xl font-semibold text-gray-900 mb-2">
        {title}
      </h3>
      
      <p className="text-gray-600 text-sm mb-4 line-clamp-2">
        {description}
      </p>
      
      {features && features.length > 0 && (
        <ul className="space-y-2">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center text-sm text-gray-600">
              <CheckIcon className="w-4 h-4 text-green-500 mr-2" />
              {feature}
            </li>
          ))}
        </ul>
      )}
    </article>
  );
};
```

### 2.3 Reusable UI Component Library

**Button Component**
```typescript
// components/ui/Button.tsx
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost' | 'danger';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  fullWidth?: boolean;
  loading?: boolean;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
}

const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  loading = false,
  icon,
  iconPosition = 'left',
  children,
  className,
  disabled,
  ...props
}) => {
  const baseStyles = "inline-flex items-center justify-center gap-2 font-semibold rounded-xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2";
  
  const variants = {
    primary: "bg-gradient-to-r from-blue-500 to-blue-600 text-white hover:from-blue-600 hover:to-blue-700 shadow-lg hover:shadow-xl hover:-translate-y-1 focus:ring-blue-500",
    secondary: "bg-white text-blue-600 border-2 border-blue-600 hover:bg-blue-50 focus:ring-blue-500",
    ghost: "bg-transparent text-gray-600 hover:bg-gray-100 focus:ring-gray-500",
    danger: "bg-red-500 text-white hover:bg-red-600 shadow-lg hover:shadow-xl focus:ring-red-500"
  };
  
  const sizes = {
    sm: "px-4 py-2 text-sm min-h-[40px]",
    md: "px-6 py-3 text-base min-h-[48px]",
    lg: "px-8 py-4 text-lg min-h-[56px]",
    xl: "px-10 py-5 text-xl min-h-[64px]"
  };
  
  return (
    <button
      className={cn(
        baseStyles,
        variants[variant],
        sizes[size],
        fullWidth && "w-full",
        (disabled || loading) && "opacity-50 cursor-not-allowed",
        className
      )}
      disabled={disabled || loading}
      {...props}
    >
      {loading && <Spinner className="w-5 h-5" />}
      {!loading && icon && iconPosition === 'left' && icon}
      {children}
      {!loading && icon && iconPosition === 'right' && icon}
    </button>
  );
};
```

**Card Component**
```typescript
// components/ui/Card.tsx
interface CardProps {
  children: React.ReactNode;
  variant?: 'default' | 'elevated' | 'bordered' | 'glass';
  padding?: 'sm' | 'md' | 'lg';
  hover?: boolean;
  onClick?: () => void;
  className?: string;
}

const Card: React.FC<CardProps> = ({
  children,
  variant = 'default',
  padding = 'md',
  hover = false,
  onClick,
  className
}) => {
  const baseStyles = "bg-white rounded-2xl transition-all duration-300";
  
  const variants = {
    default: "shadow-sm border border-gray-100",
    elevated: "shadow-lg",
    bordered: "border-2 border-gray-200",
    glass: "bg-white/80 backdrop-blur-lg border border-white/20 shadow-xl"
  };
  
  const paddings = {
    sm: "p-4",
    md: "p-6",
    lg: "p-8"
  };
  
  const hoverStyles = hover ? "hover:shadow-xl hover:-translate-y-2 cursor-pointer" : "";
  
  return (
    <div
      className={cn(
        baseStyles,
        variants[variant],
        paddings[padding],
        hoverStyles,
        onClick && "cursor-pointer",
        className
      )}
      onClick={onClick}
    >
      {children}
    </div>
  );
};
```

**Modal Component**
```typescript
// components/ui/Modal.tsx
interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children: React.ReactNode;
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'full';
  mobileBottomSheet?: boolean;
}

const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  title,
  children,
  size = 'md',
  mobileBottomSheet = true
}) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);
  
  if (!isOpen) return null;
  
  return (
    <Portal>
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/50 z-50 transition-opacity"
        onClick={onClose}
      />
      
      {/* Modal Content */}
      <div className={cn(
        "fixed z-50 bg-white",
        mobileBottomSheet 
          ? "bottom-0 left-0 right-0 rounded-t-3xl max-h-[90vh] md:top-1/2 md:left-1/2 md:-translate-x-1/2 md:-translate-y-1/2 md:rounded-2xl md:max-w-2xl"
          : "top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-2xl",
        getSizeClass(size)
      )}>
        {/* Handle for mobile bottom sheet */}
        {mobileBottomSheet && (
          <div className="w-12 h-1 bg-gray-300 rounded-full mx-auto mt-3 mb-4 md:hidden" />
        )}
        
        {/* Header */}
        {title && (
          <div className="px-6 py-4 border-b border-gray-200">
            <h2 className="text-2xl font-bold text-gray-900">{title}</h2>
          </div>
        )}
        
        {/* Body */}
        <div className="px-6 py-4 overflow-y-auto max-h-[70vh]">
          {children}
        </div>
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
          aria-label="Close modal"
        >
          ✕
        </button>
      </div>
    </Portal>
  );
};
```

---

## 3. State Management Strategy

### 3.1 State Architecture

**Global State (React Context)**
```typescript
// contexts/AppContext.tsx
interface AppState {
  // UI State
  isMobileMenuOpen: boolean;
  isBookingModalOpen: boolean;
  activeModal: string | null;
  
  // User Preferences
  preferredLanguage: 'ro' | 'en';
  cookieConsent: boolean;
  
  // Navigation
  currentPage: string;
  scrollPosition: number;
}

interface AppContextValue {
  state: AppState;
  actions: {
    openMobileMenu: () => void;
    closeMobileMenu: () => void;
    openBookingModal: () => void;
    closeBookingModal: () => void;
    setActiveModal: (modal: string | null) => void;
    updateScrollPosition: (position: number) => void;
  };
}

const AppContext = createContext<AppContextValue | undefined>(undefined);

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [state, setState] = useState<AppState>({
    isMobileMenuOpen: false,
    isBookingModalOpen: false,
    activeModal: null,
    preferredLanguage: 'ro',
    cookieConsent: false,
    currentPage: '/',
    scrollPosition: 0
  });
  
  const actions = {
    openMobileMenu: () => setState(s => ({ ...s, isMobileMenuOpen: true })),
    closeMobileMenu: () => setState(s => ({ ...s, isMobileMenuOpen: false })),
    openBookingModal: () => setState(s => ({ ...s, isBookingModalOpen: true })),
    closeBookingModal: () => setState(s => ({ ...s, isBookingModalOpen: false })),
    setActiveModal: (modal: string | null) => setState(s => ({ ...s, activeModal: modal })),
    updateScrollPosition: (position: number) => setState(s => ({ ...s, scrollPosition: position }))
  };
  
  return (
    <AppContext.Provider value={{ state, actions }}>
      {children}
    </AppContext.Provider>
  );
};
```

**Server State (React Query)**
```typescript
// hooks/useServices.ts
import { useQuery, useMutation } from '@tanstack/react-query';

export const useServices = () => {
  return useQuery({
    queryKey: ['services'],
    queryFn: async () => {
      const response = await fetch('/api/services');
      return response.json();
    },
    staleTime: 5 * 60 * 1000, // 5 minutes
  });
};

export const useBookAppointment = () => {
  return useMutation({
    mutationFn: async (bookingData: BookingData) => {
      const response = await fetch('/api/appointments', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(bookingData)
      });
      return response.json();
    },
    onSuccess: () => {
      // Show success message
      // Send confirmation email
      // Update UI
    }
  });
};

// hooks/useTeam.ts
export const useTeamMembers = () => {
  return useQuery({
    queryKey: ['team'],
    queryFn: async () => {
      const response = await fetch('/api/team');
      return response.json();
    }
  });
};

// hooks/useFAQ.ts
export const useFAQ = (category?: string) => {
  return useQuery({
    queryKey: ['faq', category],
    queryFn: async () => {
      const url = category ? `/api/faq?category=${category}` : '/api/faq';
      const response = await fetch(url);
      return response.json();
    }
  });
};
```

**Form State (React Hook Form)**
```typescript
// components/forms/BookingForm.tsx
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

const bookingSchema = z.object({
  name: z.string().min(2, 'Numele trebuie să aibă cel puțin 2 caractere'),
  phone: z.string().regex(/^(\+40|0)[0-9]{9}$/, 'Număr de telefon invalid'),
  email: z.string().email('Email invalid').optional(),
  service: z.string().min(1, 'Selectați un serviciu'),
  preferredDate: z.string().optional(),
  notes: z.string().optional(),
  terms: z.boolean().refine(val => val === true, 'Trebuie să acceptați termenii')
});

type BookingFormData = z.infer<typeof bookingSchema>;

const BookingForm: React.FC = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<BookingFormData>({
    resolver: zodResolver(bookingSchema)
  });
  
  const bookAppointment = useBookAppointment();
  
  const onSubmit = async (data: BookingFormData) => {
    try {
      await bookAppointment.mutateAsync(data);
      // Show success message
    } catch (error) {
      // Show error message
    }
  };
  
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <FormField
        label="Nume complet"
        error={errors.name?.message}
        required
      >
        <Input {...register('name')} placeholder="Ion Popescu" />
      </FormField>
      
      <FormField
        label="Telefon"
        error={errors.phone?.message}
        required
      >
        <Input {...register('phone')} type="tel" placeholder="0712 345 678" />
      </FormField>
      
      {/* More fields... */}
      
      <Button type="submit" fullWidth loading={bookAppointment.isPending}>
        Trimite Programarea
      </Button>
    </form>
  );
};
```

---

## 4. Mobile-First Responsive Strategy

### 4.1 Breakpoint System

```typescript
// config/breakpoints.ts
export const breakpoints = {
  xs: '320px',   // Small phones
  sm: '480px',   // Large phones
  md: '768px',   // Tablets
  lg: '1024px',  // Small desktops
  xl: '1280px',  // Large desktops
  '2xl': '1536px' // Extra large desktops
};

// Tailwind config
module.exports = {
  theme: {
    screens: {
      'xs': '320px',
      'sm': '480px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    }
  }
};
```

### 4.2 Mobile-First Component Patterns

**Responsive Grid**
```typescript
// components/layout/Grid.tsx
interface GridProps {
  children: React.ReactNode;
  cols?: {
    xs?: number;
    sm?: number;
    md?: number;
    lg?: number;
  };
  gap?: number;
  className?: string;
}

const Grid: React.FC<GridProps> = ({
  children,
  cols = { xs: 1, sm: 2, md: 3, lg: 3 },
  gap = 4,
  className
}) => {
  return (
    <div className={cn(
      "grid",
      `grid-cols-${cols.xs}`,
      `sm:grid-cols-${cols.sm}`,
      `md:grid-cols-${cols.md}`,
      `lg:grid-cols-${cols.lg}`,
      `gap-${gap}`,
      className
    )}>
      {children}
    </div>
  );
};
```

**Responsive Image**
```typescript
// components/ui/ResponsiveImage.tsx
interface ResponsiveImageProps {
  src: string;
  alt: string;
  mobileSrc?: string;
  tabletSrc?: string;
  aspectRatio?: '16/9' | '4/3' | '1/1' | '9/16';
  priority?: boolean;
  className?: string;
}

const ResponsiveImage: React.FC<ResponsiveImageProps> = ({
  src,
  alt,
  mobileSrc,
  tabletSrc,
  aspectRatio = '16/9',
  priority = false,
  className
}) => {
  return (
    <picture className={cn("block", className)}>
      {mobileSrc && (
        <source 
          media="(max-width: 479px)" 
          srcSet={`${mobileSrc} 480w, ${mobileSrc.replace('.', '@2x.')} 960w`}
          sizes="100vw"
        />
      )}
      {tabletSrc && (
        <source 
          media="(min-width: 480px) and (max-width: 767px)" 
          srcSet={`${tabletSrc} 768w, ${tabletSrc.replace('.', '@2x.')} 1536w`}
          sizes="100vw"
        />
      )}
      <img
        src={src}
        alt={alt}
        loading={priority ? 'eager' : 'lazy'}
        className={cn(
          "w-full h-auto object-cover",
          `aspect-[${aspectRatio}]`
        )}
      />
    </picture>
  );
};
```

### 4.3 Touch-Optimized Interactions

```typescript
// hooks/useTouchGestures.ts
interface TouchGestureHandlers {
  onSwipeLeft?: () => void;
  onSwipeRight?: () => void;
  onSwipeUp?: () => void;
  onSwipeDown?: () => void;
  onLongPress?: () => void;
}

export const useTouchGestures = (handlers: TouchGestureHandlers) => {
  const [touchStart, setTouchStart] = useState({ x: 0, y: 0 });
  const [touchEnd, setTouchEnd] = useState({ x: 0, y: 0 });
  const longPressTimer = useRef<NodeJS.Timeout>();
  
  const minSwipeDistance = 50;
  
  const onTouchStart = (e: React.TouchEvent) => {
    setTouchStart({
      x: e.touches[0].clientX,
      y: e.touches[0].clientY
    });
    
    // Long press detection
    if (handlers.onLongPress) {
      longPressTimer.current = setTimeout(() => {
        handlers.onLongPress?.();
      }, 800);
    }
  };
  
  const onTouchMove = () => {
    if (longPressTimer.current) {
      clearTimeout(longPressTimer.current);
    }
  };
  
  const onTouchEnd = (e: React.TouchEvent) => {
    if (longPressTimer.current) {
      clearTimeout(longPressTimer.current);
    }
    
    setTouchEnd({
      x: e.changedTouches[0].clientX,
      y: e.changedTouches[0].clientY
    });
    
    const deltaX = touchStart.x - e.changedTouches[0].clientX;
    const deltaY = touchStart.y - e.changedTouches[0].clientY;
    
    // Horizontal swipe
    if (Math.abs(deltaX) > Math.abs(deltaY) && Math.abs(deltaX) > minSwipeDistance) {
      if (deltaX > 0) {
        handlers.onSwipeLeft?.();
      } else {
        handlers.onSwipeRight?.();
      }
    }
    
    // Vertical swipe
    if (Math.abs(deltaY) > Math.abs(deltaX) && Math.abs(deltaY) > minSwipeDistance) {
      if (deltaY > 0) {
        handlers.onSwipeUp?.();
      } else {
        handlers.onSwipeDown?.();
      }
    }
  };
  
  return {
    onTouchStart,
    onTouchMove,
    onTouchEnd
  };
};
```

---

## 5. Backend API Architecture

### 5.1 API Endpoints

```typescript
// Backend API Structure (Node.js + Express)

/**
 * GET /api/services
 * Returns all services grouped by category
 */
GET /api/services
Response: {
  categories: [
    {
      id: string;
      name: string;
      services: [
        {
          id: string;
          title: string;
          description: string;
          price: string;
          duration: string;
          features: string[];
          icon: string;
        }
      ]
    }
  ]
}

/**
 * GET /api/team
 * Returns all team members
 */
GET /api/team
Response: {
  featured: {
    id: string;
    name: string;
    title: string;
    bio: string;
    image: string;
    credentials: string[];
    specialties: string[];
    experience: number;
  },
  members: [
    {
      id: string;
      name: string;
      title: string;
      role: string;
      image: string;
      experience: number;
    }
  ]
}

/**
 * POST /api/appointments
 * Create new appointment request
 */
POST /api/appointments
Body: {
  name: string;
  phone: string;
  email?: string;
  service: string;
  preferredDate?: string;
  notes?: string;
}
Response: {
  success: boolean;
  appointmentId: string;
  message: string;
}

/**
 * POST /api/contact
 * Submit contact form
 */
POST /api/contact
Body: {
  name: string;
  email: string;
  phone?: string;
  subject: string;
  message: string;
}
Response: {
  success: boolean;
  messageId: string;
}

/**
 * GET /api/faq
 * Get FAQ items, optionally filtered by category
 */
GET /api/faq?category=programare
Response: {
  categories: string[];
  items: [
    {
      id: string;
      question: string;
      answer: string;
      category: string;
    }
  ]
}

/**
 * GET /api/fees
 * Get pricing information
 */
GET /api/fees
Response: {
  categories: [
    {
      id: string;
      name: string;
      items: [
        {
          service: string;
          price: string;
          notes?: string;
        }
      ]
    }
  ],
  paymentOptions: string[];
}

/**
 * GET /api/resources
 * Get patient education resources
 */
GET /api/resources
Response: {
  categories: [
    {
      id: string;
      name: string;
      resources: [
        {
          id: string;
          title: string;
          description: string;
          type: 'guide' | 'video' | 'download';
          url?: string;
        }
      ]
    }
  ]
}
```

### 5.2 Backend Implementation

```typescript
// server/index.ts
import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import rateLimit from 'express-rate-limit';
import { connectDB } from './config/database';
import routes from './routes';

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(helmet());
app.use(cors({
  origin: process.env.FRONTEND_URL,
  credentials: true
}));
app.use(express.json());

// Rate limiting
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100 // limit each IP to 100 requests per windowMs
});
app.use('/api/', limiter);

// Routes
app.use('/api/services', routes.services);
app.use('/api/team', routes.team);
app.use('/api/appointments', routes.appointments);
app.use('/api/contact', routes.contact);
app.use('/api/faq', routes.faq);
app.use('/api/fees', routes.fees);
app.use('/api/resources', routes.resources);

// Error handling
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ 
    success: false, 
    message: 'Ceva nu a mers bine. Vă rugăm încercați din nou.' 
  });
});

// Connect to database and start server
connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
});
```

**Appointment Model**
```typescript
// server/models/Appointment.ts
import mongoose from 'mongoose';

const appointmentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  phone: {
    type: String,
    required: true,
    match: /^(\+40|0)[0-9]{9}$/
  },
  email: {
    type: String,
    trim: true,
    lowercase: true
  },
  service: {
    type: String,
    required: true
  },
  preferredDate: Date,
  notes: String,
  status: {
    type: String,
    enum: ['pending', 'confirmed', 'cancelled', 'completed'],
    default: 'pending'
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

export const Appointment = mongoose.model('Appointment', appointmentSchema);
```

---

## 6. File Structure

### 6.1 Project Organization

```
drdent-react/
├── client/                          # React frontend
│   ├── public/
│   │   ├── index.html
│   │   ├── favicon.ico
│   │   ├── manifest.json
│   │   └── robots.txt
│   │
│   ├── src/
│   │   ├── components/
│   │   │   ├── layout/
│   │   │   │   ├── Header.tsx
│   │   │   │   ├── Footer.tsx
│   │   │   │   ├── MobileMenu.tsx
│   │   │   │   ├── BottomNavigation.tsx
│   │   │   │   └── Layout.tsx
│   │   │   │
│   │   │   ├── sections/
│   │   │   │   ├── HeroSection.tsx
│   │   │   │   ├── PhilosophySection.tsx
│   │   │   │   ├── ServicesSection.tsx
│   │   │   │   ├── TestimonialsSection.tsx
│   │   │   │   ├── TrustSignalsSection.tsx
│   │   │   │   └── ContactCTASection.tsx
│   │   │   │
│   │   │   ├── cards/
│   │   │   │   ├── ServiceCard.tsx
│   │   │   │   ├── TeamMemberCard.tsx
│   │   │   │   ├── TestimonialCard.tsx
│   │   │   │   ├── TrustCard.tsx
│   │   │   │   ├── ResourceCard.tsx
│   │   │   │   └── FAQCard.tsx
│   │   │   │
│   │   │   ├── ui/
│   │   │   │   ├── Button.tsx
│   │   │   │   ├── Card.tsx
│   │   │   │   ├── Input.tsx
│   │   │   │   ├── Select.tsx
│   │   │   │   ├── Textarea.tsx
│   │   │   │   ├── Modal.tsx
│   │   │   │   ├── BottomSheet.tsx
│   │   │   │   ├── Badge.tsx
│   │   │   │   ├── Icon.tsx
│   │   │   │   ├── Loader.tsx
│   │   │   │   ├── Skeleton.tsx
│   │   │   │   └── Toast.tsx
│   │   │   │
│   │   │   ├── forms/
│   │   │   │   ├── BookingForm.tsx
│   │   │   │   ├── ContactForm.tsx
│   │   │   │   ├── FormField.tsx
│   │   │   │   └── FormValidation.tsx
│   │   │   │
│   │   │   └── features/
│   │   │       ├── BookingModal.tsx
│   │   │       ├── ServiceModal.tsx
│   │   │       ├── TeamMemberModal.tsx
│   │   │       ├── LocationModal.tsx
│   │   │       ├── SearchBar.tsx
│   │   │       ├── CategoryFilter.tsx
│   │   │       └── EmergencyContact.tsx
│   │   │
│   │   ├── pages/
│   │   │   ├── HomePage.tsx
│   │   │   ├── ServicesPage.tsx
│   │   │   ├── FeesPage.tsx
│   │   │   ├── TeamPage.tsx
│   │   │   ├── FAQPage.tsx
│   │   │   ├── LocationPage.tsx
│   │   │   └── ResourcesPage.tsx
│   │   │
│   │   ├── contexts/
│   │   │   ├── AppContext.tsx
│   │   │   ├── ThemeContext.tsx
│   │   │   └── BookingContext.tsx
│   │   │
│   │   ├── hooks/
│   │   │   ├── useServices.ts
│   │   │   ├── useTeam.ts
│   │   │   ├── useFAQ.ts
│   │   │   ├── useBooking.ts
│   │   │   ├── useContact.ts
│   │   │   ├── useTouchGestures.ts
│   │   │   ├── useScrollAnimation.ts
│   │   │   └── useMediaQuery.ts
│   │   │
│   │   ├── utils/
│   │   │   ├── cn.ts (classnames utility)
│   │   │   ├── formatters.ts
│   │   │   ├── validators.ts
│   │   │   └── constants.ts
│   │   │
│   │   ├── types/
│   │   │   ├── service.ts
│   │   │   ├── team.ts
│   │   │   ├── appointment.ts
│   │   │   ├── faq.ts
│   │   │   └── index.ts
│   │   │
│   │   ├── styles/
│   │   │   ├── globals.css
│   │   │   ├── animations.css
│   │   │   └── utilities.css
│   │   │
│   │   ├── config/
│   │   │   ├── breakpoints.ts
│   │   │   ├── theme.ts
│   │   │   └── api.ts
│   │   │
│   │   ├── App.tsx
│   │   ├── main.tsx
│   │   └── vite-env.d.ts
│   │
│   ├── package.json
│   ├── tsconfig.json
│   ├── vite.config.ts
│   ├── tailwind.config.js
│   └── postcss.config.js
│
├── server/                          # Node.js backend
│   ├── src/
│   │   ├── controllers/
│   │   │   ├── appointmentController.ts
│   │   │   ├── contactController.ts
│   │   │   ├── servicesController.ts
│   │   │   ├── teamController.ts
│   │   │   ├── faqController.ts
│   │   │   └── resourcesController.ts
│   │   │
│   │   ├── models/
│   │   │   ├── Appointment.ts
│   │   │   ├── Contact.ts
│   │   │   ├── Service.ts
│   │   │   ├── TeamMember.ts
│   │   │   ├── FAQ.ts
│   │   │   └── Resource.ts
│   │   │
│   │   ├── routes/
│   │   │   ├── appointments.ts
│   │   │   ├── contact.ts
│   │   │   ├── services.ts
│   │   │   ├── team.ts
│   │   │   ├── faq.ts
│   │   │   └── resources.ts
│   │   │
│   │   ├── middleware/
│   │   │   ├── auth.ts
│   │   │   ├── validation.ts
│   │   │   ├── errorHandler.ts
│   │   │   └── rateLimit.ts
│   │   │
│   │   ├── services/
│   │   │   ├── emailService.ts
│   │   │   ├── smsService.ts
│   │   │   └── notificationService.ts
│   │   │
│   │   ├── config/
│   │   │   ├── database.ts
│   │   │   ├── email.ts
│   │   │   └── env.ts
│   │   │
│   │   ├── utils/
│   │   │   ├── validators.ts
│   │   │   ├── formatters.ts
│   │   │   └── logger.ts
│   │   │
│   │   └── index.ts
│   │
│   ├── package.json
│   ├── tsconfig.json
│   └── .env.example
│
├── shared/                          # Shared types
│   └── types/
│       ├── service.ts
│       ├── appointment.ts
│       └── index.ts
│
├── .gitignore
├── README.md
└── docker-compose.yml (optional)
```

---

## 7. Dependencies & Technology Stack

### 7.1 Frontend Dependencies

```json
{
  "name": "drdent-client",
  "version": "1.0.0",
  "dependencies": {
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "react-router-dom": "^6.20.0",
    "@tanstack/react-query": "^5.12.0",
    "axios": "^1.6.2",
    "react-hook-form": "^7.48.2",
    "zod": "^3.22.4",
    "@hookform/resolvers": "^3.3.2",
    "clsx": "^2.0.0",
    "tailwind-merge": "^2.1.0",
    "framer-motion": "^10.16.5",
    "react-intersection-observer": "^9.5.3",
    "swiper": "^11.0.5",
    "react-google-maps": "^2.0.0"
  },
  "devDependencies": {
    "@types/react": "^18.2.43",
    "@types/react-dom": "^18.2.17",
    "@vitejs/plugin-react": "^4.2.1",
    "typescript": "^5.3.3",
    "vite": "^5.0.8",
    "tailwindcss": "^3.3.6",
    "postcss": "^8.4.32",
    "autoprefixer": "^10.4.16",
    "eslint": "^8.55.0",
    "prettier": "^3.1.1"
  }
}
```

### 7.2 Backend Dependencies

```json
{
  "name": "drdent-server",
  "version": "1.0.0",
  "dependencies": {
    "express": "^4.18.2",
    "mongoose": "^8.0.3",
    "cors": "^2.8.5",
    "helmet": "^7.1.0",
    "express-rate-limit": "^7.1.5",
    "dotenv": "^16.3.1",
    "nodemailer": "^6.9.7",
    "joi": "^17.11.0",
    "bcryptjs": "^2.4.3",
    "jsonwebtoken": "^9.0.2",
    "winston": "^3.11.0"
  },
  "devDependencies": {
    "@types/express": "^4.17.21",
    "@types/node": "^20.10.5",
    "@types/cors": "^2.8.17",
    "@types/nodemailer": "^6.4.14",
    "typescript": "^5.3.3",
    "ts-node": "^10.9.2",
    "nodemon": "^3.0.2"
  }
}
```

---

## 8. Component Mapping & Implementation Details

### 8.1 HomePage Component Breakdown

```typescript
// pages/HomePage.tsx
import { HeroSection } from '@/components/sections/HeroSection';
import { PhilosophySection } from '@/components/sections/PhilosophySection';
import { ServicesSection } from '@/components/sections/ServicesSection';
import { TestimonialsSection } from '@/components/sections/TestimonialsSection';
import { TrustSignalsSection } from '@/components/sections/TrustSignalsSection';
import { ContactCTASection } from '@/components/sections/ContactCTASection';

const HomePage: React.FC = () => {
  return (
    <>
      <HeroSection
        title="Zâmbetul Tău\nPrioritatea Noastră"
        subtitle="Îngrijire dentară modernă și blândă în inima Bucureștiului"
        backgroundVideo="/videos/hero-background.mp4"
        backgroundImage="/images/drdent-home-opt.jpg"
        trustBadge="Cabinet Stomatologic Premium"
        stats={[
          { icon: '⭐', number: '5.0', label: 'Rating Google' },
          { icon: '👥', number: '290+', label: 'Pacienți Fericiți' },
          { icon: '🎓', number: '15+', label: 'Ani Experiență' }
        ]}
        primaryCTA={{
          text: 'Programați Acum',
          icon: '📅',
          note: 'Consultație gratuită',
          onClick: () => openBookingModal()
        }}
        quickActions={[
          { icon: '📞', text: 'Sună', href: 'tel:+40213449317' },
          { icon: '📍', text: 'Locație', onClick: () => openLocationModal() }
        ]}
      />
      
      <PhilosophySection
        title="Filozofia Noastră"
        subtitle="La Dr.Dent, credem în stomatologia biomimetică – păstrarea zâmbetului natural cu grijă și compasiune."
        items={[
          {
            title: 'Îngrijire Blândă',
            description: 'Tehnici minim invazive pentru confortul dumneavoastră.',
            icon: '💙'
          },
          {
            title: 'Tehnologie Avansată',
            description: 'CEREC și alte inovații pentru rezultate precise și rapide.',
            icon: '🔬'
          },
          {
            title: 'Echipă Dedicată',
            description: 'Profesioniști pasionați de sănătatea dumneavoastră orală.',
            icon: '👨‍⚕️'
          }
        ]}
      />
      
      <ServicesSection
        title="Serviciile Noastre"
        services={[
          {
            title: 'Curățări și Prevenție',
            description: 'Mențineți zâmbetul sănătos cu îngrijiri regulate.',
            icon: '🛡️'
          },
          {
            title: 'Restaurări Estetice',
            description: 'Coroane și fațete pentru un zâmbet strălucitor.',
            icon: '✨'
          },
          {
            title: 'Implanturi Dentare',
            description: 'Soluții durabile pentru dinți lipsă.',
            icon: '🦷'
          }
        ]}
        ctaText="Vedeți toate serviciile"
        ctaHref="/services"
      />
      
      <TestimonialsSection
        title="Ce Spun Pacienții Noștri"
        testimonials={[
          {
            text: 'Experiență minunată! Echipa este foarte profesionistă și atentă.',
            author: 'Maria Popescu',
            rating: 5
          },
          {
            text: 'Cel mai bun cabinet stomatologic din București. Recomand cu încredere!',
            author: 'Ion Ionescu',
            rating: 5
          },
          {
            text: 'Îngrijire de top și atmosferă primitoare. Sunt foarte mulțumit.',
            author: 'Elena Dumitrescu',
            rating: 5
          }
        ]}
        overallRating={5.0}
        totalReviews={290}
      />
      
      <TrustSignalsSection
        title="De Ce să Ne Alegeți"
        signals={[
          {
            title: '15+ Ani de Experiență',
            description: 'Servind comunitatea din București de peste un deceniu.',
            icon: '🏆'
          },
          {
            title: 'Tehnologie CEREC',
            description: 'Restaurări în aceeași zi cu precizie digitală.',
            icon: '🔬'
          },
          {
            title: 'Certificări și Premii',
            description: 'Recunoscuți pentru excelență în îngrijirea dentară.',
            icon: '🎖️'
          }
        ]}
      />
      
      <ContactCTASection
        title="Gata să Zâmbiți Mai Mult?"
        subtitle="Contactați-ne astăzi pentru o consultație gratuită."
        primaryCTA={{
          text: 'Programați Online',
          href: 'https://app.nexhealth.com/appt/pearldentalbucharest',
          icon: '📅'
        }}
        phone="+40213449317"
      />
    </>
  );
};
```

### 8.2 Shared Component Examples

**SectionHeader Component**
```typescript
// components/sections/SectionHeader.tsx
interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  align?: 'left' | 'center' | 'right';
  className?: string;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({
  title,
  subtitle,
  align = 'center',
  className
}) => {
  return (
    <div className={cn(
      "mb-12",
      align === 'center' && "text-center",
      align === 'left' && "text-left",
      align === 'right' && "text-right",
      className
    )}>
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
        {title}
      </h2>
      {subtitle && (
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
    </div>
  );
};
```

**Grid Component**
```typescript
// components/layout/Grid.tsx
interface GridProps {
  children: React.ReactNode;
  cols?: {
    default?: number;
    sm?: number;
    md?: number;
    lg?: number;
    xl?: number;
  };
  gap?: number;
  className?: string;
}

const Grid: React.FC<GridProps> = ({
  children,
  cols = { default: 1, sm: 2, md: 3 },
  gap = 6,
  className
}) => {
  const gridCols = {
    1: 'grid-cols-1',
    2: 'grid-cols-2',
    3: 'grid-cols-3',
    4: 'grid-cols-4'
  };
  
  return (
    <div className={cn(
      "grid",
      cols.default && gridCols[cols.default],
      cols.sm && `sm:${gridCols[cols.sm]}`,
      cols.md && `md:${gridCols[cols.md]}`,
      cols.lg && `lg:${gridCols[cols.lg]}`,
      cols.xl && `xl:${gridCols[cols.xl]}`,
      `gap-${gap}`,
      className
    )}>
      {children}
    </div>
  );
};
```

---

## 9. Styling Strategy

### 9.1 Tailwind Configuration

```javascript
// tailwind.config.js
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#E3F2FD',
          100: '#BBDEFB',
          200: '#90CAF9',
          300: '#64B5F6',
          400: '#42A5F5',
          500: '#2196F3', // Main blue
          600: '#1976D2',
          700: '#1565C0',
          800: '#0D47A1',
          900: '#0A3D91',
        },
        secondary: {
          50: '#FAFAFA',
          100: '#F5F5F5',
          200: '#EEEEEE',
          300: '#E0E0E0',
          400: '#BDBDBD',
          500: '#9E9E9E',
          600: '#757575',
          700: '#616161',
          800: '#424242',
          900: '#212121',
        },
        accent: {
          mint: '#E3F2FD',
          sage: '#BBDEFB',
          cream: '#FFFFFF',
        }
      },
      fontFamily: {
        heading: ['Space Grotesk', 'sans-serif'],
        body: ['Plus Jakarta Sans', 'sans-serif'],
      },
      fontSize: {
        'xs': ['0.75rem', { lineHeight: '1.5' }],
        'sm': ['0.875rem', { lineHeight: '1.5' }],
        'base': ['1rem', { lineHeight: '1.7' }],
        'lg': ['1.125rem', { lineHeight: '1.7' }],
        'xl': ['1.25rem', { lineHeight: '1.5' }],
        '2xl': ['1.5rem', { lineHeight: '1.3' }],
        '3xl': ['1.875rem', { lineHeight: '1.2' }],
        '4xl': ['2.25rem', { lineHeight: '1.1' }],
        '5xl': ['3rem', { lineHeight: '1.1' }],
      },
      spacing: {
        'safe-top': 'env(safe-area-inset-top)',
        'safe-bottom': 'env(safe-area-inset-bottom)',
        'safe-left': 'env(safe-area-inset-left)',
        'safe-right': 'env(safe-area-inset-right)',
      },
      borderRadius: {
        'sm': '8px',
        'DEFAULT': '12px',
        'lg': '16px',
        'xl': '24px',
        '2xl': '32px',
      },
      boxShadow: {
        'sm': '0 2px 4px rgba(0, 0, 0, 0.08)',
        'DEFAULT': '0 4px 8px rgba(0, 0, 0, 0.12)',
        'lg': '0 8px 16px rgba(0, 0, 0, 0.16)',
        'xl': '0 16px 32px rgba(0, 0, 0, 0.20)',
        'blue': '0 4px 20px rgba(33, 150, 243, 0.3)',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'slide-down': 'slideDown 0.6s ease-out',
        'scale-in': 'scaleIn 0.6s ease-out',
        'bounce-slow': 'bounce 2s infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideDown: {
          '0%': { opacity: '0', transform: 'translateY(-30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.95)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio'),
  ],
};
```

### 9.2 Custom CSS (globals.css)

```css
/* src/styles/globals.css */
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  /* Font imports */
  @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500;600;700&family=Plus+Jakarta+Sans:wght@400;500;600&display=swap');
  
  /* Base styles */
  html {
    scroll-behavior: smooth;
    -webkit-tap-highlight-color: transparent;
  }
  
  body {
    @apply font-body text-gray-900 bg-white;
    overflow-x: hidden;
  }
  
  /* Headings */
  h1, h2, h3, h4, h5, h6 {
    @apply font-heading font-bold;
  }
  
  /* Focus styles */
  *:focus-visible {
    @apply outline-2 outline-offset-2 outline-blue-500;
  }
}

@layer components {
  /* Container */
  .container {
    @apply mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl;
  }
  
  /* Section spacing */
  .section {
    @apply py-16 md:py-24;
  }
  
  /* Gradient text */
  .gradient-text {
    @apply bg-gradient-to-r from-blue-500 to-blue-600 bg-clip-text text-transparent;
  }
  
  /* Glass morphism */
  .glass {
    @apply bg-white/80 backdrop-blur-lg border border-white/20;
  }
  
  /* Touch ripple effect */
  .touch-ripple {
    @apply absolute rounded-full bg-white/30 pointer-events-none;
    animation: ripple 0.6s ease-out;
  }
  
  @keyframes ripple {
    0% {
      transform: scale(0);
      opacity: 0.7;
    }
    100% {
      transform: scale(2);
      opacity: 0;
    }
  }
}

@layer utilities {
  /* Safe area utilities */
  .pb-safe {
    padding-bottom: env(safe-area-inset-bottom);
  }
  
  .pt-safe {
    padding-top: env(safe-area-inset-top);
  }
  
  /* Line clamp utilities */
  .line-clamp-2 {
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }
  
  .line-clamp-3 {
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }
  
  /* Aspect ratio utilities */
  .aspect-9-16 {
    aspect-ratio: 9 / 16;
  }
  
  /* Hardware acceleration */
  .gpu-accelerated {
    transform: translateZ(0);
    backface-visibility: hidden;
  }
}

/* Reduced motion support */
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
```

---

## 10. Routing Strategy

### 10.1 Route Configuration

```typescript
// App.tsx
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { AppProvider } from './contexts/AppContext';
import Layout from './components/layout/Layout';

// Pages
import HomePage from './pages/HomePage';
import ServicesPage from './pages/ServicesPage';
import FeesPage from './pages/FeesPage';
import TeamPage from './pages/TeamPage';
import FAQPage from './pages/FAQPage';
import LocationPage from './pages/LocationPage';
import ResourcesPage from './pages/ResourcesPage';
import NotFoundPage from './pages/NotFoundPage';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 5 * 60 * 1000, // 5 minutes
      retry: 1,
    },
  },
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <AppProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<HomePage />} />
              <Route path="services" element={<ServicesPage />} />
              <Route path="fees" element={<FeesPage />} />
              <Route path="team" element={<TeamPage />} />
              <Route path="faq" element={<FAQPage />} />
              <Route path="location" element={<LocationPage />} />
              <Route path="resources" element={<ResourcesPage />} />
              <Route path="*" element={<NotFoundPage />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </AppProvider>
    </QueryClientProvider>
  );
}

export default App;
```

### 10.2 Layout Component

```typescript
// components/layout/Layout.tsx
import { Outlet } from 'react-router-dom';
import { useEffect } from 'react';
import Header from './Header';
import Footer from './Footer';
import MobileMenu from './MobileMenu';
import BottomNavigation from './BottomNavigation';
import BookingModal from '../features/BookingModal';
import { useApp } from '@/contexts/AppContext';

const Layout: React.FC = () => {
  const { state } = useApp();
  
  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <MobileMenu />
      
      <main className="flex-1 pb-20 md:pb-0">
        <Outlet />
      </main>
      
      <Footer />
      <BottomNavigation />
      
      {/* Global Modals */}
      <BookingModal 
        isOpen={state.isBookingModalOpen}
        onClose={() => state.actions.closeBookingModal()}
      />
    </div>
  );
};
```

---

## 11. Performance Optimization Strategy

### 11.1 Code Splitting

```typescript
// Lazy load pages for better initial load
import { lazy, Suspense } from 'react';
import PageLoader from './components/ui/PageLoader';

const HomePage = lazy(() => import('./pages/HomePage'));
const ServicesPage = lazy(() => import('./pages/ServicesPage'));
const TeamPage = lazy(() => import('./pages/TeamPage'));

// In Routes
<Route 
  index 
  element={
    <Suspense fallback={<PageLoader />}>
      <HomePage />
    </Suspense>
  } 
/>
```

### 11.2 Image Optimization

```typescript
// components/ui/OptimizedImage.tsx
interface OptimizedImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  priority?: boolean;
  className?: string;
}

const OptimizedImage: React.FC<OptimizedImageProps> = ({
  src,
  alt,
  width,
  height,
  priority = false,
  className
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);
  
  useEffect(() => {
    if (!imgRef.current || priority) return;
    
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { rootMargin: '100px' }
    );
    
    observer.observe(imgRef.current);
    
    return () => observer.disconnect();
  }, [priority]);
  
  return (
    <div className={cn("relative overflow-hidden", className)}>
      {/* Placeholder */}
      {!isLoaded && (
        <div className="absolute inset-0 bg-gray-200 animate-pulse" />
      )}
      
      {/* Image */}
      <img
        ref={imgRef}
        src={(priority || isInView) ? src : undefined}
        alt={alt}
        width={width}
        height={height}
        loading={priority ? 'eager' : 'lazy'}
        onLoad={() => setIsLoaded(true)}
        className={cn(
          "transition-opacity duration-300",
          isLoaded ? "opacity-100" : "opacity-0"
        )}
      />
    </div>
  );
};
```

### 11.3 Performance Hooks

```typescript
// hooks/usePerformance.ts
export const usePerformance = () => {
  useEffect(() => {
    // Report Web Vitals
    if ('web-vital' in window) {
      import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
        getCLS(console.log);
        getFID(console.log);
        getFCP(console.log);
        getLCP(console.log);
        getTTFB(console.log);
      });
    }
  }, []);
};

// hooks/useIntersectionObserver.ts
export const useIntersectionObserver = (
  ref: RefObject<Element>,
  options: IntersectionObserverInit = {}
) => {
  const [isIntersecting, setIsIntersecting] = useState(false);
  
  useEffect(() => {
    if (!ref.current) return;
    
    const observer = new IntersectionObserver(([entry]) => {
      setIsIntersecting(entry.isIntersecting);
    }, options);
    
    observer.observe(ref.current);
    
    return () => observer.disconnect();
  }, [ref, options]);
  
  return isIntersecting;
};
```

---

## 12. Accessibility Implementation

### 12.1 Accessibility Features

```typescript
// components/ui/SkipToContent.tsx
const SkipToContent: React.FC = () => {
  return (
    <a
      href="#main-content"
      className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-blue-500 focus:text-white focus:rounded-lg"
    >
      Sari la conținutul principal
    </a>
  );
};

// components/ui/VisuallyHidden.tsx
const VisuallyHidden: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <span className="sr-only">
      {children}
    </span>
  );
};
```

### 12.2 ARIA Implementation

```typescript
// Example: Accessible FAQ Accordion
const FAQItem: React.FC<FAQItemProps> = ({ question, answer, id }) => {
  const [isOpen, setIsOpen] = useState(false);
  const contentId = `faq-content-${id}`;
  const buttonId = `faq-button-${id}`;
  
  return (
    <div className="border-b border-gray-200">
      <button
        id={buttonId}
        aria-expanded={isOpen}
        aria-controls={contentId}
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between py-4 text-left"
      >
        <span className="font-semibold text-gray-900">{question}</span>
        <ChevronIcon 
          className={cn(
            "w-5 h-5 transition-transform",
            isOpen && "rotate-180"
          )}
          aria-hidden="true"
        />
      </button>
      
      <div
        id={contentId}
        role="region"
        aria-labelledby={buttonId}
        className={cn(
          "overflow-hidden transition-all duration-300",
          isOpen ? "max-h-96 pb-4" : "max-h-0"
        )}
      >
        <p className="text-gray-600">{answer}</p>
      </div>
    </div>
  );
};
```

---

## 13. SEO & Meta Strategy

### 13.1 Meta Component

```typescript
// components/seo/Meta.tsx
import { Helmet } from 'react-helmet-async';

interface MetaProps {
  title: string;
  description: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: 'website' | 'article';
}

const Meta: React.FC<MetaProps> = ({
  title,
  description,
  keywords,
  image = '/images/og-image.jpg',
  url = 'https://www.drdent.ro',
  type = 'website'
}) => {
  const fullTitle = `${title} | Dr.Dent - Cabinet Stomatologic București`;
  
  return (
    <Helmet>
      {/* Basic Meta */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      
      {/* Open Graph */}
      <meta property="og:type" content={type} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={url} />
      <meta property="og:site_name" content="Dr.Dent" />
      <meta property="og:locale" content="ro_RO" />
      
      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      
      {/* Canonical */}
      <link rel="canonical" href={url} />
    </Helmet>
  );
};

// Usage in HomePage
const HomePage = () => {
  return (
    <>
      <Meta
        title="Acasă"
        description="Cabinet stomatologic primitor și îngrijitor în Centrul Bucureștiului -- pe Calea Victoriei între strada Episcopiei și strada Stavropoleos, lângă Piața Victoriei."
        keywords="cabinet stomatologic, dentist București, stomatologie, îngrijire dentară"
      />
      {/* Page content */}
    </>
  );
};
```

---

## 14. Testing Strategy

### 14.1 Unit Testing

```typescript
// __tests__/components/Button.test.tsx
import { render, screen, fireEvent } from '@testing-library/react';
import { Button } from '@/components/ui/Button';

describe('Button Component', () => {
  it('renders with correct text', () => {
    render(<Button>Click me</Button>);
    expect(screen.getByText('Click me')).toBeInTheDocument();
  });
  
  it('calls onClick when clicked', () => {
    const handleClick = jest.fn();
    render(<Button onClick={handleClick}>Click me</Button>);
    fireEvent.click(screen.getByText('Click me'));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
  
  it('shows loading state', () => {
    render(<Button loading>Click me</Button>);
    expect(screen.getByRole('button')).toHaveAttribute('disabled');
  });
});
```

### 14.2 Integration Testing

```typescript
// __tests__/pages/HomePage.test.tsx
import { render, screen } from '@testing-library/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import HomePage from '@/pages/HomePage';

const queryClient = new QueryClient();

describe('HomePage', () => {
  it('renders hero section', () => {
    render(
      <QueryClientProvider client={queryClient}>
        <HomePage />
      </QueryClientProvider>
    );
    
    expect(screen.getByText(/Zâmbetul Tău/i)).toBeInTheDocument();
    expect(screen.getByText(/Programați Acum/i)).toBeInTheDocument();
  });
});
```

---

## 15. Deployment Strategy

### 15.1 Frontend Deployment (Vercel)

```yaml
# vercel.json
{
  "version": 2,
  "builds": [
    {
      "src": "package.json",
      "use": "@vercel/static-build",
      "config": {
        "distDir": "dist"
      }
    }
  ],
  "routes": [
    {
      "src": "/api/(.*)",
      "dest": "https://api.drdent.ro/$1"
    },
    {
      "src": "/(.*)",
      "dest": "/index.html"
    }
  ]
}
```

### 15.2 Backend Deployment (Railway/Render)

```yaml
# railway.json or render.yaml
services:
  - type: web
    name: drdent-api
    env: node
    buildCommand: npm install && npm run build
    startCommand: npm start
    envVars:
      - key: NODE_ENV
        value: production
      - key: MONGODB_URI
        sync: false
      - key: JWT_SECRET
        generateValue: true
      - key: EMAIL_HOST
        sync: false
```

### 15.3 Environment Variables

```bash
# client/.env.example
VITE_API_URL=http://localhost:5000/api
VITE_GOOGLE_MAPS_API_KEY=your_key_here
VITE_ANALYTICS_ID=your_analytics_id

# server/.env.example
NODE_ENV=development
PORT=5000
MONGODB_URI=mongodb://localhost:27017/drdent
JWT_SECRET=your_secret_here
FRONTEND_URL=http://localhost:5173

# Email configuration
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
EMAIL_USER=your_email@gmail.com
EMAIL_PASS=your_password

# SMS configuration (optional)
SMS_API_KEY=your_sms_api_key
```

---

## 16. Migration Strategy

### 16.1 Content Migration Plan

**Phase 1: Data Extraction**
1. Extract all text content from HTML files
2. Extract all images and optimize for web
3. Extract service data into JSON
4. Extract team member information
5. Extract FAQ items
6. Extract pricing information

**Phase 2: Database Seeding**
```typescript
// server/scripts/seedDatabase.ts
import { Service } from '../models/Service';
import { TeamMember } from '../models/TeamMember';
import { FAQ } from '../models/FAQ';

const seedServices = async () => {
  const services = [
    {
      category: 'Prevenție',
      title: 'Consultație',
      description: 'Examen oral complet și evaluare detaliată',
      price: 'Gratuit',
      duration: '30-45 min',
      features: [
        'Diagnostic complet',
        'Plan de tratament',
        'Recomandări personalizate'
      ],
      icon: '🦷'
    },
    // More services...
  ];
  
  await Service.insertMany(services);
  console.log('Services seeded successfully');
};

const seedTeam = async () => {
  const team = [
    {
      name: 'Dr. Tatiana Perlroth',
      title: 'Medic Stomatolog Principal',
      bio: 'Dr. Tatiana Perlroth este medicul stomatolog principal...',
      image: '/images/dentist-tatiana-perlroth.jpg',
      credentials: [
        'Medic Stomatolog - UMF Carol Davila',
        'Specializare în Germania și Austria',
        '15+ ani experiență'
      ],
      specialties: ['Stomatologie generală', 'Estetică dentară'],
      experience: 15,
      featured: true
    },
    // More team members...
  ];
  
  await TeamMember.insertMany(team);
  console.log('Team seeded successfully');
};

// Run seeding
const seedDatabase = async () => {
  await seedServices();
  await seedTeam();
  await seedFAQ();
  await seedResources();
};

seedDatabase();
```

### 16.2 Asset Migration

```bash
# Image optimization script
# Convert all images to WebP format
for img in images/*.jpg; do
  cwebp -q 85 "$img" -o "${img%.jpg}.webp"
done

# Generate responsive image sizes
for img in images/*.jpg; do
  convert "$img" -resize 480x "$img-mobile.jpg"
  convert "$img" -resize 768x "$img-tablet.jpg"
  convert "$img" -resize 1920x "$img-desktop.jpg"
done
```

---

## 17. Development Workflow

### 17.1 Development Setup

```bash
# Clone repository
git clone https://github.com/drdent/website.git
cd website

# Install dependencies
cd client && npm install
cd ../server && npm install

# Set up environment variables
cp client/.env.example client/.env
cp server/.env.example server/.env

# Start development servers
# Terminal 1 - Frontend
cd client && npm run dev

# Terminal 2 - Backend
cd server && npm run dev

# Terminal 3 - Database (if using Docker)
docker-compose up mongodb
```

### 17.2 Build Process

```json
// client/package.json scripts
{
  "scripts": {
    "dev": "vite",
    "build": "tsc && vite build",
    "preview": "vite preview",
    "lint": "eslint . --ext ts,tsx --report-unused-disable-directives --max-warnings 0",
    "format": "prettier --write \"src/**/*.{ts,tsx,css}\"",
    "test": "vitest",
    "test:ui": "vitest --ui",
    "type-check": "tsc --noEmit"
  }
}

// server/package.json scripts
{
  "scripts": {
    "dev": "nodemon --exec ts-node src/index.ts",
    "build": "tsc",
    "start": "node dist/index.js",
    "seed": "ts-node src/scripts/seedDatabase.ts",
    "test": "jest",
    "lint": "eslint . --ext .ts"
  }
}
```

---

## 18. Implementation Roadmap

### 18.1 Phase 1: Foundation (Weeks 1-3)

**Week 1: Project Setup**
- [ ] Initialize React project with Vite + TypeScript
- [ ] Set up Tailwind CSS configuration
- [ ] Create base component library (Button, Card, Input, Modal)
- [ ] Set up routing with React Router
- [ ] Configure ESLint and Prettier
- [ ] Set up Git repository and branching strategy

**Week 2: Backend Foundation**
- [ ] Initialize Node.js + Express server
- [ ] Set up MongoDB connection
- [ ] Create database models (Appointment, Contact, Service, etc.)
- [ ] Implement basic API endpoints
- [ ] Set up email service integration
- [ ] Configure environment variables

**Week 3: Core Layout**
- [ ] Build Header component with desktop/mobile variants
- [ ] Create Footer component
- [ ] Implement MobileMenu with animations
- [ ] Build BottomNavigation for mobile
- [ ] Create Layout wrapper component
- [ ] Set up global state management (Context API)

### 18.2 Phase 2: Page Implementation (Weeks 4-7)

**Week 4: HomePage**
- [ ] Build HeroSection with video background
- [ ] Create PhilosophySection with grid
- [ ] Implement ServicesSection overview
- [ ] Build TestimonialsSection
- [ ] Create TrustSignalsSection
- [ ] Implement ContactCTASection

**Week 5: Services & Fees Pages**
- [ ] Build ServicesPage with category filtering
- [ ] Create ServiceCard components
- [ ] Implement ServiceModal for details
- [ ] Build FeesPage with pricing tables
- [ ] Create payment options section
- [ ] Add booking integration

**Week 6: Team & FAQ Pages**
- [ ] Build TeamPage with featured doctor
- [ ] Create TeamMemberCard components
- [ ] Implement TeamMemberModal
- [ ] Build FAQPage with accordion
- [ ] Create search and filter functionality
- [ ] Add category tabs

**Week 7: Location & Resources Pages**
- [ ] Build LocationPage with Google Maps
- [ ] Create ContactForm with validation
- [ ] Implement directions section
- [ ] Build ResourcesPage with categories
- [ ] Create ResourceCard components
- [ ] Add download functionality

### 18.3 Phase 3: Features & Integration (Weeks 8-10)

**Week 8: Booking System**
- [ ] Build multi-step BookingModal
- [ ] Implement form validation with Zod
- [ ] Create booking API endpoints
- [ ] Set up email notifications
- [ ] Add SMS confirmations (optional)
- [ ] Test booking flow end-to-end

**Week 9: Advanced Features**
- [ ] Implement touch gestures for mobile
- [ ] Add scroll animations with Intersection Observer
- [ ] Create loading states and skeletons
- [ ] Build error boundaries
- [ ] Add toast notifications
- [ ] Implement search functionality

**Week 10: Polish & Optimization**
- [ ] Optimize images and lazy loading
- [ ] Implement code splitting
- [ ] Add service worker for caching
- [ ] Optimize bundle size
- [ ] Performance audit with Lighthouse
- [ ] Accessibility audit with axe

### 18.4 Phase 4: Testing & Launch (Weeks 11-12)

**Week 11: Testing**
- [ ] Write unit tests for components
- [ ] Create integration tests for pages
- [ ] Test API endpoints
- [ ] Cross-browser testing
- [ ] Mobile device testing
- [ ] Accessibility testing
- [ ] Performance testing

**Week 12: Launch Preparation**
- [ ] Final content review
- [ ] SEO optimization
- [ ] Set up analytics (Google Analytics 4)
- [ ] Configure production environment
- [ ] Deploy to staging
- [ ] Client review and feedback
- [ ] Deploy to production
- [ ] Monitor and fix any issues

---

## 19. Key Design Decisions & Rationale

### 19.1 Why React?

**Benefits:**
- Component reusability across all pages
- Virtual DOM for optimal performance
- Large ecosystem and community support
- Easy state management
- Excellent developer experience
- Strong TypeScript support

### 19.2 Why Tailwind CSS?

**Benefits:**
- Utility-first approach for rapid development
- Mobile-first by default
- Excellent purging for small bundle sizes
- Consistent design system
- Easy customization
- Great developer experience

### 19.3 Why React Query?

**Benefits:**
- Automatic caching and background refetching
- Optimistic updates
- Request deduplication
- Built-in loading and error states
- DevTools for debugging
- Excellent TypeScript support

### 19.4 Why Node.js + Express?

**Benefits:**
- JavaScript/TypeScript across full stack
- Fast and lightweight
- Large ecosystem
- Easy to deploy
- Excellent for APIs
- Good performance

### 19.5 Why MongoDB?

**Benefits:**
- Flexible schema for evolving requirements
- Easy to scale
- Good performance for read-heavy operations
- JSON-like documents match JavaScript objects
- Cloud hosting options (MongoDB Atlas)

---

## 20. Mobile-First Design Principles

### 20.1 9:16 Format Optimization

**Hero Section:**
- Full viewport height (100dvh)
- Vertical content flow
- Large touch targets (min 44px)
- Thumb-friendly CTA placement
- Gesture indicators
- Emergency contact always accessible

**Content Sections:**
- Single column on mobile
- 2-column grid on tablets
- 3-column grid on desktop
- Adequate spacing between touch targets
- Progressive disclosure for detailed content

**Navigation:**
- Bottom navigation for primary actions
- Hamburger menu for secondary pages
- Sticky header that hides on scroll down
- Breadcrumbs for deep navigation

### 20.2 Touch Interactions

**Gestures:**
- Swipe left/right for section navigation
- Swipe up to reveal content
- Pull down to refresh (hero section)
- Long press for quick actions
- Tap for primary interactions

**Feedback:**
- Visual ripple effect on touch
- Haptic feedback (where supported)
- Loading states
- Success/error animations
- Smooth transitions

---

## 21. Performance Targets

### 21.1 Core Web Vitals

**Targets:**
- **LCP (Largest Contentful Paint):** < 2.5s
- **FID (First Input Delay):** < 100ms
- **CLS (Cumulative Layout Shift):** < 0.1
- **FCP (First Contentful Paint):** < 1.8s
- **TTI (Time to Interactive):** < 3.5s

**Strategies:**
- Code splitting by route
- Lazy loading images
- Preload critical resources
- Optimize fonts with font-display: swap
- Minimize JavaScript bundle
- Use CDN for static assets
- Implement service worker caching

### 21.2 Bundle Size Targets

**Frontend:**
- Initial bundle: < 150KB (gzipped)
- Route chunks: < 50KB each (gzipped)
- CSS: < 30KB (gzipped)
- Total page weight: < 500KB

**Optimization Techniques:**
- Tree shaking
- Code splitting
- Dynamic imports
- Minification
- Compression (Brotli/Gzip)
- Image optimization (WebP, AVIF)

---

## 22. Security Considerations

### 22.1 Frontend Security

```typescript
// Security best practices

// 1. Sanitize user input
import DOMPurify from 'dompurify';

const sanitizeHTML = (dirty: string) => {
  return DOMPurify.sanitize(dirty);
};

// 2. Validate all form inputs
const validateInput = (input: string, type: 'email' | 'phone' | 'text') => {
  // Use Zod schemas for validation
};

// 3. Secure external links
<a 
  href={externalUrl} 
  target="_blank" 
  rel="noopener noreferrer"
>
  Link
</a>

// 4. Content Security Policy
<meta 
  http-equiv="Content-Security-Policy" 
  content="default-src 'self'; script-src 'self' 'unsafe-inline'; style-src 'self' 'unsafe-inline';"
/>
```

### 22.2 Backend Security

```typescript
// server/middleware/security.ts
import helmet from 'helmet';
import rateLimit from 'express-rate-limit';
import mongoSanitize from 'express-mongo-sanitize';

// Helmet for security headers
app.use(helmet());

// Rate limiting
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100,
  message: 'Prea multe cereri de la această adresă IP'
});
app.use('/api/', limiter);

// Sanitize data against NoSQL injection
app.use(mongoSanitize());

// CORS configuration
app.use(cors({
  origin: process.env.FRONTEND_URL,
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));
```

---

## 23. Monitoring & Analytics

### 23.1 Analytics Setup

```typescript
// utils/analytics.ts
import ReactGA from 'react-ga4';

export const initAnalytics = () => {
  ReactGA.initialize(import.meta.env.VITE_ANALYTICS_ID);
};

export const trackPageView = (path: string) => {
  ReactGA.send({ hitType: 'pageview', page: path });
};

export const trackEvent = (category: string, action: string, label?: string) => {
  ReactGA.event({
    category,
    action,
    label
  });
};

// Usage in App
useEffect(() => {
  initAnalytics();
}, []);

useEffect(() => {
  trackPageView(location.pathname);
}, [location]);

// Track booking attempts
const handleBooking = () => {
  trackEvent('Booking', 'Click', 'Primary CTA');
  openBookingModal();
};
```

### 23.2 Error Monitoring

```typescript
// utils/errorTracking.ts
import * as Sentry from '@sentry/react';

export const initErrorTracking = () => {
  Sentry.init({
    dsn: import.meta.env.VITE_SENTRY_DSN,
    environment: import.meta.env.MODE,
    tracesSampleRate: 1.0,
  });
};

// Error Boundary
import { ErrorBoundary } from '@sentry/react';

<ErrorBoundary fallback={<ErrorFallback />}>
  <App />
</ErrorBoundary>
```

---

## 24. Accessibility Checklist

### 24.1 WCAG 2.1 AA Compliance

**Perceivable:**
- [ ] All images have descriptive alt text
- [ ] Color contrast ratio ≥ 4.5:1 for normal text
- [ ] Color contrast ratio ≥ 3:1 for large text
- [ ] Content doesn't rely solely on color
- [ ] Video has captions/transcripts

**Operable:**
- [ ] All functionality available via keyboard
- [ ] No keyboard traps
- [ ] Skip to main content link
- [ ] Focus indicators visible
- [ ] Touch targets ≥ 44x44px
- [ ] No time limits on interactions

**Understandable:**
- [ ] Language attribute set (lang="ro")
- [ ] Consistent navigation
- [ ] Clear error messages
- [ ] Form labels and instructions
- [ ] Predictable behavior

**Robust:**
- [ ] Valid HTML
- [ ] ARIA attributes used correctly
- [ ] Compatible with assistive technologies
- [ ] Works across browsers
- [ ] Graceful degradation

---

## 25. Success Metrics

### 25.1 Technical Metrics

**Performance:**
- Lighthouse score: > 90
- Mobile performance: > 85
- Accessibility score: 100
- SEO score: > 95
- Best practices: 100

**User Experience:**
- Page load time: < 2.5s
- Time to interactive: < 3.5s
- Bounce rate: < 40%
- Average session duration: > 2 minutes
- Pages per session: > 3

### 25.2 Business Metrics

**Conversion:**
- Booking form completion rate: > 25%
- Contact form submission rate: > 15%
- Phone call click-through rate: > 10%
- Service page engagement: > 60%

**Engagement:**
- Mobile traffic: Track improvement
- Return visitor rate: > 30%
- Social media referrals: Track growth
- Resource downloads: Track usage

---

## 26. Risk Assessment & Mitigation

### 26.1 Technical Risks

| Risk | Impact | Probability | Mitigation |
|------|--------|-------------|------------|
| Browser compatibility issues | Medium | Low | Progressive enhancement, polyfills |
| Performance on low-end devices | High | Medium | Code splitting, lazy loading, optimization |
| API downtime | High | Low | Error boundaries, fallback content, retry logic |
| Database migration issues | High | Medium | Thorough testing, backup strategy, rollback plan |
| Third-party service failures | Medium | Medium | Graceful degradation, fallback options |

### 26.2 Project Risks

| Risk | Impact | Probability | Mitigation |
|------|--------|-------------|------------|
| Timeline delays | Medium | Medium | Buffer time, prioritization, MVP approach |
| Scope creep | Medium | High | Clear requirements, change management process |
| Resource availability | High | Low | Cross-training, documentation, backup resources |
| Client feedback loops | Medium | Medium | Regular demos, clear communication, iterative approach |

---

## 27. Maintenance & Support Plan

### 27.1 Ongoing Maintenance

**Monthly Tasks:**
- Update dependencies
- Review analytics data
- Monitor error logs
- Check performance metrics
- Update content as needed
- Backup database

**Quarterly Tasks:**
- Security audit
- Performance optimization
- Accessibility review
- SEO audit
- User feedback analysis
- Feature planning

### 27.2 Support Structure

**Levels:**
1. **L1 Support:** Content updates, minor fixes
2. **L2 Support:** Bug fixes, feature enhancements
3. **L3 Support:** Architecture changes, major features

**Response Times:**
- Critical issues: 2 hours
- High priority: 24 hours
- Medium priority: 3 days
- Low priority: 1 week

---

## 28. Conclusion & Next Steps

### 28.1 Summary

This architecture plan provides a comprehensive blueprint for rebuilding the DrDent website as a modern React application with a Node.js backend. The plan emphasizes:

1. **Mobile-First Design** - Optimized for 9:16 portrait format
2. **Component Reusability** - Modular, maintainable architecture
3. **Performance** - Fast load times and smooth interactions
4. **Accessibility** - WCAG 2.1 AA compliant
5. **Scalability** - Easy to extend and maintain

### 28.2 Immediate Next Steps

1. **Stakeholder Review** - Present this plan to decision makers
2. **Budget Approval** - Secure funding for 12-week project
3. **Team Assembly** - Hire/assign developers
4. **Environment Setup** - Provision servers and services
5. **Kickoff Meeting** - Align team on goals and timeline

### 28.3 Success Criteria

**Technical:**
- ✅ All pages functional and responsive
- ✅ Performance targets met
- ✅ Accessibility compliance achieved
- ✅ Zero critical bugs
- ✅ Comprehensive test coverage

**Business:**
- ✅ Improved conversion rates
- ✅ Better user engagement
- ✅ Positive user feedback
- ✅ Reduced support requests
- ✅ Increased online bookings

### 28.4 Long-Term Vision

This React architecture positions DrDent for future growth:
- Easy to add new features (online payments, patient portal)
- Scalable to handle increased traffic
- Maintainable with clear code structure
- Extensible for multilingual support
- Ready for PWA conversion
- Prepared for mobile app development

---

## Appendix A: Component Props Reference

### Button Component Props
```typescript
interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'ghost' | 'danger';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  fullWidth?: boolean;
  loading?: boolean;
  disabled?: boolean;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  className?: string;
  children: React.ReactNode;
}
```

### Card Component Props
```typescript
interface CardProps {
  variant?: 'default' | 'elevated' | 'bordered' | 'glass';
  padding?: 'sm' | 'md' | 'lg';
  hover?: boolean;
  onClick?: () => void;
  className?: string;
  children: React.ReactNode;
}
```

### ServiceCard Component Props
```typescript
interface ServiceCardProps {
  icon: string;
  title: string;
  description: string;
  price?: string;
  duration?: string;
  features?: string[];
  badge?: string;
  onClick?: () => void;
  variant?: 'default' | 'highlighted' | 'compact';
  className?: string;
}
```

### Modal Component Props
```typescript
interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'full';
  mobileBottomSheet?: boolean;
  closeOnBackdrop?: boolean;
  closeOnEscape?: boolean;
  children: React.ReactNode;
  className?: string;
}
```

---

## Appendix B: API Response Examples

### Services API Response
```json
{
  "success": true,
  "data": {
    "categories": [
      {
        "id": "preventie",
        "name": "Prevenție",
        "services": [
          {
            "id": "consultatie",
            "title": "Consultație",
            "description": "Examen oral complet și evaluare detaliată a stării dentare",
            "price": "Gratuit",
            "duration": "30-45 min",
            "features": [
              "Diagnostic complet",
              "Plan de tratament",
              "Recomandări personalizate"
            ],
            "icon": "🦷"
          }
        ]
      }
    ]
  }
}
```

### Appointment Booking Response
```json
{
  "success": true,
  "data": {
    "appointmentId": "apt_123456",
    "status": "pending",
    "message": "Programarea a fost trimisă cu succes. Vă vom contacta în cel mult 2 ore pentru confirmare.",
    "confirmationEmail": "sent",
    "confirmationSMS": "sent"
  }
}
```

---

## Appendix C: Useful Resources

### Documentation
- React: https://react.dev
- TypeScript: https://www.typescriptlang.org
- Tailwind CSS: https://tailwindcss.com
- React Query: https://tanstack.com/query
- React Router: https://reactrouter.com
- React Hook Form: https://react-hook-form.com
- Zod: https://zod.dev

### Tools
- Vite: https://vitejs.dev
- ESLint: https://eslint.org
- Prettier: https://prettier.io
- Vitest: https://vitest.dev
- Playwright: https://playwright.dev

### Design Resources
- Tailwind UI: https://tailwindui.com
- Headless UI: https://headlessui.com
- Heroicons: https://heroicons.com
- Radix UI: https://www.radix-ui.com

---

**Document Status:** ✅ Complete Architecture Plan  
**Ready for:** Stakeholder Review & Implementation  
**Estimated Timeline:** 12 weeks  
**Estimated Budget:** $45,000 - $60,000  
**Team Size:** 3-4 developers + 1 designer

---

*Created by: Kilo Code (Architect Mode)*  
*Date: November 6, 2025*  
*Version: 1.0*  
*Classification: Technical Architecture Document*