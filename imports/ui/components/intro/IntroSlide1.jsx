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
        <div className='container-fluid text-xs-center'>
          <div className='col-xs-4 offset-xs-4 m-t-3 p-t3'>
            <img src='logo.gif' className='img-fluid center-block' />
          </div>
          <h1 className='m-t-1'>Welcome to StingWatch</h1>
          <h2>Swipe to get started</h2>
        </div>
      </Hammer>
    );
  }
}
