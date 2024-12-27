import { PrestaShopProductsOptionsValueInterface } from '../api/interface/prestashop-products-options-value.interface';

/**
 * Extracts an array of product option URLs from the provided PrestaShop data.
 *
 * @param {PrestaShopProductsOptionsValueInterface} data - The PrestaShop product options value interface containing product combinations and associations.
 * @return {string[]} An array of product option URLs extracted from the provided data.
 * @throws {Error} Throws an error if no combinations are found in the provided data or if it is not in the expected format.
 */
export function extractProductOptionUrls(
  data: PrestaShopProductsOptionsValueInterface,
): string[] {
  const combinations = data?.prestashop.combination;

  if (!combinations || !Array.isArray(combinations)) {
    throw new Error(
      'No se encontraron combinaciones en los datos proporcionados.',
    );
  }

  const urls: string[] = [];

  combinations.forEach((combination) => {
    const associations = combination?.associations;
    if (associations && Array.isArray(associations)) {
      associations.forEach((association) => {
        const productOptionValues = association?.product_option_values;
        if (productOptionValues && Array.isArray(productOptionValues)) {
          productOptionValues.forEach((productOption) => {
            const productValues = productOption?.product_option_value;
            if (productValues && Array.isArray(productValues)) {
              productValues.forEach((value) => {
                const url = value?.$?.['xlink:href'];
                if (url) {
                  urls.push(url);
                }
              });
            }
          });
        }
      });
    }
  });

  return urls;
}
