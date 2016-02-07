EndingSlide = React.createClass({
  propTypes: {
    orientation: React.PropTypes.string.isRequired,
  },

  // https://github.com/hammerjs/hammer.js/wiki/Getting-Started
  swipe(event) {
    var dir = event.direction

    if (dir === 4) {
      Session.set(INTRO_SLIDE_NUM, NUM_INTRO_SLIDES-1)
    }
  },

  copy() {
    return "By using StingWatch, you will be helping to fight back increased surveillance by contributing data with the ultimate goal of avoiding the surveillance state."
  },

  textDiv() {
    return (

      <div className='container'>
        <div className="intro-text text-xs-center p-t-3 p-x-1">
          <h2>{this.copy()}</h2>
        </div>
      </div>
    )
  },


  render() {
    if((this.props.orientation === ORIENTATIONS.RIGHT) || (this.props.orientation === ORIENTATIONS.LEFT)) {

      return (
        <Hammer onSwipe={this.swipe}>
          <div className='intro-ending-landscape v-middle'>{this.textDiv()}</div>
        </Hammer>
      )


    } else {

      return (
        <Hammer onSwipe={this.swipe}>
          <div className='intro-ending-portrait v-middle'>{this.textDiv()}</div>
        </Hammer>
      )

    }
  }

});
