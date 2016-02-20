DeviceOrientation = function() {}
ORIENTATIONS =  {
    UP: "UP",
    LEFT: "LEFT",
    RIGHT: "RIGHT",
    UNKNOWN: "UNKNOWN"
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
