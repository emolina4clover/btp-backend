export interface ConfigurationMsClientInterface {
  endpoints: {
    products: string;
    productsCustom: string;
    combinations: string;
    categories: string;
    stock_availables: string;
    baseUrl: string;
  };
  headers: any;
}
