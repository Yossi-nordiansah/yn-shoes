"use client";
import { useCallback, useEffect, useRef, useState } from "react";

interface ResponsiveSetting {
  sm?: number; // <640px
  md?: number; // >=640px
  lg?: number; // >=1024px
}

interface CardSliderProps {
  children: React.ReactNode[];
  dots?: boolean;
  arrow?: boolean;
  infinite?: boolean;
  speed?: number;
  slidesToShow?: number;
  slidesToScroll?: number;
  swipeToSlide?: boolean;
  autoplaySpeed?: number;
  pauseOnHover?: boolean;
  responsive?: ResponsiveSetting;
}

export default function CardSlider({
  children,
  dots = true,
  arrow = true,
  infinite = true,
  speed = 500,
  slidesToShow = 1,
  slidesToScroll = 1,
  swipeToSlide = true,
  autoplaySpeed,
  pauseOnHover = false,
  responsive,
}: CardSliderProps) {
  const totalSlides = children.length;

  /* ===== RESPONSIVE FROM PROPS ===== */
  const [currentSlidesToShow, setCurrentSlidesToShow] = useState(slidesToShow);

  useEffect(() => {
    const updateSlides = () => {
      const width = window.innerWidth;

      if (responsive) {
        if (width >= 1024 && responsive.lg)
          setCurrentSlidesToShow(responsive.lg);
        else if (width >= 640 && responsive.md)
          setCurrentSlidesToShow(responsive.md);
        else if (responsive.sm) setCurrentSlidesToShow(responsive.sm);
        else setCurrentSlidesToShow(slidesToShow);
      } else {
        setCurrentSlidesToShow(slidesToShow);
      }
    };

    updateSlides();
    window.addEventListener("resize", updateSlides);
    return () => window.removeEventListener("resize", updateSlides);
  }, [responsive, slidesToShow]);

  /* ===== CLONE LOGIC ===== */
  const slides = infinite
    ? [
        ...children.slice(totalSlides - currentSlidesToShow),
        ...children,
        ...children.slice(0, currentSlidesToShow),
      ]
    : children;

  const [currentIndex, setCurrentIndex] = useState(
    infinite ? currentSlidesToShow : 0,
  );
  const [enableTransition, setEnableTransition] = useState(true);
  const [isHovering, setIsHovering] = useState(false);

  const startX = useRef<number | null>(null);
  const isDragging = useRef(false);

  const [dragOffset, setDragOffset] = useState(0);

  /* ===== DOTS COUNT ===== */
  const pageCount = Math.ceil(totalSlides / slidesToScroll);

  const getRealIndex = () => {
    if (!infinite) return currentIndex;
    let real = currentIndex - currentSlidesToShow;
    if (real < 0) real = totalSlides + real;
    if (real >= totalSlides) real = real % totalSlides;
    return real;
  };

  const getCurrentDotIndex = () => {
    const realIndex = getRealIndex();
    return Math.floor(realIndex / slidesToScroll);
  };

  const next = useCallback(
    () => setCurrentIndex((prev) => prev + slidesToScroll),
    [slidesToScroll],
  );
  const prev = useCallback(
    () => setCurrentIndex((prev) => prev - slidesToScroll),
    [slidesToScroll],
  );

  /* ===== AUTOPLAY ===== */
  useEffect(() => {
    if (!autoplaySpeed) return;
    if (pauseOnHover && isHovering) return;

    const interval = setInterval(next, autoplaySpeed);
    return () => clearInterval(interval);
  }, [autoplaySpeed, isHovering, currentSlidesToShow, next, pauseOnHover]);

  /* ===== INFINITE RESET ===== */
  useEffect(() => {
    if (!infinite) return;

    if (currentIndex >= slides.length - currentSlidesToShow) {
      setTimeout(() => {
        setEnableTransition(false);
        setCurrentIndex(currentSlidesToShow);
      }, speed);
    }

    if (currentIndex <= 0) {
      setTimeout(() => {
        setEnableTransition(false);
        setCurrentIndex(slides.length - currentSlidesToShow * 2);
      }, speed);
    }
  }, [currentIndex, currentSlidesToShow, infinite, slides.length, speed]);

  useEffect(() => {
    if (!enableTransition && dragOffset === 0) {
      requestAnimationFrame(() => setEnableTransition(true));
    }
  }, [enableTransition, dragOffset]);

  /* ===== SWIPE & DRAG ===== */
  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    if (!swipeToSlide) return;
    setEnableTransition(false);
    isDragging.current = true;
    startX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    if (!swipeToSlide || !isDragging.current || startX.current === null) return;
    const currentX = e.touches[0].clientX;
    const diff = currentX - startX.current;
    setDragOffset(diff);
  };

  const handleTouchEnd = () => {
    if (!swipeToSlide || !isDragging.current) return;
    isDragging.current = false;

    if (Math.abs(dragOffset) > 50) {
      if (dragOffset > 0) prev();
      else next();
    }

    setEnableTransition(true);
    setDragOffset(0);
    startX.current = null;
  };

  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!swipeToSlide) return;
    e.preventDefault();
    setEnableTransition(false);
    isDragging.current = true;
    startX.current = e.clientX;
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!swipeToSlide || !isDragging.current || startX.current === null) return;
    e.preventDefault();
    const currentX = e.clientX;
    const diff = currentX - startX.current;
    setDragOffset(diff);
  };

  const handleMouseUp = () => {
    if (!swipeToSlide || !isDragging.current) return;
    isDragging.current = false;

    if (Math.abs(dragOffset) > 50) {
      if (dragOffset > 0) prev();
      else next();
    }

    setEnableTransition(true);
    setDragOffset(0);
    startX.current = null;
  };

  const handleMouseLeave = () => {
    if (isDragging.current) {
      handleMouseUp();
    }
    if (pauseOnHover) setIsHovering(false);
  };

  return (
    <div
      className="relative w-full overflow-hidden mx-auto"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseLeave}
      onMouseEnter={() => pauseOnHover && setIsHovering(true)}
      style={{ cursor: swipeToSlide ? "grab" : "default" }}
    >
      {/* SLIDER */}
      <div
        className="flex py-4"
        style={{
          transform: `translateX(calc(-${(currentIndex * 100) / currentSlidesToShow}% + ${dragOffset}px))`,
          transition: enableTransition
            ? `transform ${speed}ms ease-in-out`
            : "none",
        }}
      >
        {slides.map((child, index) => (
          <div
            key={index}
            className="flex-shrink-0 px-2"
            style={{
              width: `${100 / currentSlidesToShow}%`,
            }}
          >
            {child}
          </div>
        ))}
      </div>

      {/* ARROW */}
      {arrow && (
        <>
          <button
            onClick={prev}
            className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/60 text-white px-3 py-1 rounded"
          >
            ‹
          </button>
          <button
            onClick={next}
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/60 text-white px-3 py-1 rounded"
          >
            ›
          </button>
        </>
      )}

      {/* DOTS */}
      {dots && (
        <div className="flex justify-center gap-2 mt-3">
          {Array.from({ length: pageCount }).map((_, i) => {
            const targetIndex = i * slidesToScroll;
            return (
              <button
                key={i}
                onClick={() =>
                  setCurrentIndex(
                    infinite ? targetIndex + currentSlidesToShow : targetIndex,
                  )
                }
                className={`w-3 h-3 rounded-full ${
                  getCurrentDotIndex() === i ? "bg-black" : "bg-gray-300"
                }`}
              />
            );
          })}
        </div>
      )}
    </div>
  );
}
