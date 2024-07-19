FROM node:20.10.0-alpine

RUN npm install -g pnpm

WORKDIR /kikorp.dev

COPY package.json .

RUN pnpm install

COPY . .

RUN pnpm build

EXPOSE 3000

CMD [ "pnpm", "start" ]
