Logs = React.createClass({
  propTypes: {
    logs: React.PropTypes.array.isRequired
  },

  showLog(log, index) {
    return <li key={index}>{log.text}</li>
  },

  render() {
    return (
      <div className='logs'>
        {this.props.children}
        <ul>
          {this.props.logs.map(this.showLog)}
        </ul>
      </div>
    )
  }

});
