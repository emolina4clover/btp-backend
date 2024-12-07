export interface PrestaShopProductsDetailsInterface {
  prestashop: Prestashop;
}

interface Prestashop {
  $: GeneratedType;
  product: Product[];
}

interface GeneratedType {
  'xmlns:xlink': string;
}

interface Product {
  id: string[];
  id_manufacturer: IdManufacturer[];
  id_supplier: string[];
  id_category_default: IdCategoryDefault[];
  new: string[];
  cache_default_attribute: string[];
  id_default_image: IdDefaultImage[];
  id_default_combination: IdDefaultCombination[];
  id_tax_rules_group: IdTaxRulesGroup[];
  position_in_category: PositionInCategory[];
  manufacturer_name: ManufacturerName[];
  quantity: Quantity[];
  type: Type[];
  id_shop_default: string[];
  reference: string[];
  supplier_reference: string[];
  location: string[];
  width: string[];
  height: string[];
  depth: string[];
  weight: string[];
  quantity_discount: string[];
  ean13: string[];
  isbn: string[];
  upc: string[];
  mpn: string[];
  cache_is_pack: string[];
  cache_has_attachments: string[];
  is_virtual: string[];
  state: string[];
  additional_delivery_times: string[];
  delivery_in_stock: DeliveryInStock[];
  delivery_out_stock: DeliveryOutStock[];
  product_type: string[];
  on_sale: string[];
  online_only: string[];
  ecotax: string[];
  minimal_quantity: string[];
  low_stock_threshold: string[];
  low_stock_alert: string[];
  price: string[];
  wholesale_price: string[];
  unity: string[];
  unit_price: string[];
  unit_price_ratio: string[];
  additional_shipping_cost: string[];
  customizable: string[];
  text_fields: string[];
  uploadable_files: string[];
  active: string[];
  redirect_type: string[];
  id_type_redirected: string[];
  available_for_order: string[];
  available_date: string[];
  show_condition: string[];
  condition: string[];
  show_price: string[];
  indexed: string[];
  visibility: string[];
  advanced_stock_management: string[];
  date_add: string[];
  date_upd: string[];
  pack_stock_type: string[];
  meta_description: MetaDescription[];
  meta_keywords: MetaKeyword[];
  meta_title: MetaTitle[];
  link_rewrite: LinkRewrite[];
  name: Name[];
  description: Description[];
  description_short: DescriptionShort[];
  available_now: AvailableNow[];
  available_later: AvailableLater[];
  associations: Association[];
}

interface IdManufacturer {
  _: string;
  $: GeneratedType2;
}

interface GeneratedType2 {
  'xlink:href': string;
}

interface IdCategoryDefault {
  _: string;
  $: GeneratedType3;
}

interface GeneratedType3 {
  'xlink:href': string;
}

interface IdDefaultImage {
  _: string;
  $: GeneratedType4;
}

interface GeneratedType4 {
  'xlink:href': string;
  notFilterable: string;
}

interface IdDefaultCombination {
  _: string;
  $: GeneratedType5;
}

interface GeneratedType5 {
  notFilterable: string;
  'xlink:href'?: string;
}

interface IdTaxRulesGroup {
  _: string;
  $: GeneratedType6;
}

interface GeneratedType6 {
  'xlink:href': string;
}

interface PositionInCategory {
  _: string;
  $: GeneratedType7;
}

interface GeneratedType7 {
  notFilterable: string;
}

interface ManufacturerName {
  _: string;
  $: GeneratedType8;
}

interface GeneratedType8 {
  notFilterable: string;
}

interface Quantity {
  _: string;
  $: GeneratedType9;
}

interface GeneratedType9 {
  notFilterable: string;
}

interface Type {
  _: string;
  $: GeneratedType10;
}

interface GeneratedType10 {
  notFilterable: string;
}

interface DeliveryInStock {
  language: Language[];
}

interface Language {
  $: GeneratedType11;
}

interface GeneratedType11 {
  id: string;
  'xlink:href': string;
}

interface DeliveryOutStock {
  language: Language2[];
}

interface Language2 {
  $: GeneratedType12;
}

interface GeneratedType12 {
  id: string;
  'xlink:href': string;
}

interface MetaDescription {
  language: Language3[];
}

interface Language3 {
  $: GeneratedType13;
}

interface GeneratedType13 {
  id: string;
  'xlink:href': string;
}

interface MetaKeyword {
  language: Language4[];
}

