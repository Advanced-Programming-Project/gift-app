FROM node:latest AS builder

WORKDIR /app

COPY package.json package.json

RUN npm install

COPY . .

RUN npm run build

FROM nginx:alpine

WORKDIR /usr/share/nginx/html

RUN rm -rf *

COPY --from=builder /app/dist .

RUN rm /etc/nginx/conf.d/default.conf
COPY nginx/nginx.conf /etc/nginx/conf.d

EXPOSE 80

ENTRYPOINT ["nginx", "-g", "daemon off;"]