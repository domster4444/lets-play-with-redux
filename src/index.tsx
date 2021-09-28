import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

//wrap with redux wrapper
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from 'service/reducers/index';
const store = createStore(rootReducer);
console.log('store from index.js ____________ ', store);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,

  document.getElementById('root')
);

reportWebVitals();
