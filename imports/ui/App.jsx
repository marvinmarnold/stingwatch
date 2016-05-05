import React from 'react';
import { browserHistory } from 'react-router';
import { createContainer } from 'meteor/react-meteor-data';

import { RLS } from 'meteor/reactive-local-store';
import { SETTINGS } from '../globals.js';

import GeekMode from './components/GeekMode.jsx';

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      geekModeEnabled: false
    };
  }

  componentDidMount () {
    // If Terms already reviewed, skip intro
    if((RLS.get(SETTINGS.TERMS_ACCEPTED) !== undefined) &&
      (RLS.get(SETTINGS.TERMS_ACCEPTED) !== null)) {

      browserHistory.push('/status');
    }
  }

  toggleGeekMode() {
    const geekModeEnabled = this.state.geekModeEnabled;
    this.setState({ geekModeEnabled: !geekModeEnabled });
  }

  render() {
    return (
      <div id='app-base'>
        {React.cloneElement(this.props.children, {
          router: this.props.router,
          toggleGeekMode: this.toggleGeekMode.bind(this)
        })}
        {(this.state.geekModeEnabled) ? <GeekMode /> : <div></div>}
      </div>
    );
  }
}
