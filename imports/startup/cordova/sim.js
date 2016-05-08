import { Meteor } from 'meteor/meteor';
import { RLS } from 'meteor/reactive-local-store';
import { SETTINGS } from '../../globals.js';

const refreshPeriod = 1000 * 30 * 1;

const readValues = () => {

  if(RLS.get(SETTINGS.TERMS_ACCEPTED)) {
    window.plugins.sim.getSimInfo(function(result) {

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

      Meteor.call('catcher/readings/insert', simReading, (error, result) => {
        // console.log(result);
      });
    })
  }
}

export function startupSim() {
  readValues();

  Meteor.setTimeout(() => {
    startupSim()
  }, refreshPeriod);
}
