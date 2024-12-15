export interface PrestashopResourcesResponse {
  data: Data;
  status: number;
}

interface Data {
  prestashop: Prestashop;
}

interface Prestashop {
  $: GeneratedType;
  api: ApiResources[];
}

interface GeneratedType {
  'xmlns:xlink': string;
}

export interface ApiResources {
  $: GeneratedType2;
  addresses: Address[];
  attachments: Attachment[];
  carriers: Carrier[];
  cart_rules: CartRule[];
  carts: Cart[];
  categories: Category[];
  combinations: Combination[];
  configurations: Configuration[];
  contacts: Contact[];
  content_management_system: ContentManagementSystem[];
  countries: Country[];
  currencies: Currency[];
  customer_messages: CustomerMessage[];
  customer_threads: CustomerThread[];
  customers: Customer[];
  customizations: Customization[];
  deliveries: Delivery[];
  employees: Employee[];
  groups: Group[];
  guests: Guest[];
  image_types: ImageType[];
  images: Image[];
  languages: Language[];
  manufacturers: Manufacturer[];
  messages: Message[];
  order_carriers: OrderCarrier[];
  order_cart_rules: OrderCartRule[];
  order_details: OrderDetail[];
  order_histories: OrderHistory[];
  order_invoices: OrderInvoice[];
  order_payments: OrderPayment[];
  order_slip: OrderSlip[];
  order_states: OrderState[];
  orders: Order[];
  price_ranges: PriceRange[];
  product_customization_fields: ProductCustomizationField[];
  product_feature_values: ProductFeatureValue[];
  product_features: ProductFeature[];
  product_option_values: ProductOptionValue[];
  product_options: ProductOption[];
  product_suppliers: ProductSupplier[];
  products: Product[];
  search: Search[];
  shop_groups: ShopGroup[];
  shop_urls: ShopUrl[];
  shops: Shop[];
  specific_price_rules: SpecificPriceRule[];
  specific_prices: SpecificPrice[];
  states: State[];
  stock_availables: StockAvailable[];
  stock_movement_reasons: StockMovementReason[];
  stock_movements: StockMovement[];
  stocks: Stock[];
  stores: Store[];
  suppliers: Supplier[];
  supply_order_details: SupplyOrderDetail[];
  supply_order_histories: SupplyOrderHistory[];
  supply_order_receipt_histories: SupplyOrderReceiptHistory[];
  supply_order_states: SupplyOrderState[];
  supply_orders: SupplyOrder[];
  tags: Tag[];
  tax_rule_groups: TaxRuleGroup[];
  tax_rules: TaxRule[];
  taxes: Tax[];
  translated_configurations: TranslatedConfiguration[];
  warehouse_product_locations: WarehouseProductLocation[];
  warehouses: Warehouse[];
  weight_ranges: WeightRange[];
  zones: Zone[];
}

interface GeneratedType2 {
  shopName: string;
}

interface Address {
  $: GeneratedType3;
  description: Description[];
  schema: Schema[];
}

interface GeneratedType3 {
  'xlink:href': string;
  get: string;
  put: string;
  post: string;
  patch: string;
  delete: string;
  head: string;
}

interface Description {
  _: string;
  $: GeneratedType4;
}

interface GeneratedType4 {
  'xlink:href': string;
  get: string;
  put: string;
  post: string;
  patch: string;
  delete: string;
  head: string;
}

interface Schema {
  $: GeneratedType5;
}

interface GeneratedType5 {
  'xlink:href': string;
  type: string;
}

interface Attachment {
  $: GeneratedType6;
  description: Description2[];
}

interface GeneratedType6 {
  'xlink:href': string;
  get: string;
  put: string;
  post: string;
  patch: string;
  delete: string;
  head: string;
}

interface Description2 {
  _: string;
  $: GeneratedType7;
}

interface GeneratedType7 {
  'xlink:href': string;
  get: string;
  put: string;
  post: string;
  patch: string;
  delete: string;
  head: string;
}

interface Carrier {
  $: GeneratedType8;
  description: Description3[];
  schema: Schema2[];
}

interface GeneratedType8 {
  'xlink:href': string;
  get: string;
  put: string;
  post: string;
  patch: string;
  delete: string;
  head: string;
}

interface Description3 {
  _: string;
  $: GeneratedType9;
}

interface GeneratedType9 {
  'xlink:href': string;
  get: string;
  put: string;
  post: string;
  patch: string;
  delete: string;
  head: string;
}

interface Schema2 {
  $: GeneratedType10;
}

interface GeneratedType10 {
  'xlink:href': string;
  type: string;
}

interface CartRule {
  $: GeneratedType11;
  description: Description4[];
  schema: Schema3[];
}

interface GeneratedType11 {
  'xlink:href': string;
  get: string;
  put: string;
  post: string;
  patch: string;
  delete: string;
  head: string;
}

interface Description4 {
  _: string;
  $: GeneratedType12;
}

interface GeneratedType12 {
  'xlink:href': string;
  get: string;
  put: string;
  post: string;
  patch: string;
  delete: string;
  head: string;
}

interface Schema3 {
  $: GeneratedType13;
}

interface GeneratedType13 {
  'xlink:href': string;
  type: string;
}

interface Cart {
  $: GeneratedType14;
  description: Description5[];
  schema: Schema4[];
}

interface GeneratedType14 {
  'xlink:href': string;
  get: string;
  put: string;
  post: string;
  patch: string;
  delete: string;
  head: string;
}

interface Description5 {
  _: string;
  $: GeneratedType15;
}

interface GeneratedType15 {
  'xlink:href': string;
  get: string;
  put: string;
  post: string;
  patch: string;
  delete: string;
  head: string;
}

interface Schema4 {
  $: GeneratedType16;
}

