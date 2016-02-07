Intro1 = React.createClass({
  propTypes: {
    orientation: React.PropTypes.string.isRequired
  },

  copy() {
    return "Police have been listening to our calls and reading our text messages with little oversight and even less public scrutiny."
  },

  textDiv() {
    return (
      <div className='container'>
        <div className="intro-text text-xs-center p-t-3 p-x-1">
          <h1>{this.copy()}</h1>
        </div>
      </div>
    )
  },

  render() {
    if((this.props.orientation === ORIENTATIONS.RIGHT) || (this.props.orientation === ORIENTATIONS.LEFT)) {

      return <div className='intro-1-landscape'>{this.textDiv()}</div>

    } else {

      return <div className='intro-1-portrait'>{this.textDiv()}</div>

    }
  }

});
