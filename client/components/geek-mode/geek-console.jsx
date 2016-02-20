GeekConsole = React.createClass({

  render() {
    return (
      <div>
        <ul>
          <li><a href="/watching" className='btn btn-link btn-small'>Watching Page</a></li>
          <li><a href="/danger" className='btn btn-link btn-small'>Danger Page</a></li>
          <li><a href="/geek/gsm-readings" className='btn btn-link btn-sm'>GSM Readings</a></li>
          <li><a href="/geek/sim-readings" className='btn btn-link btn-sm'>SIM Readings</a></li>
        </ul>
      </div>
    );
  }

});