interface GeneratedType16 {
  'xlink:href': string;
  type: string;
}

interface Category {
  $: GeneratedType17;
  description: Description6[];
  schema: Schema5[];
}

interface GeneratedType17 {
  'xlink:href': string;
  get: string;
  put: string;
  post: string;
  patch: string;
  delete: string;
  head: string;
}

interface Description6 {
  _: string;
  $: GeneratedType18;
}

interface GeneratedType18 {
  'xlink:href': string;
  get: string;
  put: string;
  post: string;
  patch: string;
  delete: string;
  head: string;
}

interface Schema5 {
  $: GeneratedType19;
}

interface GeneratedType19 {
  'xlink:href': string;
  type: string;
}

interface Combination {
  $: GeneratedType20;
  description: Description7[];
  schema: Schema6[];
}

interface GeneratedType20 {
  'xlink:href': string;
  get: string;
  put: string;
  post: string;
  patch: string;
  delete: string;
  head: string;
}

interface Description7 {
  _: string;
  $: GeneratedType21;
}

interface GeneratedType21 {
  'xlink:href': string;
  get: string;
  put: string;
  post: string;
  patch: string;
  delete: string;
  head: string;
}

interface Schema6 {
  $: GeneratedType22;
}

interface GeneratedType22 {
  'xlink:href': string;
  type: string;
}

interface Configuration {
  $: GeneratedType23;
  description: Description8[];
  schema: Schema7[];
}

interface GeneratedType23 {
  'xlink:href': string;
  get: string;
  put: string;
  post: string;
  patch: string;
  delete: string;
  head: string;
}

interface Description8 {
  _: string;
  $: GeneratedType24;
}

interface GeneratedType24 {
  'xlink:href': string;
  get: string;
  put: string;
  post: string;
  patch: string;
  delete: string;
  head: string;
}

interface Schema7 {
  $: GeneratedType25;
}

interface GeneratedType25 {
  'xlink:href': string;
  type: string;
}

interface Contact {
  $: GeneratedType26;
  description: Description9[];
  schema: Schema8[];
}

interface GeneratedType26 {
  'xlink:href': string;
  get: string;
  put: string;
  post: string;
  patch: string;
  delete: string;
  head: string;
}

interface Description9 {
  _: string;
  $: GeneratedType27;
}

interface GeneratedType27 {
  'xlink:href': string;
  get: string;
  put: string;
  post: string;
  patch: string;
  delete: string;
  head: string;
}

interface Schema8 {
  $: GeneratedType28;
}

interface GeneratedType28 {
  'xlink:href': string;
  type: string;
}

interface ContentManagementSystem {
  $: GeneratedType29;
  description: Description10[];
  schema: Schema9[];
}

interface GeneratedType29 {
  'xlink:href': string;
  get: string;
  put: string;
  post: string;
  patch: string;
  delete: string;
  head: string;
}

interface Description10 {
  _: string;
  $: GeneratedType30;
}

interface GeneratedType30 {
  'xlink:href': string;
  get: string;
  put: string;
  post: string;
  patch: string;
  delete: string;
  head: string;
}

interface Schema9 {
  $: GeneratedType31;
}

interface GeneratedType31 {
  'xlink:href': string;
  type: string;
}

interface Country {
  $: GeneratedType32;
  description: Description11[];
  schema: Schema10[];
}

interface GeneratedType32 {
  'xlink:href': string;
  get: string;
  put: string;
  post: string;
  patch: string;
  delete: string;
  head: string;
}

interface Description11 {
  _: string;
  $: GeneratedType33;
}

interface GeneratedType33 {
  'xlink:href': string;
  get: string;
  put: string;
  post: string;
  patch: string;
  delete: string;
  head: string;
}

interface Schema10 {
  $: GeneratedType34;
}

interface GeneratedType34 {
  'xlink:href': string;
  type: string;
}

interface Currency {
  $: GeneratedType35;
  description: Description12[];
  schema: Schema11[];
}

interface GeneratedType35 {
  'xlink:href': string;
  get: string;
  put: string;
  post: string;
  patch: string;
  delete: string;
  head: string;
}

interface Description12 {
  _: string;
  $: GeneratedType36;
}

interface GeneratedType36 {
  'xlink:href': string;
  get: string;
  put: string;
  post: string;
  patch: string;
  delete: string;
  head: string;
}

interface Schema11 {
  $: GeneratedType37;
}

interface GeneratedType37 {
  'xlink:href': string;
  type: string;
}

interface CustomerMessage {
  $: GeneratedType38;
  description: Description13[];
  schema: Schema12[];
}

interface GeneratedType38 {
  'xlink:href': string;
  get: string;
  put: string;
  post: string;
  patch: string;
  delete: string;
  head: string;
}

interface Description13 {
  _: string;
  $: GeneratedType39;
}

interface GeneratedType39 {
  'xlink:href': string;
  get: string;
  put: string;
  post: string;
  patch: string;
  delete: string;
  head: string;
}

interface Schema12 {
  $: GeneratedType40;
}

interface GeneratedType40 {
  'xlink:href': string;
  type: string;
}

interface CustomerThread {
  $: GeneratedType41;
  description: Description14[];
  schema: Schema13[];
}

interface GeneratedType41 {
  'xlink:href': string;
  get: string;
  put: string;
  post: string;
  patch: string;
  delete: string;
  head: string;
}

interface Description14 {
  _: string;
  $: GeneratedType42;
}

interface GeneratedType42 {
  'xlink:href': string;
  get: string;
  put: string;
  post: string;
  patch: string;
  delete: string;
  head: string;
}

interface Schema13 {
  $: GeneratedType43;
}

interface GeneratedType43 {
  'xlink:href': string;
  type: string;
}

