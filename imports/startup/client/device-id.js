import { DeviceId } from 'meteor/marvin:device-id';

export function startupDeviceId() {
  // Generate a deviceId client side
  DeviceId.gen((error, deviceId) => {
    // console.log('deviceId error');
    // console.log(error);
    //
    // console.log('deviceId');
    // console.log(deviceId);
  });
}