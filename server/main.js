import { Meteor } from 'meteor/meteor';
import { configTwitter } from '../imports/startup/server/twitter.js';
import '../imports/api/twitter.js';

Meteor.startup(() => {
  console.log("Starting client");
  configTwitter();
});
