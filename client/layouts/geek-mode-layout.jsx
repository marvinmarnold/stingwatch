GeekModeLayout = React.createClass({
  mixins: [ReactMeteorData],

  getMeteorData() {

    return {
      introCompleted: Session.get(INTRO_COMPLETED),
      introScreenNum: Session.get(INTRO_SLIDE_NUM),
      logs: _Logger.find({}, {sort: {createdAt: -1}}).fetch()
    };
  },

  render() {
    return (
      <Logs logs={this.data.logs}>
        {this.props.children}
        <GeekConsole />
      </Logs>
    )
  }

});
