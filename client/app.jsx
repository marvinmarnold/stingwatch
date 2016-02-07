App = React.createClass({
  mixins: [ReactMeteorData],

  getMeteorData() {
    Meteor.call('app-states/init')
    Session.setDefault(ORIENTATIONS.ORIENTATION, ORIENTATIONS.UNKNOWN);

    var data = {
      ready: false
    };

    var handles = [
      Meteor.subscribe('telephony-entries'),
      Meteor.subscribe('app-state'),
      Meteor.subscribe('dev-tools')
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
      <Loading/>
    )
  },

  render() {
    return this.data.ready ? this.props.content : this.showLoading();
  }
});
