import React from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

// route components
import App from '../../ui/App.jsx';
import IntroPage from '../../ui/pages/IntroPage.jsx';
import StatusPage from '../../ui/pages/StatusPage.jsx';
import TermsPage from '../../ui/pages/TermsPage.jsx';
import TermsRejectedPage from '../../ui/pages/TermsRejectedPage.jsx';

export const renderRoutes = () => (
  <Router history={browserHistory} >
    <Route path="/" component={App} >
      <IndexRoute component={IntroPage} />
        <Route path="status" component={StatusPage} />
        <Route path="terms" component={TermsPage} />
        <Route path="terms-rejected" component={TermsRejectedPage} />
    </Route>
  </Router>
);
