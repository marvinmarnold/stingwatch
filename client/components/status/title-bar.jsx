TitleBar = React.createClass({
  render() {
    return (
      <div className="container v-middle">
        <div className="row p-y-1">
          <div className="col-xs-3">
            <img src="stingwatch_logo.jpg" className="img-fluid" />
          </div>

          <div className="col-xs-9"><h3 className='m-t-1'>{APP_NAME}</h3></div>
        </div>
      </div>
    )
  }
})
