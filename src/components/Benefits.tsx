import React, { useState } from 'react';
import styles from './Benefits.module.css';
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
    <section id="benefits" className={styles.benefits}>
      <div className="container-custom py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="heading-lg mb-6">{t('benefits.title')}</h2>
            <p className="text-body mb-8">{t('benefits.intro')}</p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {benefitKeys.map((key) => (
                <div key={key} className={styles.benefitItem}>
                  <div className={styles.benefitIcon}>
                    <Check className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">{t(`benefits.items.${key}.title`)}</h3>
                    <p className="text-sm text-gray-600 text-balance">
                      {t(`benefits.items.${key}.desc`)}
                    </p>
                  </div>
                </div>
              ))}
            </div>
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
