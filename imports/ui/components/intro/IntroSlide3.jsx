import React from 'react';
import Hammer from 'react-hammerjs';
import { browserHistory } from 'react-router';

import { HammerHelper } from '../../../lib/hammer.js';

export default class IntroSlide3 extends React.Component {

  // https://github.com/hammerjs/hammer.js/wiki/Getting-Started
  handleSwipe(event) {
    var dir = event.direction

    if(HammerHelper.isPrev(dir)) {
      console.log("IntroSlide3, Prev page");
      this.props.introPrev();
    } else if(HammerHelper.isNext(dir)) {
      console.log("IntroSlide3, Next page");
      browserHistory.push('/status')
    }
  }

  render() {
    return (
      <Hammer onSwipe={this.handleSwipe.bind(this)}>
        <div className='container-fluid text-xs-center'>
          <h2>StingWatch is fighting back. Help us to expose unconstitutional police surveillance.</h2>
        </div>
      </Hammer>
    );
  }
}
