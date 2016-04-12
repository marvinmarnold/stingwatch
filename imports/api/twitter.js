import { Meteor } from 'meteor/meteor';
import Twitter from 'twitter';

Meteor.methods({
  'twitter.tweet'(message) {
    // Message must be a String
    new SimpleSchema({
      message: { type: String },
    }).validate({ message });

    // Must be logged in to send a message
    if (!Meteor.userId()) {
      throw new Meteor.Error('twitter.tweet.unauthorized',
        'Must be logged in to tweet.');
    }

    // Put together consumer keys (registered to app), and
    // access keys (from user's account)
    const twitterParams = Meteor.user().services.twitter;
    const twitterClient = new Twitter({
      consumer_key: Meteor.settings.public.TWITTER_CONSUMER_KEY,
      consumer_secret: Meteor.settings.TWITTER_CONSUMER_SECRET,
      access_token_key: twitterParams.accessToken,
      access_token_secret: twitterParams.accessTokenSecret,
    });

    // Post new tweet
    twitterClient.post('statuses/update', { status: message },
      function(error, tweet, response) {
        if (error) {
          throw new Meteor.Error('twitter.tweet.failure',
          error.message);
        }
      });
  },
});
