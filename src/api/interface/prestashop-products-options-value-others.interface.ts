export interface PrestaShopProductsOptionsValueOthersInterface {
  prestashop: Prestashop;
}

export interface Prestashop {
  $: GeneratedType;
  product_option_value: ProductOptionValue[];
}

export interface GeneratedType {
  'xmlns:xlink': string;
}

export interface ProductOptionValue {
  id: string[];
  id_attribute_group: IdAttributeGroup[];
  color: string[];
  position: string[];
  name: Name[];
}

export interface IdAttributeGroup {
  _: string;
  $: GeneratedType2;
}

export interface GeneratedType2 {
  'xlink:href': string;
}

export interface Name {
  language: Language[];
}

export interface Language {
  _: string;
  $: GeneratedType3;
}

export interface GeneratedType3 {
  id: string;
  'xlink:href': string;
}
