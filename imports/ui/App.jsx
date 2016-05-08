import React from 'react';
import { Session } from 'meteor/session';
import { browserHistory } from 'react-router';
import { createContainer } from 'meteor/react-meteor-data';

import { RLS } from 'meteor/reactive-local-store';
import { SESSION_STATUS, STATUSES, SETTINGS } from '../globals.js';

import GeekMode from './components/GeekMode.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      geekModeEnabled: false
    };
  }

  componentDidMount () {
    // If Terms already reviewed, skip intro and redirect
    if((RLS.get(SETTINGS.TERMS_ACCEPTED) !== undefined) &&
      (RLS.get(SETTINGS.TERMS_ACCEPTED) !== null)) {

      // browserHistory.push('/status');
    }
  }

  toggleGeekMode() {
    const geekModeEnabled = this.state.geekModeEnabled;
    this.setState({ geekModeEnabled: !geekModeEnabled });
  }

  render() {
    return (
      <div id='app-base'>
        {
          React.cloneElement(this.props.children, {
            toggleGeekMode: this.toggleGeekMode.bind(this),
            status: this.props.status
          })
        }

        {
          (this.state.geekModeEnabled) ?
          <GeekMode status={this.props.status} /> : <div></div>
        }
      </div>
    );
  }
}

export default createContainer(() => {
  Session.setDefault(SESSION_STATUS, STATUSES.SCANNING);

  return {
    status: Session.get(SESSION_STATUS)
  };
}, App);
