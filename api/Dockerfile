FROM node:16

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)

# se rodar a construção da imagem dentro da pasta /api
COPY package*.json ./  
# se rodar a construcao da imagem via docker-compose serv-proxy-ready.yml
# COPY ./api/package*.json ./

RUN npm install
# If you are building your code for production
# RUN npm ci --only=production

# Bundle app source
COPY . .

EXPOSE 8080
CMD [ "node", "server.js" ]