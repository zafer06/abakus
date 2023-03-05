#Dockerfile

FROM node:16

WORKDIR /app

COPY package.json package-lock.json ./

RUN npm install
RUN npm install vite

RUN cd /app

COPY . .

EXPOSE 5173

CMD ["npm", "run", "dev", "--", "--host"]
