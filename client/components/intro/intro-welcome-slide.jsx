IntroWelcomeSlide = React.createClass({

  // https://github.com/hammerjs/hammer.js/wiki/Getting-Started
  swipe(event) {
    var dir = event.direction

    if(hammerIsLeft(dir)) {
      Session.set(INTRO_SLIDE_NUM, 2)
    }
  },

  copy() {
    return "Thank you for downloading StingWatch. Please swipe through the following screens to learn how and why to use this app."
  },

  render() {
      return (
        <Hammer onSwipe={this.swipe} onDoubleTap={this.swipe}>
          <div className="container p-t-3 text-xs-center loading">
            <h1>Stingwatch</h1>
            <img src="logo.gif" className='img-fluid simple-logo m-y-2 center-block'></img>
            <h3>{this.copy()}</h3>
          </div>
        </Hammer>
      )
  }

});
