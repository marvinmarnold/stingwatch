App = React.createClass({
  mixins: [ReactMeteorData],

  getMeteorData() {
    initReactiveStores();
    // Session.setDefault('device-id-set', false);

    var data = {
      ready: false
    };

    DeviceId.gen(function(error, deviceId) {
      if(error) {
        // todo
      } else {
        Meteor.subscribe('catcher/readings', DeviceId.get())
        // Session.set('device-id-set', true);
      }
    });

    // data.sessionReady = Session.get('device-id-set');

    var handles = [
      Meteor.subscribe('catcher/readings', DeviceId.get()),
      // Meteor.subscribe('dev-tools')
    ];

    var handlesReady = _.every(handles, handle => {return handle.ready();})
    if(handlesReady) {
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
