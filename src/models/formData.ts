import z from 'zod';

interface ProductOption {
  value: string;
  label: string;
}

const ProductOptionSchema = z.object({
  value: z.string(),
  label: z.string(),
});

export const ContactFormSchema = z
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

export interface FormValues {
  name: string;
  company?: string;
  email?: string;
  phone?: string;
  products: ProductOption[];
  quantities: Record<string, string>;
  message?: string;
}

export const DEFAULT_FORM_VALUES: Readonly<FormValues> = {
  name: '',
  company: '',
  email: '',
  phone: '',
  products: [],
  quantities: {},
  message: '',
};
