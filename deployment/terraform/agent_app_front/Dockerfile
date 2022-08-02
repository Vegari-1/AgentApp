FROM node:16-alpine AS builder
WORKDIR /app
COPY . .
RUN npm install && \
	sed -i -e "/REACT_APP_API_URL = /c\\REACT_APP_API_URL = ${API_URL}" .env && \
	npm run build --production

FROM nginx:1.21-alpine as execute
COPY ./nginx.conf /etc/nginx/nginx.conf
COPY ./gateway.conf /etc/nginx/gateway.conf
COPY --from=builder /app/build /usr/share/nginx/html/app
CMD sed -i \
        -e 's/PORT/'$PORT'/g' \
        -e 's/API_URL/'$API_URL'/g' \
        /etc/nginx/gateway.conf && \
    nginx -g 'daemon off;'