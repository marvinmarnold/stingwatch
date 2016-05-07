import React from 'react';
import { Session } from 'meteor/session';

import { SESSION_STATUS, STATUSES } from '../../globals.js';


export default class GeekMode extends React.Component {

  handleDetection() {
    Session.set(SESSION_STATUS, STATUSES.DANGER);
  }

  handleScan() {
    Session.set(SESSION_STATUS, STATUSES.SCANNING);
  }

  renderButton() {
    if(this.props.status === STATUSES.DANGER) {
      return (
        <button className='m-y-2 btn btn-success btn-lg btn-block'
          onClick={this.handleScan}>

          Return to scanning
        </button>
      );
    } else { // if(Session.get(SESSION_STATUS) === STATUSES.SCANNING) {
      return (
        <button className='m-y-2 btn btn-danger btn-lg btn-block'
          onClick={this.handleDetection}>

          Simulate detection
        </button>
      );
    }
  }

  render() {
    return (
      <div className='container-fluid'>
        <hr></hr>
        <h5>Geek Mode <small>lets you change your settings and access advanced features. </small></h5>
        <p>Only use this if you know what you are doing.</p>

        {this.renderButton()}
      </div>
    );
  }
};
