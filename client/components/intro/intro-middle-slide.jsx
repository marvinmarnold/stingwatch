IntroMiddleSlide = React.createClass({
  propTypes: {
    page: React.PropTypes.number.isRequired
  },

  // https://github.com/hammerjs/hammer.js/wiki/Getting-Started
  swipe(event) {
    var dir = event.direction
    var page = this.props.page

    if(hammerIsLeft(dir)) {
      Session.set(INTRO_SLIDE_NUM, page+1)
    } else if (hammerIsRight(dir)) {
      Session.set(INTRO_SLIDE_NUM, page-1)
    }
  },

  copy() {
    return copyList[this.props.page-2]
  },

  landscapeClassName() {
    return 'intro-' + this.props.page + '-landscape v-middle'
  },

  portraitClassName() {
    return 'intro-' + this.props.page + '-portrait v-middle'
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

  portrait() {
    return (
      <Hammer onSwipe={this.swipe} onDoubleTap={this.swipe}>
        <div className={this.portraitClassName()}>
          {this.textDiv()}
        </div>
      </Hammer>
    )
  },

  landscape() {
    return (
      <Hammer onSwipe={this.swipe} onDoubleTap={this.swipe}>
        <div className={this.landscapeClassName()}>
          {this.textDiv()}
        </div>
      </Hammer>
    )
  },

  render() {
    return <OrientationResponsiveLayout landscape={this.landscape()} portrait={this.portrait()} />
  }
})

var copyList = [
  "For years, a device called a Stingray has allowed police to listen to our calls and read our text messages without search warrants."
]
