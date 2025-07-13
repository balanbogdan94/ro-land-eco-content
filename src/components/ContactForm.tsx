/* eslint-disable max-lines */
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

interface ProductOption {
  value: string;
  label: string;
}

const ProductOptionSchema = z.object({
  value: z.string(),
  label: z.string(),
});

const ContactFormSchema = z
  .object({
    name: z.string().min(1, { message: 'contactForm.validation.required' }),
    company: z.string().optional(),
    email: z.string().optional(),
    phone: z.string().optional(),
    products: z.array(ProductOptionSchema).default([]),
    quantities: z.record(z.string()).default({}),
    message: z.string().optional(),
  })
  .superRefine((data, ctx) => {
    console.log('Validating data:', data);

    // Validate email format if provided
    if (data.email && data.email.trim() !== '') {
      const emailRegex = /^\S+@\S+\.\S+$/;
      if (!emailRegex.test(data.email)) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: 'contactForm.validation.email',
          path: ['email'],
        });
      }
    }

    // Validate phone format if provided
    if (data.phone && data.phone.trim() !== '') {
      const phoneRegex = /^\+?[0-9\s\-()]+$/;
      if (!phoneRegex.test(data.phone)) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: 'contactForm.validation.phone',
          path: ['phone'],
        });
      }
    }

    // At least email or phone
    if ((!data.email || data.email.trim() === '') && (!data.phone || data.phone.trim() === '')) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: 'contactForm.validation.emailOrPhone',
        path: ['email'],
      });
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: 'contactForm.validation.emailOrPhone',
        path: ['phone'],
      });
    }
    // If products selected, all must have quantity
    if (data.products && data.products.length > 0) {
      data.products.forEach((option) => {
        if (
          !data.quantities ||
          !data.quantities[option.value] ||
          data.quantities[option.value] === ''
        ) {
          ctx.addIssue({
            code: z.ZodIssueCode.custom,
            message: 'contactForm.validation.quantityRequired',
            path: ['quantities', option.value],
          });
        }
      });
    } else {
      // If no products/quantities, message is required
      if (!data.message || data.message.trim() === '') {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: 'contactForm.validation.messageRequired',
          path: ['message'],
        });
      }
    }
  });

interface FormValues {
  name: string;
  company?: string;
  email?: string;
  phone?: string;
  products: ProductOption[];
  quantities: Record<string, string>;
  message?: string;
}

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
    mode: 'onChange',
    reValidateMode: 'onChange',
    defaultValues: {
      name: '',
      company: '',
      email: '',
      phone: '',
      products: [],
      quantities: {},
      message: '',
    },
  });

  const onSubmit = (data: FormValues) => {
    console.log('Form submitted:', data);
    console.log('Errors:', errors);
    // Simulate successful submission
    setIsSubmitted(true);
    // Here you would normally send the data to your backend
  };

  const onError = (errors: unknown) => {
    console.log('Form validation errors:', errors);
  };

  console.log('Current errors state:', errors);
  console.log('Is submitted:', formIsSubmitted);

  // Show success message if form was successfully submitted
  if (isSubmitted) {
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
                <Button onClick={() => setIsSubmitted(false)} className="btn-primary">
                  {t('contactForm.success.newRequest')}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className={styles.contact}>
      <div className="container-custom py-20">
        <div className="text-center mb-16">
          <h2 className="heading-lg mb-4">{t('contactForm.title')}</h2>
          <p className="text-body max-w-3xl mx-auto">{t('contactForm.description')}</p>
        </div>

        <div className="max-w-3xl mx-auto">
          <form
            onSubmit={handleSubmit(onSubmit, onError)}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
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
                            defaultValue={''}
                            render={({ field }) => (
                              <div>
                                <Input
                                  type="number"
                                  min={0}
                                  step={0.01}
                                  {...field}
                                  placeholder={t('contactForm.quantity.placeholder')}
                                  required
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
