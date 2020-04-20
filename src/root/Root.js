import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Auth from '../containers/Auth';
import ErrorBoundary from '../components/ErrorBoundaryMedium';

import HomePage from '../containers/HomePage';
import CategoryPage from '../containers/CategoryPage';
import ArticlePage from '../containers/Article';

import NavbarHeader from '../components/navbar';
import NavMain from '../containers/Nav';
import Footer from '../components/footer';
import SignUpPage from '../containers/SignUpPage';
import SignInPage from '../containers/SignInPage';

import ScrollToTop from '../hooks/use-scroll-to-top';

import '../assets/fonts/font.css';

const Root = () => (
  <>
    <Auth>
      <Router>
        <ScrollToTop>
          <Switch>
            <ErrorBoundary>
              <NavbarHeader />
              <NavMain />
              <Route exact path="/" component={HomePage} />
              <Route exact path="/category/:id" component={CategoryPage} />
              <Route exact path="/articles/:slug" component={ArticlePage} />
              <Route exact path="/sign-up" component={SignUpPage} />
              <Route exact path="/login" component={SignInPage} />
              <Footer />
            </ErrorBoundary>
          </Switch>
        </ScrollToTop>
      </Router>
    </Auth>
  </>
);

export default Root;
