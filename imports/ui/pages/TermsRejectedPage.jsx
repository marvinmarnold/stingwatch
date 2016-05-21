import React from 'react';
import { Session } from 'meteor/session';
import { Link, browserHistory } from 'react-router';
import { RLS } from 'meteor/marvin:reactive-local-store';
import { SETTINGS } from '../../globals.js';

export default class TermsRejectedPage extends React.Component {
  handleReject() {
    RLS.set(SETTINGS.TERMS_ACCEPTED, false);
    browserHistory.push('/status');
  }

  renderButtons() {
    return (
      <div className="row m-b-1 m-t-3">
        <div className='col-xs-6'>
          <Link className='btn btn-lg btn-block btn-primary btn-wrap' to='/terms'>
            Back to terms
          </Link>
        </div>
        <div className='col-xs-6'>
          <button className='btn btn-lg btn-outline-danger btn-block btn-wrap' onClick={this.handleReject.bind(this)}>

            Reject terms
          </button>
        </div>
      </div>
    );
  }

  render() {
    return (
      <div className='full-screen v-middle'>
        <div className='container-fluid text-xs-center'>
          <div className='col-xs-12 col-lg-8 offset-lg-2'>
            <h1>Are you sure?</h1>

            <p className='m-t-2'>Even if you don't accept, you can still use StingWatch and receive warnings from detections recorded by users nearby you.</p>

            <p>But unless you enable data collection StingWatch cannot detect any unsual activity on your device.</p>

            {this.renderButtons()}
          </div>
        </div>
      </div>
    );
  }
}
