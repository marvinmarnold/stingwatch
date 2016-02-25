ToggleGeekModeButton = React.createClass({
  toggle() {
    var enabled = Session.get(GEEK_MODE_ENABLED)
    Session.set(GEEK_MODE_ENABLED, !enabled);
  },

  render() {
    return (
      <button onClick={this.toggle} className="btn btn-link btn-lg btn-sm">
        <i className="fa fa-flask"></i>&nbsp;&nbsp;Geek Mode
      </button>
    )
  }
})
