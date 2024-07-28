FROM node:14

WORKDIR /home/

COPY . .

RUN npm i express

EXPOSE 8080

CMD ["node", "index.js"]
