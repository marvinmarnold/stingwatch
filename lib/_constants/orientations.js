ORIENTATIONS = {
  ORIENTATION: "screen-orientation",
  UP: "UP",
  LEFT: "LEFT",
  RIGHT: "RIGHT",
  UNKNOWN: "UNKNOWN"
}

isLandscape = function(orientation) {
  return (orientation === ORIENTATIONS.RIGHT) || (orientation === ORIENTATIONS.LEFT)
}
