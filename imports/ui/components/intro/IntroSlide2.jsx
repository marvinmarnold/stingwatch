import React from 'react';
import Hammer from 'react-hammerjs';

import { HammerHelper } from '../../../lib/hammer.js';

export default class IntroSlide2 extends React.Component {

  // https://github.com/hammerjs/hammer.js/wiki/Getting-Started
  handleSwipe(event) {
    var dir = event.direction

    if(HammerHelper.isPrev(dir)) {
      console.log("IntroSlide2, Prev page");
      this.props.introPrev();
    } else if(HammerHelper.isNext(dir)) {
      console.log("IntroSlide2, Next page");
      this.props.introNext();
    }
  }

  render() {
    return (
      <Hammer onSwipe={this.handleSwipe.bind(this)}>
        <div className='container-fluid text-xs-center'>
          <h2>For years, a device called a Stingray has allowed polic to listen to our calls and read our text messages without search warrants.</h2>
        </div>
      </Hammer>
    );
  }
}
