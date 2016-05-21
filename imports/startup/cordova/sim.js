import { Meteor } from 'meteor/meteor';
import { RLS } from 'meteor/marvin:reactive-local-store';
import { SETTINGS } from '../../globals.js';
import { Catcher } from 'meteor/marvin:imsi-catcher-catcher';
import { DeviceId } from 'meteor/marvin:device-id';

const refreshPeriod = 1000 * 30 * 1;

export function startupSim() {
  readValues();

  Meteor.setTimeout(() => {
    startupSim()
  }, refreshPeriod);
}


function readValues() {
  if(RLS.get(SETTINGS.TERMS_ACCEPTED)) {
    window.plugins.sim.getSimInfo(result => {

      var simReading = {
        commonReading: {
          deviceId: DeviceId.get(),
          readingType: Catcher.READING_TYPES.ANDROID_V1_SIM,
          deviceScannerId: 1,
        },
        mcc: parseInt(result.mcc),
        mnc: parseInt(result.mnc),
        carrierName: result.carrierName,
        countryCode: result.countryCode
      }

      console.log('Going to insert SIM reading:');
      console.log(simReading);

      Meteor.call('catcher.readings.insert', simReading, (error, result) => {
        console.log(result);
      });
    })
  }
}
