import React from 'react';
import { formatCurreny } from '../../../utils/formatCurrency';

export default () => (
  <div className='router__about'>
    <div>关于Router</div>
    <div>{formatCurreny('12121df')}</div>
    <i className="iconfont iconshare"></i>
  </div>
);