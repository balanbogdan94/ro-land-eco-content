import React, { useState } from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from './ui/carousel';
import { getSlideshowImageUrl, NUMBER_OF_SLIDESHOW_IMAGES } from '@/models/slideshow';

interface SlideshowModalProps {
  isOpen: boolean;
  currentIndex: number;
  onClose: () => void;
}
export function SlideshowModal({ onClose, currentIndex }: SlideshowModalProps) {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(currentIndex);

  React.useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = '';
    };
  }, []);

  React.useEffect(() => {
    if (!api) {
      return;
    }

    const setSlide = () => {
      const newIndex = api.selectedScrollSnap();
      setCurrent(newIndex);
    };
    api.on('select', setSlide);

    return () => {
      api.off('select', setSlide);
    };
  }, [api]);

  return (
    <div className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center">
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
      <Carousel
        className="w-full h-full flex"
        orientation="horizontal"
        opts={{
          loop: true,
          startIndex: currentIndex,
        }}
        setApi={setApi}
      >
        <CarouselContent className="h-full flex items-center">
          {Array.from({ length: NUMBER_OF_SLIDESHOW_IMAGES }).map((_, index) => (
            <CarouselItem
              key={index}
              className="flex items-center justify-center basis-full h-full pl-0"
            >
              <img
                src={getSlideshowImageUrl(index)}
                alt={`Slide ${index + 1}`}
                className="max-w-[90vw] max-h-[80vh] w-auto h-auto object-contain"
                loading="lazy"
              />
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
          <div className="flex items-center justify-between md:justify-center md:gap-10 bg-black/50 backdrop-blur-sm rounded-full px-4 py-2">
            <CarouselPrevious className="relative transform-none bg-black/50 backdrop-blur-sm border-transparent text-white hover:bg-black/70 hover:text-white w-12 h-12" />
            <div className="flex gap-2">
              {Array.from({ length: NUMBER_OF_SLIDESHOW_IMAGES }).map((_, index) => (
                <button
                  key={index}
                  className={`h-2 w-2 rounded-full transition-colors ${
                    current === index ? 'bg-white' : 'bg-white/50'
                  }`}
                  onClick={() => api?.scrollTo(index)}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
            <CarouselNext className="relative transform-none bg-black/50 backdrop-blur-sm border-transparent text-white hover:bg-black/70 hover:text-white w-12 h-12" />
          </div>
        </div>
        <div className="absolute bottom-32 left-1/2 transform -translate-x-1/2 z-20">
          <div className="bg-black/50 backdrop-blur-sm rounded-full px-3 py-1 text-white text-sm">
            {current + 1} / {NUMBER_OF_SLIDESHOW_IMAGES}
          </div>
        </div>
      </Carousel>
    </div>
  );
}
