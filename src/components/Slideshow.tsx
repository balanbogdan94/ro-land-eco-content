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

  return (
    <div className={styles.slideshowWrapperOuter}>
      <div className={`container-custom ${styles.slideshowWrapperInner}`}>
        <h2 className="heading-lg mb-4 text-center">{t('slideshow.title')}</h2>
        <Carousel className="w-full" orientation="horizontal" opts={{ loop: true }} setApi={setApi}>
          <CarouselContent className="rounded-2xl">
            {slideshowImages.map((url, index) => (
              <CarouselItem key={index} className="p-1 overflow-hidden">
                <img
                  src={url}
                  alt={`Slide ${index + 1}`}
                  className="aspect-square w-full lg:h-[65vh] object-cover rounded-xl overflow-hidden"
                  loading="lazy"
                />
              </CarouselItem>
            ))}
          </CarouselContent>

          <div className="flex items-center justify-center mt-4 gap-2">
            <CarouselPrevious className="relative transform-none mr-2" />
            <div className="flex gap-2">
              {Array.from({ length: slideCount }).map((_, index) => (
                <button
                  key={index}
                  className={`h-2 w-2 rounded-full transition-colors ${
                    current === index ? 'bg-primary' : 'bg-gray-300'
                  }`}
                  onClick={() => api?.scrollTo(index)}
                  aria-label={t('slideshow.aria').replace('{number}', String(index + 1))}
                />
              ))}
            </div>
            <CarouselNext className="relative transform-none ml-2" />
          </div>
        </Carousel>
      </div>
    </div>
  );
};
