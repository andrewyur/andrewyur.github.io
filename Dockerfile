FROM ghcr.io/static-web-server/static-web-server:2
WORKDIR /
COPY . /public

CMD ["--port", "8080",  "--root",  "/public"]