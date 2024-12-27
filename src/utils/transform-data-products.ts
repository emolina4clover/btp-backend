import {
  PrestaShopProductsDetails,
  PrestaShopProductsDetailsInterface,
} from '../api/interface/prestashop-products-detail.interface';

/**
 * Transforms an array of PrestaShop product details into a more usable format.
 * Extracts key information for each product and structures it into an object containing
 * the product's ID, default image URL, minimal quantity, low stock alert status, price,
 * name, description, and short description.
 *
 * @param {PrestaShopProductsDetailsInterface[]} productsData - An array of product details following the PrestaShop product details interface. Each item in the array represents a product and contains various information fields extracted from the PrestaShop API.
 */
export function transformData(
  productsData: PrestaShopProductsDetailsInterface[],
): any {
  console.log('Iniciando transformación de datos...');
  return productsData.map((productData, index) => {
    const productArray = productData.prestashop.product;

    if (!productArray || productArray.length === 0) {
      console.log(
        `Datos del producto faltantes en productData: ${JSON.stringify(productData)}`,
      );
      return null;
    }

    const product = productArray[0];

    // Acceder a los valores correctamente
    const id = product.id?.[0] || '';
    const id_default_image =
      btoa(product.id_default_image?.[0]?.$['xlink:href']) || '';
    const minimal_quantity = product.minimal_quantity?.[0] || '';
    const low_stock_alert = product.low_stock_alert?.[0] || '';

    const price = product.price?.[0] || '';

    const id_default_combination =
      product.id_default_combination?.[0]?._ === '0'
        ? ''
        : product.id_default_combination?.[0]?._ || '';

    // Acceder a los campos que están dentro de 'language'
    const name = product.name?.[0]?.language?.[0]?._ || '';
    const description = product.description?.[0]?.language?.[0]?._ || '';
    const description_short =
      product.description_short?.[0]?.language?.[0]?._ || '';

    // const images = extractImages(product).map((value) => btoa(value));

    // const stockAvailable =
    //   product.associations?.[0]?.stock_availables?.[0]?.stock_available?.[0]?.$[
    //     'xlink:href'
    //   ];

    const stockAvailable = product.associations?.[0]?.stock_availables;

    return {
      id,
      id_default_image,
      minimal_quantity,
      low_stock_alert,
      id_default_combination,
      price,
      name,
      description,
      description_short,
      stockAvailable,
    };
  });
}

/**
 * Transforms an array of product data objects by extracting and encoding their images.
 *
 * @param {PrestaShopProductsDetailsInterface[]} productsData - An array of product data objects conforming to the PrestaShopProductsDetailsInterface. Each object is expected to contain product details, including image data.
 */
export function transformDataImages(
  productsData: PrestaShopProductsDetailsInterface[],
): any {
  console.log('Iniciando transformación de datos para images...');
  return productsData.map((productData, index) => {
    const productArray = productData.prestashop.product;

    if (!productArray || productArray.length === 0) {
      console.log(
        `Datos del producto faltantes en productData: ${JSON.stringify(productData)}`,
      );
      return null;
    }

    const product = productArray[0];

    const images = extractImages(product).map((value) => btoa(value));

    return {
      images,
    };
  });
}

/**
 * Extracts image URLs from a PrestaShopProductsDetails object.
 *
 * @param {PrestaShopProductsDetails} product - The product details from which the images are to be extracted.
 */
function extractImages(product: PrestaShopProductsDetails): string[] {
  if (product.associations?.[0]?.images?.[0]?.image.length === 0) {
    this.logger.debug('No se encontraron imágenes para el producto.');
    return [];
  }

  return product.associations?.[0]?.images?.[0]?.image.map(
    (img) => img.$['xlink:href'] || '',
  );
}
