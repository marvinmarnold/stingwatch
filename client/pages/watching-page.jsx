WatchingPage = React.createClass({
  mixins: [ReactMeteorData],

  getMeteorData() {
    this.readings = Meteor.subscribe('catcher/readings', DeviceId.get());
    return {
      simReadings: Catcher.SIMReadings.find({}, {sort: {createdAt: -1}}).fetch(),
    }
  },

  renderSIMReadings() {
    return this.data.simReadings.map((simReading) => {
      return <SIMReading key={simReading._id} simReading={simReading} />;
    });
  },

  render() {
    return (
      <EnsureTermsLayout>
        <div className="container">
          <h1>Sim Readings</h1>

          <ul>
            {this.renderSIMReadings()}
          </ul>
        </div>
      </EnsureTermsLayout>
    )
  }

});
