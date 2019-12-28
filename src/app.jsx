import React from 'react';
import { Route, Switch, Router } from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router';
import { history } from './store.jsx';


function app() {
  return (
    <div className="App">
      <ConnectedRouter history = {history}>
        <Router>
          <Switch>
            <Route path = "/" component = "app"/>
            <Route render={() => (<div>oops! this is not a page</div>)} />
          </Switch>
        </Router>
      </ConnectedRouter>
    </div>
  );
}

export default app;