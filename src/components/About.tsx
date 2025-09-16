import React from 'react';
import styles from './About.module.css';
import { useTranslations } from '@/context/LanguageContext';

export const About: React.FC = () => {
  const { t } = useTranslations();
  return (
    <section id="about" className={styles.about}>
      <div className="container-custom py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className={styles.imageWrapper}>
            <img
              src="https://rolandorganicstorage1.blob.core.windows.net/assets/pictures/About Us/aboutUsBright.webp"
              alt={t('about.imageAlt')}
              className={styles.image}
            />
          </div>
          <div>
            <h2 className="heading-lg text-center md:text-left lg:text-left mb-6">
              {t('about.title')}
            </h2>
            <p className="text-body text-center md:text-left lg:text-left mb-4 sm:text-balance font-bold">
              {t('about.p1')}
            </p>
            <p className="text-body text-center md:text-left lg:text-left mb-8 sm:text-balance">
              {t('about.p2')}
            </p>
            <p className="text-body text-center md:text-left lg:text-left mb-8 sm:text-balance font-semibold">
              {t('about.p3')}
            </p>
            <p className="text-body text-center md:text-left lg:text-left mb-4 sm:text-balance">
              {t('about.p4')}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
