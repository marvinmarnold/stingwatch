import { Meteor } from 'meteor/meteor';

import { startupSim } from '../imports/startup/cordova/sim.js';
// import { configRLS } from '../imports/startup/client/reactive-local-store.js';

if(Meteor.isCordova) {
  Meteor.startup(() => {
    startupSim();
    // startupTelephony();
  });
}
