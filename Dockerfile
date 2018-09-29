
#build
FROM duluca/minimal-node-build-env:8.9.4 as builder
RUN mkdir -p /usr/src
WORKDIR /usr/src
RUN git clone https://github.com/ghoul007/mart.git .
RUN npm install
RUN npm run build

#test
FROM slapers/alpine-node-chromium as tester
RUN mkdir -p /usr/src
WORKDIR /usr/src
COPY --from=builder /usr/src /usr/src
CMD 'npm run test'

#web server
FROM duluca/minimal-nginx-web-server:1.13.8-alpine
COPY --from=builder usr/src/dist/mart /var/www
CMD 'nginx'