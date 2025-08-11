
# FROM node:22-alpine AS installer

# #RUN apt-get update && \
# #    apt-get install -y --no-install-recommends curl tini &&\
# #    rm -rf /var/lib/apt/lists/*

 
# WORKDIR /app
 
# COPY package*.json ./
 
# RUN npm install
 
# COPY . .

# RUN npm run build

# FROM nginx:latest AS developer

# COPY --from=installer /app/ /usr/share/nginx/html
 
# EXPOSE 3000
 
# CMD ["npm", "run", "dev"]


# Stage 1: Build the app
FROM node:22-alpine AS installer

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .
RUN npm run build

# Stage 2: Serve with Nginx
FROM nginx:latest AS developer

# Copy build output to Nginx's public folder
COPY --from=installer /app/build /usr/share/nginx/html

# Optional: Remove default Nginx config and add your own if needed
# COPY nginx.conf /etc/nginx/nginx.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
