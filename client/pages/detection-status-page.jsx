DetectionStatusPage = React.createClass({
  mixins: [ReactMeteorData],

  getMeteorData() {

    if(Catcher.inDanger()) {
      Session.set(DETECTION_STATUS, DETECTION_STATUS_DANGER)
    } else {
      Session.set(DETECTION_STATUS, DETECTION_STATUS_WATCHING)
    }

    return {
      detectionStatus: Session.get(DETECTION_STATUS)
    };
  },

  render() {
    if(this.data.detectionStatus === DETECTION_STATUS_WATCHING) {
      return <DetectionStatusWatching />
    } else if(this.data.detectionStatus === DETECTION_STATUS_DANGER) {
      return <DetectionStatusDanger />
    }
  }

});
