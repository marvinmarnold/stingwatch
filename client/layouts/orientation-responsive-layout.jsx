import { DeviceOrientation } from "meteor/device-orientation";

OrientationResponsiveLayout = React.createClass({
  mixins: [ReactMeteorData],

  propTypes: {
    landscape: React.PropTypes.object.isRequired,
    portrait: React.PropTypes.object.isRequired
  },

  getMeteorData() {
    var isLandscape = DeviceOrientation.isLandscape()

    return {
      isLandscape: isLandscape
    };
  },

  render() {
    if(this.data.isLandscape) {

      // return <div><h1>Landscape</h1>{this.props.landscape}</div>
      return this.props.landscape;

    } else {

      // return <div><h1>Portrait</h1>{this.props.portrait}</div>
      return this.props.portrait;

    }
  }

});
