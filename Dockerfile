FROM oven/bun:latest as builder

WORKDIR /app

COPY package.json bun.lock ./
RUN bun install

COPY . .

RUN bun run build

FROM oven/bun:latest as runner

WORKDIR /app

COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json
COPY --from=builder /app/bun.lock ./bun.lock
COPY  --from=builder /app/.output ./output

CMD ["bun", "run", "output/server/index.mjs"]