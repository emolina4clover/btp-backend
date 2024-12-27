export interface PrestashopProductsStockInterface {
  id: string;
  id_default_image: string;
  minimal_quantity: string;
  low_stock_alert: string;
  price: string;
  name: string;
  description: string;
  description_short: string;
  images: string[];
  stockAvailable?: StockAvailable[];
  id_default_combination?: string;
  stock?: string;
}

export interface PrestashopProductsStockResponseInterface {
  data: Data;
  status: number;
}

export interface Data {
  prestashop: Prestashop;
}

export interface Prestashop {
  $: GeneratedType;
  stock_available: StockAvailable[];
}

export interface GeneratedType {
  'xmlns:xlink': string;
}

export interface StockAvailable {
  stock_available?: IdProduct;
  id: string[];
  id_product: IdProduct[];
  id_product_attribute: string[];
  id_shop: IdShop[];
  id_shop_group: string[];
  quantity: string[];
  depends_on_stock: string[];
  out_of_stock: string[];
  location: string[];
}

export interface IdProduct {
  _: string;
  $: GeneratedType2;
}

export interface GeneratedType2 {
  'xlink:href': string;
}

export interface IdShop {
  _: string;
  $: GeneratedType3;
}

export interface GeneratedType3 {
  'xlink:href': string;
}
