import React from 'react';
import { Button } from './ui/button';
import { useTranslations } from '@/context/LanguageContext';

const WaveSVG = () => (
  <svg
    id="visual"
    viewBox="0 0 960 540"
    className="absolute bottom-0 left-0 w-full max-h-24 overflow-hidden z-20"
    xmlns="http://www.w3.org/2000/svg"
    preserveAspectRatio="none"
    version="1.1"
  >
    <path
      d="M0 278L80 275.2C160 272.3 320 266.7 480 247.5C640 228.3 800 195.7 880 179.3L960 163L960 541L880 541C800 541 640 541 480 541C320 541 160 541 80 541L0 541Z"
      fill="#0b8a3a"
    ></path>
    <path
      d="M0 424L80 422C160 420 320 416 480 397.3C640 378.7 800 345.3 880 328.7L960 312L960 541L880 541C800 541 640 541 480 541C320 541 160 541 80 541L0 541Z"
      fill="#ffffff"
    ></path>
  </svg>
);

export const Hero: React.FC = () => {
  const { t } = useTranslations();
  return (
    <section className="relative text-white h-auto ">
      <div className="px-4 sm:px-6 lg:px-8 bg-cover bg-center h-[75vh] sm:h-[80vh] lg:h-[85vh] relative py-24 md:py-32 ">
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          poster="https://rolandorganicstorage1.blob.core.windows.net/assets/pictures/Hero Poster/heroPoster.webp"
          className="w-full absolute top-0 left-0 object-cover h-[75vh] sm:h-[80vh] lg:h-[85vh] z-0 pointer-events-none select-none transform translate-z-0 will-change-transform"
        >
          <source
            src="https://rolandorganicstorage1.blob.core.windows.net/assets/video/hero-movie.webm"
            type="video/webm"
          />
          {t('hero.noVideoSupport')}
        </video>

        {/* Overlay de protecție */}
        <div
          className="
            absolute inset-0 z-[1] 
            pointer-events-auto
            select-none 
          "
          onContextMenu={(e) => e.preventDefault()}
          onDragStart={(e) => e.preventDefault()}
        />
        <div className="container-custom w-full flex flex-col justify-end items-center lg:items-start h-full gap-4 z-10">
          <h1 className="heading-xl text-center md:text-left text-balance max-w-xs z-10">
            {t('hero.title')}
          </h1>
          <Button
            className="btn-primary max-w-52 text-lg w-auto z-10"
            onClick={() => {
              document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            {t('hero.cta')}
          </Button>
        </div>
        <WaveSVG />
      </div>

      <div className="container-custom flex flex-col gap-2 ">
        <h2 className="text-black  md:text-left lg:text-left text-center text-xl lg:text-2xl font-bold">
          {t('hero.subtitle')}
        </h2>
        <p
          className="text-lg text-center md:text-left lg:text-left md:text-xl text-black text-balance lg:max-w-xl"
          dangerouslySetInnerHTML={{ __html: t('hero.desc') }}
        />
      </div>
    </section>
  );
};
