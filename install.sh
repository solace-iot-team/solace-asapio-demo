
#!/bin/bash

cd ../node-red-contrib-solace-utils
npm link

cd ../node-red-contrib-solace-sempv2
npm link node-red-contrib-solace-utils
#npm link

cd ../solace-asapio-demo

npm link node-red-contrib-solace-utils
npm link node-red-contrib-solace-sempv2
npm link ./src