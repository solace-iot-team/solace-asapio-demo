# Install Demo as Container in Azure

* Have the Solace broker connection details & credentials ready

```bash

```

* Login to your Azure Account

* Create a resource group, e.g. ``solace-asapio-demo-docker-rg``

* Open a shell

All examples with Bash.

## Create the container

1. copy connection params & credentials into the command below
2. the client id must be unique for every instance
   - here we use $RANDOM function to generate a 4 digit number at random
   - alternative: ``$(date +%s)`` - returns milliseconds since epoch
   - both are not fool proof, but ususally sufficient to ensure no two servers use the same client id

```bash
az container create \
  --resource-group solace-asapio-demo-docker-rg \
  --name solace-asapio-demo-container \
  --image rjgu/solace-asapio-demo:latest \
  --ports 1882 \
  --dns-name-label solace-asapio-demo-$RANDOM \
  --location eastus \
  --environment-variables \
  'SOLACE_SAP_DEMO_MQTT_BROKER_HOST'='{host}' \
  'SOLACE_SAP_DEMO_MQTT_BROKER_PORT'='{port}' \
  'SOLACE_SAP_DEMO_MQTT_BROKER_USER'='{user}' \
  'SOLACE_SAP_DEMO_MQTT_BROKER_PASSWORD'='{password}' \
  'SOLACE_SAP_DEMO_MQTT_CLIENT_ID'='AZURE_SOLACE_ASAPIO_DEMO_ORDER_SYSTEM-'$RANDOM

```
## Check Container

Run this command to check the status of the container and to see the domain name.

```bash
az container show \
  --resource-group solace-asapio-demo-docker-rg \
  --name solace-asapio-demo-container \
  --query "{FQDN:ipAddress.fqdn,ProvisioningState:provisioningState}" \
  --out table
```

## Access from Browser

UI: **http://{the fqdn}:1882/ui**

Node-RED: **http://{the fqdn}:1882**

## Check the Container Logs

```bash
az container logs --resource-group solace-asapio-demo-docker-rg --name solace-asapio-demo-container
```

## Delete the Container

```bash
az container delete --name solace-asapio-demo-container --resource-group solace-asapio-demo-docker-rg
```

---
The End.
