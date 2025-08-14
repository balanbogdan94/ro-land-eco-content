import type { FormValues } from '@/models/formData';

export interface SubmitResult {
  success: boolean;
  error?: string;
}

function getApiUrl(): string {
  const url = import.meta.env.VITE_API_URL;
  if (!url) {
    throw new Error('VITE_API_URL environment variable is not defined');
  }
  return url;
}

function cleanFormData(data: FormValues): Record<string, unknown> {
  const cleaned: Record<string, unknown> = {};

  Object.entries(data).forEach(([key, value]) => {
    if (value !== undefined && value !== null && value !== '') {
      if (key === 'products' && Array.isArray(value)) {
        if (value.length > 0) {
          // Remove 'value' field from products, keep only label and quantity
          cleaned[key] = value.map((product) => ({
            label: product.label,
            quantity: product.quantity,
          }));
        }
      } else if (Array.isArray(value)) {
        if (value.length > 0) {
          cleaned[key] = value;
        }
      } else {
        cleaned[key] = value;
      }
    }
  });

  return cleaned;
}

export async function submitForm(data: FormValues): Promise<SubmitResult> {
  try {
    const cleanedData = cleanFormData(data);

    const response = await fetch(getApiUrl(), {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(cleanedData),
    });

    if (!response.ok) {
      return {
        success: false,
        error: `HTTP ${response.status}: ${response.statusText}`,
      };
    }

    return { success: true };
  } catch (error) {
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Unknown error occurred',
    };
  }
}
