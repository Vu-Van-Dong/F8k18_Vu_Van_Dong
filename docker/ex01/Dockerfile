
# install ubuntu 24.04
FROM ubuntu:24.04

# tao thu muc lam viec
WORKDIR /app

# cai nodejs va npm
RUN apt update
RUN apt install -y nodejs npm

# copy code vao container
COPY . /app

# lenh chay app
CMD ["node", "main.js"]
