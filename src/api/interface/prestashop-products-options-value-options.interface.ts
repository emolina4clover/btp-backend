export interface PrestaShopProductsOptionsValueOptionsInterface {
  prestashop: Prestashop;
}

export interface Prestashop {
  $: GeneratedType;
  product_option: ProductOption[];
}

export interface GeneratedType {
  'xmlns:xlink': string;
}

export interface ProductOption {
  id: string[];
  is_color_group: string[];
  group_type: string[];
  position: string[];
  name: Name[];
  public_name: PublicName[];
  associations: Association[];
}

export interface Name {
  language: Language[];
}

export interface Language {
  _: string;
  $: GeneratedType2;
}

export interface GeneratedType2 {
  id: string;
  'xlink:href': string;
}

export interface PublicName {
  language: Language2[];
}

export interface Language2 {
  _: string;
  $: GeneratedType3;
}

export interface GeneratedType3 {
  id: string;
  'xlink:href': string;
}

export interface Association {
  product_option_values: ProductOptionValue[];
}

export interface ProductOptionValue {
  $: GeneratedType4;
  product_option_value: ProductOptionValue2[];
}

export interface GeneratedType4 {
  nodeType: string;
  api: string;
}

export interface ProductOptionValue2 {
  $: GeneratedType5;
  id: string[];
}

export interface GeneratedType5 {
  'xlink:href': string;
}
