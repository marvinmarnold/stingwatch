if(Meteor.isCordova) {
  Meteor.startup(function(){
    Tracker.autorun(function(){
      if(Catcher.inDanger()) {
        navigator.vibrate(3 * 1000)
      } else {
      }
    });
  });
}