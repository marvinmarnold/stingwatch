import React from 'react';
import { Session } from 'meteor/session';
import { Link } from 'react-router';

export default class TermsPage extends React.Component {
  handleAccept() {

  }

  renderPolicyText() {
    return (
      <div>
        <h1 className='text-xs-center m-t-2'>Data Policy</h1>
        <p className='m-t-2'>In order to work, StingWatch records information about the cellphone towers you connect to and stores your GPS coordinates in the cloud.</p>
        <p>To keep you anonymous, your phone will generate a random Device ID that will be sent in along with your data. No other identifying information is collected. No IPs, no names, no email addresses.</p>
        <p>Data is being encrypted in motion with TLS.</p>
        <p>Although we plan on adding encryption at rest, this information is currently stored in cleartext on AWS. We will never sell your information to anybody. But after performing further data anonymization, we will make subsets of this information available to other IMSI-catcher researchers.</p>
        <p>Most importantly, data and especially detections will be mapped on our public website, stingraymappingproject.org, with 500m accuracy from where the reading actually occured.</p>
        <p>We recognize that this level of data collection may be prohibitive for some users but it is essential for us to be able to detect Stingrays and map their usage.</p>
        <p>If this is an issue for you, consider using another similar tool like SnoopSnitch, AIMSICD, Darshak, or IMSI-Catcher-Catcher. Or just, submit a pull request @ github.com/marvinmarnold/stingwatch</p>
      </div>
    );
  }

  renderButtons() {
    return (
      <div className="row m-b-1 m-t-2">
        <div className='col-xs-6'>
          <button className='btn btn-lg btn-block btn-primary' onClick={this.handleAccept.bind(this)}>
            Accept
          </button>
        </div>
        <div className='col-xs-6'>
          <Link className='btn btn-lg btn-outline-danger btn-block' to='/terms-rejected'>

            Reject
          </Link>
        </div>
      </div>
    );
  }

  render() {
    return (
      <div className='v-middle'>
        <div className='container-fluid'>
          <div className='col-xs-12 col-lg-8 offset-lg-2'>
            {this.renderPolicyText()}
            {this.renderButtons()}
         </div>
       </div>
     </div>
    );
  }
}
