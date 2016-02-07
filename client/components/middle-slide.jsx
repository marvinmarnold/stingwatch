MiddleSlide = React.createClass({
  propTypes: {
    orientation: React.PropTypes.string.isRequired,
    page: React.PropTypes.number.isRequired
  },

  // https://github.com/hammerjs/hammer.js/wiki/Getting-Started
  swipe(event) {
    var dir = event.direction
    var page = this.props.page

    if(dir === 2) {
      Session.set(INTRO_SLIDE_NUM, page+1)
    } else if (dir === 4) {
      Session.set(INTRO_SLIDE_NUM, page-1)
    }
  },

  copy() {
    return copyList[this.props.page-2]
  },

  textDiv() {
    return (

      <div className='container'>
        <div className="intro-text text-xs-center p-x-1">
          <h1>{this.copy()}</h1>
        </div>
      </div>
    )
  },

  landscapeClassName() {
    return 'intro-' + this.props.page + '-landscape v-middle'
  },

  portraitClassName() {
    return 'intro-' + this.props.page + '-portrait v-middle'
  },

  render() {
    if((this.props.orientation === ORIENTATIONS.RIGHT) || (this.props.orientation === ORIENTATIONS.LEFT)) {

      return (
        <Hammer onSwipe={this.swipe}>
          <div className={this.landscapeClassName()}>
            {this.textDiv()}
          </div>
        </Hammer>
      )


    } else {

      return (
        <Hammer onSwipe={this.swipe}>
          <div className={this.portraitClassName()}>
            {this.textDiv()}
          </div>
        </Hammer>
      )

    }
  }

});

var copyList = [
  "For years, police have been listening to our calls and reading our text messages with little oversight and even less public scrutiny.",
  "Stingrays are portable devices that simulate cell phone towers, forcing nearby phones to connect to them.",
  "Stingrays can capture information from all cell phones within range including identity, location, SMS, call logs, and call content.",
  "Increased use at black rights stuff."
]
