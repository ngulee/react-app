import React, { memo } from 'react';
import './index.scss';

const prefixCls = 'rect-loading'

export default memo(() => {
  return (
    <div className={prefixCls}>
      <div className={`${prefixCls}__item`} />
    </div>
  )
})