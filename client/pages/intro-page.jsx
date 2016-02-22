IntroPage = React.createClass({
  mixins: [ReactMeteorData],

  getMeteorData() {
    Session.setDefault(INTRO_SLIDE_NUM, 1);

    return {
      page: Session.get(INTRO_SLIDE_NUM),
      termsAccepted: Session.get(TERMS_ACCEPTED)
      // logs: _Logger.find({}, {sort: {createdAt: -1}}).fetch()
    }
  },

  render() {
    if(this.data.termsAccepted) {
      return <DetectionStatusPage />
    } else {
      if(this.data.page === 1) {
        return <WelcomeSlide />
      } else if(this.data.page === NUM_INTRO_SLIDES) {
        return <EndingSlide />
      } else {
        return <MiddleSlide page={this.data.page} />
          // return <Logs logs={this.data.logs}><Intro1 orientation={this.data.orientation} /></Logs>
      }
    }
  }

});
