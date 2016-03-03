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
      <div className="container">
        <div className='main-action main-action-watching text-xs-center'>
          <div className="row">
            <div className='col-xs-6 offset-xs-3 p-y-2'>
              <img className="img-fluid main-action-radar center-block" src="status/radar.gif" />
            </div>
          </div>
          <div clasName="row">
            <div className='col-xs-12'>
              <h1 className="main-action-watching-subtitle p-b-1">
                Working...
              </h1>
            </div>
          </div>

        </div>

        <div className='p-a-2'><Factoid /></div>

        <div className="m-t-1">
          <LearnButton />
        </div>
      </div>
    )
  }

});
