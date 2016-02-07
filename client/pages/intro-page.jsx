IntroPage = React.createClass({
  mixins: [ReactMeteorData],

  getMeteorData() {
    Session.setDefault(INTRO_SCREEN_NUM, 1);
    return {
      orientation: Session.get(ORIENTATIONS.ORIENTATION),
      page: Session.get(INTRO_SCREEN_NUM),
      logs: _Logger.find({}, {sort: {createdAt: -1}}).fetch()
    }
  },

  render() {
    if(this.data.page === 1) {
      return <div><Intro1 orientation={this.data.orientation} /> <Logs logs={this.data.logs} /></div>
    } else {
      return <div>Unknown Page</div>
    }
  }

});
