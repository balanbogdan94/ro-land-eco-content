import React from 'react';
import styles from './VideoPresentation.module.css';
import { useTranslations } from '@/context/LanguageContext';

export const VideoPresentation = () => {
  const { t } = useTranslations();

  return (
    <section className={styles.videoSection}>
      <div className="container-custom py-20">
        <div className="text-center mb-10">
          <h2 className="heading-lg mb-4">{t('video.title')}</h2>
          <p className="text-body max-w-3xl mx-auto">{t('video.intro')}</p>
        </div>

        <div className={styles.videoContainer}>
          <iframe
            className={styles.video}
            src="https://www.youtube.com/embed/lvV_WBpxUHY?rel=0&playsinline=1"
            title="YouTube video player"
            frameBorder="0"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </section>
  );
};
