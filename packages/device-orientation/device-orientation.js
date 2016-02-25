// Write your package code here!

// Variables exported by this module can be imported by other packages and
// applications. See device-orientation-tests.js for an example of importing.
export var DeviceOrientation = {};

ORIENTATIONS =  {
    UP: "device-orientation-up",
    LEFT: "device-orientation-left",
    RIGHT: "device-orientation-right",
    UNKNOWN: "device-orientation-unknown"
  }

ORIENTATION_SESSION_ID = "orientation-session-id"

_.extend(DeviceOrientation, {
  ORIENTATIONS: ORIENTATIONS,
  isLandscape() {
    return (this.get() === this.ORIENTATIONS.RIGHT) ||
      (this.get() === this.ORIENTATIONS.LEFT);
  },
  get() {
    return Session.get(ORIENTATION_SESSION_ID);
  }
})

Meteor.startup(function(){
  Session.setDefault(ORIENTATION_SESSION_ID, ORIENTATIONS.UNKNOWN);
});
