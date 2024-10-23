FROM nginx:latest 
MAINTAINER ramanijadala3118@gmail.com 
RUN apt install -y curl
COPY index.html /usr/share/nginx/html/
COPY scorekeeper.js /usr/share/nginx/html/
COPY style.css /usr/share/nginx/html/
COPY error.html /usr/share/nginx/html/
COPY ngnix_default.config /etc/nginx/sites-enabled/default
CMD ["nginx", "-g", "daemon off;"]
