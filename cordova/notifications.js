if(Meteor.isCordova) {
  Meteor.startup(function() {
    Tracker.autorun(function() {
      if(inDanger()) {
        navigator.vibrate([3000, 1000, 1000, 4000])

        navigator.notification.beep(1);

        window.registration.showNotification("Stingray Detected", {
          actions: [{action: 'open', title: "See details"}]
        });

        self.addEventListener('notificationclick', function(event) {
          event.notification.close();
          if (event.action === 'open') {
            clients.openWindow("/status");
          } else {
            clients.openWindow("/status");
          }
        }, false);

        // cordova.plugins.notification.local.schedule({
        //   id         : 1,
        //   title      : 'Stingray Detected',
        //   text       : 'Stingwatch thinks there might be a stingray near you. Open the app to learn more.',
        //   sound      : null,
        //   every      : 'year',
        //   autoClear  : true,
        //   at         : new Date(new Date().getTime() + 1000)
        // });

        Meteor.setTimeout(function () {
          Session.set(TRIGGER_ALARM, false)
        }, 3510);
      } else {
      }
    });
  });
}

var inDanger = function() {
  return (Catcher.threatScore() > 0) ||
    Session.get(TRIGGER_ALARM)
}
