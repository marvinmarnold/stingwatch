import { Meteor } from 'meteor/meteor';
import { RLS } from 'meteor/reactive-local-store';
import { SETTINGS } from '../../globals.js';

const refreshPeriod = 1000 * 15;

export function startupTelephony() {
  readValues();

  Meteor.setTimeout(function () {
    startupTelephony()
  }, refreshPeriod);
}

function readLocation(telephonyResult) {
  navigator.geolocation.getCurrentPosition(pos => {
    console.log('gps data received');

    insertGSMReading(telephonyResult, pos)
  },
  error => {
    console.log('error getting gps data');

    insertGSMReading(telephonyResult, {coords: {latitude: -99999, longitude: -99999}})
  }, { maximumAge: 10000, timeout: 5000, enableHighAccuracy: true });
}

function readValues() {
  console.log("Telephony readValues");

  // Read telephony values from device through cordova-plugin-telephony
  if(RLS.get(SETTINGS.TERMS_ACCEPTED)) {
    window.plugins.telephony.requestReadPermission( () => {
      window.plugins.telephony.getTelephonyInfo(result => {
        console.log('Telephony received data');
        console.log(result);
        createNeighborReadings(result)

        readLocation(result);
      }, error => {
        console.log('telephony error');
      });
    })
  }
}

function insertGSMReading (result, pos) {
  console.log('insertGPS reading');
  console.log(result);

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

  console.log('about to insert');
  console.log(gsmReading);

  Meteor.call('catcher/readings/insert', gsmReading, (error, result) => {
    console.log('after insert');
    console.log(error);
    console.log(result);
  })
}

function createNeighborReadings(result) {
  console.log('createNeighborReadings');
  var neighbors = result.neighbors

  if(neighbors) {
    console.log('Creating neighbors');
    _.each(neighbors, neighbor => {
      console.log(neighborReading);
      var neighborReading = {
        commonReading: {
          deviceId: DeviceId.get(),
          readingType: Catcher.READING_TYPES.ANDROID_V1_NEIGHBOR,
          deviceScannerId: 2
        },
        networkType: result.networkType,
        lac: parseInt(result.lac) || -1,
        cid: parseInt(result.cid) || -1,
        psc: parseInt(result.psc) || -1,
        signalStrengthDBM: parseInt(result.signalStrength) || -1
      }

      Meteor.call('catcher/readings/insert', neighborReading)
    })
  }
}
