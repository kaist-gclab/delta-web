# https://dev.to/avatsaev/create-efficient-angular-docker-images-with-multi-stage-builds-1f3n

FROM node:12-alpine as builder
RUN mkdir /app
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci
COPY . ./
RUN npm run build

FROM nginx:mainline-alpine
COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY htpasswd /etc/nginx/.htpasswd
RUN chown nginx /etc/nginx/.htpasswd && chmod 400 /etc/nginx/.htpasswd
RUN rm -rf /usr/share/nginx/html/*
COPY --from=builder /app/build /usr/share/nginx/html
CMD ["nginx", "-g", "daemon off;"]
