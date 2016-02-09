IntroPage = React.createClass({
  mixins: [ReactMeteorData],

  getMeteorData() {
    Session.setDefault(INTRO_SLIDE_NUM, 1);

    return {
      orientation: Session.get(ORIENTATIONS.ORIENTATION),
      page: Session.get(INTRO_SLIDE_NUM),
      logs: _Logger.find({}, {sort: {createdAt: -1}}).fetch()
    }
  },

  render() {
    if(this.data.page === 1) {
      return <WelcomeSlide orientation={this.data.orientation} />
    } else if(this.data.page === NUM_INTRO_SLIDES) {
      return <EndingSlide orientation={this.data.orientation} />
    } else {
      return <MiddleSlide orientation={this.data.orientation} page={this.data.page} />
        // return <Logs logs={this.data.logs}><Intro1 orientation={this.data.orientation} /></Logs>
    }
  }

});
