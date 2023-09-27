# stage 1
FROM node:12.7-alpine AS build

# Set the working directory in the container
WORKDIR /app

# Copy the package.json and package-lock.json files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application files
COPY . .

# Build your Angular application
RUN npm run build
# stage 2
FROM nginx:alpine3.17-slim
COPY --from=build /app/dist/app /usr/share/nginx/html
#COPY default.conf /etc/nginx/conf.d/
