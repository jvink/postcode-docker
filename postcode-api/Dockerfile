FROM node:latest

RUN mkdir -p /usr/src/app

WORKDIR /usr/src/app

COPY . .

RUN npm install

EXPOSE 4000

CMD [ "npm", "start" ]