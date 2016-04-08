import React from 'react';
import NavBar from './NavBar.jsx';

export default class StatusPage extends React.Component {
  render() {
    return (
      <div>
        <NavBar />
        <img id="status_scanning-map" className="img-fluid" src="nola.jpg" />
      </div>
    );
  }
}
