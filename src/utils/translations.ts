
type TranslationKey = 
  | 'about'
  | 'products'
  | 'benefits'
  | 'howItWorks'
  | 'testimonials'
  | 'contact'
  | 'requestOffer';

type TranslationsType = {
  [key in TranslationKey]: {
    ro: string;
    en: string;
  }
};

export const translations: TranslationsType = {
  about: {
    ro: 'Despre Noi',
    en: 'About Us',
  },
  products: {
    ro: 'Produse',
    en: 'Products',
  },
  benefits: {
    ro: 'Beneficii',
    en: 'Benefits',
  },
  howItWorks: {
    ro: 'Cum Funcționează',
    en: 'How It Works',
  },
  testimonials: {
    ro: 'Testimoniale',
    en: 'Testimonials',
  },
  contact: {
    ro: 'Contact',
    en: 'Contact',
  },
  requestOffer: {
    ro: 'Solicită Ofertă',
    en: 'Request Offer',
  }
};
