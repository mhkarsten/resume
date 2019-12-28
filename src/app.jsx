import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router';
import { history } from './store.jsx';

function app() {
  return (
    <div className="App">
      <ConnectedRouter history = {history}>
        <Switch>
          <Route exact path = "/" render={() => (<div>This is a location</div>)} />
          <Route render={() => (<div>oops! this is not a page</div>)} />
        </Switch>
      </ConnectedRouter>
    </div>
  );
}

export default app;