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


const loggerMiddleware = createLogger();
//引入redux-devtools-extension的可视化工具（有点吊）
import { composeWithDevTools } from 'redux-devtools-extension';//devToolsEnhancer,

// 调用日志打印方法 collapsed是让action折叠，看着舒服点
const loggerMiddleware = createLogger({collapsed:true});

// 创建一个中间件集合
const middleware = [thunkMiddleware, loggerMiddleware];

const store = createStore(reducers,
  composeWithDevTools(
    applyMiddleware(...middleware)
  )
);

const Root = (
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>
)


ReactDOM.render(Root, document.getElementById('root'));