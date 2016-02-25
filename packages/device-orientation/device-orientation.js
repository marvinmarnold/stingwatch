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
    var isLeft = (this.get() === this.ORIENTATIONS.LEFT),
        isRight = (this.get() === this.ORIENTATIONS.RIGHT)

    return isLeft || isRight
  },
  get() {
    return Session.get(ORIENTATION_SESSION_ID);
  }
})

Meteor.startup(function(){
  Session.setDefault(ORIENTATION_SESSION_ID, ORIENTATIONS.UNKNOWN);
});

if(Meteor.isCordova){
  Meteor.startup(function () {
    Session.set(ORIENTATION_SESSION_ID, getOrientationName(window.orientation))

    window.addEventListener("orientationchange", function() {

      var orientationDeg = window.orientation
      var orientationName = getOrientationName(orientationDeg)
      Session.set(ORIENTATION_SESSION_ID, orientationName)

    });
  });

  var getOrientationName = function(orientationDeg) {

    if(orientationDeg === 0) {
      return ORIENTATIONS.UP
    } else if (orientationDeg === -90) {
      return ORIENTATIONS.RIGHT
    } else if (orientationDeg === 90) {
      return ORIENTATIONS.LEFT
    } else {
      return ORIENTATIONS.UNKNOWN
    }
  }
}
