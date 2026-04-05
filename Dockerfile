FROM node:22-alpine AS builder

WORKDIR /app

RUN corepack enable

COPY package.json pnpm-lock.yaml nest-cli.json tsconfig.json tsconfig.build.json ./
COPY apps ./apps
COPY libs ./libs

RUN pnpm install --frozen-lockfile

ARG SERVICE=api-gateway
ENV SERVICE=${SERVICE}

RUN pnpm exec nest build ${SERVICE}

FROM node:22-alpine AS runner

WORKDIR /app

RUN corepack enable

COPY package.json pnpm-lock.yaml ./
RUN pnpm install --frozen-lockfile --prod

ARG SERVICE=api-gateway
ENV SERVICE=${SERVICE}
ENV NODE_ENV=production

COPY --from=builder /app/dist ./dist

CMD ["sh", "-c", "node dist/apps/$SERVICE/main.js"]
