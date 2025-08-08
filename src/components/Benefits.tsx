import React, { useState } from 'react';
import { Check } from 'lucide-react';
import { useTranslations } from '@/context/LanguageContext';

const benefitKeys = [
  'certification',
  'fertile-soil',
  'ideal-climate',
  'traceability',
  'delivery',
  'export',
];

export const Benefits: React.FC = () => {
  const { t } = useTranslations();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleImageClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <section id="benefits">
      <div className="container-custom py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="heading-lg text-center sm:text-left mb-6 ">{t('benefits.title')}</h2>
            <p className="text-body text-center sm:text-left mb-8">{t('benefits.intro')}</p>

            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-10 sm:gap-12">
              {benefitKeys.map((key) => (
                <li key={key} className="max-w-[75vw] flex items-start gap-3 mx-auto">
                  <div className="bg-rolandGreen rounded-full p-1 flex-shrink-0 mt-0.5">
                    <Check className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1 leading-snug text-left">
                      {t(`benefits.items.${key}.title`)}
                    </h3>
                    <p className="text-sm text-gray-600 text-left">
                      {t(`benefits.items.${key}.desc`)}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className={'rounded-lg overflow-hidden shadow-xl bg-white'}>
            <img
              src="/assets/benefits/transportMapPhoto.webp"
              alt={t('benefits.imageAlt')}
              className={'w-full h-full object-contain'}
              onClick={handleImageClick}
              style={{ cursor: 'zoom-in' }}
            />
          </div>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center z-50"
          onClick={handleCloseModal}
        >
          <img
            src="/assets/benefits/transportMapPhoto.webp"
            alt={t('benefits.imageAlt')}
            className="max-w-[90vw] max-h-[90vh] object-contain rounded-lg shadow-[0_0_20px_rgba(0,0,0,0.5)] cursor-zoom-out"
          />
        </div>
      )}
    </section>
  );
};
