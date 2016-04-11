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

  }

  defaultTweet() {

    console.log('getting default tweet');
    return (this.props.status == STATUSES.SCANNING) ? DEFAULT_TWEETS.SCANNING : DEFAULT_TWEETS.DANGER;
  }

  cancelComposingTweet() {
    this.props.setComposingTweet(false);
  }

  handleKeyUp() {
    const tweet = ReactDOM.findDOMNode(this.refs.tweetTextArea).value.trim();
    this.setState({charactersRemaining: (140 - tweet.length)});
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
