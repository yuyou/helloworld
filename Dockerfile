FROM node:0.10
MAINTAINER Yu You <yu.you@nokia.com>

RUN mkdir /app
WORKDIR /app

#ADD . /app
ADD server.js /app/server.js

ENV PORT 8081
EXPOSE 8081

CMD ["node", "server.js"]
