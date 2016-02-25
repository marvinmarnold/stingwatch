StatusPage = React.createClass({
  mixins: [ReactMeteorData],

  getMeteorData() {
      Session.setDefault(STATUS, STATUS_WATCHING)

    // if(Catcher.inDanger()) {
    //   Session.set(DETECTION_STATUS, DETECTION_STATUS_DANGER)
    // } else {
    //   Session.set(DETECTION_STATUS, DETECTION_STATUS_WATCHING)
    // }

    return {
      detectionStatus: Session.get(STATUS)
    };
  },

  render() {
    if(this.data.detectionStatus === STATUS_WATCHING) {
      return <StatusWatching />
    } else if(this.data.detectionStatus === STATUS_DANGER) {
      return <StatusDanger />
    }
  }

});
