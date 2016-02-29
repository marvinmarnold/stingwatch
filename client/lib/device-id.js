Meteor.startup(function () {
  // Generate a device id
  if(Meteor.isCordova) {
    DeviceId.gen(function(error, deviceId) {
      console.log('deviceId error');
      console.log(error);

      console.log('deviceId');
      console.log(deviceId);
    });
  }
});
