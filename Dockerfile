FROM node:latest
WORKDIR /app
COPY ./backFront .
RUN npm install
ENTRYPOINT ["npm", "start"]
