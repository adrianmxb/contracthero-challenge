FROM node:lts-alpine as build

WORKDIR /app

COPY package*.json .

# this uses package-lock.json to (according to NPM) make a really (!) clean install
RUN npm ci

ARG SERVER_URL=http://localhost:3001
ENV REACT_APP_SERVER_URL ${SERVER_URL}

COPY . .
RUN npm run build

FROM nginx:stable-alpine

WORKDIR /usr/share/nginx/html
RUN rm -rf *

COPY --from=build /app/build .

# Run nginx in the foreground (not as daemon) 
ENTRYPOINT [ "nginx", "-g", "daemon off;"]
