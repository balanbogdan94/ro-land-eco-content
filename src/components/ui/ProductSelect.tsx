import { useTranslations } from '@/context/LanguageContext';
import { PRODUCTS } from '@/models/products';
import { Controller } from 'react-hook-form';
import { Label } from 'recharts';
import Select from 'react-select';

const customStyles = {
  control: (provided) => ({
    ...provided,
    borderColor: 'rgb(229 231 235)',
    boxShadow: 'none',
    '&:hover': {
      borderColor: 'rgb(156 163 175)',
    },
  }),
};

export const ProductSelect = ({ control, errors }) => {
  const { t } = useTranslations();

  const productOptions = PRODUCTS.map((product) => ({
    value: product,
    label: t(product),
  }));

  return (
    <div>
      <Label>{t('contactForm.products')}</Label>
      <Controller
        name="products"
        control={control}
        defaultValue={[]}
        render={({ field: { onChange, value } }) => (
          <Select
            isMulti
            options={productOptions}
            onChange={(selectedOptions) => {
              onChange(selectedOptions);
            }}
            value={value}
            styles={customStyles}
            classNamePrefix="select"
            placeholder={t('contactForm.products.placeholder')}
          />
        )}
      />
      {errors.products && <p className="text-red-500 text-sm">{errors.products.message}</p>}
    </div>
  );
};
