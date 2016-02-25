IntroPage = React.createClass({
  mixins: [ReactMeteorData],

  getMeteorData() {
    Session.setDefault(INTRO_SLIDE_NUM, 1);

    return {
      page: Session.get(INTRO_SLIDE_NUM),
      termsAccepted: Session.get(TERMS_ACCEPTED)
    }
  },

  render() {
    if(this.data.page === 1) {
      return <IntroWelcomeSlide />
    } else if(this.data.page === NUM_INTRO_SLIDES) {
      return <IntroEndingSlide />
    } else {
      return <IntroMiddleSlide page={this.data.page} />
    }
  }

});
