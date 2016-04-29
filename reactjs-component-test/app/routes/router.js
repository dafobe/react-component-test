import React from 'react';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';

// Home
import MainLayout from '../components/layouts/main-layout';
import Home from '../components/views/home';

//Pages1
import PageLayout1 from '../components/layouts/page1-layout';
import TestListContainer from '../components/containers/test-list-container';

export default (
  <Router history={browserHistory}>
    <Route component={MainLayout}>
      <Route path="/" component={Home} />

      <Route path="page1">
        <Route component={PageLayout1}>
          <IndexRoute component={TestListContainer} />
        </Route>
      </Route>
      
    </Route>
  </Router>
);
