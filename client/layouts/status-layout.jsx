StatusLayout = React.createClass({
  render() {
    return (
      <div>
        <TitleBar />
        {this.props.children}
      </div>
    )
  }
})
