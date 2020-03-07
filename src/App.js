import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';

import Homepage from './pages/homepage/homepage';
import MainPage from './pages/mainpage/mainpage';



class App extends React.Component {
  render() {
    return (
      <Switch>
        <Route exact path='/' component={Homepage} />
        <Route exact path='/home' component={MainPage} />
      </Switch>
    )
  }
};

export default App;
