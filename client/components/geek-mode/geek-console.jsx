GeekConsole = React.createClass({
  watch() {
    Session.set(STATUS, STATUS_WATCHING)
    Session.set(INTRO_COMPLETED, true)
    Session.set(TERMS_ACCEPTED, true)
  },

  danger() {
    Session.set(STATUS, STATUS_DANGER)
    Session.set(INTRO_COMPLETED, true)
    Session.set(TERMS_ACCEPTED, true)
  },

  intro() {
    Session.set(STATUS, STATUS_DANGER)
    Session.set(INTRO_COMPLETED, false)
    Session.set(TERMS_ACCEPTED, false)
    Session.set(INTRO_SLIDE_NUM, 1);
  },

  terms() {
    Session.set(STATUS, STATUS_DANGER)
    Session.set(INTRO_COMPLETED, true)
    Session.set(TERMS_ACCEPTED, false)
  },

  render() {
    return (
      <div>
        <ul>
          <li><a href={INTRO_PATH} className='btn btn-link btn-sm' onClick={this.intro}>Intro Slides</a></li>

          <li><a href={TERMS_PATH} className='btn btn-link btn-sm' onClick={this.watch}>Terms</a></li>

          <li><a href={STATUS_PATH} className='btn btn-link btn-sm' onClick={this.watch}>Watching Page</a></li>

          <li><a href={STATUS_PATH} className='btn btn-link btn-sm' onClick={this.danger}>Danger Page</a></li>
        </ul>
      </div>
    );
  }
});
