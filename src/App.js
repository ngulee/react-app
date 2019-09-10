import React from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';
import Home from './containers/Home';
import ReduxDemo from './containers/ReduxDemo';
import Directions from './containers/Directions';
import RouterDemo from './containers/RouterDemo';
import AxiosDemo from './containers/AxiosDemo';
import BaseComponents from './containers/BaseComponents';
import DaPP from './containers/DaPP';

import './App.css';

function App(props) {
  console.log('app props:', props);
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/redux" component={ReduxDemo} />
      <Route path="/directions" component={Directions} />
      <Route path="/router" component={RouterDemo} />
      <Route path="/axios" component={AxiosDemo} />
      <Route path="/base-components" component={BaseComponents} />
      <Route path="/dapp" component={DaPP} />
    </Switch>
  );
}

export default withRouter(App);
