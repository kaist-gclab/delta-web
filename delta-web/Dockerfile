# https://dev.to/avatsaev/create-efficient-angular-docker-images-with-multi-stage-builds-1f3n

FROM node:14-alpine as builder
RUN mkdir /app
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci
COPY . ./
RUN npm run build

FROM caddy:2-alpine
COPY Caddyfile /etc/caddy/Caddyfile
COPY --from=builder /app/build /app
