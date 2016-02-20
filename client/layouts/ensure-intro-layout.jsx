EnsureIntroLayout = React.createClass({
  mixins: [ReactMeteorData],

  getMeteorData() {

    return {
      introCompleted: Session.get(INTRO_COMPLETED),
      introScreenNum: Session.get(INTRO_SLIDE_NUM)
    };
  },

  render() {
    if(this.data.introCompleted) {
      return <div>{this.props.children}</div>
    } else {
      Session.set(INTRO_SLIDE_NUM, 1)
      return <IntroPage />
    }
  }

});