interface Customer {
  $: GeneratedType44;
  description: Description15[];
  schema: Schema14[];
}

interface GeneratedType44 {
  'xlink:href': string;
  get: string;
  put: string;
  post: string;
  patch: string;
  delete: string;
  head: string;
}

interface Description15 {
  _: string;
  $: GeneratedType45;
}

interface GeneratedType45 {
  'xlink:href': string;
  get: string;
  put: string;
  post: string;
  patch: string;
  delete: string;
  head: string;
}

interface Schema14 {
  $: GeneratedType46;
}

interface GeneratedType46 {
  'xlink:href': string;
  type: string;
}

interface Customization {
  $: GeneratedType47;
  description: Description16[];
  schema: Schema15[];
}

interface GeneratedType47 {
  'xlink:href': string;
  get: string;
  put: string;
  post: string;
  patch: string;
  delete: string;
  head: string;
}

interface Description16 {
  _: string;
  $: GeneratedType48;
}

interface GeneratedType48 {
  'xlink:href': string;
  get: string;
  put: string;
  post: string;
  patch: string;
  delete: string;
  head: string;
}

interface Schema15 {
  $: GeneratedType49;
}

interface GeneratedType49 {
  'xlink:href': string;
  type: string;
}

interface Delivery {
  $: GeneratedType50;
  description: Description17[];
  schema: Schema16[];
}

interface GeneratedType50 {
  'xlink:href': string;
  get: string;
  put: string;
  post: string;
  patch: string;
  delete: string;
  head: string;
}

interface Description17 {
  _: string;
  $: GeneratedType51;
}

interface GeneratedType51 {
  'xlink:href': string;
  get: string;
  put: string;
  post: string;
  patch: string;
  delete: string;
  head: string;
}

interface Schema16 {
  $: GeneratedType52;
}

interface GeneratedType52 {
  'xlink:href': string;
  type: string;
}

interface Employee {
  $: GeneratedType53;
  description: Description18[];
  schema: Schema17[];
}

interface GeneratedType53 {
  'xlink:href': string;
  get: string;
  put: string;
  post: string;
  patch: string;
  delete: string;
  head: string;
}

interface Description18 {
  _: string;
  $: GeneratedType54;
}

interface GeneratedType54 {
  'xlink:href': string;
  get: string;
  put: string;
  post: string;
  patch: string;
  delete: string;
  head: string;
}

interface Schema17 {
  $: GeneratedType55;
}

interface GeneratedType55 {
  'xlink:href': string;
  type: string;
}

interface Group {
  $: GeneratedType56;
  description: Description19[];
  schema: Schema18[];
}

interface GeneratedType56 {
  'xlink:href': string;
  get: string;
  put: string;
  post: string;
  patch: string;
  delete: string;
  head: string;
}

interface Description19 {
  _: string;
  $: GeneratedType57;
}

interface GeneratedType57 {
  'xlink:href': string;
  get: string;
  put: string;
  post: string;
  patch: string;
  delete: string;
  head: string;
}

interface Schema18 {
  $: GeneratedType58;
}

interface GeneratedType58 {
  'xlink:href': string;
  type: string;
}

interface Guest {
  $: GeneratedType59;
  description: Description20[];
  schema: Schema19[];
}

interface GeneratedType59 {
  'xlink:href': string;
  get: string;
  put: string;
  post: string;
  patch: string;
  delete: string;
  head: string;
}

interface Description20 {
  _: string;
  $: GeneratedType60;
}

interface GeneratedType60 {
  'xlink:href': string;
  get: string;
  put: string;
  post: string;
  patch: string;
  delete: string;
  head: string;
}

interface Schema19 {
  $: GeneratedType61;
}

interface GeneratedType61 {
  'xlink:href': string;
  type: string;
}

interface ImageType {
  $: GeneratedType62;
  description: Description21[];
  schema: Schema20[];
}

interface GeneratedType62 {
  'xlink:href': string;
  get: string;
  put: string;
  post: string;
  patch: string;
  delete: string;
  head: string;
}

interface Description21 {
  _: string;
  $: GeneratedType63;
}

interface GeneratedType63 {
  'xlink:href': string;
  get: string;
  put: string;
  post: string;
  patch: string;
  delete: string;
  head: string;
}

interface Schema20 {
  $: GeneratedType64;
}

interface GeneratedType64 {
  'xlink:href': string;
  type: string;
}

interface Image {
  $: GeneratedType65;
  description: Description22[];
}

interface GeneratedType65 {
  'xlink:href': string;
  get: string;
  put: string;
  post: string;
  patch: string;
  delete: string;
  head: string;
}

interface Description22 {
  _: string;
  $: GeneratedType66;
}

interface GeneratedType66 {
  'xlink:href': string;
  get: string;
  put: string;
  post: string;
  patch: string;
  delete: string;
  head: string;
}

interface Language {
  $: GeneratedType67;
  description: Description23[];
  schema: Schema21[];
}

interface GeneratedType67 {
  'xlink:href': string;
  get: string;
  put: string;
  post: string;
  patch: string;
  delete: string;
  head: string;
}

interface Description23 {
  _: string;
  $: GeneratedType68;
}

interface GeneratedType68 {
  'xlink:href': string;
  get: string;
  put: string;
  post: string;
  patch: string;
  delete: string;
  head: string;
}

interface Schema21 {
  $: GeneratedType69;
}

interface GeneratedType69 {
  'xlink:href': string;
  type: string;
}

interface Manufacturer {
  $: GeneratedType70;
  description: Description24[];
  schema: Schema22[];
}

interface GeneratedType70 {
  'xlink:href': string;
  get: string;
  put: string;
  post: string;
  patch: string;
  delete: string;
  head: string;
}

