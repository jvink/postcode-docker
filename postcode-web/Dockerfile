FROM node:10.13.0 AS build

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

FROM nginx:alpine
COPY --from=build ./build /usr/share/nginx/html 

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]