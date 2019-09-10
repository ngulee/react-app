import React from 'react';
import { Link, Route, withRouter } from 'react-router-dom';
import Table from './Table';
import Progress from './Progress';
import LineOnePx from './LineOnePx';
import MyHighCharts from './MyHighCharts';
import CircleDotLoading from './Loading/CircleDotLoading';
import LineDotLoading from './Loading/LineDotLoading';
import RectLoading from './Loading/RectLoading';
import CircleLoading from './Loading/CircleLoading';

const BaseComponents = (props) => {
  const { match = {} } = props;
  return (
    <div>
      <h1>基础组件</h1>
      <CircleLoading />
      <RectLoading />
      <LineDotLoading />
      <CircleDotLoading />
      <MyHighCharts />
      <div style={{ width: '80%'}}>
        <Progress background='linear-gradient(90deg,rgba(255,122,85,1) 0%,rgba(255,60,29,1) 100%)' />
        <Progress />
        <Progress />
      </div>
      <LineOnePx />
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