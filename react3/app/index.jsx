import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import counter from '../reducers';
import Connect1 from './Connect1';
import Connect2 from './Connect2';
import Connect3 from './Connect3';

const store = createStore(counter, applyMiddleware(thunk));
const rootEl = document.createElement('div');
document.body.appendChild(rootEl);

ReactDOM.render(
  <div>
  <Provider store={store}>
    <div>
        <Connect1 />
    </div>
  </Provider>
  <Provider store={store}>
    <div>
        <Connect2 />
    </div>
  </Provider>
  <Provider store={store}>
    <div>
        <Connect3 />
    </div>
  </Provider>
  </div>,
  rootEl
);