// var refreshPeriod = 5 * 60 * 60 * 1000 // 5 minute
var refreshPeriod = 3 * 1000 // 3 seconds

if(Meteor.isCordova) {
  Meteor.startup(function () {
    startRefreshing();
  });

  var refresh = function() {
    console.log(termsAccepted());
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

        Meteor.call('catcher/readings/insert', simReading, (error, result) => {
          // console.log(result);
        });
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
