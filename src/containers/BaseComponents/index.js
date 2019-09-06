import React from 'react';
import { Link, Route, withRouter } from 'react-router-dom';
import Table from './Table';

const BaseComponents = (props) => {
  const { match = {} } = props;
  return (
    <div>
      <h1>基础组件</h1>
      <Link to={`${match.url}/table`} >Table</Link>
      <Route path={`${match.url}/table`} component={() => (
        <div style={{ height: 500 }}>
          <Table scrollDirection='vertical' />
        </div>
      )} />
    </div>
  )
}

export default withRouter(BaseComponents);