FROM node:14

WORKDIR /home/

COPY . .

WORKDIR /home/nodetest/

RUN npm i express

CMD ["node", "index.js"]
