FROM nginx:alpine

WORKDIR /usr/share/nginx/html

COPY build/ .

EXPOSE 7002

CMD ["nginx", "-g", "daemon off;"]
