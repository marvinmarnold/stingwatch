LoadingPage = React.createClass({
  render() {
    return (
      <div className="container p-t-3 text-xs-center loading">
        <h1>Stingwatch</h1>
        <img src="logo.gif" className='img-fluid loading-logo m-y-2 center-block'></img>
        <h3>Loading...</h3>
      </div>
    )
  }
})
