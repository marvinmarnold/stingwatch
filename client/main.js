import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';

import { renderRoutes } from '../imports/startup/client/routes.jsx';
import { configRLS } from '../imports/startup/client/reactive-local-store.js';

Meteor.startup(() => {
  configRLS();
  render(renderRoutes(), document.getElementById('app'));
});
