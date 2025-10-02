import React from 'react';
import { useTranslations } from '@/context/LanguageContext';

const WaveSVG = () => (
  <svg
    id="visual"
    viewBox="0 163 960 378"
    className="absolute top-0 left-0 w-full max-h-10 overflow-hidden z-20 rotate-180"
    xmlns="http://www.w3.org/2000/svg"
    preserveAspectRatio="none"
    version="1.1"
  >
    <path
      d="M0 278L80 275.2C160 272.3 320 266.7 480 247.5C640 228.3 800 195.7 880 179.3L960 163L960 541L880 541C800 541 640 541 480 541C320 541 160 541 80 541L0 541Z"
      fill="#ffffff"
    ></path>
  </svg>
);
export const About: React.FC = () => {
  const { t } = useTranslations();
  return (
    <section id="about" className="bg-beige relative overflow-hidden pt-8">
      {/* Decorative wave at the top of the section */}
      <WaveSVG />
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
    </section>
  );
};
