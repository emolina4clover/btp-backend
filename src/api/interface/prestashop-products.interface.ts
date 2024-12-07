export interface PrestaShopProductsInterface {
  prestashop: Prestashop;
}

interface Prestashop {
  $: GeneratedType;
  products: Product[];
}

interface GeneratedType {
  'xmlns:xlink': string;
}

interface Product {
  product: Product2[];
}

interface Product2 {
  $: GeneratedType2;
}

interface GeneratedType2 {
  id: string;
  'xlink:href': string;
}
