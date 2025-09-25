import React, { useState } from 'react';
import { Carousel, CarouselContent, CarouselItem, type CarouselApi } from './ui/carousel';

interface SlideshowModalProps {
  isOpen: boolean;
  images: string[];
  currentIndex: number;
  slideCount: number;
  onClose: () => void;
  onSelectImage: (index: number) => void;
}

export function SlideshowModal({
  isOpen,
  onClose,
  images,
  currentIndex,
  slideCount,
  onSelectImage,
}: SlideshowModalProps) {
  const [api, setApi] = useState<CarouselApi>();
  const scrollPositionRef = React.useRef<number>(0);

  React.useEffect(() => {
    if (isOpen) {
      scrollPositionRef.current = window.scrollY;
      document.body.style.position = 'fixed';
      document.body.style.top = `-${scrollPositionRef.current}px`;
      document.body.style.left = '0';
      document.body.style.right = '0';
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.left = '';
      document.body.style.right = '';
      document.body.style.overflow = '';
      window.scrollTo(0, scrollPositionRef.current);
    }

    return () => {
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.left = '';
      document.body.style.right = '';
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  React.useEffect(() => {
    if (api && isOpen) {
      api.scrollTo(currentIndex);
    }
  }, [api, currentIndex, isOpen]);

  React.useEffect(() => {
    if (!api) return;

    const handleSelect = () => {
      const selectedIndex = api.selectedScrollSnap();
      onSelectImage(selectedIndex);
    };

    api.on('select', handleSelect);
    return () => {
      api.off('select', handleSelect);
    };
  }, [api, onSelectImage]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50">
      {/* Close button */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 z-50 bg-black/50 backdrop-blur-sm border border-white/30 text-white hover:bg-black/70 hover:text-white rounded-full p-2 transition-colors"
        aria-label="Close modal"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>

      {/* Carousel */}
      <Carousel
        className="w-full h-full flex items-center justify-center"
        orientation="horizontal"
        opts={{
          loop: true,
          startIndex: currentIndex,
        }}
        setApi={setApi}
      >
        <CarouselContent className="h-full flex items-center justify-center">
          {images.map((url, index) => (
            <CarouselItem
              key={index}
              className="flex items-center justify-center basis-full h-full"
            >
              <div className="flex items-center justify-center w-full h-full">
                <img
                  src={url}
                  alt={`Slide ${index + 1}`}
                  className="max-w-[90vw] max-h-[80vh] w-auto h-auto object-contain"
                  loading="lazy"
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>

      {/* Navigation container with arrows and dots */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
        <div className="flex items-center justify-between md:justify-center md:gap-10 bg-black/50 backdrop-blur-sm rounded-full px-4 py-2">
          {/* Previous arrow */}
          <button
            onClick={() => api?.scrollPrev()}
            className="bg-transparent border-white/30 text-white hover:bg-black/70 hover:text-white w-10 h-10 rounded-full flex items-center justify-center transition-colors"
            aria-label="Previous image"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>

          {/* Dots */}
          <div className="flex gap-2">
            {Array.from({ length: slideCount }).map((_, index) => (
              <button
                key={index}
                className={`h-2 w-2 rounded-full transition-colors ${
                  currentIndex === index ? 'bg-white' : 'bg-white/50'
                }`}
                onClick={() => api?.scrollTo(index)}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>

          {/* Next arrow */}
          <button
            onClick={() => api?.scrollNext()}
            className="bg-transparent border-white/30 text-white hover:bg-black/70 hover:text-white w-10 h-10 rounded-full flex items-center justify-center transition-colors"
            aria-label="Next image"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
      <div className="absolute bottom-32 left-1/2 transform -translate-x-1/2 z-20">
        <div className="bg-black/50 backdrop-blur-sm rounded-full px-3 py-1 text-white text-sm">
          {currentIndex + 1} / {slideCount}
        </div>
      </div>
    </div>
  );
}
