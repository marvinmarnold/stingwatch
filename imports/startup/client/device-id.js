import { DeviceId } from 'meteor/marvin:device-id';

export function startupDeviceId() {
  // Generate a deviceId client side
  console.log('startupDeviceId');
  DeviceId.gen((error, deviceId) => {
    console.log('generated id: ' + deviceId);
    // console.log('deviceId error');
    // console.log(error);
  });
}
