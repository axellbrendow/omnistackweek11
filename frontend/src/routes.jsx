import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Login from './containers/Login';
import Register from './containers/Register';
import Profile from './containers/Profile';
import NewIncident from './containers/NewIncident';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Login} />
      <Route exact path="/register" component={Register} />
      <Route exact path="/profile" component={Profile} />
      <Route exact path="/incidents/new" component={NewIncident} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
