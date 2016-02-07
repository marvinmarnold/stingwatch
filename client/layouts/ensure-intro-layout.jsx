EnsureIntroLayout = React.createClass({
  mixins: [ReactMeteorData],

  getMeteorData() {
    return {
      introCompleted: Session.get(APP_STATE).introCompleted,
      introScreenNum: Session.get(INTRO_SCREEN_NUM)
    };
  },

  render() {
    if(this.data.introCompleted) {
      return <div>{this.props.children}</div>
    } else {
      return <IntroPage />
    }
  }

});
