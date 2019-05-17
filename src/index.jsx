import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import { Provider } from 'react-redux';

import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import App from './App';
import store from './state/store';

const root = document.getElementById('root');
const load = () => render(
  (
    <AppContainer>
      <Provider store={store}>
        <App />
      </Provider>
    </AppContainer>
  ), root,
);

// This is needed for Hot Module Replacement
if (module.hot) {
  module.hot.accept('./App', load);
}

load();
