Logs = React.createClass({
  propTypes: {
    logs: React.PropTypes.array.isRequired
  },

  showLog(log, index) {
    return <li key={index}>{log.text}</li>
  },

  render() {
    return (
      <ul>
        {this.props.logs.map(this.showLog)}
      </ul>
    )
  }

});
