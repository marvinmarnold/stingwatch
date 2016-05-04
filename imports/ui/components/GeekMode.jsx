import React from 'react';
import { Session } from 'meteor/session';

import { STATUSES } from '../../globals.js';

export default class GeekMode extends React.Component {

  handleDetection() {
    Session.set("STATUS", "DANGER");
  }

  render() {
    return (
      <div className='container-fluid'>
        <hr></hr>
        <h5>Geek Mode <small>lets you change your settings and access advanced features. </small></h5>
        <p>Only use this if you know what you are doing.</p>

        <button className='m-y-2 btn btn-danger btn-lg btn-block'
          onClick={this.handleDetection}>

          Simulate detection
        </button>
      </div>
    );
  }
};
