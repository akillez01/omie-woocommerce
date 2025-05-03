import Redis from 'ioredis';
import { OmieService } from './OmieService';
import { WooCommerceService } from './WooCommerceService';

export class SyncService {
  private redis: Redis;
  private omieService: OmieService;
  private wooCommerceService: WooCommerceService;

  constructor() {
    this.redis = new Redis({
      host: 'redis',
      port: 6379
    });
    this.omieService = new OmieService();
    this.wooCommerceService = new WooCommerceService();
  }

  async syncProducts() {
    try {
      let page = 1;
      let hasMore = true;

      while (hasMore) {
        const products = await this.omieService.listProducts(page);
        
        if (!products.produto_servico_cadastro || products.produto_servico_cadastro.length === 0) {
          hasMore = false;
          continue;
        }

        for (const product of products.produto_servico_cadastro) {
          await this.wooCommerceService.createOrUpdateProduct(product);
          await this.redis.set(`product:${product.codigo_produto}:lastSync`, new Date().toISOString());
        }

        page++;
      }
    } catch (error) {
      console.error('Error during product sync:', error);
      throw error;
    }
  }

  async getLastSyncTime(productCode: string): Promise<string | null> {
    return await this.redis.get(`product:${productCode}:lastSync`);
  }
}