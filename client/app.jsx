App = React.createClass({
  mixins: [ReactMeteorData],

  getMeteorData() {
    Meteor.call('app-states/init')
    var data = {
      ready: false
    };

    var handles = [
      Meteor.subscribe('telephony-entries'),
      Meteor.subscribe('app-state'),
    ];

    var handlesReady = _.every(handles, handle => {return handle.ready();})
    if(handlesReady) {
      Session.set(APP_STATE, AppStates.findOne())
      data.ready = true;
    }

    return data;
  },

  showLoading() {
    return (
      <div>Loading…</div>
    )
  },

  render() {

    return this.data.ready ? this.props.content : this.showLoading();

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
  }
});
