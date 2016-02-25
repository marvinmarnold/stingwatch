import { ReactiveStore } from "meteor/reactive-local-store";

App = React.createClass({
  mixins: [ReactMeteorData],

  getMeteorData() {
    ReactiveStore.init();

    var data = {
      ready: true,
      introCompleted: false,
      termsAccepted: false,
    };

    data.introCompleted = Session.get(INTRO_COMPLETED)
    data.termsAccepted = Session.get(TERMS_ACCEPTED)

    return data;
  },

  componentDidMount() {

  },

  // Show loading screen until app ready
  // Force intro page or terms unless they are already completed and accepted
  render() {
    if(this.data.ready) {
      if(this.data.introCompleted) {
        if(this.data.termsAccepted) {
          return <GeekModeLayout>{this.props.content}</GeekModeLayout>;
        } else {
          return <TermsPage />
        }
      } else {
        return <IntroPage />
      }
    } else {
      return <LoadingPage />
    }
  }
});
