FROM node:14

WORKDIR /home/

COPY . .

RUN npm i express

CMD ["node", "index.js"]
