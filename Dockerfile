
FROM node:22-alpine AS installer

#RUN apt-get update && \
#    apt-get install -y --no-install-recommends curl tini &&\
#    rm -rf /var/lib/apt/lists/*

 
WORKDIR /app
 
COPY package*.json ./
 
RUN npm install
 
COPY . .

RUN npm run build

FROM nginx:latest AS developer

COPY --from=installer /app/ /usr/share/nginx/html
 
EXPOSE 3000
 
CMD ["npm", "run", "dev"]