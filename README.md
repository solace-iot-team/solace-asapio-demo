# Solace & Asapio Demonstrator: Event-enabling SAP ERP

Demonstration of Solace + ASAPIO interacting with SAP ECC, Sales & Distribution.

**Version: 0.1.5**

## Overview

The demonstrator consists of:
- an SAP system hosted by ASAPIO
- an ASAPIO Cloud Integration (ACI) instance deployed on the SAP system
- an on-premise Solace broker HA instance deployed in ASAPIO's data center
- a Solace Cloud broker running in AWS Frankfurt, bridged into the on-premise broker

This Node-RED based Order System Simulator:
- loads a product catalog as defined in SAP Sales & Distribution (SD)
- allows the user to place an order in SAP SD (sends an Mqtt event to ACI)
- receives SAP Events triggered by the creation of a new sales order

As it is written in Node-RED, it is a single instance, single user system.
Which means installation on a local machine.

## Installation

### Install Node.js & npm

For example, get it from here: https://www.npmjs.com/get-npm

Update to latest npm:
```bash
sudo npm install -g npm
```

### Install Node-RED

Check: https://nodered.org/docs/getting-started/local

For example, install it with npm:
```bash
sudo npm install -g --unsafe-perm node-red
```

### Install Node-RED Dashboard

```bash
sudo npm install -g --unsafe-perm node-red-dashboard
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

./install.sh

```

### Get the Start Script

Get the start script and copy to

```bash
sap-demo/solace-asapio-demo/{the-start-script}.sh
```
make it executable:

```bash
chmod u+x sap-demo/solace-asapio-demo/{the-start-script}.sh
```

### Start the Demo Server

```bash
sap-demo/solace-asapio-demo/{the-start-script}.sh
```

### Connect to the UI

Point your browser at: http://127.0.0.1:1882/ui/

### Uninstall Node-RED

```
sudo npm -g remove node-red-dashboard

sudo npm -g remove node-red

```

---
The End.
