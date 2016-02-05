var refreshPeriod = 15 * 1000 // ms

if(Meteor.isCordova){
  refresh = function() {
    window.plugins.sim.getSimInfo(function(result) {
      // _log("result")
      // _debug(result)
      TelephonyEntries.insert({
        mcc: result.mcc,
        mnc: result.mnc
      })
    }, function(error) {
    //   _log("error")
    //   _debug(error)
    })
  }

  startRefreshing = function() {
    refresh();

    Meteor.setTimeout(function () {
      startRefreshing()
    }, refreshPeriod);
  }
}
