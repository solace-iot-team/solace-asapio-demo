/**
 * Solace application utilities for Node-RED:
 * Package: main.app
 * Copyright Solace Corporation and other contributors <https://solace.com/>
 * Released under Apache 2.0 license
 */

 {
   try {
     var _thisModule = 'app.js';
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
  componentId: 'controller',
  version: '0.1.8',
  shortName: 'app',
  id: 'solace-asapio-demo'
}

/* export functions ----------------------*/
/**
* general functions
*/
function getMetaInfo() {
  _meta = flow.getMetaInfo(_meta);
  return _meta;
}
function getId() { return _meta.id; }

function createInitializedStateObject() {
  return {
      isStartupComplete: false,
      isInitialized: false,
      isAppSolaceBrokerConnected: false,
      config: {},
      //interaction: {},
      deviceBrokers: {}
  };
}
/**
* state path functions
*/
function getIsStartupCompletePath(meta) {
  return flow.getBasePath(meta) + '.isStartupComplete';
}
function getIsInitializedPath(meta) {
  return flow.getBasePath(meta) + '.isInitialized';
}
function getIsAppSolaceBrokerConnectedPath(meta) {
  return flow.getBasePath(meta) + '.isAppSolaceBrokerConnected';
}
function getAboutPath(meta) {
  return flow.getBasePath(meta) + '.about';
}
function getConfigPath(meta) {
  return flow.getBasePath(meta) + '.config';
}
function getInteractionPath(meta) {
  return flow.getBasePath(meta) + '.interaction';
}
function getDevicesPath(meta) {
  return flow.getBasePath(meta) + '.devices';
}
function getDeviceSessionsPath(meta) {
  return flow.getBasePath(meta) + '.deviceSessions';
}
function getDeviceBrokersPath(meta) {
  return flow.getBasePath(meta) + '.deviceBrokers';
}
function getConfigfilePath(meta) {
  return flow.getBasePath(meta) + '.configfile';
}
function getConfigfileConfigPath(meta) {
  return getConfigfilePath(meta) + '.config';
}
function getProductCatalogConfigPath() {
  return getConfigfileConfigPath(_meta) + '.productCatalog';
}
function getAppChannelConfigPath() {
  return getConfigfileConfigPath(_meta) + '.app.channel';
}
function getAppPartnersConfigPath() {
  return getConfigfileConfigPath(_meta) + '.app.partners';
}
function getEventSchemasConfigPath() {
  return getConfigfileConfigPath(_meta) + '.eventSchemas';
}

module.exports = {
  getMetaInfo,
  getId,
  createInitializedStateObject,
  getIsStartupCompletePath,
  getIsInitializedPath,
  getIsAppSolaceBrokerConnectedPath,
  getAboutPath,
  getConfigPath,
  getInteractionPath,
  getDevicesPath,
  getDeviceSessionsPath,
  getDeviceBrokersPath,
  getConfigfilePath,
  getConfigfileConfigPath,
  getProductCatalogConfigPath,
  getAppChannelConfigPath,
  getAppPartnersConfigPath,
  getEventSchemasConfigPath
}

 // The end.
