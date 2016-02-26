var refreshPeriod = 5 * 1000 // 1 day

if(Meteor.isCordova) {

  Meteor.startup(function () {
    startRefreshing();
  });

  var startRefreshing = function() {
    refresh();

    Meteor.setTimeout(function () {
      startRefreshing()
    }, refreshPeriod);
  }

  var refresh = function() {
    console.log('still running on cordova');
    if(termsAccepted()) {
      console.log('terms accepted');

      window.plugins.telephony.refresh(result => {
        console.log('telephony data');

        navigator.geolocation.getCurrentPosition(pos => {
          console.log('gps data received');

          insertGSMReading(result, pos)
        },
        error => {
          console.log('error getting gps data');

          insertGSMReading(result, {coords: {latitude: -99999, longitude: -99999}})
        }, { maximumAge: 10000, timeout: 5000, enableHighAccuracy: true });

      }, error => {
        console.log('telephony error');

        // var gsmReading = {
        //   debug: 'fail2',
        //   mcc: -1,
        //   mnc: -1,
        //   lac: -1,
        //   cid: -1,
        //   psc: -1,
        //   signalStrengthDBM: -1
        // }
        // insertGSMReading(gsmReading, {coords: {latitude: -99999, longitude: -99999}})
      });
    } else {
      console.log('terms not accepted');

      // var gsmReading = {
      //   debug: 'fail',
      //   mcc: -1,
      //   mnc: -1,
      //   lac: -1,
      //   cid: -1,
      //   psc: -1,
      //   signalStrengthDBM: -1
      // }
      // insertGSMReading(gsmReading, {coords: {latitude: -99999, longitude: -99999}})
    }
  }

  var insertGSMReading = function(result, pos) {
    console.log('insertGPS reading');
    console.log(result);
    var gsmReading = {
      commonReading: {
        deviceId: DeviceId.get(),
        readingType: result.phoneType,
        deviceScannerId: 2,
        debug: result.debug
      },
      mcc: parseInt(result.mcc) || -1,
      mnc: parseInt(result.mnc) || -1,
      lac: parseInt(result.lac) || -1,
      cid: parseInt(result.cid) || -1,
      psc: parseInt(result.psc) || -1,
      latitude: pos.coords.latitude || -1,
      longitude: pos.coords.longitude || -1,
      signalStrengthDBM: parseInt(result.signalStrengthDBM) || -1
    }

    console.log('about to insert');
    console.log(gsmReading);

    Meteor.call('catcher/readings/insert', gsmReading)
  }

}
