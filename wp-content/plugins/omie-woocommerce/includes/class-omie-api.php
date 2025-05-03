<?php

class Omie_API {
    private $app_key;
    private $app_secret;
    private $api_url = 'https://app.omie.com.br/api/v1/';

    public function __construct() {
        $this->app_key = get_option('omie_app_key');
        $this->app_secret = get_option('omie_app_secret');
    }

    public function get_products($page = 1, $per_page = 50) {
        $endpoint = $this->api_url . 'geral/produtos/';
        
        $body = array(
            'call' => 'ListarProdutos',
            'app_key' => $this->app_key,
            'app_secret' => $this->app_secret,
            'param' => array(
                'pagina' => $page,
                'registros_por_pagina' => $per_page,
                'apenas_importado_api' => 'N'
            )
        );

        $response = wp_remote_post($endpoint, array(
            'body' => json_encode($body),
            'headers' => array('Content-Type' => 'application/json'),
            'timeout' => 45,
        ));

        if (is_wp_error($response)) {
            return false;
        }

        return json_decode(wp_remote_retrieve_body($response), true);
    }

    public function update_stock($product_code, $quantity) {
        $endpoint = $this->api_url . 'estoque/ajuste/';
        
        $body = array(
            'call' => 'AjustarEstoque',
            'app_key' => $this->app_key,
            'app_secret' => $this->app_secret,
            'param' => array(
                'codigo_produto' => $product_code,
                'quantidade' => $quantity
            )
        );

        $response = wp_remote_post($endpoint, array(
            'body' => json_encode($body),
            'headers' => array('Content-Type' => 'application/json'),
            'timeout' => 30,
        ));

        return !is_wp_error($response);
    }
}