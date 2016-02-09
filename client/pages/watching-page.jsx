WatchingPage = React.createClass({
  // mixins: [ReactMeteorData],
  //
  // getMeteorData() {
  //   this.telephonyEntriesSub = Meteor.subscribe('userProfile', this.props.userId);
  //   return {
  //     telephonyEntries: TelephonyEntries.find().fetch(),
  //   }
  // },

  render() {
    return (
      <EnsureTermsLayout>
        Watching
      </EnsureTermsLayout>
    )
  }

});
