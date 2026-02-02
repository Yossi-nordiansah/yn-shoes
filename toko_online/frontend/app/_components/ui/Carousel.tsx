import { useEffect, useState, useRef } from "react";

interface CarouselProps {
  slides: React.ReactNode[];
  autoPlay?: boolean;
  interval?: number;
}

const Carousel = ({
  slides,
  autoPlay = true,
  interval = 3000,
}: CarouselProps) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(true);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  // Extend slides with the first slide at the end for infinite loop effect
  const extendedSlides = [...slides, slides[0]];

  useEffect(() => {
    if (!autoPlay) return;

    startTimer();

    const handleVisibilityChange = () => {
      if (document.hidden) {
        stopTimer();
      } else {
        startTimer();
      }
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      stopTimer();
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [autoPlay, interval, slides.length]); // Added slides.length to dep array just in case

  const startTimer = () => {
    stopTimer(); // Ensure no duplicate timers
    timerRef.current = setInterval(() => {
      nextSlide();
    }, interval);
  };

  const stopTimer = () => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }
  };

  const nextSlide = () => {
    
    if (activeIndex >= extendedSlides.length - 1) return;

    setIsTransitioning(true);
    setActiveIndex((prev) => prev + 1);
  };

  const handleTransitionEnd = (e: React.TransitionEvent) => {
    if (e.target !== e.currentTarget) return;

    // If we reached the cloned slide (last index), snap back to real first slide (index 0)
    if (activeIndex === extendedSlides.length - 1) {
      setIsTransitioning(false);
      setActiveIndex(0);
    }
  };

  // Re-enable transition after snap
  useEffect(() => {
    if (activeIndex === 0 && !isTransitioning) {
      const timeout = setTimeout(() => {
        setIsTransitioning(true);
      }, 50); 
      return () => clearTimeout(timeout);
    }
  }, [activeIndex, isTransitioning]);


  // Manual Dot Click
  const handleDotClick = (index: number) => {
    stopTimer();
    setIsTransitioning(true);
    setActiveIndex(index);
    startTimer(); // Restart timer after manual interaction
  };

  return (
    <div className="relative w-full overflow-hidden h-screen">
      {/* Slides */}
      <div
        className="flex h-full"
        style={{
          transform: `translateX(-${activeIndex * 100}%)`,
          transition: isTransitioning ? "transform 500ms ease-in-out" : "none",
        }}
        onTransitionEnd={handleTransitionEnd}
      >
        {extendedSlides.map((slide, index) => {
          // Normalize to handle the clone (index N) being same as index 0
          const normalizedActiveIndex = activeIndex % slides.length;
          const normalizedIndex = index % slides.length;
          const isEffectiveActive = normalizedActiveIndex === normalizedIndex;

          return (
            <div key={index} className="w-full shrink-0 h-full overflow-hidden">
              <div
                className="w-full h-full"
                style={{
                  transform: isEffectiveActive ? "scale(1)" : "scale(1.1)",
                  transition: `transform ${interval}ms ease-out`,
                }}
              >
                {slide}
              </div>
            </div>
          );
        })}
      </div>

      {/* Dots - Only show original slides count */}
      <div className="absolute z-20 bottom-16 left-10 flex gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            aria-label={`Go to slide ${index + 1}`}
            onClick={() => handleDotClick(index)}
            className={`h-1 w-12 transition-all duration-300 rounded-full
              ${
                 // If activeIndex is the clone (last one), it corresponds to dot 0
                (activeIndex === index || (activeIndex === slides.length && index === 0))
                  ? "bg-white"
                  : "bg-white/20 hover:bg-white/40"
              }
            `}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
