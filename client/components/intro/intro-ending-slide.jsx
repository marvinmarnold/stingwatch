IntroEndingSlide = React.createClass({

  portrait() {
    return <h1>Intro ending slide portrait</h1>
  },

  landscape() {
    return <h1>Intro ending slide landscape</h1>
  },

  render() {
    return <OrientationResponsiveLayout
              portrait={this.portrait()} landscape={this.landscape} />

  }
})
