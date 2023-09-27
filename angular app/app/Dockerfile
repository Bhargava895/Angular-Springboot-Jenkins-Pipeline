# Use an official Node.js runtime as the base image
FROM node:12.7-alpine AS build

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package.json ./

# Install application dependencies
RUN npm install

# Copy the rest of the application source code to the container
COPY . .

# Build your application (adjust this as needed for your specific application)
RUN npm run build

# Stage 2: Create the final production-ready image
FROM nginx:alpine3.17-slim

# Copy the built application from the previous stage into the nginx web root directory
COPY --from=build /app/dist/app /usr/share/nginx/html

# Optionally, you can copy a custom Nginx configuration if needed
# COPY default.conf /etc/nginx/conf.d/

# The nginx image starts Nginx automatically, so no CMD or ENTRYPOINT is needed

# Expose port 80 for incoming HTTP traffic
EXPOSE 80
