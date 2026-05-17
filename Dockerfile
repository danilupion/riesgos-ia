# Builds ALL presentations + landing index into a single nginx image.
#
# Auto-discovers every directory under presentations/ that has a package.json.
# Each presentation is served under /<base-prefix>/<presentation-name>/.
# The landing index (packages/landing) is served at /<base-prefix>/.
#
# Usage:
#   docker build --platform linux/amd64 \
#     -t harbor.danilupion.com/pauseai-es/presentaciones:latest .
#
#   All presentations are served under /presentaciones/<name>/ by default,
#   with the landing at /presentaciones/. Override the base prefix if needed:
#     --build-arg BASE_PREFIX=/other-prefix/

ARG NODE_IMAGE=node:24.14.0-alpine

# ------ build ------
FROM ${NODE_IMAGE} AS build

ENV COREPACK_HOME=/opt/corepack
RUN corepack enable && corepack prepare pnpm@10.31.0

WORKDIR /app
COPY package.json pnpm-lock.yaml pnpm-workspace.yaml ./
COPY packages ./packages
COPY presentations ./presentations
RUN PACKAGED=true pnpm install --frozen-lockfile

ARG BASE_PREFIX=/presentaciones/

# Build each presentation with its absolute base path so internal asset URLs resolve correctly
RUN for dir in presentations/*/; do \
      name=$(basename "$dir"); \
      if [ -f "$dir/package.json" ]; then \
        echo "=== Building $name ===" && \
        (cd "$dir" && pnpm build --base "${BASE_PREFIX}${name}/") || exit 1; \
      fi; \
    done

# Build the landing index (reads each presentation.json, emits static HTML/CSS + logos)
RUN echo "=== Building landing ===" && \
    (cd packages/landing && node build.js)

# Collect all outputs mirroring BASE_PREFIX so container filesystem matches external URLs.
# Order matters: presentations first (into subdirs), then landing files at the prefix root.
RUN mkdir -p "/output${BASE_PREFIX}" && \
    for dir in presentations/*/; do \
      name=$(basename "$dir"); \
      if [ -d "$dir/dist" ]; then \
        cp -r "$dir/dist" "/output${BASE_PREFIX}$name"; \
      fi; \
    done && \
    cp -r packages/landing/dist/. "/output${BASE_PREFIX}"

# ------ serve ------
FROM nginx:alpine

COPY --from=build /output /usr/share/nginx/html

EXPOSE 80
