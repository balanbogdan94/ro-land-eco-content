export const PRODUCTS = [
  'Grâu pentru panificație ecologic',
  'Grâu spelta ecologic',
  'Grâu dur ecologic',
  'Semințe de floarea-soarelui ecologice',
  'Miez de floarea-soarelui ecologic',
  'Ulei ecologic presat la rece din semințe de floarea-soarelui',
  'Mazăre ecologică',
  'Rapiță ecologică',
  'Muștar ecologic',
  'Porumb ecologic',
  'Orz ecologic',
  'Alte produse',
] as const;

export interface SelectedProduct {
  name: string;
  quantity: number;
}
