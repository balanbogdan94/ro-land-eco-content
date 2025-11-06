import React from 'react';
import { useTranslations } from '@/context/LanguageContext';

export const VideoPresentation = () => {
  const { t } = useTranslations();

  return (
    <section className="bg-gray-50">
      <div className="container-custom py-20">
        <div className="text-center mb-10">
          <h2 className="heading-lg mb-4">{t('video.title')}</h2>
          <p className="text-body max-w-3xl mx-auto">{t('video.intro')}</p>
        </div>

        <div
          className="w-full overflow-hidden rounded-xl shadow-xl"
          style={{ aspectRatio: '16 / 9' }}
        >
          <iframe
            className="w-full h-full object-cover block"
            src="https://www.youtube.com/embed/lvV_WBpxUHY?rel=0&playsinline=1"
            title="YouTube video player"
            frameBorder="0"
            allowFullScreen
            style={{ borderRadius: 'inherit' }}
          ></iframe>
        </div>
      </div>
    </section>
  );
};
