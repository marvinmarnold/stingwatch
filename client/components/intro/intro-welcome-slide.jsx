IntroWelcomeSlide = React.createClass({

  // https://github.com/hammerjs/hammer.js/wiki/Getting-Started
  swipe(event) {
    var dir = event.direction

    if(hammerIsLeft(dir)) {
      Session.set(INTRO_SLIDE_NUM, 2)
    }
  },

  copy() {
    return "Welcome to " + APP_NAME + "! Swipe to get started."
  },

  render() {
    return (
      <Hammer onSwipe={this.swipe} onDoubleTap={this.swipe}>
        <div className='v-middle'>
          <div className='container'>
            <div className="row p-t-3">
              <div className='col-xs-12'>
                <img src="logo.gif" className='img-fluid simple-logo m-y-3 center-block'></img>
              </div>
            </div>
            <div className="row m-b-2">
              <div className='col-xs-10 offset-xs-1'>
                <h3 className='text-xs-center'>{this.copy()}</h3>
              </div>
            </div>
          </div>
        </div>
      </Hammer>
    )
  }

});
