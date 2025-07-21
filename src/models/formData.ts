import z from 'zod';

interface ProductOption {
  value: string;
  label: string;
  quantity?: number;
}

const ProductOptionSchema = z.object({
  value: z.string(),
  label: z.string(),
  quantity: z.number().optional(),
});

export const ContactFormSchema = z
  .object({
    name: z.string().min(1, { message: 'contactForm.validation.required' }),
    company: z.string().optional(),
    email: z.string().optional(),
    phone: z.string().optional(),
    products: z.array(ProductOptionSchema).optional(),
    message: z.string().optional(),
  })
  .superRefine((data, ctx) => {
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

    if (data.products && data.products.length > 0) {
      data.products.forEach((option, index) => {
        if (!option.quantity || option.quantity <= 0 || isNaN(option.quantity)) {
          ctx.addIssue({
            code: z.ZodIssueCode.custom,
            message: 'contactForm.validation.quantityRequired',
            path: ['products', index, 'quantity'],
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
  message?: string;
}

export const DEFAULT_FORM_VALUES: Readonly<FormValues> = {
  name: '',
  company: '',
  email: '',
  phone: '',
  products: [],
  message: '',
};
