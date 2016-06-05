import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';

import { renderRoutes } from '../imports/startup/client/routes.jsx';
import { configRLS } from '../imports/startup/client/reactive-local-store.js';
import { configMapbox } from '../imports/startup/client/mapbox.js';
import { startupDeviceId } from '../imports/startup/client/device-id.js';

Meteor.startup(() => {
  console.log("Starting client");
  configRLS();
  configMapbox();
  startupDeviceId();
  render(renderRoutes(), document.getElementById('app'));
});
