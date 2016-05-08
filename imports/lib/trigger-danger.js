import { Session } from 'meteor/session';
import { SESSION_STATUS, STATUSES } from '../globals.js';

const triggerDuration = 3510; // ms

export function triggerDanger() {
  Session.set(SESSION_STATUS, STATUSES.DANGER);
  Session.set(STATUSES.DANGER_TRIGGERED, true);

  Meteor.setTimeout(() => {
    Session.set(STATUSES.DANGER_TRIGGERED, false)
  }, triggerDuration);
}
