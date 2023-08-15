FROM node:18

WORKDIR /LignumsoftPizza
COPY package.json .
COPY package-lock.json .
RUN npm install
COPY . .
CMD ["npm", "start"]