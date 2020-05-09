/**
 * Solace application utilities for Node-RED:
 * Package: main.events
 * Copyright Solace Corporation and other contributors <https://solace.com/>
 * Released under Apache 2.0 license
 */

 {
   try {
     var _thisModule = 'events.js';
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
  componentId: 'events',
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


function composeTopic(topicSchema, sapEventMeta) {
  return "sap_demo/BUS2032/sap-bo-data/create/json/v1/asadev/1000/system1/" + sapEventMeta.externalReference;
}
/*
let sapEventMeta = {
    eventName: 'createSalesOrder',
    properties: {
        qos: 1
    },
    schemas: eventSchemas,
    channel: channel,
    entries: order.orderEntries,
    timestamp: order.orderCreatedTimestamp,
    eventId: order.orderReference,
    correlationId: order.orderReference,
    externalReference: order.orderReference
};

let event = sau.events.composeSAPCreateSalesOrderEvent(sapEventMeta);

msg.topic = event.topic;
msg.payload = event.payload;
msg.qos = event.properties.qos;
*/
function composeSAPCreateSalesOrderEvent(sapEventMeta) {

  try {
    let schema = misc.find(sapEventMeta.schemas, { 'name': sapEventMeta.eventName} );
    if(misc.isObjectEmpty(schema)) throw "cannot find schema in sapEventMeta, eventName: '" + sapEventMeta.eventName + "'";
    //console.log('composeSAPCreateSalesOrderEvent: schema = \n' + JSON.stringify(schema, null, 1));

    let topic = composeTopic(schema.topicSchema, sapEventMeta);
    let properties = sapEventMeta.properties;

    let eventMetaData = schema.metaData;
    eventMetaData.topic = topic;
    eventMetaData.eventId = sapEventMeta.eventId;
    eventMetaData.correlationId = sapEventMeta.correlationId;
    eventMetaData.timestamp = sapEventMeta.timestamp;

    let payload = {
      eventMetaData: eventMetaData,
      data: {
        externalReference: sapEventMeta.externalReference,
        channel: sapEventMeta.channel,
        partner: {
          soldToId: sapEventMeta.entries.shipTo,
          shipToId: sapEventMeta.entries.shipTo
        },
        deliveryInstructions: {
          notBefore: sapEventMeta.entries.shipDateISO
        },
        items: [
          {
            matnr: sapEventMeta.entries.sku,
            quantity: sapEventMeta.entries.quantity
          }
        ]
      }
    }

    let event = {
      topic: topic,
      properties: properties,
      payload: payload
    }

    return event;
  } catch(err) {
    throw "message:" +  err + ", source: '" + _meta.packageId + "." + _meta.componentId + ".composeSAPCreateSalesOrderEvent'";
  }
}

module.exports = {
  getMetaInfo,
  composeSAPCreateSalesOrderEvent,
}

 // The end.
