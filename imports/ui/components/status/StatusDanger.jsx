import React, { Component } from 'react';
import { createContainer } from 'meteor/react-meteor-data';

import LearnButton from './LearnButton.jsx';
import NavBar from './NavBar.jsx';
import TweetButton from './TweetButton.jsx';

class StatusDanger extends React.Component {
  componentDidMount() {
    // console.log('componentDidMount');
    this.props.initMap();
  }

  componentWillUnmount() {
    // console.log('componentWillUnmount');
    this.props.unmountMap();
  }

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

let frameLoaded = false;
let map, threatsLayer;
export default createContainer(({detection}) => {


  const unmountMap = () => {
    // console.log("unmountMap");

    map = undefined;
    threatsLayer = undefined;
    frameLoaded = false;
  }

  const initMap = () => {
    frameLoaded = true;
    // console.log("initMap");
    if (Mapbox.loaded()) {
      if(!map && !!detection) {

          L.mapbox.accessToken = Meteor.settings.public.MAPBOX_TOKEN;

          map = L.mapbox.map('map', 'mapbox.streets').setView([
            detection.latitude,
            detection.longitude
          ], 7);

          threatsLayer = L.mapbox.featureLayer().addTo(map);

          L.circleMarker([detection.latitude, detection.longitude], {
            fillColor: '#ff0000',
            fillOpacity: 0.8,
            stroke: false
          }).addTo(threatsLayer);

        }
      }
  };

  Tracker.autorun(() => {
    if (Mapbox.loaded()) {
      if(!map && !!detection && frameLoaded) {
        initMap();
      }
    }
  });

  return {
    map: map,
    threatsLayer: threatsLayer,
    initMap: initMap,
    unmountMap: unmountMap
  };
}, StatusDanger);
