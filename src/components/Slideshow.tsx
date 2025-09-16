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
import styles from './Slideshow.module.css';

export const Slideshow = () => {
  const { t } = useTranslations();
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalImageUrl, setModalImageUrl] = useState('');
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
    setModalImageUrl(imageUrl);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setModalImageUrl('');
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

          {/* Dots positioned absolutely at bottom of image area */}
          <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 z-20">
            <div className="flex gap-2 bg-black/50 backdrop-blur-sm rounded-full px-3 py-2">
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
          </div>

          {/* Navigation arrows below the image */}
          <div className="flex justify-center gap-20 mt-4">
            <CarouselPrevious className="relative transform-none bg-black/50 backdrop-blur-sm border-white/30 text-white hover:bg-black/70 hover:text-white w-12 h-12" />
            <CarouselNext className="relative transform-none bg-black/50 backdrop-blur-sm border-white/30 text-white hover:bg-black/70 hover:text-white w-12 h-12" />
          </div>
        </Carousel>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center z-50"
          onClick={handleCloseModal}
        >
          <img
            src={modalImageUrl}
            alt="Slideshow Image Enlarged"
            className="max-w-[90vw] max-h-[90vh] object-contain rounded-lg shadow-[0_0_20px_rgba(0,0,0,0.5)] cursor-zoom-out"
          />
        </div>
      )}
    </div>
  );
};
