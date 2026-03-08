ARG NODE_IMAGE=node:24.14.0-alpine

# ------ deps ------
FROM ${NODE_IMAGE} AS deps

RUN corepack enable && corepack prepare pnpm@10.30.3

WORKDIR /app
COPY package.json pnpm-lock.yaml pnpm-workspace.yaml ./
RUN PACKAGED=true pnpm install --frozen-lockfile

# ------ runtime ------
FROM ${NODE_IMAGE}

RUN corepack enable && corepack prepare pnpm@10.30.3

WORKDIR /app

COPY --from=deps /app/node_modules ./node_modules
COPY . .

USER node

EXPOSE 3030
ENTRYPOINT ["sh", "-c", "pnpm slidev --remote=\"$SLIDEV_PASSWORD\" --port 3030"]
