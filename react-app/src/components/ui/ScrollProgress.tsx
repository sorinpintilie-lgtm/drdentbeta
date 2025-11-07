import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { getScrollProgress } from '@/utils/scroll';

/**
 * ScrollProgress Component
 * Displays a progress bar at the top of the page showing scroll progress
 */
export function ScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setProgress(getScrollProgress());
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial calculation

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-1 bg-primary-100 z-[60]"
      initial={{ opacity: 0 }}
      animate={{ opacity: progress > 0 ? 1 : 0 }}
      transition={{ duration: 0.2 }}
    >
      <motion.div
        className="h-full bg-gradient-to-r from-primary-500 to-primary-600"
        style={{ width: `${progress}%` }}
        initial={{ width: 0 }}
        animate={{ width: `${progress}%` }}
        transition={{ duration: 0.1, ease: 'easeOut' }}
      />
    </motion.div>
  );
}

export default ScrollProgress;
