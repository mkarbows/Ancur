import React from 'react';
import App from './containers/AppContainer';
import About from './components/About/About';
import { BrowserRouter as Router, Route } from 'react-router-dom';

const Routes = () => {
  return (
    <Router>
      <div>
        <Route exact path="/" render={() => (
            <About/>
          )}/>
        <Route path="/ancur" component={App} />
      </div>
    </Router>
  )
};

export default Routes;
