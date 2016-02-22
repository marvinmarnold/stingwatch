var refreshPeriod = 24 * 60 * 60 * 1000 // 1 day

if(Meteor.isCordova) {
  Meteor.startup(function () {
    startRefreshing();
  });

  var refresh = function() {
    if(termsAccepted()) {
      window.plugins.sim.getSimInfo(function(result) {

        var simReading = {
          commonReading: {
            deviceId: DeviceId.get(),
            readingType: Catcher.READING_TYPES.ANDROID_V1_SIM,
            deviceScannerId: 1,
          },
          mcc: parseInt(result.mcc),
          mnc: parseInt(result.mnc),
          carrierName: result.carrierName,
          countryCode: result.countryCode
        }

        Meteor.call('catcher/readings/insert', simReading)
      }, function(error) {
      })
    }
  }

  var startRefreshing = function() {
    refresh();

    Meteor.setTimeout(function () {
      startRefreshing()
    }, refreshPeriod);
  }
}
