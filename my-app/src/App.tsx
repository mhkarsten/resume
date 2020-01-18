import React from 'react';
import { Route, Switch } from 'react-router';
import { ConnectedRouter } from 'connected-react-router';
import { history } from '../src/js/store';
import '../src/css/App.css';

import Home from '../src/js/indexPages/homeIndex';
import Resume from '../src/js/indexPages/resumeIndex'
import Navigation from '../src/js/indexPages/navigationIndex';
import GitInfo from '../src/js/indexPages/gitIndex';
import Test from '../src/js/indexPages/testIndex';


const App: React.FC = () => {
  return (
    <div className = "App">
      <ConnectedRouter history={history}>
        <div>
          <Navigation />
          <div className = 'body'>
          <Switch>
            <Route exact path = "/" component = {Home}/>
            <Route exact path = "/resume" component = {Resume}/>
            <Route exact path = "/git" component = {GitInfo}/>
            <Route exact path = "/test" component = {Test}/>
            <Route render={() => (<div>Haha! There was no page with that path silly</div>)} />
          </Switch>
          </div>
        </div>  
      </ConnectedRouter>
    </div>
  );
}

export default App;
