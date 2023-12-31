import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import Counter from './components/Counter';
import counter from './reducers';

const store = createStore(counter);
const rootEl = document.getElementById('root');

const render = () =>
  ReactDOM.render(
    <div style={{ textAlign: 'center', marginTop: '200px' }}>
      <Counter
        value={store.getState()}
        onIncrement={() => store.dispatch({ type: 'INCREMENT' })}
        onDecrement={() => store.dispatch({ type: 'DECREMENT' })}
      />
    </div>,
    rootEl
  );

render();
store.subscribe(render);
