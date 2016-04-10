import React from 'react';
import { createContainer } from 'meteor/react-meteor-data';

export default class TweetButton extends React.Component {
  login() {
    Meteor.loginWithTwitter()
  }

  compose() {
    this.props.setComposingTweet(true);
  }

  render() {
    let onClick;

    if(this.props.loggedIn) {
      onClick = this.compose;
    } else {
      onClick = this.login;
    }

    return <a onClick={onClick.bind(this)} className="button">Tweet</a>;
  }
};

export default createContainer(() => {
  return {
    loggedIn: !!Meteor.user()
  };
}, TweetButton);
