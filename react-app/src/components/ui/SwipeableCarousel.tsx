import { useRef, useState, useEffect } from 'react';
import { motion, useMotionValue, animate, PanInfo } from 'framer-motion';
import { cn } from '../../utils/cn';

interface SwipeableCarouselProps {
  children: React.ReactNode[];
  className?: string;
  cardWidth?: number;
  gap?: number;
}

export const SwipeableCarousel = ({
  children,
  className,
  cardWidth = 280,
  gap = 16,
}: SwipeableCarouselProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const x = useMotionValue(0);
  const [isDragging, setIsDragging] = useState(false);

  const cardWithGap = cardWidth + gap;

  // Navigate to specific index with infinite loop support
  const navigateToIndex = (index: number, immediate = false) => {
    // Handle infinite loop
    let targetIndex = index;
    if (index < 0) {
      targetIndex = children.length - 1;
    } else if (index >= children.length) {
      targetIndex = 0;
    }

    setCurrentIndex(targetIndex);
    
    const targetX = -targetIndex * cardWithGap;
    
    if (immediate) {
      x.set(targetX);
    } else {
      animate(x, targetX, {
        type: 'spring',
        stiffness: 300,
        damping: 30,
      });
    }
  };

  // Handle drag end with infinite loop
  const handleDragEnd = (_: any, info: PanInfo) => {
    setIsDragging(false);
    
    const velocity = info.velocity.x;
    const swipeThreshold = 50; // Minimum swipe distance
    const velocityThreshold = 500; // Minimum velocity for quick swipe

    // Determine direction based on velocity or distance
    let newIndex = currentIndex;
    
    if (Math.abs(velocity) > velocityThreshold) {
      // Quick swipe - use velocity
      newIndex = velocity > 0 ? currentIndex - 1 : currentIndex + 1;
    } else if (Math.abs(info.offset.x) > swipeThreshold) {
      // Slow drag - use distance
      newIndex = info.offset.x > 0 ? currentIndex - 1 : currentIndex + 1;
    }

    // Navigate with infinite loop
    navigateToIndex(newIndex);
  };

  return (
    <div ref={containerRef} className={cn('relative overflow-hidden', className)}>
      {/* Swipeable Container */}
      <motion.div
        drag="x"
        dragConstraints={{ left: 0, right: 0 }}
        dragElastic={0.2}
        dragMomentum={false}
        onDragStart={() => setIsDragging(true)}
        onDragEnd={handleDragEnd}
        style={{ x }}
        className={cn(
          'flex',
          isDragging ? 'cursor-grabbing' : 'cursor-grab'
        )}
      >
        {children.map((child, index) => (
          <div
            key={index}
            className="flex-shrink-0 select-none"
            style={{
              width: cardWidth,
              marginRight: index < children.length - 1 ? gap : 0,
            }}
          >
            {child}
          </div>
        ))}
      </motion.div>

      {/* Pagination Dots */}
      <div className="flex justify-center gap-2 mt-4">
        {children.map((_, index) => (
          <button
            key={index}
            onClick={() => navigateToIndex(index)}
            className={cn(
              'transition-all rounded-full',
              index === currentIndex
                ? 'w-6 h-2 bg-primary-600'
                : 'w-2 h-2 bg-gray-300 hover:bg-gray-400'
            )}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Navigation Arrows - Desktop with infinite loop */}
      {children.length > 1 && (
        <>
          <button
            onClick={() => navigateToIndex(currentIndex - 1)}
            className={cn(
              'hidden sm:flex absolute left-2 top-1/2 -translate-y-1/2 z-10',
              'w-10 h-10 items-center justify-center',
              'bg-white rounded-full shadow-lg',
              'hover:bg-gray-50 transition-all hover:scale-110',
              'focus:outline-none focus:ring-2 focus:ring-primary-500'
            )}
            aria-label="Previous"
          >
            <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button
            onClick={() => navigateToIndex(currentIndex + 1)}
            className={cn(
              'hidden sm:flex absolute right-2 top-1/2 -translate-y-1/2 z-10',
              'w-10 h-10 items-center justify-center',
              'bg-white rounded-full shadow-lg',
              'hover:bg-gray-50 transition-all hover:scale-110',
              'focus:outline-none focus:ring-2 focus:ring-primary-500'
            )}
            aria-label="Next"
          >
            <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </>
      )}
    </div>
  );
};