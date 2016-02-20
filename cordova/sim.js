var refreshPeriod = 60 * 60 * 1000 // 1 hour

if(Meteor.isCordova) {
  Meteor.startup(function () {
    startRefreshing();
  });

  var refresh = function() {
    window.plugins.sim.getSimInfo(function(result) {
      var telephonyEntry = {
        readingType: Catcher.READING_TYPES.SIM,
        deviceScannerId: 1,
        mcc: parseInt(result.mcc),
        mnc: parseInt(result.mnc),
        carrierName: result.carrierName,
        countryCode: result.countryCode
      }

      // Meteor.call('_debug', telephonyEntry)

      Meteor.call('telephony-entries/add', telephonyEntry)
    }, function(error) {
    //   _log("error")
    //   _debug(error)
    })
  }

  var startRefreshing = function() {
    refresh();

    Meteor.setTimeout(function () {
      // Meteor.call('_log', 'log working')

      startRefreshing()
    }, refreshPeriod);
  }
}
