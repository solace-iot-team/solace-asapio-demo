###########################################################################
# Dockerfile
###########################################################################


# KNOWN ISSUES:
# node red tested with:
# - node: v12.16.3
# this version has:
# - node: v12.17.0
# installing node-red throws errors
# but application still works
#

FROM node:12-alpine

RUN apk add bash

RUN \
  npm install -g --unsafe-perm node-red@1.0.6 && \
  npm install -g --unsafe-perm node-red-dashboard@2.22.1

WORKDIR /usr/local/sap-demo

ADD https://github.com/solace-iot-team/node-red-contrib-solace-utils/archive/master.zip ./node-red-contrib-solace-utils-master.zip
ADD https://github.com/solace-iot-team/solace-asapio-demo/archive/master.zip ./solace-asapio-demo-master.zip

RUN \
  unzip node-red-contrib-solace-utils-master.zip && \
  rm node-red-contrib-solace-utils-master.zip && \
  mv node-red-contrib-solace-utils-master node-red-contrib-solace-utils && \
  unzip solace-asapio-demo-master.zip && \
  rm solace-asapio-demo-master.zip && \
  mv solace-asapio-demo-master solace-asapio-demo

WORKDIR /usr/local/sap-demo/solace-asapio-demo

RUN ./install.sh

COPY start.sh .

CMD ./start.sh

# The end.
