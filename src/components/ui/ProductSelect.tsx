import { useTranslations } from '@/context/LanguageContext';
import { PRODUCTS } from '@/models/products';
import { Controller } from 'react-hook-form';
import { Label } from 'recharts';
import Select from 'react-select';
import { useIsMobile } from '@/hooks/use-mobile';

const customStyles = {
  control: (provided) => ({
    ...provided,
    borderColor: 'rgb(229 231 235)',
    boxShadow: 'none',
  }),
  placeholder: (provided) => ({
    ...provided,
    textAlign: 'left',
  }),
  option: (provided, state) => ({
    ...provided,
    textAlign: 'left',
    backgroundColor: state.isSelected ? 'rgb(11,138,58,0.3)' : 'white',
    '&:hover': {
      backgroundColor: 'rgb(11,138,58,0.3)',
    },
    '&:active': {
      backgroundColor: 'rgb(11,138,58,0.5)',
    },
  }),
};

const mobileStyles = {
  control: (provided) => ({
    ...provided,
    borderColor: 'rgb(229 231 235)',
    boxShadow: 'none',
  }),
  placeholder: (provided) => ({
    ...provided,
    textAlign: 'center',
  }),
  option: (provided, state) => ({
    ...provided,
    textAlign: 'center',
    backgroundColor: state.isSelected ? 'rgb(11,138,58,0.3)' : 'white',
    '&:hover': {
      backgroundColor: 'rgb(11,138,58,0.3)',
    },
    '&:active': {
      backgroundColor: 'rgb(11,138,58,0.5)',
    },
  }),
};

export const ProductSelect = ({ control, errors }) => {
  const { t } = useTranslations();
  const isMobile = useIsMobile();

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
            styles={isMobile ? mobileStyles : customStyles}
            placeholder={t('contactForm.products.placeholder')}
          />
        )}
      />
      {errors.products && <p className="text-red-500 text-sm">{errors.products.message}</p>}
    </div>
  );
};
