# Solace & Asapio Demonstrator to event-enable SAP ERP

Demonstration of Solace + ASAPIO interacting with SAP ECC, Sales & Distribution.

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
npm install npm@latest -g
```
Note: on a Mac, if you run into '... missing write access ...' to the npm folders, you could do this:
```bash
cd /usr/local/lib
sudo chmod -R ugo+w ./node_modules
<type in your password>

cd /usr/local/share
sudo chmod -R ugo+w ./man

cd /usr/local
sudo chmod ugo+w ./bin

<now install npm again>

```

### Install Node-RED

Check: https://nodered.org/docs/getting-started/local

For example, install it with npm:
```bash
sudo npm install -g --unsafe-perm node-red
```

### Install Node-RED Dashboard

```bash
cd solace-asapio-demo/node-red-user-dir

npm install -g node-red-dashboard
```

### Install Demo

Create a working directory where all the Node-RED code will live.

_**Note: you may be asked for your github credentials.**_

For example: **``sap-demo``**

```bash
cd sap-demo
```
```bash
git clone https://github.com/solace-iot-team/node-red-contrib-solace-utils.git
```
```bash
git clone https://github.com/solace-iot-team/node-red-contrib-solace-sempv2.git
```
```bash
git clone https://github.com/solace-iot-team/solace-asapio-demo.git
```
```bash

cd solace-asapio-demo

npm install .

(first time it may come up with errors, do it again)

npm install .

```

**TODO: The Solace Theme.txt**

copy sap-demo-theme.txt

  ~/.node-red/lib/themes/sap-demo-theme.txt

select or something ...

### Start the Demo Server

```bash

cd sap-demo/solace-asapio-demo

./start-node-red.sh

```
### Configure Mqtt Credentials

- go to: **Configuration nodes**
  - select: **SAP_DEMO_MQTT_BROKER**
  - tab: **Security**
  - **Username**
  ```
  $(SOLACE_SAP_DEMO_MQTT_BROKER_USER)
  ```
  - **Password**
  ```
  $(SOLACE_SAP_DEMO_MQTT_BROKER_PASSWORD)
  ```
  - **Update**
  - **Deploy**

### Connect to the UI

Point your browser at: http://127.0.0.1:1882/ui/

### Uninstall Node-RED

```
sudo npm -g remove node-red

sudo npm -g remove node-red-admin

rm -R ~/.node-red

```

---
The End.
