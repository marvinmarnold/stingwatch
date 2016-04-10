import React from 'react';

import { STATUSES } from '../../globals.js';

import StatusScanning from '../components/StatusScanning.jsx';

export default class StatusPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      status: STATUSES.SCANNING,
      composingTweet: false
    };
  }

  setComposingTweet(isComposing) {
    console.log('back to parent');
    this.setState({composingTweet: isComposing})
  }

  renderStatus() {
    if (this.state.status === STATUSES.SCANNING) {
      return <StatusScanning setComposingTweet={this.setComposingTweet.bind(this)} />;
    } else {
      return <p>fail</p>;
    }
  }

  cancelComposingTweet() {
    this.setComposingTweet(false);
  }

  render() {
    if(this.state.composingTweet) {
      return (
        <div>
          <h1>Composing</h1>
          <button class="btn">Tweet</button>
          <button class="btn btn-danger" onClick={this.cancelComposingTweet.bind(this)}>Back</button>
        </div>
      )
    } else {
      return this.renderStatus();
    }
  }
}
