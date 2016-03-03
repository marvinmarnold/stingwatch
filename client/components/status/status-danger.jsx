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
      <div className="container">

        <div className="main-action m-y-2" id="dangerMap"></div>
        <h4 className='m-t-1'>Threat detected</h4>
        <p className='m-t-1'>StingWatch has detected a Stingray within <strong>500m</strong> of you.</p>


        <div className="m-t-3">
          <LearnButton />
        </div>
      </div>
    )
  }

});
