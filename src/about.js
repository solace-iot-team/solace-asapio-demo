/**
 * Solace application utilities for Node-RED:
 * Package: main.about
 * Copyright Solace Corporation and other contributors <https://solace.com/>
 * Released under Apache 2.0 license
 */

var flow = require('node-red-contrib-solace-utils/flow.js');

/* private functions ----------------------*/

var _meta = {
  packageId: 'app',
  componentId: 'about',
  version: '0.2.0'
}

/* export functions ----------------------*/
/**
* general functions
*/
function getMetaInfo() {
  _meta = flow.getMetaInfo(_meta);
  return _meta;
}

module.exports = {
  getMetaInfo
}

 // The end.
