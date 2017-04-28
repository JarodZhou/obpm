import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import Counter from './Counter';


const rootEl = document.createElement('div');
document.body.appendChild(rootEl);


const store = createStore(counter);
function counter(state=0, action) {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1;
    case 'DECREMENT':
      return state - 1;
    default:
      return state;
      
  }
}

function render() {
  ReactDOM.render(
    <Counter
    value={store.getState()}
    onIncrement={()=>store.dispatch({type:'INCREMENT'})}
    onDecrement={()=>store.dispatch({type:'DECREMENT'})}
    />,
    rootEl
  );
}

render();
store.subscribe(render);

