import { ContactFormSchema, DEFAULT_FORM_VALUES, FormValues } from '@/models/formData';
import { submitForm } from '@/services/form-contact-service';
import { zodResolver } from '@hookform/resolvers/zod';
import React from 'react';
import { useForm } from 'react-hook-form';
import z from 'zod';

export const useFormData = () => {
  const [isSubmitted, setIsSubmitted] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(false);
  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors, isSubmitted: formIsSubmitted },
  } = useForm<z.infer<typeof ContactFormSchema>>({
    resolver: zodResolver(ContactFormSchema),
    mode: 'onSubmit',
    reValidateMode: 'onSubmit',
    defaultValues: DEFAULT_FORM_VALUES,
  });

  const onSubmit = async (data: FormValues) => {
    try {
      setIsLoading(true);
      const result = await submitForm(data);
      if (result.success) {
        setIsSubmitted(true);
      } else {
        console.error('Form submission failed:', result.error);
      }
    } catch (error) {
      console.error('Unexpected error occurred:', error);
    } finally {
      setIsLoading(false);
    }
  };
  const onNewRequest = () => {
    setIsSubmitted(false);
    reset(DEFAULT_FORM_VALUES);
  };

  return {
    isSubmitted,
    isLoading,
    register,
    handleSubmit,
    control,
    reset,
    errors,
    onSubmit,
    onNewRequest,
    formIsSubmitted,
  };
};
