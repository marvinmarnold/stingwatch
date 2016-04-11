import React from 'react';
import { createContainer } from 'meteor/react-meteor-data';

import { FACTOIDS } from '../../globals.js';

export default class Factoid extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentFactoidNum: 0,
    };
  }

  componentDidMount() {
    this.changeFactoid();
  }

  changeFactoid() {
    const thiz = this;

    setTimeout(() => {
      const i = (thiz.state.currentFactoidNum + 1) % FACTOIDS.length;
      thiz.setState({currentFactoidNum: i});
      thiz.changeFactoid();
    }, 10 * 1000);
  }

  render() {
    return (
      <div>
        <h4>Stingray Facts and Tips</h4>
        <p>{FACTOIDS[this.state.currentFactoidNum]}</p>
      </div>
    );
  }
};
