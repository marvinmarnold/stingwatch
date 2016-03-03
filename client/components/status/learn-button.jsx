var url = "https://stingraymappingproject.org"
LearnButton = React.createClass({
  onClick() {
    window.open("https://stingraymappingproject.org", "_system");
  },

  render() {
    return (
      <div>
        <a href={url} className="btn btn-secondary btn-lg btn-block m-b-1" onClick={this.onClick}>
          <i className="fa fa-graduation-cap"></i>&nbsp;&nbsp;Learn More
        </a>
        <ToggleGeekModeButton />
      </div>
    )
  }
})
