import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './index.css';

import Root from './root/Root';
import store from './redux/store/configureStore';

ReactDOM.render(
  <Provider store={store}>
    <h1>HelloWebhook</h1>
    <Root />
  </Provider>,
  document.getElementById('root')
);
