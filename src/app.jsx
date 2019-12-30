import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router';
import { history } from './store.jsx';

//import NavBar from './components/nav_bar.jsx'
import HomePage from './pages/home_page.jsx'

function app() {
  return (
    <div className="body">
      <ConnectedRouter history = {history}>
        <Switch>
          <Route exact path = "/" component={HomePage} />
          <Route render={() => (<div>oops! this is not a page</div>)} />
        </Switch>
      </ConnectedRouter>
    </div>
  );
}

export default app;