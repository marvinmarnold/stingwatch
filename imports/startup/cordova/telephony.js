// Primary class for collecting readings to be used in detections
// Tries to read values from cordova-plugin-telephony every refreshPeriod
import { Meteor } from 'meteor/meteor';
import { RLS } from 'meteor/marvin:reactive-local-store';
import { SETTINGS } from '../../globals.js';
import { Catcher } from 'meteor/marvin:imsi-catcher-catcher';
import { DeviceId } from 'meteor/marvin:device-id';

const refreshPeriod = 1000 * 15;
let maximumAge = 60000;

export function startupTelephony() {
  readValues();

  Meteor.setTimeout(function () {
    startupTelephony()
  }, refreshPeriod);
}

function readLocation(telephonyResult) {
  // Different phones work better with different values, so trade off
  if(maximumAge === 60000) {
    maximumAge = 0;
  } else {
    maximumAge = 60000;
  }
  console.log('reading location with max age: ' + maximumAge);
  // Geolocation.latLng((lat, lng) => {
  //   console.log('received some sort of response geolocation');
  //   console.log('meteor ' + lat + ", " + lng);
  // })
  let geo = Geolocation.latLng()
  console.log('meteor geo');
  console.log(geo);
  
  navigator.geolocation.getCurrentPosition(pos => {
    // console.log('gps data received');

    insertGSMReading(telephonyResult, pos)
  },
  error => {
    console.log('error getting gps data');
    console.log(error);

    insertGSMReading(telephonyResult, {coords: {latitude: -99999, longitude: -99999}})
  }, { maximumAge: maximumAge, timeout: 10000, enableHighAccuracy: true });
}

function readValues() {
  // console.log("Telephony readValues");

  // Read telephony values from device through cordova-plugin-telephony
  if(RLS.get(SETTINGS.TERMS_ACCEPTED)) {

    window.plugins.telephony.requestReadPermission( () => {
      // Start listener for telephony changes
      window.plugins.telephony.listenTelephonyInfo( () => {
        console.log("Started to listen for telephony changes");
      });

      // Read telephony values currently available
      // Note: Seems like some values are only available on state change
      window.plugins.telephony.getTelephonyInfo(result => {
        console.log('Telephony received data');
        console.log(result);
        createNeighborReadings(result);

        readLocation(result);
      }, error => {
        console.log('telephony error');
      });
    })
  }
}

function insertGSMReading (result, pos) {
  // console.log('insertGPS reading');
  // console.log(result);

  var gsmReading = {
    commonReading: {
      deviceId: DeviceId.get(),
      readingType: result.phoneType,
      deviceScannerId: 2
    },
    mcc: parseInt(result.mcc) || -1,
    mnc: parseInt(result.mnc) || -1,
    lac: parseInt(result.lac) || -1,
    cid: parseInt(result.cid) || -1,
    psc: parseInt(result.psc) || -1,
    latitude: pos.coords.latitude || -1,
    longitude: pos.coords.longitude || -1,
    signalStrengthDBM: parseInt(result.signalStrength) || -1,
    hasNeighbors: result.neighbors && result.neighbors.length > 0
  }

  console.log('about to insert GSMReading');
  console.log(gsmReading);

  Meteor.call('catcher.readings.insert', gsmReading, (error, result) => {
    // console.log('after insert');
    // console.log(error);
    // console.log(result);
  })
}

function createNeighborReadings(result) {
  // console.log('createNeighborReadings');
  var neighbors = result.neighbors

  if(neighbors) {
    // console.log('Creating neighbors');
    _.each(neighbors, neighbor => {
      var neighborReading = {
        commonReading: {
          deviceId: DeviceId.get(),
          readingType: Catcher.READING_TYPES.ANDROID_V1_NEIGHBOR,
          deviceScannerId: 2
        },
        networkType: neighbor.networkType,
        lac: parseInt(neighbor.lac) || -1,
        cid: parseInt(neighbor.cid) || -1,
        psc: parseInt(neighbor.psc) || -1,
        signalStrengthDBM: parseInt(result.signalStrength) || -1
      }

      // console.log(neighborReading);
      Meteor.call('catcher.readings.insert', neighborReading)
    })
  }
}
