import React, { memo, useState, useEffect } from 'react';
import axios from 'axios';
import Card from '../Card';
import RoundRect from '../RoundRect';
import CategoryList from '../CategoryList';
import { targetMock } from './mock';

import './index.scss';

const prefixCls = 'target-trace';

const requestTargetTrace = () => {
  return axios.get('http://mock.be.mi.com/mock/418/targetTrace/widget');
}

export default memo((props) => {
  const  [target, setTarget] = useState({});

  useEffect(() => {
    requestTargetTrace().then(({ data: { data } } = {}) => {
      setTarget(data);
    })
  }, []);

  const {
    title,
    sub_title,
    progress,
    track_tbl = {},
  } = target;

  const {
    header = [],
    body = [],
  } = track_tbl;
  return (
    <Card
      className={prefixCls}
      title={title}
      subtitle={sub_title}
      addition={progress}
    >
      <RoundRect items={header} />
      <CategoryList list={body} />
    </Card>
  )
})