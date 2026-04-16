# Lightweight alpine image for node 
FROM node:22-alpine AS base

# Set working directory
WORKDIR /app

# Only copy the package file
COPY package.json package-lock.json ./

# install dependencies
RUN npm install

# Copy all files
COPY . .

# Run command 
CMD ["npm", "run", "dev"]

# Expose port
EXPOSE 3000