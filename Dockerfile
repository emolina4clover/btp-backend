FROM node:20.18.0-alpine AS builder

WORKDIR /src

COPY package.json ./

COPY . .

RUN apk add --update python3 make g++ && rm -rf /var/cache/apk/*
RUN apk add --no-cache libcurl alpine-sdk curl-dev
RUN npm install node-libcurl --build-from-source

ENV TZ="America/Santiago"

RUN npm install
RUN npm run build

EXPOSE 5001

CMD ["node", "dist/main.js"]
