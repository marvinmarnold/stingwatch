StatusDanger = React.createClass({
  mixins: [ReactMeteorData],

  getMeteorData() {
    var data = {
    }

    return data;
  },

  componentDidMount() {
    Tracker.autorun(function() {
      if(Mapbox.loaded()) {
        L.mapbox.accessToken = "pk.eyJ1IjoidW5wbHVnZ2VkIiwiYSI6IjNlYzFmM2YwZDYzYTM0ZjE5YzYyOGY1OWViM2Q0ODRhIn0.goeHIOasI8pdQeUSY0_Z3Q";
        var map = L.mapbox.map('dangerMap', 'mapbox.streets').setView([38.731407,  -96.386617], 4);
      }
    });
  },

  render() {
    return (
      <div className="container text-xs-center p-y-2">
        <h3 className='m-t-1'>Threat detected</h3>
        <h5 className='m-t-1'>StingWatch has detected a Stingray within <strong>500m</strong> of you</h5>

        <div class="main-action" className='m-y-2'></div>

        <p>
          Detections are not always acurate and other kinds of disclaimer information go here.
        </p>

        <hr/>

        <div className="row m-t-2">
          <div className="col-xs-6">
            <LearnButton />
          </div>
          <div className="col-xs-6">
            <button className="btn btn-primary btn-lg btn-block">
              <i className="fa fa-twitter"></i>&nbsp;&nbsp;Share
            </button>
          </div>
        </div>
      </div>
    )
  }

});
