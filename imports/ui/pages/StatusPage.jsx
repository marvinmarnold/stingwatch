import React from 'react';

import { STATUSES } from '../../globals.js';

import StatusScanning from '../components/StatusScanning.jsx';
import TweetComposer from '../components/TweetComposer.jsx';

export default class StatusPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      status: STATUSES.SCANNING,
      composingTweet: false
    };
  }

  setComposingTweet(isComposing) {
    console.log('isComposingTweet: ' + isComposing);
    this.setState({composingTweet: isComposing})
  }

  renderStatus() {
    if (this.state.status === STATUSES.SCANNING) {
      return <StatusScanning setComposingTweet={this.setComposingTweet.bind(this)} />;
    } else {
      return <p>pages/StatusDanger.jsx goes here</p>;
    }
  }

  render() {
    if(this.state.composingTweet) {
      return (
        <TweetComposer
        status={this.state.status}
        setComposingTweet={this.setComposingTweet.bind(this)} />
      );
    } else {
      return this.renderStatus();
    }
  }
}
