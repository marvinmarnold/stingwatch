IntroSlide = React.createClass({
  propTypes: {
    orientation: React.PropTypes.string.isRequired,
  },

  // https://github.com/hammerjs/hammer.js/wiki/Getting-Started
  swipe(event) {
    var dir = event.direction

    if(dir === 2) {
      Session.set(INTRO_SLIDE_NUM, 2)
    }
  },

  copy() {
    return "Thank you for downloading StingWatch. Please swipe through the following screens to learn how and why to use this app."
  },

  textDiv() {
    return (
      <div className='container text-xs-center p-a-1'>
        <img src="logo.gif" className='img-fluid'></img>
        <h4>{this.copy()}</h4>
      </div>
    )
  },


  render() {
    if((this.props.orientation === ORIENTATIONS.RIGHT) || (this.props.orientation === ORIENTATIONS.LEFT)) {

      return (
        <Hammer onSwipe={this.swipe}>
          <div className='intro-welcome-landscape'>{this.textDiv()}</div>
        </Hammer>
      )


    } else {

      return (
        <Hammer onSwipe={this.swipe}>
          <div className='intro-welcome-portrait'>{this.textDiv()}</div>
        </Hammer>
      )

    }
  }

});
