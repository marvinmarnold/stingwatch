OrientationResponsiveLayout = React.createClass({
  mixins: [ReactMeteorData],

  getMeteorData() {

    return {
      introCompleted: Session.get(INTRO_COMPLETED),
      introScreenNum: Session.get(INTRO_SLIDE_NUM),
    };
  },

  render() {
    if(DeviceOrientation.isLandscape()) {

      return this.data.landscape;

    } else {

      return this.data.portraig;

    }
  }

});
