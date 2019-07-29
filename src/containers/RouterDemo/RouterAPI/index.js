import React from 'react';
import { Route, Link } from 'react-router-dom';

export default (props) => {
  const { match } = props;
  console.log('props:', props)
  return (
    <div className='router__api'>
      <h4>Router API</h4>
      <ul>
        <li><Link to={`${match.url}/BrowserRouter`}>BrowserRouter</Link></li>
        <li><Link to={`${match.url}/Switch`}>Switch</Link></li>
        <li><Link to={`${match.url}/Route`}>Route</Link></li>
        <li><Link to={`${match.url}/Link`}>Link</Link></li>
      </ul>
      <div>
        <Route exact path={`${match.url}/`} component={() => <div>BrowserRouter API</div>} />
        <Route path={`${match.url}/BrowserRouter`} component={() => <div>BrowserRouter API</div>} />
        <Route path={`${match.url}/Switch`} component={() => <div>Switch API</div>} />
        <Route path={`${match.url}/Route`} component={() => <div>Route API</div>} />
        <Route path={`${match.url}/Link`} component={() => <div>Link API</div>} />
      </div>
    </div>
  );
}