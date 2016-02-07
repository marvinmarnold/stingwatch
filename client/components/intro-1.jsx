Intro1 = React.createClass({
  propTypes: {
    orientation: React.PropTypes.string.isRequired
  },

  render() {
    if((this.props.orientation === ORIENTATIONS.RIGHT) || (this.props.orientation === ORIENTATIONS.LEFT)) {

      return (
        <div className='intro-1'>
          LANDSCAPE
        </div>
      )

    } else {
      return (
        <div className='intro-1'>
          PORTRAIT
        </div>
      )
    }
  }

});
