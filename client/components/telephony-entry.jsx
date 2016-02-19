TelephonyEntry = React.createClass({

  propTypes: {
    telephonyEntry: React.PropTypes.object.isRequired
  },

  render() {
    return (
      <li>{this.props.telephonyEntry.mnc}</li>
    );
  }

});
