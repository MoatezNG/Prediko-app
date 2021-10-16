import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import SideBar from './components/SideBar/SideBar';
import UserPage from './pages/UserPage';

const App = (): JSX.Element => (
  <SideBar>
    <Switch>
      <Route exact path="/" component={UserPage} />
    </Switch>
  </SideBar>
);

export default App;
