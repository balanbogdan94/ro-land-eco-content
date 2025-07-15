import React from 'react';
import styles from './ContactForm.module.css';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { useForm, Controller } from 'react-hook-form';
import { useTranslations } from '@/context/LanguageContext';
import { ProductSelect } from './ui/ProductSelect';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { ContactFormSchema, DEFAULT_FORM_VALUES, FormValues } from '@/models/formData';
import { ThankYouCard } from './ui/ThankYouCard';

export const ContactForm: React.FC = () => {
  const { t } = useTranslations();
  const [isSubmitted, setIsSubmitted] = React.useState(false);
  const {
    register,
    handleSubmit,
    control,
    formState: { errors, isSubmitted: formIsSubmitted },
  } = useForm<z.infer<typeof ContactFormSchema>>({
    resolver: zodResolver(ContactFormSchema),
    mode: 'onSubmit',
    reValidateMode: 'onSubmit',
    defaultValues: DEFAULT_FORM_VALUES,
  });

  const onSubmit = (data: FormValues) => {
    console.log('Form submitted:', data);
    // Simulate successful submission
    setIsSubmitted(true);
    // Here you would normally send the data to your backend
  };

  return isSubmitted ? (
    <ThankYouCard onNewRequest={() => setIsSubmitted(false)} />
  ) : (
    <section id="contact" className={styles.contact}>
      <div className="container-custom py-20">
        <div className="text-center mb-16">
          <h2 className="heading-lg mb-4">{t('contactForm.title')}</h2>
          <p className="text-body max-w-3xl mx-auto">{t('contactForm.description')}</p>
        </div>

        <div className="max-w-3xl mx-auto">
          <form onSubmit={handleSubmit(onSubmit)} className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="name">{t('contactForm.name')}</Label>
              <Input {...register('name')} />
              {formIsSubmitted && errors.name && (
                <p className="text-red-500 text-sm">
                  {t(errors.name.message || 'contactForm.validation.required')}
                </p>
              )}
            </div>
            <div className="space-y-2">
              <Label htmlFor="company">{t('contactForm.company')}</Label>
              <Input {...register('company')} />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">{t('contactForm.email')}</Label>
              <Input id="email" name="email" type="email" {...register('email')} />
              {formIsSubmitted && errors.email && (
                <p className="text-red-500 text-sm">
                  {t(errors.email.message || 'contactForm.validation.required')}
                </p>
              )}
            </div>
            <div className="space-y-2">
              <Label htmlFor="phone">{t('contactForm.phone')}</Label>
              <Input id="phone" name="phone" type="tel" {...register('phone')} />
              {formIsSubmitted && errors.phone && (
                <p className="text-red-500 text-sm">
                  {t(errors.phone.message || 'contactForm.validation.required')}
                </p>
              )}
            </div>

            {/* Produse dropdown */}
            <div className="space-y-2 md:col-span-2">
              <ProductSelect control={control} errors={errors} />
              {/* Cantități per produs */}
              <Controller
                name="products"
                control={control}
                defaultValue={[]}
                render={({ field: { value } }) =>
                  value && value.length > 0 ? (
                    <div className="space-y-4 mt-4">
                      <Label>{t('contactForm.quantity')}</Label>
                      {value.map((option: { value: string; label: string }) => (
                        <div key={option.value} className="flex items-center gap-4">
                          <span className="min-w-[250px]">{t(option.value)}</span>
                          <Controller
                            name={`quantities.${option.value}`}
                            control={control}
                            defaultValue={null}
                            render={({ field }) => (
                              <div>
                                <Input
                                  type="number"
                                  min={0}
                                  step={1}
                                  {...field}
                                  placeholder={t('contactForm.quantity.placeholder')}
                                  className="max-w-xs"
                                />
                                {formIsSubmitted &&
                                  errors.quantities &&
                                  errors.quantities[option.value] && (
                                    <p className="text-red-500 text-sm">
                                      {t(errors.quantities[option.value].message)}
                                    </p>
                                  )}
                              </div>
                            )}
                          />
                        </div>
                      ))}
                    </div>
                  ) : null
                }
              />
            </div>

            {/* Mesaj */}
            <div className="space-y-2 md:col-span-2">
              <Label htmlFor="message">{t('contactForm.message')}</Label>
              <Textarea id="message" {...register('message')} rows={4} />
              {formIsSubmitted && typeof errors.message?.message === 'string' && (
                <p className="text-red-500 text-sm">{t(errors.message.message)}</p>
              )}
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
