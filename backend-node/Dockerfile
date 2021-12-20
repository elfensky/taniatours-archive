# start with a node alpine base image
FROM node:16.9.1-alpine
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

# build the node.js app for production (instead of npm run dev)
RUN npm run build

# set environment variables for nodejs app
ENV PORT=3001

# expose port 3001 from the container to OS
EXPOSE 3001

# RUN npm run start 
CMD [ "npm", "production" ]