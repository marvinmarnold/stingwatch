import React from 'react';
import { browserHistory } from 'react-router';
import Hammer from 'react-hammerjs';

import { STATUSES } from '../../globals.js';
import { HammerHelper } from '../../lib/hammer.js';
import StatusScanning from '../components/StatusScanning.jsx';
import TweetComposer from '../components/TweetComposer.jsx';

export default class StatusPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
    };
  }

  // https://github.com/hammerjs/hammer.js/wiki/Getting-Started
  handleSwipe(event) {
    var dir = event.direction

    if(HammerHelper.isLeft(dir)) {
      console.log("Going left");
      browserHistory.push('/status')
    }
  }


  render() {
    return (
      <Hammer onSwipe={this.handleSwipe}>
        <div className='container-fluid text-xs-center'>
          <div className='col-xs-4 offset-xs-4 m-t-3 p-t3'>
            <img src='logo.gif' className='img-fluid center-block' />
          </div>
          <h1 className='m-t-1'>Welcome to StingWatch</h1>
          <h2>Swipe to get started</h2>
        </div>
      </Hammer>
    );
  }
}
