# stage 1
FROM node:12.7-alpine AS build
WORKDIR /app
COPY package.json package-lock.json .  # Copy package.json and package-lock.json
RUN npm install                      # Install dependencies
COPY . .
RUN npm run build

# stage 2
FROM nginx:alpine3.17-slim
COPY --from=build /app/dist/app /usr/share/nginx/html
# COPY default.conf /etc/nginx/conf.d/
