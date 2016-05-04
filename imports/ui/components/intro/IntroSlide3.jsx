import React from 'react';
import Hammer from 'react-hammerjs';
import { browserHistory, Link } from 'react-router';

import { HammerHelper } from '../../../lib/hammer.js';

export default class IntroSlide3 extends React.Component {

  // https://github.com/hammerjs/hammer.js/wiki/Getting-Started
  handleSwipe(event) {
    var dir = event.direction

    if(HammerHelper.isPrev(dir)) {
      console.log("IntroSlide3, Prev page");
      this.props.introPrev();
    } else if(HammerHelper.isNext(dir)) {
      // Do nothing on last page
    }
  }

  render() {
    return (
      <Hammer onSwipe={this.handleSwipe.bind(this)}>
        <div className='full-screen v-middle intro-slide-3'>
          <div className='container-fluid text-xs-center'>
            <div className='col-xs-10 offset-xs-1 col-lg-6 offset-lg-3'>
              <h2>StingWatch is fighting back. Help us to expose unconstitutional police surveillance.</h2>
              <Link to='/status' className='btn btn-primary btn-lg btn-block m-t-2'>
                Start StingWatch
              </Link>
            </div>
          </div>
        </div>
      </Hammer>
    );
  }
}
