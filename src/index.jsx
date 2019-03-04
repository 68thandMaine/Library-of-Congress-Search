import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import './index.css';
import { createStore, applyMiddleware } from 'redux';
// import middlewareLogger from './middleware/middleware-logger';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import rootReducer from './reducers';

const store = createStore(rootReducer, applyMiddleware(thunk));
store.subscribe(() => {
  console.log('state', store.getState());
});


ReactDOM.render(
  <Provider store ={store}>
    <App/>
  </Provider>,
  document.getElementById('app')
);
