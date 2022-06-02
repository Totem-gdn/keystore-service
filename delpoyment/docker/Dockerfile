# builder
FROM node:lts-alpine AS builder

WORKDIR /usr/src/keystore-service

COPY package.json ./

RUN npm i glob rimraf

RUN npm i --only=development

COPY . .

RUN npm run build

# production
FROM node:lts-alpine

ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}

WORKDIR /usr/src/keystore-service

ADD https://s3.amazonaws.com/rds-downloads/rds-combined-ca-bundle.pem ./rds-combined-ca-bundle.pem

COPY package.json .

RUN npm i --only=production

COPY --from=builder /usr/src/keystore-service/dist ./dist

CMD ["node", "dist/main"]
