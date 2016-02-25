OrientationResponsiveLayout = React.createClass({
  propTypes: {
    landscape: React.PropTypes.object.isRequired,
    portrait: React.PropTypes.object.isRequired
  },

  render() {
    // if(DeviceOrientation.isLandscape()) {
    //
    //   return this.data.landscape;
    //
    // } else {

      return this.data.portrait;

    // }
  }

});
