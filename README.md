Omie WooCommerce Integration
Plugin Banner (opcional: inclua uma imagem representativa)

📌 Descrição
Plugin de integração entre o Omie (sistema ERP) e WooCommerce (plataforma de e-commerce), permitindo:

Sincronização bidirecional de produtos

Gestão automatizada de estoque

Importação/exportação de pedidos

Atualizações em tempo real via API

✨ Funcionalidades Principais
Sincronização de Produtos

Importação de produtos do Omie para WooCommerce

Atualização automática de preços e estoque

Mapeamento personalizado de campos

Gestão de Estoque

Atualização em tempo real

Limiares para alertas de estoque baixo

Sincronização programada (horária/diária)

Pedidos

Envio de pedidos do WooCommerce para o Omie

Atualização de status automaticamente

Dashboard Avançado

Visão geral da integração

Logs de sincronização

Ferramentas de diagnóstico

🚀 Instalação
Método via WordPress

Vá em: Plugins > Adicionar Novo

Busque por "Omie WooCommerce"

Instale e ative o plugin

Método Manual

bash

# Baixe o plugin

wget https://exemplo.com/omie-woocommerce.zip

# Extraia para a pasta de plugins

unzip omie-woocommerce.zip -d /caminho/para/wp-content/plugins/
Ative o plugin no painel WordPress

Via WP-CLI

bash
wp plugin install omie-woocommerce.zip --activate
⚙️ Configuração
Acesse: WooCommerce > Configurações > Omie Integration

Insira suas credenciais da API Omie:

App Key

App Secret

Configure as opções de sincronização:

Frequência

Tipos de dados

Mapeamento de campos

Configuração Mínima Recomendada:

WordPress 6.0+

WooCommerce 7.0+

PHP 8.0+

256MB de memória PHP

📚 Documentação da API
Endpoints utilizados:

Método Endpoint Omie Descrição
GET /geral/produtos/ Listar produtos
POST /estoque/ajuste/ Ajustar estoque
PUT /pedidos/ Enviar pedidos
🛠️ Desenvolvimento
Pré-requisitos:

Node.js 18+

Docker

Composer (para dependências PHP)

Configuração do ambiente:

bash

# Clonar repositório

git clone https://github.com/seu-usuario/omie-woocommerce.git

# Instalar dependências

npm install
composer install

# Iniciar ambiente Docker

docker-compose up -d
Estrutura de arquivos:

omie-woocommerce/
├── assets/ # Arquivos estáticos
├── includes/ # Lógica principal
│ ├── api/ # Integração com APIs
│ ├── sync/ # Sincronização
│ └── admin/ # Painel administrativo
├── languages/ # Arquivos de tradução
├── templates/ # Templates customizados
└── tests/ # Testes automatizados
🤝 Contribuição
Faça um fork do projeto

Crie sua branch (git checkout -b feature/nova-funcionalidade)

Commit suas mudanças (git commit -m 'Adiciona nova funcionalidade')

Push para a branch (git push origin feature/nova-funcionalidade)

Abra um Pull Request

📜 Licença
Licenciado sob GPLv2. Veja o arquivo LICENSE para detalhes.

📞 Suporte
Para reportar bugs ou solicitar funcionalidades:

Issues no GitHub

Email: suporte@seusite.com

WhatsApp: +55 (11) 99999-9999

🔄 Histórico de Versões
Versão Data Notas de Lançamento
1.0.0 2025-05-03 Versão inicial
1.1.0 2025-06-15 Suporte a variações
(Atualize conforme novas versões forem lançadas)

📌 Nota: Este plugin não é oficial nem afiliado à Omie ou WooCommerce. Desenvolvido pela [Sua Empresa].
