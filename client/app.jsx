import { ReactiveStore } from "meteor/reactive-local-store";

App = React.createClass({
  mixins: [ReactMeteorData],

  getMeteorData() {
    ReactiveStore.init();

    var data = {
      ready: false,
      introCompleted: false,
      termsAccepted: false
    };

    return data;
  },

  // Show loading screen until app ready
  // Force intro page or terms unless they are already completed and accepted
  render() {
    if(this.data.ready) {
      if(this.data.introCompleted) {
        if(this.data.termsAccepted) {
          return this.props.content;
        } else {
          return <h1>Terms</h1>
        }
      } else {
        return <h1>Intro</h1>
      }
    } else {
      return <LoadingPage />
    }
  }
});
