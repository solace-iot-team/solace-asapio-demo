/**
 * Solace application utilities for Node-RED:
 * Package: app.productCatalog
 * Copyright Solace Corporation and other contributors <https://solace.com/>
 * Released under Apache 2.0 license
 */

 {
   try {
     var _thisModule = 'productCatalog.js';
     var _utilsModule='node-red-contrib-solace-utils';

     var _flowSubModule = 'flow';
     var flow = require(_utilsModule)[_flowSubModule];
     if(flow === undefined) throw "cannot find sub-mobule '" + _flowSubModule + "'";

     var _miscSubModule = 'misc';
     var misc = require(_utilsModule)[_miscSubModule];
     if(flow === undefined) throw "cannot find sub-mobule '" + _miscSubModule + "'";

   } catch(e) {
     throw _thisModule + ": error loading '" + _utilsModule + "':" + e;
   }
 }

/* private functions ----------------------*/

var _meta = {
  packageId: 'app',
  componentId: 'productCatalog',
  version: '0.1.0',
  shortName: 'prodCat'
}



/* export functions ----------------------*/
/**
* element functions
*/
function getStateElementPath() { return 'xxx???'; }

function getProductCatalogStatePath() { return 'getAppControllerProductCatalogPath';}

/**
* general functions
*/
function getMetaInfo() {
  _meta = flow.getMetaInfo(_meta);
  return _meta;
}
function createInitializedStateObject() {
  return {
    path: getProductCatalogStatePath()
  };
}

function getStateBasePath() {
  return flow.getBasePath(_meta);
}

/**
* state functions
*/

/*
* msg.payload functions
*/


module.exports = {
  getMetaInfo,
  createInitializedStateObject,
  getStateBasePath,
}

 // The end.
