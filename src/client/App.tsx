import React from 'react';
import { Route, Switch } from 'react-router-dom';

import './App.css';
import SideBar from './components/SideBar/SideBar';
import Home from './pages/Home';

const App = (): JSX.Element => (
  <SideBar>
    <Switch>
      <Route exact path="/" component={Home} />
    </Switch>
  </SideBar>
);

export default App;
