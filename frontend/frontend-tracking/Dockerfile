FROM node:19-alpine3.15 AS build
ENV REACT_APP_backend_host_task=localhost
WORKDIR /react-app
COPY package*.json .
RUN npm install 
COPY . .
RUN npm run build

FROM nginx:1.23.2-alpine
COPY --from=build /react-app/build /usr/share/nginx/html 
EXPOSE 80 
