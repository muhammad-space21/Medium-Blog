import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Auth from '../containers/Auth';
import ErrorBoundary from '../components/error-boundary-medium/error-boundary';

import HomePage from '../containers/HomePage';
import CategoryPage from '../containers/CategoryPage';
// import ArticlePage from './containers/ArticlePage';

import NavbarHeader from '../components/navbar';
import NavMain from '../containers/Nav';
import Footer from '../components/footer';

import '../assets/fonts/font.css';

const Root = () => (
  <>
    <Auth>
      <Router>
        <Switch>
          <ErrorBoundary>
            <NavbarHeader />
            <NavMain />
            <Route exact path="/" component={HomePage} />
            <Route exact path="/category/:id" component={CategoryPage} />
            <Footer />
          </ErrorBoundary>
        </Switch>
      </Router>
    </Auth>
  </>
);

export default Root;
