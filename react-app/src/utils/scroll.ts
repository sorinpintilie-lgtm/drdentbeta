/**
 * Scroll utility functions for smooth navigation
 * Provides smooth scrolling to sections and scroll position tracking
 */

/**
 * Smoothly scroll to a section by ID
 * @param sectionId - The ID of the section to scroll to
 * @param offset - Optional offset from the top (default: 80px for header)
 */
export const scrollToSection = (sectionId: string, offset: number = 80): void => {
  const element = document.getElementById(sectionId);
  if (element) {
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - offset;

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    });
  }
};

/**
 * Smoothly scroll to the top of the page
 */
export const scrollToTop = (): void => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
};

/**
 * Get current scroll progress as a percentage (0-100)
 */
export const getScrollProgress = (): number => {
  const windowHeight = window.innerHeight;
  const documentHeight = document.documentElement.scrollHeight;
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  
  const scrollableHeight = documentHeight - windowHeight;
  const progress = (scrollTop / scrollableHeight) * 100;
  
  return Math.min(Math.max(progress, 0), 100);
};

/**
 * Check if an element is in viewport
 * @param element - The element to check
 * @param offset - Optional offset for early/late detection
 */
export const isInViewport = (element: HTMLElement, offset: number = 0): boolean => {
  const rect = element.getBoundingClientRect();
  return (
    rect.top >= -offset &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) + offset &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
};

/**
 * Get the currently active section based on scroll position
 * @param sectionIds - Array of section IDs to check
 * @param offset - Offset from top for detection (default: 100px)
 */
export const getActiveSection = (sectionIds: string[], offset: number = 100): string | null => {
  for (const id of sectionIds) {
    const element = document.getElementById(id);
    if (element) {
      const rect = element.getBoundingClientRect();
      if (rect.top <= offset && rect.bottom > offset) {
        return id;
      }
    }
  }
  return null;
};

/**
 * Handle hash navigation (e.g., #services)
 */
export const handleHashNavigation = (): void => {
  const hash = window.location.hash;
  if (hash) {
    const sectionId = hash.replace('#', '');
    // Small delay to ensure DOM is ready
    setTimeout(() => {
      scrollToSection(sectionId);
    }, 100);
  }
};