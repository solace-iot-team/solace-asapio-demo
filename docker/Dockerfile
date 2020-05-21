###########################################################################
# Dockerfile
#
###########################################################################

FROM node

RUN \
  npm install -g --unsafe-perm node-red@1.0.6 && \
  npm install -g --unsafe-perm node-red-dashboard@2.22.1

WORKDIR /usr/local/sap-demo

RUN \
  git clone https://github.com/solace-iot-team/node-red-contrib-solace-utils.git && \
  git clone https://github.com/solace-iot-team/solace-asapio-demo.git

WORKDIR /usr/local/sap-demo/solace-asapio-demo

RUN ./install.sh

COPY start.sh .

CMD ./start.sh

# The end.
