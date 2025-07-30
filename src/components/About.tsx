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
              src="/assets/aboutUs/aboutUsBright.JPG"
              alt={t('about.imageAlt')}
              className={styles.image}
            />
          </div>
          <div>
            <h2 className="heading-lg mb-6">{t('about.title')}</h2>
            <p className="text-body mb-4">{t('about.p1')}</p>
            <p className="text-body mb-4">{t('about.p2')}</p>
          </div>
        </div>
      </div>
    </section>
  );
};
