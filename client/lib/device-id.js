Meteor.startup(function () {
  // Generate a device id
  DeviceId.gen(function(error, deviceId) {});
});
