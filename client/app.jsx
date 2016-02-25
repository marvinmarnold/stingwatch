import { ReactiveStore } from "meteor/reactive-local-store";

App = React.createClass({
  mixins: [ReactMeteorData],

  getMeteorData() {
    ReactiveStore.init();

    var data = {
      ready: true,
      introCompleted: false,
      termsAccepted: false,
      geekModeEnabled: false
    };

    data.intoCompleted = ReactiveStore.get(INTRO_COMPLETED)
    data.termsAccepted = ReactiveStore.get(TERMS_ACCEPTED)
    data.geekModeEnabled = ReactiveStore.get(GEEK_MODE_ENABLED)

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
          return <GeekModeLayout><TermsPage /></GeekModeLayout>
        }
      } else {
        return <GeekModeLayout><IntroPage /></GeekModeLayout>
      }
    } else {
      return <LoadingPage />
    }
  }
});
