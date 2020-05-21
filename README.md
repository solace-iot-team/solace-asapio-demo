# Solace & Asapio Demonstrator: Event-enabling SAP ERP

Demonstration of Solace + ASAPIO interacting with SAP ECC, Sales & Distribution.

**Version: 0.1.8**

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

For example: **``sap-demo``**

Execute the following commands in a bash shell:

```bash

curl -L -o node-red-contrib-solace-utils-master.zip https://github.com/solace-iot-team/node-red-contrib-solace-utils/archive/master.zip

unzip node-red-contrib-solace-utils-master.zip

mv node-red-contrib-solace-utils-master node-red-contrib-solace-utils

curl -L -o solace-asapio-demo-master.zip https://github.com/solace-iot-team/solace-asapio-demo/archive/master.zip

unzip solace-asapio-demo-master.zip

mv solace-asapio-demo-master solace-asapio-demo

cd solace-asapio-demo

./install.sh


```

#### Alternatively: Install using `git`

```bash
cd sap-demo
```
```bash
git clone https://github.com/solace-iot-team/node-red-contrib-solace-utils.git
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

### Uninstall the Demo

Delete files / directories in your `sap-demo` folder.

### Uninstall Node-RED

```
sudo npm -g remove node-red-dashboard

sudo npm -g remove node-red

```

---
The End.
