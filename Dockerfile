FROM node:carbon

MAINTAINER maximogarciamntez@gmail.com

WORKDIR /m2p/frontend

COPY package*.json ./

RUN	npm install 

COPY . .

CMD "ng serve -o"

EXPOSE 4200