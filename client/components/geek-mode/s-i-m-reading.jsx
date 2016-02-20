SIMReading = React.createClass({

  propTypes: {
    simReading: React.PropTypes.object.isRequired
  },

  render() {
    return (
      <tr>
        <th>{this.props.simReading.mnc}</th>
        <td>{this.props.simReading.mcc}</td>
        <td>{this.props.simReading.carrierName}</td>
        <td>{this.props.simReading.countryCode}</td>
      </tr>
    );
  }

});