interface Description24 {
  _: string;
  $: GeneratedType71;
}

interface GeneratedType71 {
  'xlink:href': string;
  get: string;
  put: string;
  post: string;
  patch: string;
  delete: string;
  head: string;
}

interface Schema22 {
  $: GeneratedType72;
}

interface GeneratedType72 {
  'xlink:href': string;
  type: string;
}

interface Message {
  $: GeneratedType73;
  description: Description25[];
  schema: Schema23[];
}

interface GeneratedType73 {
  'xlink:href': string;
  get: string;
  put: string;
  post: string;
  patch: string;
  delete: string;
  head: string;
}

interface Description25 {
  _: string;
  $: GeneratedType74;
}

interface GeneratedType74 {
  'xlink:href': string;
  get: string;
  put: string;
  post: string;
  patch: string;
  delete: string;
  head: string;
}

interface Schema23 {
  $: GeneratedType75;
}

interface GeneratedType75 {
  'xlink:href': string;
  type: string;
}

interface OrderCarrier {
  $: GeneratedType76;
  description: Description26[];
  schema: Schema24[];
}

interface GeneratedType76 {
  'xlink:href': string;
  get: string;
  put: string;
  post: string;
  patch: string;
  delete: string;
  head: string;
}

interface Description26 {
  _: string;
  $: GeneratedType77;
}

interface GeneratedType77 {
  'xlink:href': string;
  get: string;
  put: string;
  post: string;
  patch: string;
  delete: string;
  head: string;
}

interface Schema24 {
  $: GeneratedType78;
}

interface GeneratedType78 {
  'xlink:href': string;
  type: string;
}

interface OrderCartRule {
  $: GeneratedType79;
  description: Description27[];
  schema: Schema25[];
}

interface GeneratedType79 {
  'xlink:href': string;
  get: string;
  put: string;
  post: string;
  patch: string;
  delete: string;
  head: string;
}

interface Description27 {
  _: string;
  $: GeneratedType80;
}

interface GeneratedType80 {
  'xlink:href': string;
  get: string;
  put: string;
  post: string;
  patch: string;
  delete: string;
  head: string;
}

interface Schema25 {
  $: GeneratedType81;
}

interface GeneratedType81 {
  'xlink:href': string;
  type: string;
}

interface OrderDetail {
  $: GeneratedType82;
  description: Description28[];
  schema: Schema26[];
}

interface GeneratedType82 {
  'xlink:href': string;
  get: string;
  put: string;
  post: string;
  patch: string;
  delete: string;
  head: string;
}

interface Description28 {
  _: string;
  $: GeneratedType83;
}

interface GeneratedType83 {
  'xlink:href': string;
  get: string;
  put: string;
  post: string;
  patch: string;
  delete: string;
  head: string;
}

interface Schema26 {
  $: GeneratedType84;
}

interface GeneratedType84 {
  'xlink:href': string;
  type: string;
}

interface OrderHistory {
  $: GeneratedType85;
  description: Description29[];
  schema: Schema27[];
}

interface GeneratedType85 {
  'xlink:href': string;
  get: string;
  put: string;
  post: string;
  patch: string;
  delete: string;
  head: string;
}

interface Description29 {
  _: string;
  $: GeneratedType86;
}

interface GeneratedType86 {
  'xlink:href': string;
  get: string;
  put: string;
  post: string;
  patch: string;
  delete: string;
  head: string;
}

interface Schema27 {
  $: GeneratedType87;
}

interface GeneratedType87 {
  'xlink:href': string;
  type: string;
}

interface OrderInvoice {
  $: GeneratedType88;
  description: Description30[];
  schema: Schema28[];
}

interface GeneratedType88 {
  'xlink:href': string;
  get: string;
  put: string;
  post: string;
  patch: string;
  delete: string;
  head: string;
}

interface Description30 {
  _: string;
  $: GeneratedType89;
}

interface GeneratedType89 {
  'xlink:href': string;
  get: string;
  put: string;
  post: string;
  patch: string;
  delete: string;
  head: string;
}

interface Schema28 {
  $: GeneratedType90;
}

interface GeneratedType90 {
  'xlink:href': string;
  type: string;
}

interface OrderPayment {
  $: GeneratedType91;
  description: Description31[];
  schema: Schema29[];
}

interface GeneratedType91 {
  'xlink:href': string;
  get: string;
  put: string;
  post: string;
  patch: string;
  delete: string;
  head: string;
}

interface Description31 {
  _: string;
  $: GeneratedType92;
}

interface GeneratedType92 {
  'xlink:href': string;
  get: string;
  put: string;
  post: string;
  patch: string;
  delete: string;
  head: string;
}

interface Schema29 {
  $: GeneratedType93;
}

interface GeneratedType93 {
  'xlink:href': string;
  type: string;
}

interface OrderSlip {
  $: GeneratedType94;
  description: Description32[];
  schema: Schema30[];
}

interface GeneratedType94 {
  'xlink:href': string;
  get: string;
  put: string;
  post: string;
  patch: string;
  delete: string;
  head: string;
}

interface Description32 {
  _: string;
  $: GeneratedType95;
}

interface GeneratedType95 {
  'xlink:href': string;
  get: string;
  put: string;
  post: string;
  patch: string;
  delete: string;
  head: string;
}

interface Schema30 {
  $: GeneratedType96;
}

interface GeneratedType96 {
  'xlink:href': string;
  type: string;
}

interface OrderState {
  $: GeneratedType97;
  description: Description33[];
  schema: Schema31[];
}

interface GeneratedType97 {
  'xlink:href': string;
  get: string;
  put: string;
  post: string;
  patch: string;
  delete: string;
  head: string;
}

