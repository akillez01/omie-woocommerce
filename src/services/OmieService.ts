import axios from 'axios';

export class OmieService {
  private readonly baseUrl = 'https://app.omie.com.br/api/v1/geral/produtos/';
  private readonly appKey: string;
  private readonly appSecret: string;

  constructor() {
    this.appKey = import.meta.env.VITE_OMIE_APP_KEY;
    this.appSecret = import.meta.env.VITE_OMIE_APP_SECRET;
  }

  async listProducts(page = 1, perPage = 50) {
    try {
      const response = await axios.post(this.baseUrl, {
        call: 'ListarProdutos',
        app_key: this.appKey,
        app_secret: this.appSecret,
        param: {
          pagina: page,
          registros_por_pagina: perPage,
          apenas_importado_api: 'N'
        }
      });

      return response.data;
    } catch (error) {
      console.error('Error fetching products from Omie:', error);
      throw error;
    }
  }

  async updateStock(productCode: string, quantity: number) {
    try {
      const response = await axios.post(this.baseUrl, {
        call: 'AlterarProduto',
        app_key: this.appKey,
        app_secret: this.appSecret,
        param: [{
          codigo_produto: productCode,
          saldo_estoque: quantity
        }]
      });

      return response.data;
    } catch (error) {
      console.error('Error updating stock in Omie:', error);
      throw error;
    }
  }
}