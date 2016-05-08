export function configTwitter() {
  ServiceConfiguration.configurations.remove({
    service: "twitter"
  });

  ServiceConfiguration.configurations.insert({
    service: "twitter",
    consumerKey: Meteor.settings.public.TWITTER_CONSUMER_KEY,
    loginStyle: "popup",
    secret: Meteor.settings.TWITTER_CONSUMER_SECRET
  });
}
