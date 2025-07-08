export const PRODUCTS = [
  'products.bread',
  'products.spelta',
  'products.durum',
  'products.sunflowerSeeds',
  'products.sunflowerKernel',
  'products.sunflowerOil',
  'products.pea',
  'products.rapeseed',
  'products.mustard',
  'products.corn',
  'products.barley',
  'products.other',
] as const;

export interface SelectedProduct {
  name: string;
  quantity: number;
}
