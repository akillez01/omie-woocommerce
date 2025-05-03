import WooCommerceRestApi from '@woocommerce/woocommerce-rest-api';

export class WooCommerceService {
  private client: any;

  constructor() {
    this.client = new WooCommerceRestApi({
      url: import.meta.env.VITE_WOOCOMMERCE_URL,
      consumerKey: import.meta.env.VITE_WOOCOMMERCE_CONSUMER_KEY,
      consumerSecret: import.meta.env.VITE_WOOCOMMERCE_CONSUMER_SECRET,
      version: 'wc/v3'
    });
  }

  async createOrUpdateProduct(omieProduct: any) {
    try {
      const existingProduct = await this.findProductBySku(omieProduct.codigo_produto);
      
      const productData = {
        name: omieProduct.descricao,
        type: 'simple',
        regular_price: omieProduct.valor_unitario.toString(),
        description: omieProduct.descricao_complementar || '',
        sku: omieProduct.codigo_produto,
        manage_stock: true,
        stock_quantity: omieProduct.estoque?.saldo || 0
      };

      if (existingProduct) {
        return await this.client.put(`products/${existingProduct.id}`, productData);
      } else {
        return await this.client.post('products', productData);
      }
    } catch (error) {
      console.error('Error syncing product with WooCommerce:', error);
      throw error;
    }
  }

  private async findProductBySku(sku: string) {
    try {
      const response = await this.client.get('products', {
        sku: sku
      });

      return response.data.length > 0 ? response.data[0] : null;
    } catch (error) {
      console.error('Error finding product by SKU:', error);
      throw error;
    }
  }
}