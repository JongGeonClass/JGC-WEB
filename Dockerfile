FROM node:alpine

COPY . /jgc

RUN cd /jgc && \
    npm install && \
    npm run build

ENTRYPOINT ["npm run start"]