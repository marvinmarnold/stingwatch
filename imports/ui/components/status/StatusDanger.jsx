import React from 'react';
import Factoid from './Factoid.jsx';
import LearnButton from './LearnButton.jsx';
import NavBar from './NavBar.jsx';
import Radar from './Radar.jsx';
import TweetButton from './TweetButton.jsx';

export default class StatusDanger extends React.Component {
  render() {
    return (
      <div>
        <NavBar toggleGeekMode={this.props.toggleGeekMode} />
          <div className='h-center'>
            <Radar />
          </div>
        <div className="container">
          <Factoid />
          <div className="row m-b-2">
            <div className="col-xs-6">
              <LearnButton />
            </div>
            <div className="col-xs-6">
              <TweetButton
                setComposingTweet={this.props.setComposingTweet}
                loggedIn={this.props.loggedIn} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
