# Use the node image
FROM node:alpine

RUN npm install
RUN npm install -g @angular/cli

RUN ng new my-app

RUN cd my-app

RUN ng serve --open
