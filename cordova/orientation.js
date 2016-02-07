if(Meteor.isCordova) {
  Meteor.startup(function () {
    Session.set(ORIENTATIONS.ORIENTATION, getOrientationName(window.orientation))

    window.addEventListener("orientationchange", function() {
      Meteor.call('_log', "orientationchange")

      var orientationDeg = window.orientation
      Meteor.call('_log', orientationDeg.toString())

      var orientationName = getOrientationName(orientationDeg)
      Session.set(ORIENTATIONS.ORIENTATION, orientationName)

      Meteor.call('_log', orientationName)
    });
  });

  var getOrientationName = function(orientationDeg) {
    Meteor.call('_log', "getOrientationName")

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
