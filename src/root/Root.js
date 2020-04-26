import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Auth from '../containers/Auth';
import HomePage from '../containers/HomePage';
import CategoryPage from '../containers/CategoryPage';
import ArticlePage from '../containers/Article';

import NavbarHeader from '../components/navbar';
import NavMain from '../containers/Nav';
import Footer from '../components/footer';
import SignUpPage from '../containers/SignUpPage';
import LoginPage from '../containers/loginPage';
import ForgotPasswordPage from '../containers/ForgotPasswordPage';
import StyledContainer from '../containers/ResetPasswordPage';
import ScrollToTop from '../hooks/use-scroll-to-top';

import '../assets/fonts/font.css';

const Root = () => (
  <Auth>
    <Router>
      <ScrollToTop>
        <NavbarHeader />
        <NavMain />
        <Switch>
          <Route exact key="r-1" path="/" component={HomePage} />
          <Route exact key="r-2" path="/category/:id" component={CategoryPage} />
          <Route exact key="r-3" path="/articles/:slug" component={ArticlePage} />
          <Route exact key="r-4" path="/sign-up" component={SignUpPage} />
          <Route exact key="r-5" path="/login" component={LoginPage} />
          <Route exact key="r-6" path="/forgot-password" component={ForgotPasswordPage} />
          <Route exact key="r-7" path="/reset-password" component={StyledContainer} />
        </Switch>
        <Footer />
      </ScrollToTop>
    </Router>
  </Auth>
);

export default Root;
