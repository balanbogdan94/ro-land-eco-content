import React from 'react';
import styles from './Certifications.module.css';
import { Card, CardContent } from '@/components/ui/card';
import { useTranslations } from '@/context/LanguageContext';

const certKeys = ['eu-bio', 'haccp', 'gmp'];

export const Certifications: React.FC = () => {
  const { t } = useTranslations();
  const certIcons = [
    <img
      src="https://rolandorganicstorage1.blob.core.windows.net/assets/pictures/Certificates Photos/the_organic_logo_0.webp"
      alt="EU Organic Logo"
      className="w-20 h-20 mx-auto mb-4 rounded-lg"
      key="eu-bio"
    />,
    <img
      src="https://rolandorganicstorage1.blob.core.windows.net/assets/pictures/Certificates Photos/haccp_certification.webp"
      alt="HACCP Certification"
      className="w-20 h-20 mx-auto mb-4 rounded-lg"
      key="haccp"
    />,
    <img
      src="https://rolandorganicstorage1.blob.core.windows.net/assets/pictures/Certificates Photos/gmp_plus_certificate.webp"
      alt="GMP Certification"
      className="w-auto h-20 mx-auto mb-4 rounded-lg"
      key="gmp"
    />,
  ];
  return (
    <section id="certifications" className={styles.certifications}>
      <div className="container-custom py-20">
        <div className="text-center mb-16">
          <h2 className="heading-lg mb-4">{t('certifications.title')}</h2>
          <p className="text-body max-w-3xl mx-auto">{t('certifications.intro')}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {certKeys.map((key, index) => {
            // Link doar pentru EU BIO
            const pdfLink =
              key === 'eu-bio'
                ? 'https://rolandorganicstorage1.blob.core.windows.net/assets/pdfs/eu-certificate.pdf'
                : undefined;

            const CardWrapper = pdfLink ? 'a' : React.Fragment;

            const cardProps = pdfLink
              ? {
                  href: pdfLink,
                  target: '_blank',
                  rel: 'noopener noreferrer',
                  className:
                    'block transition-transform transform hover:scale-105 hover:shadow-xl rounded-lg',
                }
              : {};

            return (
              <CardWrapper key={key} {...cardProps}>
                <Card className={`${styles.certificationCard} ${pdfLink ? 'cursor-pointer' : ''}`}>
                  <CardContent className="p-8 text-center">
                    {certIcons[index]}
                    <h3 className="text-xl font-semibold mb-2">
                      {t(`certifications.items.${key}.title`)}
                    </h3>
                    <p className="text-body text-sm text-gray-700">
                      {t(`certifications.items.${key}.desc`)}
                    </p>
                  </CardContent>
                </Card>
              </CardWrapper>
            );
          })}
        </div>
      </div>
    </section>
  );
};
