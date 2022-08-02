FROM node:16-alpine AS builder

ARG API_URL="'http://localhost:8080/api'"

WORKDIR /app
COPY . .
RUN npm install && \
	sed -i -e "/REACT_APP_API_URL = /c\\REACT_APP_API_URL = ${API_URL}" .env && \
	npm run build --production

FROM nginx:1.21-alpine as execute
COPY ./nginx.conf /etc/nginx/nginx.conf
COPY ./gateway.conf /etc/nginx/gateway.conf
COPY --from=builder /app/build /usr/share/nginx/html/app
CMD nginx -g 'daemon off;'