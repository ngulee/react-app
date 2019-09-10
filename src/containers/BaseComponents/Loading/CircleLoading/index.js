import React, { memo } from 'react';
import './index.scss';

const prefixCls = 'circle-loading'

export default memo(() => {
  return (
    <div className={prefixCls}>
      <svg className={`${prefixCls}__svg`} x='0px' y='0px' viewBox='0 0 150 150'>
        <circle className={`${prefixCls}__svg__circle`} cx='75' cy='75' r='60'/>
      </svg>
    </div>
  )
})