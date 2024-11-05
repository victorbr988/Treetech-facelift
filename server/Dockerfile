# Etapa de construção
FROM node:20-alpine AS build

WORKDIR /usr/src/server

# Copiar apenas os arquivos necessários para instalação de dependências
COPY package*.json ./
COPY tsconfig.json ./

RUN npm install

# Copiar o restante do código e construir
COPY . .

RUN npm run build

# Etapa de produção
FROM node:20-alpine AS production

WORKDIR /usr/src/server

# Copiar os arquivos necessários da fase de build
COPY --from=build /usr/src/server/dist ./dist
COPY --from=build /usr/src/server/package*.json ./
COPY --from=build /usr/src/server/node_modules ./node_modules

EXPOSE 3000

# Executar a aplicação com o npm
CMD ["npm", "start"]