interface Description33 {
  _: string;
  $: GeneratedType98;
}

interface GeneratedType98 {
  'xlink:href': string;
  get: string;
  put: string;
  post: string;
  patch: string;
  delete: string;
  head: string;
}

interface Schema31 {
  $: GeneratedType99;
}

interface GeneratedType99 {
  'xlink:href': string;
  type: string;
}

interface Order {
  $: GeneratedType100;
  description: Description34[];
  schema: Schema32[];
}

interface GeneratedType100 {
  'xlink:href': string;
  get: string;
  put: string;
  post: string;
  patch: string;
  delete: string;
  head: string;
}

interface Description34 {
  _: string;
  $: GeneratedType101;
}

interface GeneratedType101 {
  'xlink:href': string;
  get: string;
  put: string;
  post: string;
  patch: string;
  delete: string;
  head: string;
}

interface Schema32 {
  $: GeneratedType102;
}

interface GeneratedType102 {
  'xlink:href': string;
  type: string;
}

interface PriceRange {
  $: GeneratedType103;
  description: Description35[];
  schema: Schema33[];
}

interface GeneratedType103 {
  'xlink:href': string;
  get: string;
  put: string;
  post: string;
  patch: string;
  delete: string;
  head: string;
}

interface Description35 {
  _: string;
  $: GeneratedType104;
}

interface GeneratedType104 {
  'xlink:href': string;
  get: string;
  put: string;
  post: string;
  patch: string;
  delete: string;
  head: string;
}

interface Schema33 {
  $: GeneratedType105;
}

interface GeneratedType105 {
  'xlink:href': string;
  type: string;
}

interface ProductCustomizationField {
  $: GeneratedType106;
  description: Description36[];
  schema: Schema34[];
}

interface GeneratedType106 {
  'xlink:href': string;
  get: string;
  put: string;
  post: string;
  patch: string;
  delete: string;
  head: string;
}

interface Description36 {
  _: string;
  $: GeneratedType107;
}

interface GeneratedType107 {
  'xlink:href': string;
  get: string;
  put: string;
  post: string;
  patch: string;
  delete: string;
  head: string;
}

interface Schema34 {
  $: GeneratedType108;
}

interface GeneratedType108 {
  'xlink:href': string;
  type: string;
}

interface ProductFeatureValue {
  $: GeneratedType109;
  description: Description37[];
  schema: Schema35[];
}

interface GeneratedType109 {
  'xlink:href': string;
  get: string;
  put: string;
  post: string;
  patch: string;
  delete: string;
  head: string;
}

interface Description37 {
  _: string;
  $: GeneratedType110;
}

interface GeneratedType110 {
  'xlink:href': string;
  get: string;
  put: string;
  post: string;
  patch: string;
  delete: string;
  head: string;
}

interface Schema35 {
  $: GeneratedType111;
}

interface GeneratedType111 {
  'xlink:href': string;
  type: string;
}

interface ProductFeature {
  $: GeneratedType112;
  description: Description38[];
  schema: Schema36[];
}

interface GeneratedType112 {
  'xlink:href': string;
  get: string;
  put: string;
  post: string;
  patch: string;
  delete: string;
  head: string;
}

interface Description38 {
  _: string;
  $: GeneratedType113;
}

interface GeneratedType113 {
  'xlink:href': string;
  get: string;
  put: string;
  post: string;
  patch: string;
  delete: string;
  head: string;
}

interface Schema36 {
  $: GeneratedType114;
}

interface GeneratedType114 {
  'xlink:href': string;
  type: string;
}

interface ProductOptionValue {
  $: GeneratedType115;
  description: Description39[];
  schema: Schema37[];
}

interface GeneratedType115 {
  'xlink:href': string;
  get: string;
  put: string;
  post: string;
  patch: string;
  delete: string;
  head: string;
}

interface Description39 {
  _: string;
  $: GeneratedType116;
}

interface GeneratedType116 {
  'xlink:href': string;
  get: string;
  put: string;
  post: string;
  patch: string;
  delete: string;
  head: string;
}

interface Schema37 {
  $: GeneratedType117;
}

interface GeneratedType117 {
  'xlink:href': string;
  type: string;
}

interface ProductOption {
  $: GeneratedType118;
  description: Description40[];
  schema: Schema38[];
}

interface GeneratedType118 {
  'xlink:href': string;
  get: string;
  put: string;
  post: string;
  patch: string;
  delete: string;
  head: string;
}

interface Description40 {
  _: string;
  $: GeneratedType119;
}

interface GeneratedType119 {
  'xlink:href': string;
  get: string;
  put: string;
  post: string;
  patch: string;
  delete: string;
  head: string;
}

interface Schema38 {
  $: GeneratedType120;
}

interface GeneratedType120 {
  'xlink:href': string;
  type: string;
}

interface ProductSupplier {
  $: GeneratedType121;
  description: Description41[];
  schema: Schema39[];
}

interface GeneratedType121 {
  'xlink:href': string;
  get: string;
  put: string;
  post: string;
  patch: string;
  delete: string;
  head: string;
}

interface Description41 {
  _: string;
  $: GeneratedType122;
}

interface GeneratedType122 {
  'xlink:href': string;
  get: string;
  put: string;
  post: string;
  patch: string;
  delete: string;
  head: string;
}

interface Schema39 {
  $: GeneratedType123;
}

interface GeneratedType123 {
  'xlink:href': string;
  type: string;
}

interface Product {
  $: GeneratedType124;
  description: Description42[];
  schema: Schema40[];
}

interface GeneratedType124 {
  'xlink:href': string;
  get: string;
  put: string;
  post: string;
  patch: string;
  delete: string;
  head: string;
}

interface Description42 {
  _: string;
  $: GeneratedType125;
}

