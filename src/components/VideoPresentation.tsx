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
          <video
            className={styles.video}
            controls
            autoPlay={false}
            loop
            muted
            poster="/assets/hero.JPG"
          >
            <source src="/assets/timelapse.MP4" type="video/mp4" />
            {t('video.noVideoSupport')}
          </video>
        </div>
      </div>
    </section>
  );
};
