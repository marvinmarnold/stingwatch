import React, { Component } from 'react';
import { createContainer } from 'meteor/react-meteor-data';

import LearnButton from './LearnButton.jsx';
import NavBar from './NavBar.jsx';
import TweetButton from './TweetButton.jsx';

class StatusDanger extends React.Component {
  render() {
    return (
      <div>
        <NavBar toggleGeekMode={this.props.toggleGeekMode} />
        <div className="container-fluid">
          <div id="map"></div>
          <h4 className='m-t-2'>Threat detected</h4>
          <p>StingWatch has detected a Stingray within <strong>500m</strong> of you.</p>
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

let map, threatsLayer;
export default createContainer(() => {

  const initMap = () => {
    L.mapbox.accessToken = Meteor.settings.public.MAPBOX_TOKEN;

    map = L.mapbox.map('map', 'mapbox.streets').setView([
      29.942355,
      -90.078635
    ], 12);

    threatsLayer = L.mapbox.featureLayer().addTo(map);
  };

  Tracker.autorun(function () {
    if (Mapbox.loaded()) {
      if(!map) {
        initMap();
      }
    }
  });

  return {
    loading: !map,
    map: map,
    threatsLayer: threatsLayer,
  };
}, StatusDanger);
