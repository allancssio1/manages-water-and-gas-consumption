FROM node:20 AS base

FROM base AS dependencies

WORKDIR /usr/src/app

COPY package.json ./

COPY .env ./

RUN npm install

FROM base AS build

WORKDIR /usr/src/app

COPY . .
COPY --from=dependencies /usr/src/app/node_modules ./node_modules

RUN npm run build
RUN npm prune --prod

FROM base AS deploy

WORKDIR /usr/src/app

COPY --from=build /usr/src/app/dist ./dist
COPY --from=build /usr/src/app/node_modules ./node_modules
COPY --from=build /usr/src/app/package.json ./package.json
COPY --from=build /usr/src/app/prisma ./prisma
COPY .env ./

RUN npx prisma generate

EXPOSE 	3333

CMD [ "npm", "run", "start" ]