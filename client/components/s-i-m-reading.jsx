SIMReading = React.createClass({

  propTypes: {
    simReading: React.PropTypes.object.isRequired
  },

  render() {
    return (
      <li>{this.props.simReading.mnc}</li>
    );
  }

});
