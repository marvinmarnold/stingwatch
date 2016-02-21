var refreshPeriod = 10 * 1000 // 1 hour

if(Meteor.isCordova) {
  Meteor.startup(function () {
    startRefreshing();
  });

  var refresh = function() {
    if(termsAccepted()) {
      telephony.getCid(function(result) {
        var gsmReading;
        // Meteor.call('_log', result.lac || "cat")
        if(result.phoneType === Catcher.READING_TYPES.GSM) {
          gsmReading = {
            commonReading: {
              deviceId: DeviceId.get(),
              readingType: Catcher.READING_TYPES.GSM,
              deviceScannerId: 2,
            },
            mcc: parseInt(result.mcc) || -1,
            mnc: parseInt(result.mnc) || -1,
            lac: parseInt(result.lac) || -1,
            cid: parseInt(result.cid) || -1,
            psc: parseInt(result.psc) || -1,
          }
        } else {
          gsmReading = {
            commonReading: {
              deviceId: DeviceId.get(),
              readingType: Catcher.READING_TYPES.GSM,
              deviceScannerId: 3,
              debug: result.phoneType
            },
            mcc: parseInt(result.phoneType),
            mnc: parseInt(result.phoneType),
            cid: parseInt(result.phoneType),
            lac: parseInt(result.phoneType),
          }
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
