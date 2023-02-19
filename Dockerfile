FROM node:19-alpine

COPY . /jgc

WORKDIR /jgc

RUN npm install -g pnpm

RUN pnpm install && \
    pnpm run build

ENTRYPOINT ["pnpm", "run", "start"]