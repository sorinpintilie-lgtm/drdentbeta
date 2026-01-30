import { useState, useRef } from 'react';
import { cn } from '../../utils/cn';

interface SwipeableCarouselProps {
  children: React.ReactNode[];
  className?: string;
  gap?: number;
  visibleItems?: number; // New prop to control cards per screen
}

export const SwipeableCarousel = ({ 
  children, 
  className, 
  gap = 20, 
  visibleItems = 1 
}: SwipeableCarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  
  const totalItems = children.length;
  const dotCount = Math.min(totalItems, 20);

  const handleScroll = () => {
    if (!containerRef.current) return;
    
    const container = containerRef.current;
    const scrollPosition = container.scrollLeft;
    const containerWidth = container.offsetWidth;
    
    // Calculate accurate item width based on visible items configuration
    // Formula: (Container Width - Total Gaps) / Visible Items
    const itemWidth = (containerWidth - (gap * (visibleItems - 1))) / visibleItems;
    const stride = itemWidth + gap;
    
    const newIndex = Math.round(scrollPosition / stride);
    
    if (newIndex !== currentIndex && newIndex >= 0 && newIndex < totalItems) {
      setCurrentIndex(newIndex);
    }
  };

  const scrollToindex = (index: number) => {
    if (!containerRef.current) return;
    
    const container = containerRef.current;
    const containerWidth = container.offsetWidth;
    const itemWidth = (containerWidth - (gap * (visibleItems - 1))) / visibleItems;
    const stride = itemWidth + gap;
    
    container.scrollTo({
      left: index * stride,
      behavior: 'smooth'
    });
  };

  return (
    <div className={cn("relative w-full", className)}>
      <div 
        ref={containerRef}
        onScroll={handleScroll}
        className="flex overflow-x-auto snap-x snap-mandatory scroll-smooth scrollbar-hide touch-pan-x pb-4"
        style={{ gap: `${gap}px` }}
      >
        {children.map((child, i) => (
          <div 
            key={i} 
            // Changed to snap-start so the pair aligns to the left
            className="flex-shrink-0 snap-start snap-always"
            style={{ 
              // CSS calc to perfectly fit 'visibleItems' minus the gaps
              width: `calc((100% - ${(visibleItems - 1) * gap}px) / ${visibleItems})` 
            }}
          >
            {child}
          </div>
        ))}
      </div>

      {/* Pagination Dots */}
      <div className="flex justify-center gap-1.5 mt-2 max-w-full px-4 flex-wrap">
        {Array.from({ length: dotCount }).map((_, i) => {
          const isActive = Math.round((currentIndex / (totalItems - 1)) * (dotCount - 1)) === i;
          return (
            <button
              key={i}
              onClick={() => scrollToindex(Math.floor((i / (dotCount - 1)) * (totalItems - 1)))}
              className={cn(
                "h-1.5 rounded-full transition-all duration-300",
                isActive ? "w-6 bg-[#0066cc]" : "w-1.5 bg-gray-300"
              )}
              aria-label={`Go to item ${i + 1}`}
            />
          );
        })}
      </div>
    </div>
  );
};
