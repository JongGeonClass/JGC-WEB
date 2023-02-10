FROM node:alpine

COPY . /jgc

WORKDIR /jgc

RUN npm install && \
    npm run build

ENTRYPOINT ["npm run start"]