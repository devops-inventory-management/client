# Heavyweight image that contains all the necessary dependencies and the full application to build the project
FROM node:22.3.0-bookworm as base
WORKDIR /app
RUN npm i -g pnpm
COPY package.json pnpm-lock.yaml ./

RUN pnpm install

COPY . .
RUN pnpm build

# Lightweight image that contains only the necessary dependencies and the built application to run the project
FROM node:22-alpine3.19 as release
WORKDIR /app
RUN npm i -g pnpm

COPY --from=base /app/node_modules ./node_modules
COPY --from=base /app/package.json ./package.json
COPY --from=base /app/.next ./.next

EXPOSE 3000

CMD ["pnpm", "start"]