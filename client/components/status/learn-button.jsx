var url = "https://stingraymappingproject.org"
LearnButton = React.createClass({
  onClick() {
    window.open(url, "_system");
  },

  render() {
    return (
      <div>
        <a href={url} className="btn btn-secondary btn-lg btn-block m-b-1" onClick={this.onClick}>
          <i className="fa fa-graduation-cap"></i>&nbsp;&nbsp;Learn
        </a>
        <ToggleGeekModeButton />
      </div>
    )
  }
})
