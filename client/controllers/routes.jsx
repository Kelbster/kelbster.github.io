import React from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';
import Home from '../views/home';
import About from '../views/about';

const history = createBrowserHistory();

const Routes = (
  <Router history={ history }>
    <div>
      <Route exact path="/" component={ Home } />
      <Route path="/about" component={ About } />
    </div>
  </Router>
);

export default Routes;
