App = React.createClass({
  mixins: [ReactMeteorData],

  getMeteorData() {
    return {
      telephonyEntries: TelephonyEntries.find({}).fetch()
    }
  },

  renderTelephonyEntries() {
    return this.data.telephonyEntries.map((telephonyEntry) => {
      return <TelephonyEntry key={telephonyEntry._id} telephonyEntry={telephonyEntry} />;
    });
  },

  render() {
    return (
      <div className="container">
        <header>
          <h1>Telephony Data Log</h1>
        </header>

        <ul>
          {this.renderTelephonyEntries()}
        </ul>
      </div>
    );
  }
});
