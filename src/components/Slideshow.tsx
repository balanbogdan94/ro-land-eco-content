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
import styles from './Slideshow.module.css';

export const Slideshow = () => {
  const { t } = useTranslations();
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalImageIndex, setModalImageIndex] = useState(0);
  const slideCount = 14;

  // Array cu URL-uri către imagini pe Azure Blob
  const slideshowImages = Array.from(
    { length: slideCount },
    (_, i) =>
      `https://rolandorganicstorage1.blob.core.windows.net/assets/pictures/Slideshow/Slideshow-${i + 1}.webp`
  );

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

  const handleImageClick = (imageUrl: string) => {
    const index = slideshowImages.indexOf(imageUrl);
    setModalImageIndex(index);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setModalImageIndex(0);
  };

  return (
    <div className={styles.slideshowWrapperOuter}>
      <div className={`container-custom ${styles.slideshowWrapperInner}`}>
        <h2 className="heading-lg mb-4 text-center">{t('slideshow.title')}</h2>
        <Carousel
          className="w-full relative"
          orientation="horizontal"
          opts={{ loop: true }}
          setApi={setApi}
        >
          <CarouselContent className="rounded-2xl">
            {slideshowImages.map((url, index) => (
              <CarouselItem key={index} className="p-1 overflow-hidden">
                <img
                  src={url}
                  alt={`Slide ${index + 1}`}
                  className="aspect-square w-full lg:h-[65vh] object-cover rounded-xl overflow-hidden cursor-pointer transition-transform hover:scale-105"
                  loading="lazy"
                  onClick={() => handleImageClick(url)}
                  style={{ cursor: 'zoom-in' }}
                />
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="flex justify-between md:justify-center md:gap-10 items-center mt-1">
            <CarouselPrevious className="relative transform-none bg-black/50 backdrop-blur-sm border-white/30 text-white hover:bg-black/70 hover:text-white w-12 h-12" />
            <div className="flex gap-2 bg-black/50 backdrop-blur-sm rounded-full px-3 py-2 md:py-2 justify-center items-center">
              {Array.from({ length: slideCount }).map((_, index) => (
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

      <SlideshowModal
        isOpen={isModalOpen}
        images={slideshowImages}
        currentIndex={modalImageIndex}
        slideCount={slideCount}
        onClose={handleCloseModal}
        onSelectImage={setModalImageIndex}
      />
    </div>
  );
};
