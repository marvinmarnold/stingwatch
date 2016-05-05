import React from 'react';
import Hammer from 'react-hammerjs';

import { HammerHelper } from '../../../lib/hammer.js';

export default class IntroSlide2 extends React.Component {

  // https://github.com/hammerjs/hammer.js/wiki/Getting-Started
  handleSwipe(event) {
    var dir = event.direction

    if(HammerHelper.isPrev(dir)) {
      // console.log("IntroSlide2, Prev page");
      this.props.introPrev();
    } else if(HammerHelper.isNext(dir)) {
      // console.log("IntroSlide2, Next page");
      this.props.introNext();
    }
  }

  render() {
    return (
      <Hammer onSwipe={this.handleSwipe.bind(this)}>
        <div className='full-screen v-middle intro-slide-2'>
          <div className='container-fluid text-xs-center'>
            <div className='col-xs-10 offset-xs-1 col-lg-6 offset-lg-3'>
              <h2>For years, a device called a Stingray has allowed police to listen to our calls and read our text messages without search warrants.</h2>
            </div>
          </div>
        </div>
      </Hammer>
    );
  }
}
