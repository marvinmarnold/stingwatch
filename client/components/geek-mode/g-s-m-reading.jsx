GSMReading = React.createClass({

  propTypes: {
    gsmReading: React.PropTypes.object.isRequired
  },

  render() {
    return (
      <tr>
        <th>{this.props.gsmReading.mnc}</th>
        <td>{this.props.gsmReading.mcc}</td>
      </tr>
    );
  }

});
