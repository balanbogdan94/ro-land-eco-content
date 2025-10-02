import { appInsights } from '@/services/appInsights';

export const NUMBER_OF_SLIDESHOW_IMAGES = 14;

export const getSlideshowImageUrl = (index: number) => {
  if (index < 0 || index >= NUMBER_OF_SLIDESHOW_IMAGES) {
    appInsights.trackException({ exception: new Error('Slideshow image index out of bounds') });
    throw new Error('Index out of bounds');
  }
  return `https://rolandorganicstorage1.blob.core.windows.net/assets/pictures/Slideshow/Slideshow-${
    index + 1
  }.webp`;
};
