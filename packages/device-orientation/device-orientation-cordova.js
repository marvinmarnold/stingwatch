Meteor.startup(function () {
  Session.set(ORIENTATIONS.ORIENTATION, getOrientationName(window.orientation))

  window.addEventListener("orientationchange", function() {

    var orientationDeg = window.orientation
    var orientationName = getOrientationName(orientationDeg)
    Session.set(ORIENTATIONS.ORIENTATION, orientationName)

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
