import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, Phone, Mail } from 'lucide-react';
import { cn } from '@/utils/cn';
import ScrollProgress from '@/components/ui/ScrollProgress';

/**
 * Enhanced Header component with mobile-first responsive design
 * Features:
 * - Transparent on hero, solid on scroll
 * - Mobile hamburger menu with slide-in animation
 * - Desktop navigation with smooth scroll
 * - Sticky positioning with scroll progress indicator
 * - "Programează" CTA button
 */
function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  
  // Check if we're on the home page
  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  const navItems = [
    { label: 'Acasă', path: '/' },
    { label: 'Servicii', path: '/services' },
    { label: 'Tarife', path: '/fees' },
    { label: 'Echipa', path: '/team' },
    { label: 'FAQ', path: '/faq' },
    { label: 'Resurse', path: '/resources' },
    { label: 'Contact', path: '/contact' },
  ];

  return (
    <>
      {/* Scroll Progress Indicator */}
      <ScrollProgress />

      <header
        className={cn(
          'fixed top-0 left-0 right-0 z-[100] transition-all duration-300',
          // On home page: transparent until scrolled, then white
          // On other pages: always white with shadow
          isHomePage
            ? isScrolled
              ? 'bg-white/95 backdrop-blur-lg shadow-sm'
              : 'bg-transparent'
            : 'bg-white/95 backdrop-blur-lg shadow-sm'
        )}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center z-50">
              <motion.img
                src="/images/logo-color.svg"
                alt="Dr.Dent Logo"
                className="h-[80px] md:h-[100px] w-auto"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-6 lg:space-x-8">
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  to={item.path}
                  className={cn(
                    'font-medium transition-colors hover:text-primary-500 relative group',
                    // On home page: white until scrolled, then dark
                    // On other pages: always dark
                    isHomePage
                      ? isScrolled ? 'text-gray-700' : 'text-white'
                      : 'text-gray-700'
                  )}
                >
                  {item.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary-500 transition-all group-hover:w-full" />
                </Link>
              ))}
              
              {/* Desktop CTA Button */}
              <a
                href="tel:+40213449317"
                className="px-6 py-2.5 bg-gradient-to-r from-primary-500 to-primary-600 text-white rounded-xl font-semibold hover:shadow-lg hover:scale-105 transition-all flex items-center gap-2"
              >
                <Calendar className="w-4 h-4" />
                <span>Programează</span>
              </a>
            </nav>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-gray-100/10 transition-colors relative z-[110]"
              aria-label="Toggle menu"
              aria-expanded={isMobileMenuOpen}
            >
              <div className="w-6 h-5 flex flex-col justify-between">
                <motion.span
                  className={cn(
                    'block h-0.5 w-full transition-all',
                    // On home page: white until scrolled, then dark
                    // On other pages: always dark
                    isHomePage
                      ? isScrolled ? 'bg-gray-900' : 'bg-white'
                      : 'bg-gray-900'
                  )}
                  animate={{
                    rotate: isMobileMenuOpen ? 45 : 0,
                    y: isMobileMenuOpen ? 8 : 0,
                  }}
                />
                <motion.span
                  className={cn(
                    'block h-0.5 w-full transition-all',
                    isHomePage
                      ? isScrolled ? 'bg-gray-900' : 'bg-white'
                      : 'bg-gray-900'
                  )}
                  animate={{
                    opacity: isMobileMenuOpen ? 0 : 1,
                  }}
                />
                <motion.span
                  className={cn(
                    'block h-0.5 w-full transition-all',
                    isHomePage
                      ? isScrolled ? 'bg-gray-900' : 'bg-white'
                      : 'bg-gray-900'
                  )}
                  animate={{
                    rotate: isMobileMenuOpen ? -45 : 0,
                    y: isMobileMenuOpen ? -8 : 0,
                  }}
                />
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Menu Overlay - Outside header, at document level */}
      </header>

      {/* Mobile Menu - Separate from header */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              className="md:hidden fixed inset-0 bg-black/50 backdrop-blur-sm"
              style={{ zIndex: 150 }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
            />

            {/* Menu Panel - Always solid white background */}
            <motion.div
              className="md:hidden fixed inset-y-0 right-0 w-full max-w-sm bg-white shadow-2xl overflow-y-auto"
              style={{ zIndex: 160 }}
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            >
              {/* Close Button inside menu */}
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="absolute top-6 right-6 p-2 rounded-lg hover:bg-gray-100 transition-colors z-10"
                aria-label="Close menu"
              >
                <svg className="w-6 h-6 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              <nav className="flex flex-col min-h-full pt-20 pb-8 px-6">
                {/* Navigation Links */}
                  <div className="flex-1 space-y-2">
                    {navItems.map((item, index) => (
                      <motion.div
                        key={item.label}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                      >
                        <Link
                          to={item.path}
                          onClick={() => setIsMobileMenuOpen(false)}
                          className="block py-3 px-4 text-lg font-semibold text-gray-900 hover:text-primary-500 hover:bg-primary-50 rounded-lg transition-all"
                        >
                          {item.label}
                        </Link>
                      </motion.div>
                    ))}
                  </div>

                  {/* Mobile CTA Buttons */}
                  <motion.div
                    className="space-y-3 pt-6 border-t border-gray-200"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                  >
                    <a
                      href="tel:+40213449317"
                      className="flex items-center justify-center gap-2 w-full px-6 py-3.5 bg-gradient-to-r from-primary-500 to-primary-600 text-white rounded-xl font-semibold shadow-lg"
                    >
                      <Calendar className="w-5 h-5" />
                      <span>Programează Acum</span>
                    </a>
                    <a
                      href="tel:+40213449317"
                      className="flex items-center justify-center gap-2 w-full px-6 py-3.5 border-2 border-primary-500 text-primary-600 rounded-xl font-semibold hover:bg-primary-50 transition-all"
                    >
                      <Phone className="w-5 h-5" />
                      <span>Sună Acum</span>
                    </a>
                  </motion.div>

                  {/* Contact Info */}
                  <motion.div
                    className="mt-6 pt-6 border-t border-gray-200 text-sm text-gray-600"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                  >
                    <p className="font-semibold text-gray-900 mb-2">Contact Direct</p>
                    <p className="flex items-center gap-2">
                      <Phone className="w-4 h-4" />
                      +40 21 344 9317
                    </p>
                    <p className="flex items-center gap-2">
                      <Mail className="w-4 h-4" />
                      contact@drdent.ro
                    </p>
                  </motion.div>
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}

export default Header;