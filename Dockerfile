FROM strapi/base:12-alpine

WORKDIR /my-path

COPY ./package.json ./
COPY ./package-lock.json ./

RUN yarn install

COPY . .

ENV NODE_ENV production

RUN yarn build

EXPOSE 1337

CMD ["yarn", "start"]
