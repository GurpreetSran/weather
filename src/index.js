
/* global DEVELOPMENT */

import React from 'react';
import ReactDOM from 'react-dom';
import ReduxPromise from 'redux-promise';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import App from './components/app';
import reducers from './reducers';
import '../style/style.css';

const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <App />
  </Provider>
  , document.querySelector('.container'));


//Webpack hot module reloading
//DEVELOPEMNT has been passed through webpack and only available in dev mode
if (DEVELOPMENT) {
  if (module.hot) {
    module.hot.accept();
    console.log('development mode');
  }
}
