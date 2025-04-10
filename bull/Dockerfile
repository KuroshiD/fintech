# Imagem base do Node
FROM node:23-slim

# Define o diretório de trabalho dentro do container
WORKDIR /app

# Copia os arquivos para dentro do container
COPY . .

# Instala as dependências
RUN npm install

# Expõe a porta padrão (ajuste se seu app usar outra)
EXPOSE 3000

# Comando padrão para iniciar o app
CMD ["npm", "run", "start"]
