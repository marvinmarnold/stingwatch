if(Meteor.isCordova) {
  Meteor.startup(function(){
    Tracker.autorun(function(){
      if(Catcher.inDanger()) {
        navigator.vibrate(3 * 1000)

        navigator.notification.beep(1);

        cordova.plugins.notification.local.schedule({
          id         : 1,
          title      : 'Stingray Detected',
          text       : 'Stingwatch thinks there might be a stingray near you. Open the app to learn more.',
          sound      : null,
          every      : 'year',
          autoClear  : true,
          at         : new Date(new Date().getTime() + 1 * 1000)
        });

      } else {
      }
    });
  });
}
