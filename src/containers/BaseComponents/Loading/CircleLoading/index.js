import React, { memo } from 'react';
import './index.scss';

const prefixCls = 'rect-loading'

export default memo(() => {
  return (
    <svg id={prefixCls} x='0px' y='0px' viewBox='0 0 150 150'>
      <circle id='loading-inner' cx='75' cy='75' r='60'/>
    </svg>
  )
})