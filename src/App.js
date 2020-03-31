import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Navigation from './component/layout/Navigation';
import User from './component/users/User';
import GithubState from './context/github/GithubState';
import AlertState from './context/alert/AlertState';
import Home from './component/pages/Home';
import Alert from './component/layout/Alert';
import About from './component/pages/About';
import NotFound from './component/pages/NotFound';
const App = () => {
  return (
    <GithubState>
      <AlertState>
        <Router>
          <div className='App'>
            <Navigation />
            <Alert />
            <Switch>
              <Route exact path='/' component={Home} />
              <Route exact path='/about' component={About} />
              <Route exact path='/user/:login' component={User} />
              <Route component={NotFound} />
            </Switch>
            {/* <BootstrapTesting /> */}
          </div>
        </Router>
      </AlertState>
    </GithubState>
  );
};

export default App;
