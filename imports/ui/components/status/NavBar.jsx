import React from 'react';

import { APP_NAME } from '../../../globals.js';

export default class NavBar extends React.Component {
  handleClick() {
    this.props.toggleGeekMode();
  }

  render() {
    return (
      <div className="container-fluid">

        <img src="stingwatch_logo.jpg" className="logo" />
        <span className="m-t-1">{APP_NAME}</span>

        <button className="btn btn-outline-primary btn-sm pull-right m-t-1"
          onClick={this.handleClick.bind(this)}>

          Geek mode
        </button>

      </div>
    );
  }
}
