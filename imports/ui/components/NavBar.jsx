import React from 'react';

import { APP_NAME }from '../../globals.js';

export default class NavBar extends React.Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="row navbar">
          <div className="col-xs-3">
            <img src="stingwatch_logo.jpg" className="img-fluid" />
          </div>

          <div className="col-xs-9"><h3 className="m-t-1">{APP_NAME}</h3></div>
        </div>
      </div>
    );
  }
}
