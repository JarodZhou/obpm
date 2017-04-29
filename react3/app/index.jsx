import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import counter from '../reducers';
import Connect1 from './Connect1';

const store = createStore(counter, applyMiddleware(thunk));
const rootEl = document.createElement('div');
document.body.appendChild(rootEl);

ReactDOM.render(
  <Provider store={store}>
    <Connect1 />
  </Provider>,
  rootEl
);