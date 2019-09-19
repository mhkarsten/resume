import React from 'react';
import { Route, Switch } from 'react-router';
import { ConnectedRouter } from 'connected-react-router';
import { history } from '../src/js/store';
import '../src/css/App.css';

const App: React.FC = () => {
  return (
    <div className="App">
      <ConnectedRouter history={history}>
        <div>
          <Switch>
            <Route  />
            <Route  />
          </Switch>
        </div>  
      </ConnectedRouter>
    </div>
  );
}

export default App;
