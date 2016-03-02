import { ReactiveStore } from "meteor/reactive-local-store";

IntroEndingSlide = React.createClass({
  // https://github.com/hammerjs/hammer.js/wiki/Getting-Started
  swipe(event) {
    var dir = event.direction

    if(hammerIsRight(dir)) {
      Session.set(INTRO_SLIDE_NUM, NUM_INTRO_SLIDES-1)
    }
  },

  clicked(event) {
    event.preventDefault()
    ReactiveStore.set(INTRO_COMPLETED, true)

    // If got here from development mode
    var path = FlowRouter.current().path
    if(path === INTRO_PATH)
      FlowRouter.go(TERMS_PATH)
  },

  copy() {
    return "StingWatch is fighting back. Help us to expose unconstitutional police surveillance."
  },

  textDiv() {
    return (
      <div className="intro-text text-xs-center p-2-3 p-x-1">
        <h2>{this.copy()}</h2>
      </div>
    )
  },

  startStingwatchButton() {
    return (
      <a href="#" className='btn btn-primary btn-lg btn-block m-t-2' onClick={this.clicked}>
        Start Stingwatch
      </a>
    )
  },

  portrait() {
    return (
      <Hammer onSwipe={this.swipe}>
        <div className='intro-ending-portrait v-middle'>
          <div className='container'>
            <div className="row p-t-2">
              <div className='col-xs-12'>
                {this.textDiv()}
              </div>
            </div>
            <div className="row m-b-2">
              <div className='col-xs-10 offset-xs-1'>
                {this.startStingwatchButton()}
              </div>
            </div>
          </div>
        </div>
      </Hammer>
    )
  },

  landscape() {
    return (
      <Hammer onSwipe={this.swipe}>
        <div className='intro-ending-landscape v-middle'>
          <div className='container'>
            <div className="row p-t-2">
              <div className='col-xs-12'>
                {this.textDiv()}
              </div>
            </div>
            <div className="row">
              <div className='col-xs-10 offset-xs-1'>
                {this.startStingwatchButton()}
              </div>
            </div>
          </div>
        </div>
      </Hammer>
    )
  },

  render() {
    return <OrientationResponsiveLayout landscape={this.landscape()} portrait={this.portrait()} />
  },

})
