# NodeJS with docker container

## http

An example, which used the "http" module to create a website.
- auto jump to index.html.
- hidden the ".html" words.
- ran with docker, server don't install nodeJS.

### How to use
```sh
cd http
docker-compose up -d
```
This docker container gonna listen at port 80.

## net

An examply, which used the "net" module to create a communication(not website).
- when new socket connected, it gonna got a "Hello world!" text.
- If the server got a new text, the server will print it on the console line.

### How to use
```sh
cd net
docker-compose up -d
```
This docker container gonna listen at port 80.
