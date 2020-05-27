
#!/bin/bash

#################################################
# Start node RED
#

SETTINGS_FILE="solace-asapio-demo-settings-locked.js"

if [ -z ${IS_LOCKED+x} ]; then
  # IS_LOCKED is not set
  SETTINGS_FILE="solace-asapio-demo-settings.js"
fi

#echo "SETTINGS_FILE=$SETTINGS_FILE"

# size is in Mega Bytes
node --max-old-space-size=1024 /usr/local/bin/node-red -v -s $SETTINGS_FILE



# The End.
