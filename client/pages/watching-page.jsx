WatchingPage = React.createClass({
  mixins: [ReactMeteorData],

  getMeteorData() {
    this.telephonyEntriesSub = Meteor.subscribe('telephony-entries');
    return {
      telephonyEntries: TelephonyEntries.find({}, {sort: {createdAt: -1}}).fetch(),
    }
  },

  renderTelephonyEntries() {
    return this.data.telephonyEntries.map((telephonyEntry) => {
      return <TelephonyEntry key={telephonyEntry._id} telephonyEntry={telephonyEntry} />;
    });
  },

  render() {
    return (
      <EnsureTermsLayout>
        <div className="container">
          <h1>Telephony Log</h1>

          <ul>
            {this.renderTelephonyEntries()}
          </ul>
        </div>
      </EnsureTermsLayout>
    )
  }

});
