FROM node:lts-alpine as build

WORKDIR /app
COPY package*.json .

# this uses package-lock.json to (according to NPM) make a really (!) clean install
RUN npm ci

COPY . .
RUN npm run build

FROM node:lts-alpine

WORKDIR /app
COPY --from=build /app/build .
COPY --from=build /app/node_modules node_modules

CMD [ "node", "/app/index.js" ]

