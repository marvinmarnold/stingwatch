import React from 'react';

export default class TweetButton extends React.Component {
  login() {
    Meteor.loginWithTwitter()
  }
  
  render() {
    return <a onClick={this.login}>Login</a>
  }
};
