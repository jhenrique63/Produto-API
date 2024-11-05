# Usa uma imagem Node.js oficial como base
FROM node:16

# Define o diretório de trabalho
WORKDIR /app

# Copia os arquivos de dependências para o contêiner
COPY package*.json ./

# Instala as dependências
RUN npm install

# Copia o restante dos arquivos da aplicação para o contêiner
COPY . .

# Exponha a porta (se necessário para o Node.js)
EXPOSE 3000

# Comando para rodar o servidor Node.js
CMD ["npm", "run", "dev"]
