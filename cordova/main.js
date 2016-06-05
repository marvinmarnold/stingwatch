import { Meteor } from 'meteor/meteor';

import { startupSim } from '../imports/startup/cordova/sim.js';
// import { startupDeviceId } from '../imports/startup/client/device-id.js';
import { startupNotifications } from '../imports/startup/cordova/notifications.js';
import { startupTelephony } from '../imports/startup/cordova/telephony.js';

Meteor.startup(() => {
  if(Meteor.isCordova) {
    console.log("Starting Cordova");

    startupSim();
    // startupDeviceId();
    startupNotifications();
    startupTelephony();
  }
});
