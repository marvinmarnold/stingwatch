IntroPage = React.createClass({
  mixins: [ReactMeteorData],

  getMeteorData() {
    Session.setDefault(INTRO_SCREEN_NUM, 1);
    return {
      page: Session.get(INTRO_SCREEN_NUM)
    }
  },

  render() {
    if(this.data.page === 1) {
      return <Intro1 />
    } else {
      return <div>Unknown Page</div>
    }
  }

});
