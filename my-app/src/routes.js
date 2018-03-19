import React from 'react';
import App from './containers/AppContainer';
import Stamp from './containers/stampContainer'

import { BrowserRouter as Router, Route } from 'react-router-dom';

const Routes = () => {
  return (
    <Router>
      <div>
        <Route exact path="/" component={App} />
        <Route exact path="/" component={Stamp} />
      </div>
    </Router>
  )
};

export default Routes;
