# FROM node:20-alpine

# WORKDIR /app

# COPY package*.json ./

# RUN npm install

# COPY . .

# EXPOSE 3000

# CMD ["npm", "run", "dev"]


FROM node:20-alpine

WORKDIR /app

# Instala dependências do sistema incluindo curl
RUN apk add --no-cache git python3 make g++ curl

COPY package*.json ./

RUN npm install

COPY . .

# Instala o WordPress CLI (opcional)
RUN curl -O https://raw.githubusercontent.com/wp-cli/builds/gh-pages/phar/wp-cli.phar \
  && chmod +x wp-cli.phar \
  && mv wp-cli.phar /usr/local/bin/wp

EXPOSE 3000

CMD ["npm", "run", "dev"]