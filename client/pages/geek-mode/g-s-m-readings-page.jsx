GSMReadingsPage = React.createClass({
  mixins: [ReactMeteorData],

  getMeteorData() {
    return {
      // logs: _Logger.find().fetch(),
      gsmReadings: Catcher.GSMReadings.find({}, {sort: {createdAt: -1}}).fetch(),
    }
  },

  renderGSMReadings() {
    return this.data.gsmReadings.map((gsmReading) => {
      return <GSMReading key={gsmReading._id} gsmReading={gsmReading} />;
    });
  },

  render() {
    return (
      <EnsureTermsLayout>
        <div className="container">
          <h1>GSM Readings</h1>

          <table className='table'>
            <thead>
              <tr>
                <th>MCC</th>
                <th>MNC</th>
              </tr>
            </thead>
            <tbody>
              {this.renderGSMReadings()}
            </tbody>
          </table>
        </div>
      </EnsureTermsLayout>
    )
  }

});
