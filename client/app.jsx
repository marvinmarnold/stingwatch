App = React.createClass({
  mixins: [ReactMeteorData],

  getMeteorData() {
    initReactiveStores();
    var data = {
      ready: false
    };

    if(Session.get('device-id-ready')) {
      var deviceId = DeviceId.get()
      var handles = [
        Meteor.subscribe('catcher/readings', deviceId),
        Meteor.subscribe('catcher/my-detections', deviceId)
      ];

      var handlesReady = _.every(handles, handle => {return handle.ready();})
      if(handlesReady) {
        data.ready = true;
      }
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
