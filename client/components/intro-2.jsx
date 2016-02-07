Intro2 = React.createClass({
  propTypes: {
    orientation: React.PropTypes.string.isRequired
  },

  copy() {
    return "Stingrays are portable devices that simulate cell phone towers, forcing nearby phones to connect to them."
  },

  textDiv() {
    return (
      <div className='container'>
        <div className="intro-text text-xs-center p-t-3 p-x-1">
          <h1>{this.copy()}</h1>
        </div>
      </div>
    )
  },

  // https://github.com/hammerjs/hammer.js/wiki/Getting-Started
  swipe(event) {
    var dir = event.direction

    if(dir === 2) {
    } else if (dir === 4) {
      Session.set(INTRO_SCREEN_NUM, 1)
    }
  },

  render() {
    if((this.props.orientation === ORIENTATIONS.RIGHT) || (this.props.orientation === ORIENTATIONS.LEFT)) {

      return (
        <Hammer onSwipe={this.swipe}>
          <div className='intro-2-landscape'>{this.textDiv()}</div>
        </Hammer>
      )


    } else {

      return (
        <Hammer onSwipe={this.swipe}>
          <div className='intro-2-portrait'>{this.textDiv()}</div>
        </Hammer>
      )

    }
  }

});
