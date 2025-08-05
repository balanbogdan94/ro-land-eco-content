import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { useTranslations } from '@/context/LanguageContext';

const productKeys = [
  'wheat-bread',
  'wheat-spelta',
  'wheat-durum',
  'sunflower-seeds',
  'sunflower-kernel',
  'sunflower-oil',
  'pea',
  'driedYellowPeas',
  'rapeseed',
  'mustard',
  'corn',
  'barley',
];

export const Products: React.FC = () => {
  const { t } = useTranslations();
  return (
    <section id="products" className="bg-white">
      <div className="container-custom py-20">
        <div className="text-center mb-16">
          <h2 className="heading-lg mb-4">{t('products.title')}</h2>
          <p className="text-body max-w-3xl mx-auto text-balance">{t('products.intro')}</p>
          <p className="text-body mb-6 mt-6 text-center text-balance">{t('products.ecoNote')}</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {productKeys.map((key) => (
            <Card
              key={key}
              className="group transition-transform hover:translate-y-[-5px] hover:shadow-lg"
            >
              <div className="h-48 overflow-hidden relative">
                <img
                  className="rounded-t-lg"
                  src={t(`products.items.${key}.image`)}
                  alt={t(`products.items.${key}.name`)}
                />

                <img
                  src="/assets/certifications/the_organic_logo_0.webp"
                  alt="Organic Certification"
                  className="absolute top-0 left-0 h-12 rounded-tl-lg aspect-square rounded-br-lg"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="heading-md mb-2">{t(`products.items.${key}.name`)}</h3>
                <p className="text-body text-gray-600">{t(`products.items.${key}.desc`)}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="text-center mt-16">
          <a href="#contact" className="btn-primary inline-block">
            {t('products.cta')}
          </a>
        </div>
      </div>
    </section>
  );
};
