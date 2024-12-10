FROM --platform=amd64 node:22-slim as base

FROM base as builder
RUN npm install -g pnpm
ENV NEXT_TELEMETRY_DISABLED 1
WORKDIR /app
COPY pnpm-lock.yaml ./
RUN pnpm fetch
COPY . ./
RUN pnpm install --offline
RUN pnpm run build

FROM base as runner
ENV NODE_ENV production
ENV NEXT_TELEMETRY_DISABLED 1
WORKDIR /app
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static
COPY --from=builder /app/public ./public

ENV PORT 80
EXPOSE 80
CMD ["node", "server.js"]
