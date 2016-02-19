Meteor.methods({
  'app-states/init': function(deviceId) {
    var as = AppStates.findOne()
    if(as)
      return true

    AppStates.insert({
      introCompleted: false,
      termsAccepted: false
    })
  },
  'app-states/intro-completed': function() {
    var as = AppStates.findOne()

    return AppStates.update(as._id, {$set: {introCompleted: true}})
  },
  'app-states/accept-terms': function() {
    var as = AppStates.findOne()

    return AppStates.update(as._id, {$set: {termsAccepted: true}})
  }
});
