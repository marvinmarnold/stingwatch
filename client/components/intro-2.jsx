Intro2 = React.createClass({
  propTypes: {
    orientation: React.PropTypes.string.isRequired
  },

  copy() {
    return "Stingrays are portable devices that simulate cell phone towers, forcing nearby phones to connect to them."
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

      return <div className='intro-2-landscape' id='intro-2'>{this.textDiv()}</div>

    } else {

      return <div className='intro-2-portrait' id='intro-2'>{this.textDiv()}</div>

    }
  }

});
