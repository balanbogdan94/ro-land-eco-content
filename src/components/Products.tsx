import React from 'react';
import styles from './Products.module.css';
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
  'rapeseed',
  'mustard',
  'corn',
  'barley',
];

export const Products: React.FC = () => {
  const { t } = useTranslations();
  return (
    <section id="products" className={styles.products}>
      <div className="container-custom py-20">
        <div className="text-center mb-16">
          <h2 className="heading-lg mb-4">{t('products.title')}</h2>
          <p className="text-body max-w-3xl mx-auto">{t('products.intro')}</p>
        </div>
        <div className="text-center mt-2 mb-16">
          <p className="text-body mb-6">{t('products.ecoNote')}</p>
          <a href="#contact" className="btn-primary inline-block">
            {t('products.cta')}
          </a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {productKeys.map((key) => (
            <Card
              key={key}
              className={`${styles.productCard} cursor-pointer`}
              onClick={() => {
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              <div className={styles.productImage}>
                <img src={t(`products.items.${key}.image`)} alt={t(`products.items.${key}.name`)} />
              </div>
              <CardContent className="p-6">
                <h3 className="heading-md mb-2">{t(`products.items.${key}.name`)}</h3>
                <p className="text-body text-gray-600">{t(`products.items.${key}.desc`)}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
