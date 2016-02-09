EndingSlide = React.createClass({
  propTypes: {
    orientation: React.PropTypes.string.isRequired,
  },

  // https://github.com/hammerjs/hammer.js/wiki/Getting-Started
  swipe(event) {
    var dir = event.direction

    if(dir === 4) {
      Session.set(INTRO_SLIDE_NUM, NUM_INTRO_SLIDES-1)
    }
  },

  clicked(event) {
    event.preventDefault()

    Meteor.call('app-states/intro-completed', function(error, result) {
      if(error) {
        return
      }

      FlowRouter.go('/terms')
    })
  },

  copy() {
    return "By using StingWatch, you will be helping to fight back increased surveillance by contributing data with the ultimate goal of avoiding the surveillance state."
  },

  textDiv() {
    return (
      <div className="intro-text text-xs-center p-t-3 p-x-1">
        <h2>{this.copy()}</h2>
      </div>
    )
  },

  render() {
    if(isLandscape(this.props.orientation)) {

      return (
        <div>
          <div className='intro-ending-landscape v-middle'>{this.textDiv()}</div>
        </div>
      )

    } else {

      return (
        <Hammer onSwipe={this.swipe}>
          <div className='intro-ending-portrait v-middle'>
            <div className='container'>
              <div className="row">
                <div className='col-xs-12'>
                  {this.textDiv()}
                </div>
              </div>
              <div className="row">
                <div className='col-xs-10 col-xs-offset-1'>
                  <a href="#" className='btn btn-primary btn-lg center-block m-t-2' onClick={this.clicked}>
                    Start StingWatch
                  </a>
                </div>
              </div>
            </div>
          </div>
        </Hammer>
      )

    }
  }
});
