import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Auth from '../containers/Auth';
import ErrorBoundary from '../components/error-boundary-medium/error-boundary';

import HomePage from '../containers/HomePage';
import CategoryPage from '../containers/CategoryPage';
import ArticlePage from '../containers/Article';

import NavbarHeader from '../components/navbar';
import NavMain from '../containers/Nav';
import Footer from '../components/footer';

import ScrollToTop from '../hooks/use-scroll-to-top';

import '../assets/fonts/font.css';

const Root = () => (
  <>
    <Router>
      <ScrollToTop>
        <NavbarHeader />
        <NavMain />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/category/:id" component={CategoryPage} />
          <Route exact path="/articles/:slug" component={ArticlePage} />
          <Footer />
        </Switch>
      </ScrollToTop>
    </Router>

  </>
);

export default Root;
