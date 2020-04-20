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
    <Auth>
      <Router>
        <ScrollToTop>
          <Switch>
            <ErrorBoundary>
              <NavbarHeader />
              <NavMain />
              <Route exact key="r-1" path="/" component={HomePage} />
              <Route exact key="r-2" path="/category/:id" component={CategoryPage} />
              <Route exact key="r-3" path="/articles/:slug" component={ArticlePage} />
              <Footer />
            </ErrorBoundary>
          </Switch>
        </ScrollToTop>
      </Router>
    </Auth>
  </>
);

export default Root;
