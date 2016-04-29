import React from 'react';
import { Route, IndexRoute } from 'react-router';

// Pages
import PageLayout2 from '../components/layouts/page2-layout';

// Components
import TestListContainer from '../components/containers/test-list-container';

export default (
      
  <Route path="page1">
    <Route component={PageLayout2}>
      <IndexRoute component={TestListContainer} />
    </Route>
  </Route>
);