EnsureTermsLayout = React.createClass({
  mixins: [ReactMeteorData],

  getMeteorData() {
    return {
      termsAccepted: Session.get(APP_STATE).termsAccepted,
    };
  },

  render() {
    if(this.data.termsAccepted) {
      return <div>{this.props.children}</div>
    } else {
      return <TermsPage />
    }
  }

});
