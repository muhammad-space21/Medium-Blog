import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';

import LandingPage from './pages/landing-page/landing-page';
import HomePage from './pages/home-page/home-page';
import DesignPage from './pages//design-page/design-page';
import ArticlePage from './pages/article-page/article-page';
import SignUpPage from './pages/sign-up-page/sign-up-page';


class App extends React.Component {
  render() {
    return (
      <Switch>
        <Route exact path='/' component={LandingPage} />
        <Route exact path='/home' component={HomePage} />
        <Route exact path='/design' component={DesignPage} />
        <Route exact path='/article' component={ArticlePage} />
        <Route exact path='/sign-up' component={SignUpPage} />
      </Switch>
    )
  }
};

export default App;
