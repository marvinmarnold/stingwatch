Meteor.methods({
  'app-states/init': function() {
    var as = AppStates.findOne()
    if(as)
      return true

    AppStates.insert({
      introCompleted: false
    })
  }
});

Meteor.publish("app-state", function() {
  return AppStates.find()
});
