import { Meteor } from 'meteor/meteor';

import { render } from 'react-dom';
import { renderRoutes } from '../imports/startup/client/routes.jsx';

Meteor.startup(() => {
  console.log('startup started up');
  // render(<App />, document.getElementById('app'));
  render(renderRoutes(), document.getElementById('app'));
});
