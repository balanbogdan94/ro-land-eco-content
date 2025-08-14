import React from 'react';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { Controller } from 'react-hook-form';
import { useTranslations } from '@/context/LanguageContext';
import { ProductSelect } from './ui/ProductSelect';
import { ThankYouCard } from './ui/ThankYouCard';
import { useFormData } from '@/hooks/use-form-data';
import { Spinner } from './ui/spinner';

export const ContactForm: React.FC = () => {
  const { t } = useTranslations();

  const {
    isSubmitted,
    isLoading,
    register,
    handleSubmit,
    control,
    errors,
    onSubmit,
    onNewRequest,
    formIsSubmitted,
  } = useFormData();

  if (isSubmitted) return <ThankYouCard onNewRequest={onNewRequest} />;
  if (isLoading) return <Spinner size="sm" className="h-[50vh] container-custom py-20" />;
  return (
    <section id="contact">
      <div className="container-custom py-20">
        <div className="text-center mb-16">
          <h2 className="heading-lg mb-4">{t('contactForm.title')}</h2>
          <p className="text-body mx-auto">{t('contactForm.description')}</p>
        </div>
        <form onSubmit={handleSubmit(onSubmit)} className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <Label htmlFor="name" className="block text-center md:text-left">
              {t('contactForm.name')}
            </Label>
            <Input {...register('name')} />
            {formIsSubmitted && errors.name && (
              <p className="text-red-500 text-sm">
                {t(errors.name.message || 'contactForm.validation.required')}
              </p>
            )}
          </div>
          <div className="space-y-2">
            <Label htmlFor="company" className="block text-center md:text-left">
              {t('contactForm.company')}
            </Label>
            <Input {...register('company')} />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email" className="block text-center md:text-left">
              {t('contactForm.email')}
            </Label>
            <Input id="email" type="email" {...register('email')} />
            {formIsSubmitted && errors.email && (
              <p className="text-red-500 text-sm">
                {t(errors.email.message || 'contactForm.validation.required')}
              </p>
            )}
          </div>
          <div className="space-y-2">
            <Label htmlFor="phone" className="block text-center md:text-left">
              {t('contactForm.phone')}
            </Label>
            <Input id="phone" type="tel" {...register('phone')} />
            {formIsSubmitted && errors.phone && (
              <p className="text-red-500 text-sm">
                {t(errors.phone.message || 'contactForm.validation.required')}
              </p>
            )}
          </div>
          <div className="space-y-2 md:col-span-2">
            <ProductSelect control={control} errors={errors} />
            <Label className="block text-center md:text-left">{t('contactForm.quantity')}</Label>
            <Controller
              name="products"
              control={control}
              defaultValue={[]}
              render={({ field: { value, onChange } }) =>
                value && value.length > 0 ? (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                    {value.map((option, index: number) => (
                      <div key={option.value} className="flex flex-col justify-start">
                        <span className="min-w-[250px] text-sm">{t(option.value)}</span>
                        <Input
                          type="number"
                          min={0}
                          step={1}
                          value={option.quantity || ''}
                          onChange={(e) => {
                            const newValue = [...value];
                            newValue[index] = {
                              ...option,
                              quantity: e.target.value ? Number(e.target.value) : undefined,
                            };
                            onChange(newValue);
                          }}
                          placeholder={t('contactForm.quantity.placeholder')}
                          className="max-w-xs"
                        />
                        {formIsSubmitted && errors.products?.[index]?.quantity && (
                          <p className="text-red-500 text-sm">
                            {t(
                              errors.products[index].quantity.message ||
                                'contactForm.validation.required'
                            )}
                          </p>
                        )}
                      </div>
                    ))}
                  </div>
                ) : null
              }
            />
          </div>
          <div className="space-y-2 md:col-span-2">
            <Label htmlFor="message" className="block text-center md:text-left">
              {t('contactForm.message')}
            </Label>
            <Textarea id="message" {...register('message')} rows={4} />
            {formIsSubmitted && typeof errors.message?.message === 'string' && (
              <p className="text-red-500 text-sm">{t(errors.message.message)}</p>
            )}
          </div>
          <div className="md:col-span-2 flex justify-center mt-4">
            <Button type="submit" className="btn-primary w-full md:w-auto">
              {t('contactForm.submit')}
            </Button>
          </div>
        </form>
      </div>
    </section>
  );
};
