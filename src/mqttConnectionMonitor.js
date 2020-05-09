/**
 * Solace application utilities for Node-RED:
 * Package: app.mqttConnectionMonitor
 * Copyright Solace Corporation and other contributors <https://solace.com/>
 * Released under Apache 2.0 license
 */

 {
   try {
     var _thisModule = 'mqttConnectionMonitor.js';
     var _utilsModule='node-red-contrib-solace-utils';
     var _flowSubModule = 'flow';
     var flow = require(_utilsModule)[_flowSubModule];
     if(flow === undefined) throw "cannot find sub-mobule '" + _flowSubModule + "'";
   } catch(e) {
     throw _thisModule + ": error loading '" + _utilsModule + "':" + e;
   }
 }

/* private functions ----------------------*/

var _meta = {
  packageId: 'app',
  componentId: 'mqttConnectionMonitor',
  version: '0.1.1',
  shortName: 'mqttCm'
}

/**
* general functions
*/
function getMetaInfo() {
  _meta = flow.getMetaInfo(_meta);
  return _meta;
}

function getDefaultPropertiesObject() {
  return {
    currentStatus: {
      status: 'unknown',
      details: {}
    },
    previousStatus: {}
  }
}

module.exports = {
  getMetaInfo,
  getDefaultPropertiesObject
}

// The end.
