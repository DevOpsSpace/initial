FROM node:erbium-alpine3.14
LABEL MAINTAINER Sandeep Maurya <itssnmmaurya@gmail.com>

RUN apk add --no-cache bash curl procps dumb-init python3 py3-pip  git  --update make gcc &&\
   pip3 install --no-cache-dir awscli

# Non-Root user (snm)
RUN addgroup -g 7777 snm
RUN adduser -D -h /app snm -s /bin/false -u 7777 -G snm

USER snm

WORKDIR /app

COPY --chown=snm:snm package.json package-lock.json ./

RUN npm ci

COPY --chown=snm:snm . ./

# Define env vars
ARG NODE_ENV

# Fetch out env vars or set development in case the value of NODE_ENV is not supplied
ENV NODE_ENV=${NODE_ENV:-staging}

RUN npm run build

ENTRYPOINT [ "/usr/bin/dumb-init", "--" ]

RUN ["chmod", "+x", "/app/deployment/entrypoint.sh"]

CMD [ "/app/deployment/entrypoint.sh" ]

EXPOSE 3000