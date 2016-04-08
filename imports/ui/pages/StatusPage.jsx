import React from 'react';

import { STATUSES } from '../../globals.js';

import StatusScanning from '../components/StatusScanning.jsx';

export default class StatusPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      status: STATUSES.SCANNING,
    };
  }

  render() {
    if (this.state.status === STATUSES.SCANNING) {
      return <StatusScanning />;
    } else {
      return <p>fail</p>;
    }
  }
}
