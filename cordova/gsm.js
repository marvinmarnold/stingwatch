var refreshPeriod = 1 * 1000 // 1 hour

if(Meteor.isCordova) {
  Meteor.startup(function () {
    startRefreshing();
  });

  var refresh = function() {
    if(termsAccepted()) {
      telephony.getCid(function(result) {

        var gsmReading = {
          commonReading: {
            deviceId: DeviceId.get(),
            readingType: Catcher.READING_TYPES.GSM,
            deviceScannerId: 2,
          },
          mcc: parseInt(result),
          mnc: parseInt(result),
          cid: parseInt(result),
          lac: parseInt(result),
        }

        // Meteor.call('_debug', telephonyEntry)

        Meteor.call('catcher/readings/insert', gsmReading)
      }, function(error) {
        _log("gsm error")
      //   _debug(error)
      })
    }
  }

  var startRefreshing = function() {
    refresh();

    Meteor.setTimeout(function () {
      // Meteor.call('_log', 'log working')

      startRefreshing()
    }, refreshPeriod);
  }
}
