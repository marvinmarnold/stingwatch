GeekConsole = React.createClass({
  watch() {
    Session.set(DETECTION_STATUS, DETECTION_STATUS_WATCHING)
  },

  danger() {
    Session.set(DETECTION_STATUS, DETECTION_STATUS_DANGER)
  },

  render() {
    return (
      <div>
        <ul>
          <li><a href="/stingwatch" className='btn btn-link btn-sm' onClick={this.watch}>Watching Page</a></li>
          <li><a href="/stingwatch" className='btn btn-link btn-sm' onClick={this.danger}>Danger Page</a></li>
          <li><a href="/geek/gsm-readings" className='btn btn-link btn-sm'>GSM Readings</a></li>
          <li><a href="/geek/sim-readings" className='btn btn-link btn-sm'>SIM Readings</a></li>
        </ul>
      </div>
    );
  }

});
