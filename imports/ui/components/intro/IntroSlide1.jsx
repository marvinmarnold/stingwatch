import React from 'react';
import Hammer from 'react-hammerjs';

import { HammerHelper } from '../../../lib/hammer.js';

export default class IntroSlide1 extends React.Component {

  // https://github.com/hammerjs/hammer.js/wiki/Getting-Started
  handleSwipe(event) {
    var dir = event.direction

    if(HammerHelper.isPrev(dir)) {
      console.log("IntroSlide1, Prev page");
    } else if(HammerHelper.isNext(dir)) {
      console.log("IntroSlide1, Next page");
      this.props.introNext();
    }
  }


  render() {
    return (
      <Hammer onSwipe={this.handleSwipe.bind(this)} >
        <div className='full-screen v-middle'>
          <div className='container-fluid text-xs-center'>
            <div className="row">
              <div className='col-xs-6 offset-xs-3 col-lg-4 offset-lg-4'>
                <img src='logo.gif' className='img-fluid center-block m-t-2' />
              </div>
            </div>
            <h1 className='m-t-2'>StingWatch</h1>
            <h2 className='m-b-2'>Swipe to get started</h2>
          </div>
        </div>
      </Hammer>
    );
  }
}
