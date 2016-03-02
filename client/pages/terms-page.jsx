import { ReactiveStore } from "meteor/reactive-local-store";

TermsPage = React.createClass({
  mixins: [ReactMeteorData],

  getMeteorData() {
    Session.setDefault(TERMS_REJECTED, false);

    return {
      termsRejected: Session.get(TERMS_REJECTED)
    }
  },

  acceptTerms() {
    ReactiveStore.set(TERMS_ACCEPTED, true);

    // If got here from development mode
    var path = FlowRouter.current().path
    if(path === TERMS_PATH)
      FlowRouter.go(STATUS_PATH)
  },

  rejectTerms() {
    Session.set(TERMS_REJECTED, true);
  },

  render() {
    if(this.data.termsRejected) {
      return (
        <div className='container text-xs-center p-x-2'>
          <h3 className='m-t-3'>
            Thanks for considering {APP_NAME}
          </h3>
          <p className="m-t-2">
            If you change your mind at any time, you can restart the app to accept our Data Sharing Porlicy.
          </p>
        </div>
      )
    } else {
      return (
        <div className='container'>
          <h1 className='text-xs-center m-t-1'>Data Sharing</h1>
          <p className='m-t-2'>In order to work, {APP_NAME} records information about the cellphone towers you connect to and stores your GPS coordinates in the cloud.</p>
          <p>To keep you anonymous, your phone will generate a random Device ID that will be sent in along with your data. No other identifying information is collected. No IPs, no names, no email addresses.</p>
          <p>Data is being encrypted in motion with TLS.</p>
          <p>Although we plan on adding encryption at rest, this information is currently stored in cleartext on AWS. We will never sell your information to anybody but after performing further data anonymization, we will make subsets of this information available to other IMSI-catcher researchers.</p>
          <p>We recognize that this level of data collection may be prohibitive for some users but it is essential for us to be able to detect Stingrays and map their usage.</p>
          <p>If this is an issue for you, consider using another similar tool like SnoopSnitch, AIMSICD, Darshak, or IMSI-Catcher-Catcher.</p>
          <p>Feel free to email marvin@unplugged.im with any questions.</p>
          <div className="row m-b-3 m-t-2">
            <div className='col-xs-6'>
              <button className='btn btn-lg btn-block btn-primary' onClick={this.acceptTerms}>
                I Accept
              </button>
            </div>
            <div className='col-xs-6'>
              <button className='btn btn-lg btn-danger btn-block' onClick={this.rejectTerms}>
                I Reject
              </button>
            </div>
          </div>
        </div>
      )
    }
  }

});
