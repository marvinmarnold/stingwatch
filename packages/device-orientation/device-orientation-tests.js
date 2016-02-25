// Import Tinytest from the tinytest Meteor package.
import { Tinytest } from "meteor/tinytest";

// Import and rename a variable exported by device-orientation.js.
import { DeviceOrientation } from "meteor/device-orientation";

Tinytest.add('orientations defined', function (test) {
  test.equal(DeviceOrientation.ORIENTATIONS.UP, "device-orientation-up");
});
