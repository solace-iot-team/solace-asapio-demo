/**
 * Solace application utilities for Node-RED:
 * Package: main.order
 * Copyright Solace Corporation and other contributors <https://solace.com/>
 * Released under Apache 2.0 license
 */

var flow = require('node-red-contrib-solace-utils/flow.js');

/* private functions ----------------------*/

var _meta = {
  packageId: 'app',
  componentId: 'order',
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
function getOrderEntriesPath() {
  return flow.getBasePath(_meta) + '.orderEntries';
}
function getNewOrderPath() {
  return flow.getBasePath(_meta) + '.order';
}
function getOrderReferencePath() {
  return getNewOrderPath() + '.orderReference';
}
module.exports = {
  getMetaInfo,
  getOrderEntriesPath,
  getNewOrderPath,
  getOrderReferencePath
}

 // The end.
