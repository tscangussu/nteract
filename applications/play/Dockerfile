FROM node:8@sha256:06c7033a274aab131b07e7b8da8d1f823ee752a6e1e2bd46c0b459921ab2c39a
ADD . /playground
WORKDIR /playground
RUN npm install && npm run build

EXPOSE 3000

CMD ["/playground/node_modules/.bin/next", "start", "--host", "0.0.0.0"]
