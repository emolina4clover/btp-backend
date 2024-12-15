export interface ConfigurationMsClientInterface {
  endpoints: {
    products: string;
    categories: string;
    stock_availables: string;
    baseUrl: string;
  };
  headers: any;
}
