import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Auth from '../containers/Auth';
import ErrorBoundary from '../components/error-boundary/error-boundary';

import HomePage from '../containers/HomePage';
import CategoryPage from '../containers/CategoryPage';
// import ArticlePage from './containers/ArticlePage';

import NavbarMainPage from '../components/NavbarMainPage';
import Navbar2 from '../components/nav'
import NavMain from '../containers/Nav';

import '../assets/fonts/font.css';

const Root = () => (
  <>
    <Auth>
      <Router>
        <Switch>
          <ErrorBoundary>
            {/* <NavbarMainPage /> */}
            <Navbar2/>
            <NavMain />
            <Route exact path="/" component={HomePage} />
            {/* <Route exact path="/category/:id" component={CategoryPage} /> */}
            {/* <Route exact path="/article/:id" component={ArticlePage} /> */}
          </ErrorBoundary>
        </Switch>
      </Router>
    </Auth>
  </>
);

export default Root;
