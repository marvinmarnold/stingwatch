import { Tracker } from 'meteor/tracker';
import { STATUSES } from '../../globals.js';

export function startupNotifications() {
  const thiz = this;

  // Listen for
  Tracker.autorun(() => {
    if (Session.get(STATUSES.DANGER_TRIGGERED)) {
      console.log('Notifications triggered');

      // Vibrate
      navigator.vibrate([2000, 1000, 2500, 500, 500])

      // Make noise
      navigator.notification.beep(2);

      // Display notification
      const notificationId = 1;
      console.log(cordova.file.applicationDirectory);
      // const notificationIcon = 'http://localhost:12544/local-filesystem/app/android-icon-36x36.png'
      const notificationIcon = 'res://icon.png'

      cordova.plugins.notification.local.schedule({
        id: notificationId,
        text: "Stingray Detected",
        led: "FFFFFF",
        icon: notificationIcon
      });

      // Do something on click
      // cordova.plugins.notification.local.on("click", notification => {
      //   if (notification.id === notificationId) {
      //
      //   }
      // });
    }
  });
}