interface GeneratedType125 {
  'xlink:href': string;
  get: string;
  put: string;
  post: string;
  patch: string;
  delete: string;
  head: string;
}

interface Schema40 {
  $: GeneratedType126;
}

interface GeneratedType126 {
  'xlink:href': string;
  type: string;
}

interface Search {
  $: GeneratedType127;
  description: Description43[];
}

interface GeneratedType127 {
  'xlink:href': string;
  get: string;
  put: string;
  post: string;
  patch: string;
  delete: string;
  head: string;
}

interface Description43 {
  _: string;
  $: GeneratedType128;
}

interface GeneratedType128 {
  'xlink:href': string;
  get: string;
  put: string;
  post: string;
  patch: string;
  delete: string;
  head: string;
}

interface ShopGroup {
  $: GeneratedType129;
  description: Description44[];
  schema: Schema41[];
}

interface GeneratedType129 {
  'xlink:href': string;
  get: string;
  put: string;
  post: string;
  patch: string;
  delete: string;
  head: string;
}

interface Description44 {
  _: string;
  $: GeneratedType130;
}

interface GeneratedType130 {
  'xlink:href': string;
  get: string;
  put: string;
  post: string;
  patch: string;
  delete: string;
  head: string;
}

interface Schema41 {
  $: GeneratedType131;
}

interface GeneratedType131 {
  'xlink:href': string;
  type: string;
}

interface ShopUrl {
  $: GeneratedType132;
  description: Description45[];
  schema: Schema42[];
}

interface GeneratedType132 {
  'xlink:href': string;
  get: string;
  put: string;
  post: string;
  patch: string;
  delete: string;
  head: string;
}

interface Description45 {
  _: string;
  $: GeneratedType133;
}

interface GeneratedType133 {
  'xlink:href': string;
  get: string;
  put: string;
  post: string;
  patch: string;
  delete: string;
  head: string;
}

interface Schema42 {
  $: GeneratedType134;
}

interface GeneratedType134 {
  'xlink:href': string;
  type: string;
}

interface Shop {
  $: GeneratedType135;
  description: Description46[];
  schema: Schema43[];
}

interface GeneratedType135 {
  'xlink:href': string;
  get: string;
  put: string;
  post: string;
  patch: string;
  delete: string;
  head: string;
}

interface Description46 {
  _: string;
  $: GeneratedType136;
}

interface GeneratedType136 {
  'xlink:href': string;
  get: string;
  put: string;
  post: string;
  patch: string;
  delete: string;
  head: string;
}

interface Schema43 {
  $: GeneratedType137;
}

interface GeneratedType137 {
  'xlink:href': string;
  type: string;
}

interface SpecificPriceRule {
  $: GeneratedType138;
  description: Description47[];
  schema: Schema44[];
}

interface GeneratedType138 {
  'xlink:href': string;
  get: string;
  put: string;
  post: string;
  patch: string;
  delete: string;
  head: string;
}

interface Description47 {
  _: string;
  $: GeneratedType139;
}

interface GeneratedType139 {
  'xlink:href': string;
  get: string;
  put: string;
  post: string;
  patch: string;
  delete: string;
  head: string;
}

interface Schema44 {
  $: GeneratedType140;
}

interface GeneratedType140 {
  'xlink:href': string;
  type: string;
}

interface SpecificPrice {
  $: GeneratedType141;
  description: Description48[];
  schema: Schema45[];
}

interface GeneratedType141 {
  'xlink:href': string;
  get: string;
  put: string;
  post: string;
  patch: string;
  delete: string;
  head: string;
}

interface Description48 {
  _: string;
  $: GeneratedType142;
}

interface GeneratedType142 {
  'xlink:href': string;
  get: string;
  put: string;
  post: string;
  patch: string;
  delete: string;
  head: string;
}

interface Schema45 {
  $: GeneratedType143;
}

interface GeneratedType143 {
  'xlink:href': string;
  type: string;
}

interface State {
  $: GeneratedType144;
  description: Description49[];
  schema: Schema46[];
}

interface GeneratedType144 {
  'xlink:href': string;
  get: string;
  put: string;
  post: string;
  patch: string;
  delete: string;
  head: string;
}

interface Description49 {
  _: string;
  $: GeneratedType145;
}

interface GeneratedType145 {
  'xlink:href': string;
  get: string;
  put: string;
  post: string;
  patch: string;
  delete: string;
  head: string;
}

interface Schema46 {
  $: GeneratedType146;
}

interface GeneratedType146 {
  'xlink:href': string;
  type: string;
}

interface StockAvailable {
  $: GeneratedType147;
  description: Description50[];
  schema: Schema47[];
}

interface GeneratedType147 {
  'xlink:href': string;
  get: string;
  put: string;
  post: string;
  patch: string;
  delete: string;
  head: string;
}

interface Description50 {
  _: string;
  $: GeneratedType148;
}

interface GeneratedType148 {
  'xlink:href': string;
  get: string;
  put: string;
  post: string;
  patch: string;
  delete: string;
  head: string;
}

interface Schema47 {
  $: GeneratedType149;
}

interface GeneratedType149 {
  'xlink:href': string;
  type: string;
}

interface StockMovementReason {
  $: GeneratedType150;
  description: Description51[];
  schema: Schema48[];
}

interface GeneratedType150 {
  'xlink:href': string;
  get: string;
  put: string;
  post: string;
  patch: string;
  delete: string;
  head: string;
}

interface Description51 {
  _: string;
  $: GeneratedType151;
}

interface GeneratedType151 {
  'xlink:href': string;
  get: string;
  put: string;
  post: string;
  patch: string;
  delete: string;
  head: string;
}

interface Schema48 {
  $: GeneratedType152;
}

