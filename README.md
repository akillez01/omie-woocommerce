# 🚀 Omie WooCommerce Integration

![Banner do Plugin](https://seusite.com/imagens/banner-omie-woocommerce.png)

![Tela 1](project/images/img-1.png)
![Tela 2](project/images/img-2.png)
![Tela 3](project/images/img-3.png)
![Tela 4](project/images/img-4.png)

Conecte seu WooCommerce ao ERP Omie de forma simples, segura e eficiente.

---

## 📑 Índice

- [📌 Descrição](#-descrição)
- [✨ Funcionalidades](#-funcionalidades)
- [🚀 Instalação](#-instalação)
- [⚙️ Configuração](#️-configuração)
- [📸 Screenshots](#-screenshots)
- [📚 Documentação da API](#-documentação-da-api)
- [🛠️ Desenvolvimento](#️-desenvolvimento)
- [🤝 Contribuição](#-contribuição)
- [📜 Licença](#-licença)
- [📞 Suporte](#-suporte)
- [🔄 Histórico de Versões](#-histórico-de-versões)

---

## 📌 Descrição

**Omie WooCommerce Integration** é a solução definitiva para integrar seu e-commerce WooCommerce com o ERP **Omie**.

### Principais Benefícios:

- 🔹 Sincronização em tempo real de produtos e estoque
- 🔹 Gestão centralizada de pedidos
- 🔹 Dashboard completo com métricas
- 🔹 Configuração adaptável ao seu negócio

---

## ✨ Funcionalidades

### 🔄 Sincronização de Produtos

- Importação automática (Omie → WooCommerce)
- Atualização em massa de preços e estoque
- Mapeamento de campos e categorias
- Suporte a produtos variáveis

### 📦 Gestão de Estoque Inteligente

- Atualização em tempo real
- Alertas de estoque baixo
- Agendamento de sincronizações
- Histórico de movimentações

### 🛒 Processamento de Pedidos

- Envio automático (WooCommerce → Omie)
- Atualização de status (faturado, enviado etc.)
- Suporte a pedidos com backorder

### 📊 Dashboard Avançado

- Visão geral da integração
- Logs detalhados
- Ferramentas de diagnóstico
- Métricas de desempenho

---

## 🚀 Instalação

### Método 1: Via WordPress (Recomendado)

1. Vá em `Plugins > Adicionar Novo`
2. Pesquise por **Omie WooCommerce Integration**
3. Clique em `Instalar` e depois `Ativar`

### Método 2: Upload Manual

```bash
wget https://download.seusite.com/omie-woocommerce.latest.zip
unzip omie-woocommerce.latest.zip -d /caminho/wp-content/plugins/
Ative o plugin pelo painel administrativo.

Método 3: WP-CLI
bash
Copiar
Editar
wp plugin install https://download.seusite.com/omie-woocommerce.latest.zip --activate
⚙️ Configuração
Acesse WooCommerce > Omie Integration

Insira:

App Key

App Secret

Defina:

Frequência de sincronização: Horária, Diária ou Manual

Tipos de dados: Produtos, Estoque, Pedidos

Regras e filtros (opcional)

✅ Requisitos Mínimos
WordPress 6.0+

WooCommerce 7.0+

PHP 8.0+ (Recomendado: 8.2)

256MB de memória PHP

cURL habilitado

📸 Screenshots
Configuração Inicial	Dashboard Principal	Sincronização Manual

📚 Documentação da API
Endpoints Omie
Método	Endpoint	Descrição
GET	/geral/produtos/	Lista produtos
POST	/estoque/ajuste/	Ajusta estoque
PUT	/pedidos/	Cria/atualiza pedidos
GET	/geral/clientes/	Consulta clientes

Exemplo de Código
php
Copiar
Editar
$omie_api = new Omie_API(
    get_option('omie_app_key'),
    get_option('omie_app_secret')
);

$products = $omie_api->get_products([
    'pagina' => 1,
    'registros_por_pagina' => 50
]);
🛠️ Desenvolvimento
Pré-requisitos
Node.js 18+

Docker e Docker Compose

Composer

Configuração
bash
Copiar
Editar
git clone https://github.com/seu-usuario/omie-woocommerce.git
cd omie-woocommerce
npm install
composer install
docker-compose up -d
Estrutura
bash
Copiar
Editar
omie-woocommerce/
├── assets/
├── includes/
│   ├── api/
│   ├── sync/
│   ├── admin/
│   └── models/
├── languages/
├── templates/
├── tests/
└── vendor/
🤝 Contribuição
Faça um fork

Crie uma branch (git checkout -b feature/nova-funcionalidade)

Commit (git commit -m 'feat: adiciona nova funcionalidade')

Push (git push origin feature/nova-funcionalidade)

Abra um Pull Request

Siga o guia de contribuição.

📜 Licença
Este projeto é licenciado sob a GPLv2.

📞 Suporte
📧 Email: suporte@seusite.com

🐞 Reportar Problema

📱 WhatsApp: +55 11 #########

📘 Documentação: docs.seusite.com

⏰ Atendimento: Seg-Sex, 9h-18h (GMT-3)

🔄 Histórico de Versões
Versão	Data	Notas
1.0.0	2025-05-03	Versão inicial
1.1.0	2025-06-15	Suporte a variações
1.2.0	2025-07-20	Dashboard avançado
2.0.0	2025-09-10	Refatoração completa

📌 Nota Legal: Este plugin não é afiliado ou endossado pela Omie ou WooCommerce/Automattic. Desenvolvido com ❤️ por Achilles.

yaml
Copiar
Editar

---
```
