FROM node:latest
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
COPY package.json /usr/src/app/
ENV NODE_TLS_REJECT_UNAUTHORIZED=0
RUN npm set strict-ssl false
RUN npm install
COPY . /usr/src/app
EXPOSE 3000
CMD [ "npm", "start" ]