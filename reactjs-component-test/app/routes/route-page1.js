import React from 'react';
import { Route, IndexRoute } from 'react-router';

// Pages
import PageLayout1 from '../components/layouts/page1-layout';

// Components
import TestListContainer from '../components/containers/test-list-container';

const Page1Route = React.createClass({
  render: function() {
    return (
      <Route path="page1">
        <Route component={PageLayout1}>
          <IndexRoute component={TestListContainer} />
        </Route>
      </Route>
    );
  }
});

export default Page1Route;



