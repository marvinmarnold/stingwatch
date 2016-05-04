import React from 'react';
import { Session } from 'meteor/session';
import { createContainer } from 'meteor/react-meteor-data';

import { STATUSES } from '../../globals.js';

import StatusScanning from '../components/status/StatusScanning.jsx';
import TweetComposer from '../components/status/TweetComposer.jsx';

class StatusPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      composingTweet: false
    };
  }

  setComposingTweet(isComposing) {
    this.setState({composingTweet: isComposing})
  }

  renderStatus() {
    if (this.props.status === STATUSES.SCANNING) {
      return (
        <StatusScanning
          setComposingTweet={this.setComposingTweet.bind(this)}
          toggleGeekMode={this.props.toggleGeekMode} />
      );
    } else {
      return <p>pages/StatusDanger.jsx goes here</p>;
    }
  }

  render() {
    if(this.state.composingTweet) {
      return (
        <TweetComposer
        status={this.props.status}
        setComposingTweet={this.setComposingTweet.bind(this)} />
      );
    } else {
      return this.renderStatus();
    }
  }
}

export default createContainer(() => {
  status = Session.get("STATUS") || STATUSES.SCANNING
  return {
    status: status
  };
}, StatusPage);
