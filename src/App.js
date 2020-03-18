import React, { lazy, Suspense } from 'react';
import { Switch, Route } from 'react-router-dom';

import ErrorBoundary from './components/error-boundary/error-boundary';

const LandingPage = lazy(() => import('./pages/landing-page/landing-page'));
const HomePage = lazy(() => import('./pages/home-page/home-page'));
const DesignPage = lazy(() => import('./pages//design-page/design-page'));
const ArticlePage = lazy(() => import('./pages/article-page/article-page'));
const SignUpPage = lazy(() => import('./pages/sign-up-page/sign-up-page'));

class App extends React.Component {
  render() {
    return (
      <Switch>
        <ErrorBoundary>
          <Suspense fallback={<div>Loading...</div>}>
            <Route exact path='/' component={LandingPage} />
            <Route exact path='/home' component={HomePage} />
            <Route exact path='/design' component={DesignPage} />
            <Route exact path='/article' component={ArticlePage} />
            <Route exact path='/sign-up' component={SignUpPage} />
          </Suspense>
        </ErrorBoundary>
      </Switch>
    )
  }
};

export default App;
