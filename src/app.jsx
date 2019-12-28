import React from 'react';
import { Route, Switch, Router } from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router';
import { history } from '../src/js/store';


function app() {
  return (
    <div className="App">
      <ConnectedRouter history = {history}>
        <div className = 'body'>
          <Router>
            <Switch>
              <Route path = "/" component = "app"/>
            </Switch>
          </Router>
        </div>
      </ConnectedRouter>
    </div>
  );
}

export default app;