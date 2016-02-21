var refreshPeriod = 10 * 1000 // 1 hour

if(Meteor.isCordova) {

  Meteor.startup(function () {
    startRefreshing();
  });

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
        debug: result.debug
      },
      mcc: parseInt(result.mcc) || -1,
      mnc: parseInt(result.mnc) || -1,
      lac: parseInt(result.lac) || -1,
      cid: parseInt(result.cid) || -1,
      psc: parseInt(result.psc) || -1,
      latitude: pos.coords.latitude,
      longitude: pos.coords.longitude,
      signalStrengthDBM: parseInt(result.signalStrengthDBM) || -1
    }

    Meteor.call('catcher/readings/insert', gsmReading)
  }

}
