Meteor.startup(function() {
  ServiceConfiguration.configurations.remove({
    service: "twitter"
  });
  ServiceConfiguration.configurations.insert({
    service: "twitter",
    consumerKey: Meteor.settings.public.TWITTER_KEY,
    loginStyle: "popup",
    secret: Meteor.settings.TWITTER_SECRET
  });
})
