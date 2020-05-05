# solace-asapio-demo

Demonstration of Solace + ASAPIO interacting with SAP ERP.

## Overview

The demonstrator consists of:
- an SAP system hosted by ASAPIO
- an ASAPIO Cloud Integration (ACI) instance deployed on the SAP system
- an on-premise Solace broker HA instance deployed in ASAPIO's data center
- a Solace Cloud broker running in AWS Frankfurt, bridged into the on-premise broker

and finally, this Node-RED based Order System that:
- loads a product catalog as defined in SAP Sales & Distribution
- allows the user to place an order in SAP (sends an Mqtt event to ACI)
- receives SAP Events triggered by the creation of a new sales order

As it is written in Node-RED, it is a single instance, single user system.
Which means installation on your local machine.

## Installation

### Install Node.js & npm

For example, get it from here: https://www.npmjs.com/get-npm

Update to latest npm:
```bash
$ npm install npm@latest -g
```
Note: on a Mac, if you run into '... missing write access ...' to the npm folders, you could do this:
```bash
$ cd /usr/local/lib
$ sudo chmod -R ugo+w ./node_modules
<type in your password>

$ cd /usr/local/share
$ sudo chmod -R ugo+w ./man

$ cd /usr/local
$ sudo chmod ugo+w ./bin

<now install npm again>

```

### Install Node-RED

Check: https://nodered.org/docs/getting-started/local

For example, install it with npm locally:
```bash
sudo npm install -g --unsafe-perm node-red
```

### Install Node-RED Dashboard

todo:

### Install Solace Node-RED Utilities

- git clone all the other projects


This installs the local dependencies into ``<install-dir>/bosch-xdk110-solace-mqtt-app/node-red/node_modules``:
```bash
$ cd <install-dir>/bosch-xdk110-solace-mqtt-app/node-red
$ npm install
```

### Install the Node-RED Demo

todo ...


### Start the Demo Server

./start-node-red.sh

### Connect to the UI

Point your browser at: http://127.0.0.1:1882/ui/

---
**backup from here**



### Configure

#### Scripts
* copy ``start-node-red.sh.template`` to ``start-node-red.sh``
* change permissions: ``chmod u+x start-node-red.sh``
* edit ``start-node-red.sh``: enter the Solace broker connection parameters
* start node red: ``./start-node-red.sh``
* you will get a message like this:

```bash
... Waiting for missing types to be registered:
... and a list of modules
...
Server now running at http://127.0.0.1:1880/
```
#### Node-RED
* Point your browser at the server url: http://127.0.0.1:1880/
* Go to: manage palletes
  - install 'node-red-dashboard'
  - install 'node-red-contrib-mytimeout'

#### Credentials
**TODO**
- work out how to store credentials locally in plain text
  - enter the env vars in there?
- also for SEMPv2 -> env vars!




---
The End.
