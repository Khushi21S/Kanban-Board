
# Stage 1: Build the React application
FROM node:20-alpine AS builder

WORKDIR /app

# Copy dependency manifests first
COPY package*.json ./

# Install project dependencies
RUN npm ci

# Copy the application source code
COPY . .

# Generate the production build
RUN npm run build

# Stage 2: Serve the production build
FROM nginx:alpine

# Copy the generated static files into Nginx
COPY --from=builder /app/dist /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
