FROM node:14-alpine
WORKDIR /dir
ADD package.json package.json
RUN npm install
ADD . .
RUN npm run build
CMD [ "npm", "run", "dev" ]
EXPOSE 3000
