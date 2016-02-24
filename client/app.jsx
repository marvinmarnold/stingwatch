App = React.createClass({
  mixins: [ReactMeteorData],

  getMeteorData() {
    var data = {
      ready: true
    };

    return data;
  },

  showLoading() {
    return (
      <h1>Loading</h1>
    )
  },

  render() {
    return this.data.ready ? this.props.content : this.showLoading();
  }
});
