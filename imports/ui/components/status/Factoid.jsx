import React from 'react';

import { FACTOIDS } from '../../../globals.js';

export default class Factoid extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentFactoidNum: 0,
      timer: undefined
    };
  }

  componentDidMount() {
    this.resetTimer();
  }

  componentWillUnmount() {
    Meteor.clearTimeout(this.state.timer);
  }

  resetTimer() {
    const thiz = this;

    this.setState({
      timer: setTimeout(() => {
        thiz.changeFactoid();
        thiz.resetTimer();
      }, 10 * 1000)
    });
  }

  changeFactoid() {
    const i = (this.state.currentFactoidNum + 1) % FACTOIDS.length;
    this.setState({currentFactoidNum: i});
  }

  render() {
    return (
      <div className='m-t-2'>
        <h4>Stingray Facts and Tips</h4>
        <p>{FACTOIDS[this.state.currentFactoidNum]}</p>
      </div>
    );
  }
};
