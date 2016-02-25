StatusWatching = React.createClass({
  // mixins: [ReactMeteorData],
  //
  // getMeteorData() {
  //   return {
  //     simReadings: Catcher.SIMReadings.find({}, {sort: {createdAt: -1}}).fetch(),
  //   }
  // },
  //
  // renderSIMReadings() {
  //   return this.data.simReadings.map((simReading) => {
  //     return <SIMReading key={simReading._id} simReading={simReading} />;
  //   });
  // },

  render() {
    return (
      <div className="container text-xs-center p-y-2">
        <h3 className='m-t-1'>Stingwatch is running</h3>
        <h5 className='m-t-1'>it will continue to collect information in the background</h5>

        <img src="logo.gif" className='img-fluid watching-logo m-t-2 m-b-1 center-block'></img>
        <Factoid></Factoid>

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
