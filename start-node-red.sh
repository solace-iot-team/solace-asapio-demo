
#!/bin/bash


#################################################
# account: asapio
# service: DEMO-003
#

#################################################
# Solace SAP Demo Broker Mqtt Configuration
#
export SOLACE_SAP_DEMO_MQTT_BROKER_HOST="mr2e1x8xwzf5ot.messaging.solace.cloud"
export SOLACE_SAP_DEMO_MQTT_BROKER_PORT="1883"
# $(SOLACE_SAP_DEMO_MQTT_BROKER_USER)
export SOLACE_SAP_DEMO_MQTT_BROKER_USER="solace-cloud-client"
# $(SOLACE_SAP_DEMO_MQTT_BROKER_PASSWORD)
export SOLACE_SAP_DEMO_MQTT_BROKER_PASSWORD="s7amt0t52v6rs3je9d09gojn5r"
export SOLACE_SAP_DEMO_MQTT_CLIENT_ID="SOLACE_ASAPIO_DEMO_ORDER_SYSTEM@"$(date +%s)


#################################################
# Solace SAP Demo Broker SempV2 Configuration
#
export SOLACE_SAP_DEMO_BROKER_SEMPV2_BASE_PATH="https://mr2e1x8xwzf5ot.messaging.solace.cloud:943/SEMP/v2/config"
export SOLACE_SAP_DEMO_BROKER_SEMPV2_VPN="demo-003"
export SOLACE_SAP_DEMO_BROKER_SEMPV2_VIRTUAL_ROUTER="primary"
export SOLACE_SAP_DEMO_BROKER_SEMPV2_USER="demo-003-admin"
export SOLACE_SAP_DEMO_BROKER_SEMPV2_PASSWORD="cr06ljo6g2fc8ntu0at95tr4jd"
export SOLACE_SAP_DEMO_BROKER_SEMPV2_IS_SOLACE_CLOUD="true"

#################################################
# Start node RED
#
# size is in Mega Bytes
#
node --max-old-space-size=3072 /usr/local/bin/node-red -s solace-asapio-demo-settings.js



# The End.
