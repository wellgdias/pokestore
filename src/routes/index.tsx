import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import Store from '../components/Store';

export default function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={Store} />
      <Redirect to="/" />
    </Switch>
  );
}
