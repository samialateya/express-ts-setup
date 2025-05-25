FROM node:22-slim AS builder

WORKDIR /usr/app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

FROM node:22-alpine AS production

WORKDIR /usr/app

RUN apk update && rm -rf /var/cache/apk/*

COPY --from=builder /usr/app/dist ./
COPY --from=builder /usr/app/package*.json ./

RUN npm install --omit=dev && npm cache clean --force

COPY --from=builder /usr/app/spec ./spec

EXPOSE 3000

CMD ["node", "index.js"]