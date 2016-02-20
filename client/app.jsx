App = React.createClass({
  mixins: [ReactMeteorData],

  getMeteorData() {
    initReactiveStores();
    Session.set('device-id-set', false);

    var data = {
      ready: false
    };

    DeviceId.gen(function(error, deviceId) {
      if(error) {
        // todo
      } else {
        data.ready = true;
      }
    });
    
    // var handles = [
    //   Meteor.subscribe('dev-tools')
    // ];
    //
    // var handlesReady = _.every(handles, handle => {return handle.ready();})
    // if(handlesReady) {
    //   // Session.set(APP_STATE, AppStates.findOne())
    //   data.ready = true;
    // }

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