interface GeneratedType152 {
  'xlink:href': string;
  type: string;
}

interface StockMovement {
  $: GeneratedType153;
  description: Description52[];
  schema: Schema49[];
}

interface GeneratedType153 {
  'xlink:href': string;
  get: string;
  put: string;
  post: string;
  patch: string;
  delete: string;
  head: string;
}

interface Description52 {
  _: string;
  $: GeneratedType154;
}

interface GeneratedType154 {
  'xlink:href': string;
  get: string;
  put: string;
  post: string;
  patch: string;
  delete: string;
  head: string;
}

interface Schema49 {
  $: GeneratedType155;
}

interface GeneratedType155 {
  'xlink:href': string;
  type: string;
}

interface Stock {
  $: GeneratedType156;
  description: Description53[];
  schema: Schema50[];
}

interface GeneratedType156 {
  'xlink:href': string;
  get: string;
  put: string;
  post: string;
  patch: string;
  delete: string;
  head: string;
}

interface Description53 {
  _: string;
  $: GeneratedType157;
}

interface GeneratedType157 {
  'xlink:href': string;
  get: string;
  put: string;
  post: string;
  patch: string;
  delete: string;
  head: string;
}

interface Schema50 {
  $: GeneratedType158;
}

interface GeneratedType158 {
  'xlink:href': string;
  type: string;
}

interface Store {
  $: GeneratedType159;
  description: Description54[];
  schema: Schema51[];
}

interface GeneratedType159 {
  'xlink:href': string;
  get: string;
  put: string;
  post: string;
  patch: string;
  delete: string;
  head: string;
}

interface Description54 {
  _: string;
  $: GeneratedType160;
}

interface GeneratedType160 {
  'xlink:href': string;
  get: string;
  put: string;
  post: string;
  patch: string;
  delete: string;
  head: string;
}

interface Schema51 {
  $: GeneratedType161;
}

interface GeneratedType161 {
  'xlink:href': string;
  type: string;
}

interface Supplier {
  $: GeneratedType162;
  description: Description55[];
  schema: Schema52[];
}

interface GeneratedType162 {
  'xlink:href': string;
  get: string;
  put: string;
  post: string;
  patch: string;
  delete: string;
  head: string;
}

interface Description55 {
  _: string;
  $: GeneratedType163;
}

interface GeneratedType163 {
  'xlink:href': string;
  get: string;
  put: string;
  post: string;
  patch: string;
  delete: string;
  head: string;
}

interface Schema52 {
  $: GeneratedType164;
}

interface GeneratedType164 {
  'xlink:href': string;
  type: string;
}

interface SupplyOrderDetail {
  $: GeneratedType165;
  description: Description56[];
  schema: Schema53[];
}

interface GeneratedType165 {
  'xlink:href': string;
  get: string;
  put: string;
  post: string;
  patch: string;
  delete: string;
  head: string;
}

interface Description56 {
  _: string;
  $: GeneratedType166;
}

interface GeneratedType166 {
  'xlink:href': string;
  get: string;
  put: string;
  post: string;
  patch: string;
  delete: string;
  head: string;
}

interface Schema53 {
  $: GeneratedType167;
}

interface GeneratedType167 {
  'xlink:href': string;
  type: string;
}

interface SupplyOrderHistory {
  $: GeneratedType168;
  description: Description57[];
  schema: Schema54[];
}

interface GeneratedType168 {
  'xlink:href': string;
  get: string;
  put: string;
  post: string;
  patch: string;
  delete: string;
  head: string;
}

interface Description57 {
  _: string;
  $: GeneratedType169;
}

interface GeneratedType169 {
  'xlink:href': string;
  get: string;
  put: string;
  post: string;
  patch: string;
  delete: string;
  head: string;
}

interface Schema54 {
  $: GeneratedType170;
}

interface GeneratedType170 {
  'xlink:href': string;
  type: string;
}

interface SupplyOrderReceiptHistory {
  $: GeneratedType171;
  description: Description58[];
  schema: Schema55[];
}

interface GeneratedType171 {
  'xlink:href': string;
  get: string;
  put: string;
  post: string;
  patch: string;
  delete: string;
  head: string;
}

interface Description58 {
  _: string;
  $: GeneratedType172;
}

interface GeneratedType172 {
  'xlink:href': string;
  get: string;
  put: string;
  post: string;
  patch: string;
  delete: string;
  head: string;
}

interface Schema55 {
  $: GeneratedType173;
}

interface GeneratedType173 {
  'xlink:href': string;
  type: string;
}

interface SupplyOrderState {
  $: GeneratedType174;
  description: Description59[];
  schema: Schema56[];
}

interface GeneratedType174 {
  'xlink:href': string;
  get: string;
  put: string;
  post: string;
  patch: string;
  delete: string;
  head: string;
}

interface Description59 {
  _: string;
  $: GeneratedType175;
}

interface GeneratedType175 {
  'xlink:href': string;
  get: string;
  put: string;
  post: string;
  patch: string;
  delete: string;
  head: string;
}

interface Schema56 {
  $: GeneratedType176;
}

interface GeneratedType176 {
  'xlink:href': string;
  type: string;
}

interface SupplyOrder {
  $: GeneratedType177;
  description: Description60[];
  schema: Schema57[];
}

interface GeneratedType177 {
  'xlink:href': string;
  get: string;
  put: string;
  post: string;
  patch: string;
  delete: string;
  head: string;
}

interface Description60 {
  _: string;
  $: GeneratedType178;
}

interface GeneratedType178 {
  'xlink:href': string;
  get: string;
  put: string;
  post: string;
  patch: string;
  delete: string;
  head: string;
}

interface Schema57 {
  $: GeneratedType179;
}

