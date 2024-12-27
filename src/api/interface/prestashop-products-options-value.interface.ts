export interface PrestaShopProductsOptionsValueInterface {
  prestashop: Prestashop;
}

export interface Prestashop {
  $: GeneratedType;
  combination: Combination[];
}

export interface GeneratedType {
  'xmlns:xlink': string;
}

export interface Combination {
  id: string[];
  id_product: IdProduct[];
  ean13: string[];
  isbn: string[];
  upc: string[];
  mpn: string[];
  reference: string[];
  supplier_reference: string[];
  wholesale_price: string[];
  price: string[];
  ecotax: string[];
  weight: string[];
  unit_price_impact: string[];
  minimal_quantity: string[];
  low_stock_threshold: string[];
  low_stock_alert: string[];
  default_on: string[];
  available_date: string[];
  available_now: AvailableNow[];
  available_later: AvailableLater[];
  associations: Association[];
}

export interface IdProduct {
  _: string;
  $: GeneratedType2;
}

export interface GeneratedType2 {
  'xlink:href': string;
}

export interface AvailableNow {
  language: Language[];
}

export interface Language {
  $: GeneratedType3;
}

export interface GeneratedType3 {
  id: string;
  'xlink:href': string;
}

export interface AvailableLater {
  language: Language2[];
}

export interface Language2 {
  $: GeneratedType4;
}

export interface GeneratedType4 {
  id: string;
  'xlink:href': string;
}

export interface Association {
  product_option_values: ProductOptionValue[];
  images: Image[];
}

export interface ProductOptionValue {
  $: GeneratedType5;
  product_option_value: ProductOptionValue2[];
}

export interface GeneratedType5 {
  nodeType: string;
  api: string;
}

export interface ProductOptionValue2 {
  $: GeneratedType6;
  id: string[];
}

export interface GeneratedType6 {
  'xlink:href': string;
}

export interface Image {
  $: GeneratedType7;
  image: Image2[];
}

export interface GeneratedType7 {
  nodeType: string;
  api: string;
}

export interface Image2 {
  $: GeneratedType8;
  id: string[];
}

export interface GeneratedType8 {
  'xlink:href': string;
}
