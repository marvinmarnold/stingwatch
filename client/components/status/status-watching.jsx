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
      <div className="container p-y-2">
        <div className='main-action main-action-watching'>

        </div>

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
