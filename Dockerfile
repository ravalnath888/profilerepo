# ---------- Stage 1: Build Angular app ----------
FROM node:18-alpine AS build
WORKDIR /app

# Copy package files and install dependencies cleanly
COPY package*.json ./
RUN npm ci

# Copy the entire project
COPY . .

# Build the Angular app in production mode (adjust output path if needed)
RUN npm run build -- --configuration production

# ---------- Stage 2: Serve using Nginx ----------
FROM nginx:alpine

# Remove default nginx config
RUN rm /etc/nginx/conf.d/default.conf

# Copy your custom nginx config
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copy built Angular files from build stage
COPY --from=build /app/dist/profile/browser /usr/share/nginx/html

# Expose port 80 to the outside world
EXPOSE 80

# Run nginx in the foreground
CMD ["nginx", "-g", "daemon off;"]