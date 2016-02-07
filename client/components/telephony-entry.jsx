TelephonyEntry = React.createClass({

  propTypes: {
    telephonyEntry: React.PropTypes.object.isRequired
  },

  render() {
    return (
      <li>{this.props.telephonyEntry.mnc}</li>
    );
  }

});


    // return (
    //   <div className="container">
    //     <header>
    //       <h1>Telephony Data Log</h1>
    //     </header>
    //
    //     <ul>
    //       {this.renderTelephonyEntries()}
    //     </ul>
    //   </div>
    // );
    // renderTelephonyEntries() {
    //   return this.data.telephonyEntries.map((telephonyEntry) => {
    //     return <TelephonyEntry key={telephonyEntry._id} telephonyEntry={telephonyEntry} />;
    //   });
    // },
