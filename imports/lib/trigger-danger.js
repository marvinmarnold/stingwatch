import { Meteor } from 'meteor/meteor';
import { Session } from 'meteor/session';
import { SESSION_STATUS, STATUSES } from '../globals.js';
import { DeviceId } from 'meteor/marvin:device-id';

const triggerDuration = 3510; // ms

export function triggerDanger() {
  Session.set(SESSION_STATUS, STATUSES.DANGER);
  Session.set(STATUSES.DANGER_TRIGGERED, true);

  Meteor.setTimeout(() => {
    Session.set(STATUSES.DANGER_TRIGGERED, false)
  }, triggerDuration);

  // Create a fake detection so something will be displayed on Danger Page
  Meteor.call("catcher.simulate-detection", DeviceId.get(), (error, result) => {
    console.log('Got result from simulate-detection');
    if(error) {
      console.log("error", error);
    }
    if(result) {
      console.log(result);
    }
  });

}
