var refreshPeriod = 10 * 1000 // 1 hour

if(Meteor.isCordova) {
  Meteor.startup(function () {
    startRefreshing();
  });


}

var startRefreshing = function() {
  refresh();

  Meteor.setTimeout(function () {
    // Meteor.call('_log', 'log working')

    startRefreshing()
  }, refreshPeriod);
}

var refresh = function() {
  if(termsAccepted()) {
    telephony.refresh(result => {

      if(result.phoneType === Catcher.READING_TYPES.GSM) {
        navigator.geolocation.getCurrentPosition(pos => {
          insertGSMReading(result, pos)
        },
        error => {
          insertGSMReading(result, {coords: {latitude: -99999, longitude: -99999}})
        }, {maximumAge:600000, timeout:30000});
      }

    }, error => {
      // _log("gsm error")
    //   _debug(error)
    });
  }
}

var insertGSMReading = function(result, pos) {
  var gsmReading = {
    commonReading: {
      deviceId: DeviceId.get(),
      readingType: Catcher.READING_TYPES.GSM,
      deviceScannerId: 2,
    },
    mcc: parseInt(result.mcc),
    mnc: parseInt(result.mnc),
    lac: parseInt(result.lac),
    cid: parseInt(result.cid),
    psc: parseInt(result.psc),
    latitude: pos.coords.latitude,
    longitude: pos.coords.longitude
  }

  Meteor.call('catcher/readings/insert', gsmReading)
}
