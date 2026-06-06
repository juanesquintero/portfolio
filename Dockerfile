# Multi-stage Dockerfile for the Astro portfolio.
# - `dev`     → hot-reloading local dev server (used by docker-compose)
# - `preview` → serves the production static build locally
# The project uses a bun.lockb lockfile, so we build on the official bun image.

ARG BUN_VERSION=1.3.11

############################
# Base
############################
FROM oven/bun:${BUN_VERSION}-slim AS base
WORKDIR /app
ENV ASTRO_TELEMETRY_DISABLED=1

############################
# Install dependencies (cached layer)
############################
FROM base AS deps
COPY package.json bun.lockb ./
RUN bun install --frozen-lockfile

############################
# Development — hot reload
############################
FROM base AS dev
ENV NODE_ENV=development
COPY --from=deps /app/node_modules ./node_modules
COPY . .
EXPOSE 4321
# --host exposes the dev server outside the container
CMD ["bun", "run", "dev", "--", "--host", "0.0.0.0"]

############################
# Build the static site
############################
FROM deps AS build
ENV NODE_ENV=production
COPY . .
RUN bun run build

############################
# Preview the production build
############################
FROM base AS preview
ENV NODE_ENV=production
COPY --from=deps /app/node_modules ./node_modules
COPY --from=build /app/dist ./dist
COPY package.json astro.config.mjs ./
EXPOSE 4321
CMD ["bun", "run", "preview", "--", "--host", "0.0.0.0"]
