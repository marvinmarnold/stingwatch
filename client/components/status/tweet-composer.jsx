TweetComposer = React.createClass({
  mixins: [ReactMeteorData],

  getMeteorData() {
    var isComposing = !!Meteor.user()

    return {
      isComposing: isComposing,
    }
  },

  prefill() {
    return "hey"
  },

  render() {
    if(this.data.isComposing) {
      return (
        <form>
          <fieldset className="form-group">
            <textarea className="form-control" id="tweet" rows="3" defaultValue={this.prefill()}></textarea>
          </fieldset>
        </form>
      )
    } else {
      return <div>not</div>
    }
  }

})
