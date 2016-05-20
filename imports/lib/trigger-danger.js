import { Session } from 'meteor/session';
import { SESSION_STATUS, STATUSES } from '../globals.js';
import { Catcher } from 'meteor/marvin:imsi-catcher-catcher';

const triggerDuration = 3510; // ms

export function triggerDanger() {
  Session.set(SESSION_STATUS, STATUSES.DANGER);
  Session.set(STATUSES.DANGER_TRIGGERED, true);

  Meteor.setTimeout(() => {
    Session.set(STATUSES.DANGER_TRIGGERED, false)
  }, triggerDuration);
}

// Trigger Danger if any detections found
export function watchDetections() {
  console.log('watchDetections');

  Tracker.autorun(() => {
    // if(!!Catcher.Detections.findOne())
    //   triggerDanger();
  });
}
