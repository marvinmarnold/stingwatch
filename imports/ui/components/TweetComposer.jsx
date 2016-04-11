import { Meteor } from 'meteor/meteor';
import React from 'react';
import ReactDOM from 'react-dom';
import { createContainer } from 'meteor/react-meteor-data';

import { STATUSES } from '../../globals.js';
import { DEFAULT_TWEETS } from '../../globals.js';

export default class TweetComposer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      charactersRemaining: 140,
    };
  }

  componentDidMount() {
    this.handleKeyUp();
  }

  tweet() {
    const thiz = this;
    thiz.handleKeyUp();

    if(thiz.state.charactersRemaining >= 0) {
      Meteor.call('twitter.tweet', thiz.tweetText(), (error, response) => {
        if(error) {
          console.log('tweet failed');
          console.log(error);
        } else {
          thiz.cancelComposingTweet();
        }
      })
    }
  }

  defaultTweet() {
    return (this.props.status == STATUSES.SCANNING) ? DEFAULT_TWEETS.SCANNING : DEFAULT_TWEETS.DANGER;
  }

  cancelComposingTweet() {
    this.props.setComposingTweet(false);
  }

  tweetText() {
    return ReactDOM.findDOMNode(this.refs.tweetTextArea).value.trim();
  }

  handleKeyUp() {
    this.setState({charactersRemaining: (140 - this.tweetText().length)});
  }

  render() {
    return (
      <div className="container">
        <form>
          <fieldset className="form-group">
            <label for="tweetTextArea">Share on twitter</label>
            <textarea className="form-control"  id="tweetTextArea" ref="tweetTextArea" rows="3"
              defaultValue={this.defaultTweet()}
              onKeyUp={this.handleKeyUp.bind(this)}></textarea>
          </fieldset>
        </form>

        <p className="text-xs-right text-muted">
          <small>{this.state.charactersRemaining} characters remaining</small>
        </p>

        <button className="btn btn-primary btn-lg"
          onClick={this.tweet.bind(this)}>

          <i className='fa fa-twitter'></i>&nbsp;&nbsp;Tweet
        </button>

        <button className="btn btn-outline-secondary btn-lg"
          onClick={this.cancelComposingTweet.bind(this)}>

          Back
        </button>
      </div>
    );
  }
};
