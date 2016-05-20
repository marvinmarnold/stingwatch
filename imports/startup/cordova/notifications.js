import { Tracker } from 'meteor/tracker';
import { STATUSES } from '../../globals.js';
import { Catcher } from 'meteor/marvin:imsi-catcher-catcher';
import { triggerDanger } from '../../lib/trigger-danger.js';

export function startupNotifications() {
  const thiz = this;

  // Trigger Danger if any detections found
  Tracker.autorun(() => {
    if(!!Catcher.inDanger())
      triggerDanger();
  });

  // Vibrate, beep, show notification if Detection triggered
  Tracker.autorun(() => {
    if (Session.get(STATUSES.DANGER_TRIGGERED)) {
      console.log('Notifications triggered');

      // Vibrate
      navigator.vibrate([2000, 1000, 2500, 500, 500])

      // Make noise
      navigator.notification.beep(2);

      // Display notification
      const notificationId = 1;
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
