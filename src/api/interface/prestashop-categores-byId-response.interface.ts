export interface PrestashopCategoriesByIdResponse {
  data: Data;
  status: number;
}

interface Data {
  prestashop: Prestashop;
}

interface Prestashop {
  $: GeneratedType;
  category: Category[];
}

interface GeneratedType {
  'xmlns:xlink': string;
}

interface Category {
  id: string[];
  id_parent: IdParent[];
  level_depth: string[];
  nb_products_recursive: NbProductsRecursive[];
  active: string[];
  id_shop_default: string[];
  is_root_category: string[];
  position: string[];
  date_add: string[];
  date_upd: string[];
  name: Name[];
  link_rewrite: LinkRewrite[];
  description: Description[];
  additional_description: AdditionalDescription[];
  meta_title: MetaTitle[];
  meta_description: MetaDescription[];
  meta_keywords: MetaKeyword[];
  associations: Association[];
}

interface IdParent {
  _: string;
  $: GeneratedType2;
}

interface GeneratedType2 {
  'xlink:href': string;
}

interface NbProductsRecursive {
  _: string;
  $: GeneratedType3;
}

interface GeneratedType3 {
  notFilterable: string;
}

interface Name {
  language: Language[];
}

interface Language {
  _: string;
  $: GeneratedType4;
}

interface GeneratedType4 {
  id: string;
  'xlink:href': string;
}

interface LinkRewrite {
  language: Language2[];
}

interface Language2 {
  _: string;
  $: GeneratedType5;
}

interface GeneratedType5 {
  id: string;
  'xlink:href': string;
}

interface Description {
  language: Language3[];
}

interface Language3 {
  _: string;
  $: GeneratedType6;
}

interface GeneratedType6 {
  id: string;
  'xlink:href': string;
}

interface AdditionalDescription {
  language: Language4[];
}

interface Language4 {
  $: GeneratedType7;
}

interface GeneratedType7 {
  id: string;
  'xlink:href': string;
}

interface MetaTitle {
  language: Language5[];
}

interface Language5 {
  $: GeneratedType8;
}

interface GeneratedType8 {
  id: string;
  'xlink:href': string;
}

interface MetaDescription {
  language: Language6[];
}

interface Language6 {
  $: GeneratedType9;
}

interface GeneratedType9 {
  id: string;
  'xlink:href': string;
}

interface MetaKeyword {
  language: Language7[];
}

interface Language7 {
  $: GeneratedType10;
}

interface GeneratedType10 {
  id: string;
  'xlink:href': string;
}

interface Association {
  categories: Category2[];
  products: Product[];
}

interface Category2 {
  $: GeneratedType11;
}

interface GeneratedType11 {
  nodeType: string;
  api: string;
}

interface Product {
  $: GeneratedType12;
  product: Product2[];
}

interface GeneratedType12 {
  nodeType: string;
  api: string;
}

interface Product2 {
  $: GeneratedType13;
  id: string[];
}

export interface GeneratedType13 {
  'xlink:href': string;
}
