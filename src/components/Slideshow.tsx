import React, { useState } from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from './ui/carousel';
import { useTranslations } from '@/context/LanguageContext';
import { SlideshowModal } from './SlideshowModal';
import { getSlideshowImageUrl, NUMBER_OF_SLIDESHOW_IMAGES } from '@/models/slideshow';

export const Slideshow = () => {
  const { t } = useTranslations();
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  React.useEffect(() => {
    if (!api) {
      return;
    }

    const setSlide = () => setCurrent(api.selectedScrollSnap());
    api.on('select', setSlide);

    return () => {
      api.off('select', setSlide);
    };
  }, [api]);

  const toggleModal = () => setIsModalOpen((prev) => !prev);

  return (
    <div className="w-full bg-beige py-28 relative shadow-[0_28px_40px_-10px_rgba(11,138,58,0.2)]">
      <svg
        className="absolute top-0 left-0 w-full h-32"
        viewBox="0 0 960 16"
        preserveAspectRatio="none"
      >
        <path d="M0,16 Q480,0 960,16 L960,0 L0,0 Z" fill="#0B8A3A" />
        <path d="M0,15.5 Q480,0 960,14 L960,0 L0,0 Z" fill="#F9FAFB" />
      </svg>
      <div className="container-custom max-w-7xl mx-auto px-4">
        <h2 className="heading-lg mb-4 text-center">{t('slideshow.title')}</h2>
        <h3 className="heading-sm mb-4 text-center">{t('slideshow.subtitle')}</h3>
        <Carousel
          className="w-full relative"
          orientation="horizontal"
          opts={{ loop: true }}
          setApi={setApi}
        >
          <CarouselContent className="rounded-2xl">
            {Array.from({ length: NUMBER_OF_SLIDESHOW_IMAGES }).map((_, index) => (
              <CarouselItem key={index} className="p-1 overflow-hidden">
                <img
                  src={getSlideshowImageUrl(index)}
                  alt={`Slide ${index + 1}`}
                  className="aspect-square w-full lg:h-[65vh] object-cover rounded-xl overflow-hidden cursor-pointer transition-transform hover:scale-105"
                  loading="lazy"
                  onClick={toggleModal}
                  style={{ cursor: 'zoom-in' }}
                />
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="flex justify-between md:justify-center md:gap-10 items-center mt-1">
            <CarouselPrevious className="relative transform-none bg-black/50 backdrop-blur-sm border-white/30 text-white hover:bg-black/70 hover:text-white w-12 h-12" />
            <div className="flex gap-2 bg-black/50 backdrop-blur-sm rounded-full px-3 py-2 md:py-2 justify-center items-center">
              {Array.from({ length: NUMBER_OF_SLIDESHOW_IMAGES }).map((_, index) => (
                <button
                  key={index}
                  className={`h-2 w-2 rounded-full transition-colors ${
                    current === index ? 'bg-white' : 'bg-white/50'
                  }`}
                  onClick={() => api?.scrollTo(index)}
                  aria-label={t('slideshow.aria').replace('{number}', String(index + 1))}
                />
              ))}
            </div>
            <CarouselNext className="relative transform-none bg-black/50 backdrop-blur-sm border-white/30 text-white hover:bg-black/70 hover:text-white w-12 h-12" />
          </div>
        </Carousel>
      </div>
      {isModalOpen && (
        <SlideshowModal isOpen={isModalOpen} currentIndex={current} onClose={toggleModal} />
      )}
    </div>
  );
};
