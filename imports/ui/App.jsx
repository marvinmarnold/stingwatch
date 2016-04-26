import React from 'react';

import GeekMode from './components/GeekMode.jsx';

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      geekModeEnabled: false
    };
  }

  toggleGeekMode() {
    const geekModeEnabled = this.state.geekModeEnabled;
    this.setState({ geekModeEnabled: !geekModeEnabled });
  }

  render() {
    return (
      <div>
        {React.cloneElement(this.props.children, { toggleGeekMode: this.toggleGeekMode.bind(this) })}
        {(this.state.geekModeEnabled) ? <GeekMode /> : <div></div>}
      </div>
    );
  }
}
