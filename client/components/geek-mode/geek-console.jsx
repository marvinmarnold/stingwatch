GeekConsole = React.createClass({
  watch() {
    Session.set(STATUS, STATUS_WATCHING)
  },

  danger() {
    Session.set(STATUS, STATUS_DANGER)
  },

  render() {
    return (
      <div>
        <ul>
          <li><a href={STATUS_PATH} className='btn btn-link btn-sm' onClick={this.watch}>Watching Page</a></li>
          <li><a href={STATUS_PATH} className='btn btn-link btn-sm' onClick={this.danger}>Danger Page</a></li>
        </ul>
      </div>
    );
  }

});
