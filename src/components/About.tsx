import React from 'react';
import { useTranslations } from '@/context/LanguageContext';
import { WaveDivider } from './ui/wave-divider';

export const About: React.FC = () => {
  const { t } = useTranslations();
  return (
    <section id="about" className="bg-beige relative overflow-hidden pt-8">
      <WaveDivider position="top" height={4} primaryColor="#F5F2ED" secondaryColor="#ffffff" />
      <div className="container-custom py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="rounded-lg overflow-hidden shadow-xl h-full">
            <img
              src="https://rolandorganicstorage1.blob.core.windows.net/assets/pictures/About Us/aboutUsBright.webp"
              alt={t('about.imageAlt')}
              className="w-full h-full object-cover aspect-[4/3]"
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
      <WaveDivider position="bottom" height={4} primaryColor="#F5F2ED" secondaryColor="#F9FAFB" />
    </section>
  );
};
