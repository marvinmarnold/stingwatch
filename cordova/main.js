import { Meteor } from 'meteor/meteor';

import { startupSim } from '../imports/startup/cordova/sim.js';
import { startupDeviceId } from '../imports/startup/cordova/device-id.js';
// import { configRLS } from '../imports/startup/client/reactive-local-store.js';

Meteor.startup(() => {
  if(Meteor.isCordova) {
    console.log("Starting Cordova");

    startupSim();
    startupDeviceId();
    // startupTelephony();
  }
});
