import { ReactiveStore } from "meteor/reactive-local-store";

IntroEndingSlide = React.createClass({
  // https://github.com/hammerjs/hammer.js/wiki/Getting-Started
  swipe(event) {
    var dir = event.direction

    if(hammerIsLeft(dir)) {
      Session.set(INTRO_SLIDE_NUM, NUM_INTRO_SLIDES-1)
    }
  },

  clicked(event) {
    event.preventDefault()
    console.log('im clicked bitch');

    ReactiveStore.set(INTRO_COMPLETED, true)
    console.log('and i translate ' + Session.get(INTRO_COMPLETED));
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
  // portrait() {
  render() {
    return (
      <Hammer onSwipe={this.swipe}>
        <div className='intro-ending-portrait'>
          <div className='container'>
            <div className="row p-t-2">
              <div className='col-xs-12'>
                {this.textDiv()}
              </div>
            </div>
            <div className="row">
              <div className='col-xs-10 offset-xs-1'>
                <a href="#" className='btn btn-primary btn-lg btn-block m-t-2' onClick={this.clicked}>
                  Start StingWatch
                </a>
              </div>
            </div>
          </div>
        </div>
      </Hammer>
    )
  },

  // landscape() {
  //   return <div className='intro-ending-landscape v-middle'>{this.textDiv()}</div>
  // },
  //
  // render() {
  //   return <OrientationResponsiveLayout
  //             portrait={this.portrait()} landscape={this.landscape()} />
  //
  // }
})