interface Language4 {
  $: GeneratedType14;
}

interface GeneratedType14 {
  id: string;
  'xlink:href': string;
}

interface MetaTitle {
  language: Language5[];
}

interface Language5 {
  $: GeneratedType15;
}

interface GeneratedType15 {
  id: string;
  'xlink:href': string;
}

interface LinkRewrite {
  language: Language6[];
}

interface Language6 {
  _: string;
  $: GeneratedType16;
}

interface GeneratedType16 {
  id: string;
  'xlink:href': string;
}

interface Name {
  language: Language7[];
}

interface Language7 {
  _: string;
  $: GeneratedType17;
}

interface GeneratedType17 {
  id: string;
  'xlink:href': string;
}

interface Description {
  language: Language8[];
}

interface Language8 {
  _: string;
  $: GeneratedType18;
}

interface GeneratedType18 {
  id: string;
  'xlink:href': string;
}

interface DescriptionShort {
  language: Language9[];
}

interface Language9 {
  _: string;
  $: GeneratedType19;
}

interface GeneratedType19 {
  id: string;
  'xlink:href': string;
}

interface AvailableNow {
  language: Language10[];
}

interface Language10 {
  $: GeneratedType20;
}

interface GeneratedType20 {
  id: string;
  'xlink:href': string;
}

interface AvailableLater {
  language: Language11[];
}

interface Language11 {
  $: GeneratedType21;
}

interface GeneratedType21 {
  id: string;
  'xlink:href': string;
}

interface Association {
  categories: Category[];
  images: Image[];
  combinations: Combination[];
  product_option_values: ProductOptionValue[];
  product_features: ProductFeature[];
  tags: Tag[];
  stock_availables: StockAvailable[];
  attachments: Attachment[];
  accessories: Accessory[];
  product_bundle: ProductBundle[];
}

interface Category {
  $: GeneratedType22;
  category: Category2[];
}

interface GeneratedType22 {
  nodeType: string;
  api: string;
}

interface Category2 {
  $: GeneratedType23;
  id: string[];
}

interface GeneratedType23 {
  'xlink:href': string;
}

interface Image {
  $: GeneratedType24;
  image: Image2[];
}

interface GeneratedType24 {
  nodeType: string;
  api: string;
}

interface Image2 {
  $: GeneratedType25;
  id: string[];
}

interface GeneratedType25 {
  'xlink:href': string;
}

interface Combination {
  $: GeneratedType26;
  combination?: Combination2[];
}

interface GeneratedType26 {
  nodeType: string;
  api: string;
}

interface Combination2 {
  $: GeneratedType27;
  id: string[];
}

interface GeneratedType27 {
  'xlink:href': string;
}

interface ProductOptionValue {
  $: GeneratedType28;
  product_option_value?: ProductOptionValue2[];
}

interface GeneratedType28 {
  nodeType: string;
  api: string;
}

interface ProductOptionValue2 {
  $: GeneratedType29;
  id: string[];
}

interface GeneratedType29 {
  'xlink:href': string;
}

interface ProductFeature {
  $: GeneratedType30;
}

interface GeneratedType30 {
  nodeType: string;
  api: string;
}

interface Tag {
  $: GeneratedType31;
  tag?: Tag2[];
}

interface GeneratedType31 {
  nodeType: string;
  api: string;
}

interface Tag2 {
  $: GeneratedType32;
  id: string[];
}

interface GeneratedType32 {
  'xlink:href': string;
}

interface StockAvailable {
  $: GeneratedType33;
  stock_available: StockAvailable2[];
}

interface GeneratedType33 {
  nodeType: string;
  api: string;
}

interface StockAvailable2 {
  $: GeneratedType34;
  id: string[];
  id_product_attribute: string[];
}

interface GeneratedType34 {
  'xlink:href': string;
}

interface Attachment {
  $: GeneratedType35;
}

interface GeneratedType35 {
  nodeType: string;
  api: string;
}

interface Accessory {
  $: GeneratedType36;
  product?: Product2[];
}

interface GeneratedType36 {
  nodeType: string;
  api: string;
}

interface Product2 {
  id: Id[];
}

interface Id {
  _: string;
  $: GeneratedType37;
}

interface GeneratedType37 {
  'xlink:href': string;
}

interface ProductBundle {
  $: GeneratedType38;
}

interface GeneratedType38 {
  nodeType: string;
  api: string;
}
