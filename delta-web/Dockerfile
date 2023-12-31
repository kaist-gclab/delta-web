FROM node:20-slim as builder
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
