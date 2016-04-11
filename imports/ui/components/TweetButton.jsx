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

    return (
      <button onClick={onClick.bind(this)} className="btn btn-primary btn-lg">
        <i className='fa fa-twitter'></i>&nbsp;&nbsp;Share
      </button>
    );
  }
};

export default createContainer(() => {
  return {
    loggedIn: !!Meteor.user()
  };
}, TweetButton);
