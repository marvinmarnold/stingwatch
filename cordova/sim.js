var refreshPeriod = 15 * 1000 // ms

if(Meteor.isCordova) {
  Meteor.startup(function () {
    startRefreshing()
  });

  refresh = function() {
    window.plugins.sim.getSimInfo(function(result) {
      var telephonyEntry = {
        mcc: result.mcc,
        mnc: result.mnc
      }

      // Meteor.call('_debug', telephonyEntry)

      Meteor.call('telephony-entries/add', telephonyEntry)
    }, function(error) {
    //   _log("error")
    //   _debug(error)
    })
  }

  startRefreshing = function() {
    refresh();

    Meteor.setTimeout(function () {
      // Meteor.call('_log', 'log working')

      startRefreshing()
    }, refreshPeriod);
  }
}
