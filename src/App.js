import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';

import Homepage from './pages/homepage/homepage';



class App extends React.Component {
  render() {
    return (
      <Switch>
        <Route exact path='/' component={Homepage} />
      </Switch>
    )
  }
};

export default App;