interface GeneratedType179 {
  'xlink:href': string;
  type: string;
}

interface Tag {
  $: GeneratedType180;
  description: Description61[];
  schema: Schema58[];
}

interface GeneratedType180 {
  'xlink:href': string;
  get: string;
  put: string;
  post: string;
  patch: string;
  delete: string;
  head: string;
}

interface Description61 {
  _: string;
  $: GeneratedType181;
}

interface GeneratedType181 {
  'xlink:href': string;
  get: string;
  put: string;
  post: string;
  patch: string;
  delete: string;
  head: string;
}

interface Schema58 {
  $: GeneratedType182;
}

interface GeneratedType182 {
  'xlink:href': string;
  type: string;
}

interface TaxRuleGroup {
  $: GeneratedType183;
  description: Description62[];
  schema: Schema59[];
}

interface GeneratedType183 {
  'xlink:href': string;
  get: string;
  put: string;
  post: string;
  patch: string;
  delete: string;
  head: string;
}

interface Description62 {
  _: string;
  $: GeneratedType184;
}

interface GeneratedType184 {
  'xlink:href': string;
  get: string;
  put: string;
  post: string;
  patch: string;
  delete: string;
  head: string;
}

interface Schema59 {
  $: GeneratedType185;
}

interface GeneratedType185 {
  'xlink:href': string;
  type: string;
}

interface TaxRule {
  $: GeneratedType186;
  description: Description63[];
  schema: Schema60[];
}

interface GeneratedType186 {
  'xlink:href': string;
  get: string;
  put: string;
  post: string;
  patch: string;
  delete: string;
  head: string;
}

interface Description63 {
  _: string;
  $: GeneratedType187;
}

interface GeneratedType187 {
  'xlink:href': string;
  get: string;
  put: string;
  post: string;
  patch: string;
  delete: string;
  head: string;
}

interface Schema60 {
  $: GeneratedType188;
}

interface GeneratedType188 {
  'xlink:href': string;
  type: string;
}

interface Tax {
  $: GeneratedType189;
  description: Description64[];
  schema: Schema61[];
}

interface GeneratedType189 {
  'xlink:href': string;
  get: string;
  put: string;
  post: string;
  patch: string;
  delete: string;
  head: string;
}

interface Description64 {
  _: string;
  $: GeneratedType190;
}

interface GeneratedType190 {
  'xlink:href': string;
  get: string;
  put: string;
  post: string;
  patch: string;
  delete: string;
  head: string;
}

interface Schema61 {
  $: GeneratedType191;
}

interface GeneratedType191 {
  'xlink:href': string;
  type: string;
}

interface TranslatedConfiguration {
  $: GeneratedType192;
  description: Description65[];
  schema: Schema62[];
}

interface GeneratedType192 {
  'xlink:href': string;
  get: string;
  put: string;
  post: string;
  patch: string;
  delete: string;
  head: string;
}

interface Description65 {
  _: string;
  $: GeneratedType193;
}

interface GeneratedType193 {
  'xlink:href': string;
  get: string;
  put: string;
  post: string;
  patch: string;
  delete: string;
  head: string;
}

interface Schema62 {
  $: GeneratedType194;
}

interface GeneratedType194 {
  'xlink:href': string;
  type: string;
}

interface WarehouseProductLocation {
  $: GeneratedType195;
  description: Description66[];
  schema: Schema63[];
}

interface GeneratedType195 {
  'xlink:href': string;
  get: string;
  put: string;
  post: string;
  patch: string;
  delete: string;
  head: string;
}

interface Description66 {
  _: string;
  $: GeneratedType196;
}

interface GeneratedType196 {
  'xlink:href': string;
  get: string;
  put: string;
  post: string;
  patch: string;
  delete: string;
  head: string;
}

interface Schema63 {
  $: GeneratedType197;
}

interface GeneratedType197 {
  'xlink:href': string;
  type: string;
}

interface Warehouse {
  $: GeneratedType198;
  description: Description67[];
  schema: Schema64[];
}

interface GeneratedType198 {
  'xlink:href': string;
  get: string;
  put: string;
  post: string;
  patch: string;
  delete: string;
  head: string;
}

interface Description67 {
  _: string;
  $: GeneratedType199;
}

interface GeneratedType199 {
  'xlink:href': string;
  get: string;
  put: string;
  post: string;
  patch: string;
  delete: string;
  head: string;
}

interface Schema64 {
  $: GeneratedType200;
}

interface GeneratedType200 {
  'xlink:href': string;
  type: string;
}

interface WeightRange {
  $: GeneratedType201;
  description: Description68[];
  schema: Schema65[];
}

interface GeneratedType201 {
  'xlink:href': string;
  get: string;
  put: string;
  post: string;
  patch: string;
  delete: string;
  head: string;
}

interface Description68 {
  _: string;
  $: GeneratedType202;
}

interface GeneratedType202 {
  'xlink:href': string;
  get: string;
  put: string;
  post: string;
  patch: string;
  delete: string;
  head: string;
}

interface Schema65 {
  $: GeneratedType203;
}

interface GeneratedType203 {
  'xlink:href': string;
  type: string;
}

interface Zone {
  $: GeneratedType204;
  description: Description69[];
  schema: Schema66[];
}

interface GeneratedType204 {
  'xlink:href': string;
  get: string;
  put: string;
  post: string;
  patch: string;
  delete: string;
  head: string;
}

interface Description69 {
  _: string;
  $: GeneratedType205;
}

interface GeneratedType205 {
  'xlink:href': string;
  get: string;
  put: string;
  post: string;
  patch: string;
  delete: string;
  head: string;
}

interface Schema66 {
  $: GeneratedType206;
}

interface GeneratedType206 {
  'xlink:href': string;
  type: string;
}
