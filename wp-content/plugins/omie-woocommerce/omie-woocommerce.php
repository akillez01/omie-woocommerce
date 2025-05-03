<?php
/*
Plugin Name: Omie WooCommerce Integration
Description: Integração completa entre Omie e WooCommerce
Version: 1.0
Author: Seu Nome
*/

defined('ABSPATH') or die('Acesso direto negado!');

// Autoloader para classes
spl_autoload_register(function ($class) {
    $prefix = 'OmieIntegration\\';
    $base_dir = __DIR__ . '/includes/';

    $len = strlen($prefix);
    if (strncmp($prefix, $class, $len) !== 0) {
        return;
    }

    $relative_class = substr($class, $len);
    $file = $base_dir . str_replace('\\', '/', $relative_class) . '.php';

    if (file_exists($file)) {
        require $file;
    }
});

// Inicialização do plugin
add_action('plugins_loaded', function () {
    if (!class_exists('WooCommerce')) {
        add_action('admin_notices', function () {
            echo '<div class="error"><p>O plugin Omie WooCommerce Integration requer o WooCommerce instalado e ativado.</p></div>';
        });
        return;
    }

    // Carrega as classes principais
    $api_client = new OmieIntegration\Api\Omie_Api_Client(
        get_option('omie_app_key'),
        get_option('omie_app_secret')
    );

    new OmieIntegration\Product\Omie_Product_Sync($api_client);
    new OmieIntegration\Stock\Omie_Stock_Sync($api_client);

    if (is_admin()) {
        new OmieIntegration\Admin\Omie_Settings_Page();
    }
});

// Registra os hooks de ativação/desativação
register_activation_hook(__FILE__, function () {
    if (!wp_next_scheduled('omie_hourly_sync')) {
        wp_schedule_event(time(), 'hourly', 'omie_hourly_sync');
    }

    // Cria tabelas necessárias
    OmieIntegration\Install\Installer::install();
});

register_deactivation_hook(__FILE__, function () {
    wp_clear_scheduled_hook('omie_hourly_sync');
});
