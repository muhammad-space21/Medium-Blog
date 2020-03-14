import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';

import LandingPage from './pages/landing-page/landing-page';
import HomePage from './pages/home-page/home-page';
import DesignPage from './pages//design-page/design-page';
import ArticlePage from './pages/article-page/article-page';



class App extends React.Component {
  render() {
    return (
      <Switch>
        <Route exact path='/' component={LandingPage} />
        <Route exact path='/home' component={HomePage} />
        <Route exact path='/design' component={DesignPage} />
        <Route exact path='/article-page' component={ArticlePage} />
      </Switch>
    )
  }
};

export default App;
