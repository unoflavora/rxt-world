FROM node:18-alpine AS base

FROM base AS deps
RUN apk add --no-cache libc6-compat
WORKDIR /app
COPY package.json ./
RUN npm install;

FROM base AS builder
RUN apk update && apk add curl
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
ENV NODE_ENV production
EXPOSE 3000

ENTRYPOINT ["/bin/sh", "-c"]
CMD ["npm run build; npm run start"]
