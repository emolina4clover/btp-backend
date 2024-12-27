export interface ConfigurationMsClientInterface {
  endpoints: {
    products: string;
    combinations: string;
    categories: string;
    stock_availables: string;
    baseUrl: string;
  };
  headers: any;
}
