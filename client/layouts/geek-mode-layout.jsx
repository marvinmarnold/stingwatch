GeekModeLayout = React.createClass({
  mixins: [ReactMeteorData],

  getMeteorData() {
    // Session.setDefault(GEEK_MODE_ENABLED, false);

    return {
      geekModeEnabled: Session.get(GEEK_MODE_ENABLED)
    };
  },

  render() {
    if(this.data.geekModeEnabled) {
      return (
        <div>
          {this.props.children}
          <GeekConsole />
        </div>
      )

    } else {
      return this.props.children
    }
  }

});
