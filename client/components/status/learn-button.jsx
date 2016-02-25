LearnButton = React.createClass({
  render() {
    return (
      <div>
        <a href="https://stingraymappingproject.org" className="btn btn-secondary btn-lg btn-block m-b-1">
          <i className="fa fa-graduation-cap"></i>&nbsp;&nbsp;Learn
        </a>
        <ToggleGeekModeButton />
      </div>
    )
  }
})
