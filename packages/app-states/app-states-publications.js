Meteor.publish("app-state", function() {
  return AppStates.find()
});
