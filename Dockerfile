# Especifica a imagem base do Node.js. Use a versão "lts" (Long Term Support) como recomendado para aplicações de produção
FROM node:lts

# Define o diretório de trabalho dentro do container
WORKDIR /usr/src/app

# Copia os arquivos de configuração do projeto para o diretório de trabalho
COPY package*.json ./

# Instala as dependências do projeto
RUN npm install

# Copia os demais arquivos do projeto para o diretório de trabalho
COPY . .

# Expõe a porta que a aplicação vai rodar
EXPOSE 8085

# Comando para iniciar a aplicação
CMD ["npm", "test"]
