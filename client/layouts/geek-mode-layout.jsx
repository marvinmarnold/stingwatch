GeekModeLayout = React.createClass({
  mixins: [ReactMeteorData],

  getMeteorData() {

    return {
      introCompleted: Session.get(INTRO_COMPLETED),
      introScreenNum: Session.get(INTRO_SLIDE_NUM)
    };
  },

  render() {
    return (
      <div>
        {this.props.children}
        <GeekConsole />
      </div>
    )
  }

});
