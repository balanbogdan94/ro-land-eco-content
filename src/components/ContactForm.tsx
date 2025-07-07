/* eslint-disable max-lines */
import React, { useState, useEffect, useRef } from 'react';
import styles from './ContactForm.module.css';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { PRODUCTS, SelectedProduct } from '@/models/products';
import { useForm } from 'react-hook-form';
import { useTranslations } from '@/context/LanguageContext';

export const ContactForm: React.FC = () => {
  const { t } = useTranslations();
  const { register, handleSubmit } = useForm();
  const [selectedProducts] = useState<SelectedProduct[]>([]);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Închidem dropdown la click în afară
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <section id="contact" className={styles.contact}>
      <div className="container-custom py-20">
        <div className="text-center mb-16">
          <h2 className="heading-lg mb-4">{t('contactForm.title')}</h2>
          <p className="text-body max-w-3xl mx-auto">{t('contactForm.description')}</p>
        </div>

        <div className="max-w-3xl mx-auto">
          <form onSubmit={handleSubmit(() => {})} className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="name">{t('contactForm.name')}</Label>
              <Input {...register('name', { required: true })} />
            </div>
            <div className="space-y-2">
              <Label htmlFor="company">{t('contactForm.company')}</Label>
              <Input {...register('company', { required: false })} />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">{t('contactForm.email')}</Label>
              <Input
                id="email"
                name="email"
                type="email"
                {...register('email', { required: true, pattern: /^\S+@\S+\.\S+$/ })}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="phone">{t('contactForm.phone')}</Label>
              <Input
                id="phone"
                name="phone"
                type="tel"
                {...register('phone', {
                  required: true,
                  pattern: /^\+?[0-9\s\-()]+$/,
                })}
              />
            </div>

            {/* Produse dropdown */}
            <div className="space-y-2 md:col-span-2" ref={dropdownRef}>
              <Label>{t('contactForm.products')}</Label>
              {/* Container dropdown */}
              <div
                onClick={() => setDropdownOpen((open) => !open)}
                className="border rounded p-2 cursor-pointer select-none flex flex-wrap gap-2 items-center min-h-[38px] min-w-[200px]"
              >
                {selectedProducts.length === 0 ? (
                  <span className="text-gray-400 select-none">
                    {t('contactForm.products.placeholder')}
                  </span>
                ) : (
                  selectedProducts.map((product) => (
                    <span
                      key={product.name}
                      className="flex items-center bg-gray-200 rounded px-2 py-1 text-sm"
                      onClick={(e) => e.stopPropagation()}
                    >
                      {product.name}
                      <button
                        type="button"
                        className="ml-1 text-gray-600 hover:text-red-600 font-bold"
                        aria-label={`Șterge ${product.name}`}
                      >
                        ×
                      </button>
                    </span>
                  ))
                )}
              </div>

              {/* Dropdown listă produse */}
              {dropdownOpen && (
                <div className="border rounded mt-1 max-h-56 overflow-y-auto bg-white z-10 relative shadow-md p-2">
                  {PRODUCTS.map((productName) => {
                    const checked = selectedProducts.some((p) => p.name === productName);
                    return (
                      <label
                        key={productName}
                        className="flex items-center space-x-2 cursor-pointer py-1 px-2 rounded hover:bg-gray-100"
                      >
                        <input type="checkbox" checked={checked} />
                        <span>{productName}</span>
                      </label>
                    );
                  })}
                </div>
              )}
            </div>

            {/* Cantități per produs */}
            {selectedProducts.length > 0 && (
              <div className="md:col-span-2 space-y-4">
                <Label>{t('contactForm.quantity')}</Label>
                {selectedProducts.map((product) => (
                  <div key={product.name} className="flex items-center gap-4">
                    <span className="min-w-[250px]">{product.name}</span>
                    <Input
                      type="text"
                      value={product.quantity}
                      placeholder={t('contactForm.quantity.placeholder')}
                      required
                      className="max-w-xs"
                    />
                  </div>
                ))}
              </div>
            )}

            {/* Mesaj */}
            <div className="space-y-2 md:col-span-2">
              <Label htmlFor="message">{t('contactForm.message')}</Label>
              <Textarea id="message" name="message" rows={4} />
            </div>

            {/* Submit */}
            <div className="md:col-span-2 flex justify-center mt-4">
              <Button type="submit" className="btn-primary w-full md:w-auto">
                {t('contactForm.submit')}
              </Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};
