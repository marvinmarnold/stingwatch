DangerPage = React.createClass({
  mixins: [ReactMeteorData],

  getMeteorData() {
    return {
      // detections
    }
  },

  render() {
    return (
      <EnsureTermsLayout>
        <div className="container text-xs-center p-y-2">
          <h3 className='m-t-1'>Threat detected</h3>
          <h5 className='m-t-1'>StingWatch has detected a Stingray within <strong>500m</strong> of you</h5>

          <img src="logo.gif" className='img-fluid watching-logo m-y-2 center-block'></img>

          <p>
            Detections are not always acurate and other kinds of disclaimer information go here.
          </p>

          <hr/>

          <div className="row m-t-2">
            <div className="col-xs-6">
              <a href="https://stingraymappingproject.org" className="btn btn-secondary btn-lg btn-block">
                <i className="fa fa-graduation-cap"></i>&nbsp;&nbsp;Learn
              </a>
            </div>
            <div className="col-xs-6">
              <button className="btn btn-primary btn-lg btn-block">
                <i className="fa fa-twitter"></i>&nbsp;&nbsp;Share
              </button>
            </div>
          </div>

          <a href="/watching" className='btn btn-link btn-sm'>Watching page</a>
        </div>
      </EnsureTermsLayout>
    )
  }

});
