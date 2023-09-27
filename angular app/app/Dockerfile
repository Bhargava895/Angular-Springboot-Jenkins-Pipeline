# stage 1
FROM node:12.7-alpine AS build
WORKDIR /app
COPY . .
RUN npm install | npm build --force
# stage 2
FROM nginx:alpine3.17-slim
COPY /dist/app /usr/share/nginx/htm
