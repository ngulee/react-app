import React from 'react';
import ReactDOM from 'react-dom';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import reducers from './redux/reducers';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

const loggerMiddleware = createLogger();
const store = createStore(reducers,
  applyMiddleware(
    thunkMiddleware,
    loggerMiddleware,
  )
);

const Root = (
  <Provider store={store}>
    <Router
      basename="/root/"
    >
      <App />
    </Router>
  </Provider>
)


ReactDOM.render(Root, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
