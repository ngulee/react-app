import React, { useEffect } from 'react'
import { Route, Link } from 'react-router-dom';

import About from './About';
import Basic from './Basic';
import RouterAPI from './RouterAPI';

export default ({ match, history }) => {

  useEffect(() => {
    const handleRouterListener = (...args) => {
      console.log('args:', args)
    }
    window.addEventListener('hashchange', handleRouterListener)
    // history.listen(handleRouterListener)
  })
  return (
    <div className="router-demo">
      <h3>This is a React Router Demo.</h3>
      <ul>
        <li><Link to={`${match.url}/about`}>关于React Router</Link></li>
        <li><Link to={`${match.url}/basic`}>React Router 基础</Link></li>
        <li><Link to={`${match.url}/api`}>React Router API</Link></li>
      </ul>
      <div>
        <Route path={`${match.url}/about`} component={About} />
        <Route path={`${match.url}/basic`} component={Basic} />
        <Route path={`${match.url}/api`} component={RouterAPI} />
        <Route exact path={`${match.url}/`} component={About} />
      </div>
    </div>
  );
}