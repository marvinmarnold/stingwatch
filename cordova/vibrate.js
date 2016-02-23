if(Meteor.isCordova) {
  Meteor.startup(function(){
    Tracker.autorun(function(){
      if(Catcher.inDanger()) {
        navigator.vibrate(3 * 1000)

        navigator.notification.beep(1);

        navigator.notification.alert(
          "A stingray was detected near you. This message will only show if app is already active.",
          () => {},
          'Stingwatch Detection',
          'Get details')

        // toForeground("MainActivity", 'org.stingraymappingproject.sting-watch', () => {
        //   console.log('success toFroeground');
        // }, () => {
        //   console.log('fail toForeground');
        // });

      } else {
      }
    });
  });
}
