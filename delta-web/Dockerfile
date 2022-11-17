# https://dev.to/avatsaev/create-efficient-angular-docker-images-with-multi-stage-builds-1f3n

FROM node:18-slim as builder
RUN npm install -g pnpm

RUN mkdir /app
WORKDIR /app

COPY pnpm-lock.yaml ./
RUN pnpm fetch --prod

COPY . ./
RUN pnpm install --offline --prod

RUN pnpm run build

FROM caddy:2
COPY Caddyfile /etc/caddy/Caddyfile
COPY --from=builder /app/dist /app
