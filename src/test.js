/**
 * Solace application utilities for Node-RED:
 * Package: main.test
 * Copyright Solace Corporation and other contributors <https://solace.com/>
 * Released under Apache 2.0 license
 */

 {
   try {
     var _thisModule = 'test.js';
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
  componentId: 'test',
  version: '0.1.0'
}

/* export functions ----------------------*/
/**
* general functions
*/
function getMetaInfo() {
  _meta = flow.getMetaInfo(_meta);
  return _meta;
}


/*

{
  "entries": {
    "quantity": 1,
    "sku": "CONTROLLER-2",
    "shipTo": "CE01",
    "shipDate": 1590662895857,
    "shipDateISO": "2020-05-28T10:48:15.857Z"
  }
}
*/
function composeOrderEntries() {

  let shipDate = new Date();
  shipDate.setDate(shipDate.getDate() + 5); 

  let entries = {
    quantity: 1,
    sku: 'CONTROLLER-2',
    shipTo: 'CE01',
    shipDateISO: shipDate.toISOString()
  };
  return entries;
}



module.exports = {
  getMetaInfo,
  composeOrderEntries
}

 // The end.
