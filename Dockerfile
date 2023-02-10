FROM node:19-alpine

COPY . /jgc

WORKDIR /jgc

RUN npm install && \
    npm run build

ENTRYPOINT ["npm", "run", "start"]