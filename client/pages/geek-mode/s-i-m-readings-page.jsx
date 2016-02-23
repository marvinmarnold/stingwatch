SIMReadingsPage = React.createClass({
  mixins: [ReactMeteorData],

  getMeteorData() {
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

          <table className='table'>
            <thead>
              <tr>
                <th>MCC</th>
                <th>MNC</th>
                <th>Carrier Name</th>
                <th>Country Code</th>
              </tr>
            </thead>
            <tbody>
              {this.renderSIMReadings()}
            </tbody>
          </table>
        </div>
      </EnsureTermsLayout>
    )
  }

});
