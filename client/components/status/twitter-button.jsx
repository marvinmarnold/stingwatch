TwitterButton = React.createClass({
  mixins: [ReactMeteorData],

  getMeteorData() {

    return {
      loggedIn: !!Meteor.user()
    }
  },

  login() {
    Meteor.loginWithTwitter({}, () => {
      Session.set(COMPOSING_TWEET, true)
    })
  },

  tweet() {
    var text = $("#tweet").val()
    console.log(text);
  },

  render() {
    if(this.data.loggedIn) {
      return (
        <button className="btn btn-primary btn-lg btn-block" onClick={this.tweet}>
          <i className="fa fa-twitter"></i>&nbsp;&nbsp;Tweet
        </button>
      )
    } else {
      return (
        <button className="btn btn-primary btn-lg btn-block" onClick={this.login}>
          <i className="fa fa-twitter"></i>&nbsp;&nbsp;Share
        </button>
      )
    }
  }
})
