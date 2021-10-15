FROM node:lts-alpine

RUN npm install -g pnpm

WORKDIR /usr/app
