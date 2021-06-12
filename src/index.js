import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import store from './redux/store';

let renderTree = (state) => {
  ReactDOM.render(
    <App state={state} dispatch={store.dispatch.bind(store)} />,
    document.getElementById('root')
  );
};

renderTree(store.getState());

store.subscribe(() => {
  renderTree(store.getState());
});

reportWebVitals();
