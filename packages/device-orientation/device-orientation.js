DeviceOrientation = function() {}
ORIENTATIONS =  {
    UP: "UP",
    LEFT: "LEFT",
    RIGHT: "RIGHT",
    UNKNOWN: "UNKNOWN"
  }

_.extend(DeviceOrientation, {
  SESSION_ORIENTATION: "screen-orientation",
  ORIENTATIONS: ORIENTATIONS,
  isLandscape(orientation) {
    return (orientation === this.ORIENTATIONS.RIGHT) ||
      (orientation === this.ORIENTATIONS.LEFT)
  }
})
