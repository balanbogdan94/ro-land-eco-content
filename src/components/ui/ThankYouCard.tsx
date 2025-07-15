import React from 'react';
import { Button } from '@/components/ui/button';
import { useTranslations } from '@/context/LanguageContext';
import styles from '../ContactForm.module.css';

interface ThankYouCardProps {
  onNewRequest: () => void;
}

export const ThankYouCard: React.FC<ThankYouCardProps> = ({ onNewRequest }) => {
  const { t } = useTranslations();
  return (
    <section id="contact" className={styles.contact}>
      <div className="container-custom py-20">
        <div className="text-center">
          <div className="max-w-2xl mx-auto">
            <div className="bg-green-50 border border-green-200 rounded-lg p-8">
              <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 bg-green-100 rounded-full">
                <svg
                  className="w-8 h-8 text-green-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
              <h2 className="heading-lg mb-4 text-green-800">{t('contactForm.success.title')}</h2>
              <p className="text-body text-green-700 mb-6">{t('contactForm.success.message')}</p>
              <Button onClick={onNewRequest} className="btn-primary">
                {t('contactForm.success.newRequest')}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
