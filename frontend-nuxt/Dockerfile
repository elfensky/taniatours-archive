# start with a node alpine base image
FROM node:16.13.0-alpine3.14
# FROM node:lts as builder

# create destination directory
RUN mkdir -p /app
WORKDIR /app

# update and install dependency
RUN apk update && apk upgrade
RUN apk add git

# copy the app, note .dockerignore
COPY . /app
# install all dependencies
RUN npm install 

# build the nuxt.js application for production (instead of npm run dev)
RUN npm run build

# set environment variables for nuxt app
ENV NUXT_HOST 0.0.0.0
ENV NUXT_PORT=9000

# expose port 9000 from the container to OS
EXPOSE 9000

# start nuxt app
# RUN npm run start 
CMD [ "npm", "start" ]