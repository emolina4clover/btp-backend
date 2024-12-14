export interface PrestashopCategoriesResponseInterface {
  prestashop: Prestashop;
}

export interface Prestashop {
  $: GeneratedType;
  categories: Category[];
}

export interface GeneratedType {
  'xmlns:xlink': string;
}

export interface Category {
  category: Category2[];
}

export interface Category2 {
  $: GeneratedType2;
}

export interface GeneratedType2 {
  id: string;
  'xlink:href': string;
}
