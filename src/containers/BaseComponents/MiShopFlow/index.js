import React, { memo, useState, useEffect } from 'react';
import axios from 'axios';
import Card from '../Card';

const prefixCls = 'shop-flow';

const requestMiShopFlow = () => {
  return axios.get('http://mock.be.mi.com/mock/418/statFlow/widget');
}

export default memo((props = {}) => {
  const [state, setState] = useState({});
  
  useEffect(() => {
    requestMiShopFlow().then(({ data: { data = {} } }) => {
      console.log('data:', data);
      const {
        title,
        sub_title,
        chart = {}
      } = data;
    })
  }, []);
  return (
    <Card
      className={prefixCls}
      
    >

    </Card>
  )
})
