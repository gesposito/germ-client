import React from 'react';
import { Router, Switch, Route } from 'react-router-dom';
import { createBrowserHistory } from 'history';

import AppPage from './components/AppPage';

const history = createBrowserHistory();

// use this component as it was the entry point of your dev server

const Root = () => {
  return (
    <Router history={history}>
      <Switch>
        <Route exact={true} path='/' component={AppPage} />
      </Switch>
    </Router>
  );
}

export default Root;
