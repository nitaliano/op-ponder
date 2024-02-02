FROM node:18.19-bullseye-slim AS base

RUN apt-get update \
  && apt-get install -y libvips libxtst6 libxss1 curl \
  git ca-certificates python3 pkg-config build-essential --no-install-recommends

ENV NODE_ENV=production

COPY ./extra-certs.crt /usr/local/share/ca-certificates/extra-certs.crt
ENV NODE_EXTRA_CA_CERTS=/usr/local/share/ca-certificates/extra-certs.crt

WORKDIR /app
COPY ./ ./

RUN npm install pnpm --global
RUN pnpm install

CMD ["pnpm", "start"]
