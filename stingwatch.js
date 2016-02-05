
if (Meteor.isCordova) {
  Meteor.startup(function () {
    startRefreshing()
  });
}
